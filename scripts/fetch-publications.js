import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=IduEkNQAAAAJ';
const PROXY_SERVER = '127.0.0.1:1089';

async function fetchPublications() {
  console.log('启动浏览器（使用代理: ' + PROXY_SERVER + '）...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      `--proxy-server=socks5://${PROXY_SERVER}`
    ]
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    // 设置用户代理，模拟真实浏览器
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // 隐藏 webdriver 特征
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined
      });
    });
    
    console.log('访问 Google Scholar 页面...');
    await page.goto(SCHOLAR_URL, { waitUntil: 'networkidle2', timeout: 60000 });

    // 等待页面加载
    await page.waitForSelector('tbody tr', { timeout: 30000 });
    
    // 检查是否有验证码或错误页面
    const pageTitle = await page.title();
    if (pageTitle.includes('Sorry') || pageTitle.includes('验证')) {
      console.warn('警告：可能遇到验证码或限制页面');
    }

    console.log('展开所有折叠的文章...');
    
    // 循环点击"Show more"按钮，直到没有更多按钮
    let expandCount = 0;
    let previousCount = 0;
    let hasMore = true;
    const maxExpands = 100; // 增加最大展开次数
    
    while (hasMore && expandCount < maxExpands) {
      try {
        // 先获取当前文章数量
        const currentCount = await page.evaluate(() => {
          return document.querySelectorAll('tbody tr').length;
        });
        
        if (expandCount === 0) {
          previousCount = currentCount;
          console.log(`初始文章数量: ${currentCount}`);
        }

        // 查找"Show more"按钮
        const buttonFound = await page.evaluate(() => {
          // 优先查找标准的 Google Scholar 按钮
          const button = document.querySelector('button#gsc_bpf_more') || 
                        document.querySelector('button.gsc_bpf_more') ||
                        document.querySelector('a.gsc_bpf_more');
          
          if (button && button.offsetParent !== null) {
            // 检查按钮是否可见且可点击
            const style = window.getComputedStyle(button);
            if (style.display !== 'none' && style.visibility !== 'hidden') {
              return true;
            }
          }
          return false;
        });

        if (buttonFound) {
          // 使用 evaluate 直接点击，更稳定
          await page.evaluate(() => {
            const button = document.querySelector('button#gsc_bpf_more') || 
                          document.querySelector('button.gsc_bpf_more') ||
                          document.querySelector('a.gsc_bpf_more');
            if (button) {
              button.scrollIntoView({ behavior: 'smooth', block: 'center' });
              button.click();
            }
          });

          expandCount++;
          
          // 等待新内容加载
          await page.waitForTimeout(2000);
          
          // 检查是否有新文章加载
          const newCount = await page.evaluate(() => {
            return document.querySelectorAll('tbody tr').length;
          });
          
          if (newCount > previousCount) {
            console.log(`点击展开按钮 (第 ${expandCount} 次)，文章数量: ${previousCount} -> ${newCount}`);
            previousCount = newCount;
          } else {
            console.log(`点击展开按钮 (第 ${expandCount} 次)，但未检测到新文章，可能已全部加载`);
            // 再等待一下，可能还在加载
            await page.waitForTimeout(1000);
            const finalCount = await page.evaluate(() => {
              return document.querySelectorAll('tbody tr').length;
            });
            if (finalCount === previousCount) {
              hasMore = false;
              console.log('确认没有更多文章');
            } else {
              previousCount = finalCount;
            }
          }
        } else {
          hasMore = false;
          console.log('没有找到更多展开按钮');
        }
      } catch (error) {
        console.log('展开过程中出错:', error.message);
        
        // 检查页面是否还正常
        try {
          const pageTitle = await page.title();
          if (!pageTitle || pageTitle.includes('Sorry')) {
            console.log('页面异常，停止展开');
            hasMore = false;
            break;
          }
          
          // 检查是否真的没有按钮了
          const stillHasButton = await page.evaluate(() => {
            const button = document.querySelector('button#gsc_bpf_more') || 
                          document.querySelector('button.gsc_bpf_more');
            return button && button.offsetParent !== null;
          });
          if (!stillHasButton) {
            hasMore = false;
            console.log('确认没有更多按钮');
          } else {
            // 等待一下再试
            await page.waitForTimeout(1500);
          }
        } catch (checkError) {
          console.log('检查页面状态时出错，停止展开:', checkError.message);
          hasMore = false;
          break;
        }
      }
    }

    if (expandCount >= maxExpands) {
      console.log(`达到最大展开次数限制 (${maxExpands})，停止展开`);
    }

    const finalArticleCount = await page.evaluate(() => {
      return document.querySelectorAll('tbody tr').length;
    });
    console.log(`共展开 ${expandCount} 次，最终文章数量: ${finalArticleCount}，开始抓取所有文章数据...`);
    
    // 滚动到页面底部确保所有内容都已加载
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    // 等待一下让内容完全加载
    await page.waitForTimeout(2000);

    const publications = await page.evaluate(() => {
      const articles = [];
      const rows = document.querySelectorAll('tbody tr');

      rows.forEach((row) => {
        try {
          // 获取标题和链接
          const titleElement = row.querySelector('td[class*="gsc_a_t"] a');
          const title = titleElement?.textContent?.trim() || '';
          const link = titleElement?.href || '';

          // 获取作者信息
          const authorsElement = row.querySelector('div[class*="gs_gray"]');
          const authorsText = authorsElement?.textContent?.trim() || '';
          
          // 获取会议/期刊信息
          const venueElement = row.querySelectorAll('div[class*="gs_gray"]')[1];
          const venue = venueElement?.textContent?.trim() || '';

          // 获取年份
          const yearElement = row.querySelector('td[class*="gsc_a_y"] span');
          const year = yearElement?.textContent?.trim() || '';

          // 获取引用数
          const citationsElement = row.querySelector('a[class*="gsc_a_c"]');
          const citations = citationsElement?.textContent?.trim() || '0';

          if (title) {
            articles.push({
              title,
              authors: authorsText,
              venue,
              year,
              citations,
              link: link.startsWith('http') ? link : `https://scholar.google.com${link}`
            });
          }
        } catch (error) {
          console.error('解析文章时出错:', error);
        }
      });

      return articles;
    });

    console.log(`成功抓取 ${publications.length} 篇文章`);

    // 保存为 JSON 文件
    const outputPath = path.join(__dirname, '../public/publications.json');
    fs.writeFileSync(outputPath, JSON.stringify(publications, null, 2), 'utf-8');
    console.log(`数据已保存到: ${outputPath}`);

    return publications;
  } finally {
    await browser.close();
  }
}

fetchPublications()
  .then(() => {
    console.log('抓取完成！');
    process.exit(0);
  })
  .catch((error) => {
    console.error('抓取失败:', error);
    process.exit(1);
  });

