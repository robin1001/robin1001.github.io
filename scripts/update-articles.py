#!/usr/bin/env python3
"""
更新微信公众号文章列表的脚本

使用方法：
1. 安装依赖: pip install requests beautifulsoup4
2. 在脚本中的 LINKS 列表中添加文章链接
3. 运行脚本: python scripts/update-articles.py

或者从文件读取链接：
python scripts/update-articles.py links.txt
"""

import json
import os
import sys
import re
import hashlib
from datetime import datetime
from typing import List, Dict, Optional
from urllib.parse import urlparse

# 尝试导入依赖
try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("请先安装依赖: pip install requests beautifulsoup4")
    sys.exit(1)

# ============================================
# 在这里添加你的文章链接列表
# ============================================
LINKS = [
    # "https://mp.weixin.qq.com/s/xxxxx",
    # "https://mp.weixin.qq.com/s/yyyyy",
    # 添加更多链接...
]


def fetch_article_info(link: str) -> Optional[Dict]:
    """
    从文章链接获取文章信息（标题、日期、封面等）
    """
    if not link or not link.startswith('http'):
        return None

    print(f"正在获取: {link}")

    headers = {
        'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept':
        'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    }

    try:
        # 微信公众号链接可能需要处理重定向
        session = requests.Session()
        session.headers.update(headers)
        response = session.get(link, timeout=15, allow_redirects=True)

        if response.status_code != 200:
            print(f"  警告: HTTP {response.status_code}")
            return None

        # 尝试解析HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # 提取标题
        title = None
        # 尝试多种可能的标题选择器
        title_selectors = [
            'h1#activity-name', 'h1.rich_media_title', 'h1', 'title'
        ]

        for selector in title_selectors:
            title_elem = soup.select_one(selector)
            if title_elem:
                title = title_elem.get_text().strip()
                if title and len(title) > 0:
                    break

        # 提取日期
        date = None
        date_selectors = [
            'em#publish_time', 'em.rich_media_meta_text',
            'span.rich_media_meta_text', 'time'
        ]

        for selector in date_selectors:
            date_elem = soup.select_one(selector)
            if date_elem:
                date_text = date_elem.get_text().strip()
                # 尝试解析日期格式
                date = parse_date(date_text)
                if date:
                    break

        # 提取描述
        description = None
        desc_selectors = [
            'p.rich_media_meta_text', 'div.rich_media_content p',
            'meta[name="description"]'
        ]

        for selector in desc_selectors:
            desc_elem = soup.select_one(selector)
            if desc_elem:
                if desc_elem.name == 'meta':
                    description = desc_elem.get('content', '').strip()
                else:
                    description = desc_elem.get_text().strip()
                if description and len(description) > 10:
                    # 限制描述长度
                    if len(description) > 200:
                        description = description[:200] + '...'
                    break

        if not title:
            # 如果无法获取标题，使用链接的一部分作为标题
            title = f"文章 {link[-10:]}"

        if not date:
            # 如果无法获取日期，使用当前日期
            date = datetime.now().strftime("%Y-%m-%d")

        article = {
            "title": title,
            "link": link,
            "date": date,
        }

        if description:
            article["description"] = description
        print(f"  ✓ 成功: {title[:50]}...")
        return article

    except requests.exceptions.Timeout:
        print(f"  ✗ 超时")
        return None
    except requests.exceptions.RequestException as e:
        print(f"  ✗ 请求失败: {e}")
        return None
    except Exception as e:
        print(f"  ✗ 解析失败: {e}")
        return None


def parse_date(date_text: str) -> Optional[str]:
    """
    解析日期文本，返回 YYYY-MM-DD 格式
    """
    if not date_text:
        return None

    # 移除可能的空白字符
    date_text = date_text.strip()

    # 尝试匹配常见的日期格式
    patterns = [
        (r'(\d{4})[年\-/](\d{1,2})[月\-/](\d{1,2})', '%Y-%m-%d'),
        (r'(\d{4})-(\d{2})-(\d{2})', '%Y-%m-%d'),
        (r'(\d{4})/(\d{2})/(\d{2})', '%Y-%m-%d'),
    ]

    for pattern, _ in patterns:
        match = re.search(pattern, date_text)
        if match:
            year, month, day = match.groups()
            try:
                # 验证日期有效性
                date_obj = datetime(int(year), int(month), int(day))
                return date_obj.strftime("%Y-%m-%d")
            except ValueError:
                continue

    return None


def load_links_from_file(filepath: str) -> List[str]:
    """
    从文件读取链接列表（每行一个链接）
    """
    links = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):  # 忽略空行和注释
                    if line.startswith('http'):
                        links.append(line)
    except FileNotFoundError:
        print(f"错误: 文件 {filepath} 不存在")
    except Exception as e:
        print(f"读取文件失败: {e}")

    return links


def fetch_articles_from_links(links: List[str]) -> List[Dict]:
    """
    从链接列表获取文章信息
    """
    if not links:
        print("没有提供链接")
        return []

    print(f"\n开始处理 {len(links)} 个链接...\n")
    articles = []

    for i, link in enumerate(links, 1):
        print(f"[{i}/{len(links)}] ", end='')
        article = fetch_article_info(link)
        if article:
            articles.append(article)
        # 添加延迟，避免请求过快
        import time
        time.sleep(1)

    return articles


def update_articles_file(articles: List[Dict], articles_file):
    """更新 articles.json 文件"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    # 确保目录存在
    os.makedirs(os.path.dirname(articles_file), exist_ok=True)

    # 按日期排序（最新的在前）
    articles.sort(key=lambda x: x.get('date', ''), reverse=True)

    # 写入文件
    with open(articles_file, 'w', encoding='utf-8') as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)

    print(f"成功更新 {len(articles)} 篇文章到 {articles_file}")


def main():
    print("=" * 50)
    print("WeNet 微信公众号文章更新工具")
    print("=" * 50)

    # 获取链接列表
    links = []

    # 如果提供了命令行参数，从文件读取
    if len(sys.argv) > 1:
        filepath = sys.argv[1]
        print(f"从文件读取链接: {filepath}")
        links = load_links_from_file(filepath)
    else:
        # 否则使用脚本中的 LINKS 列表
        links = LINKS

    if not links:
        print("\n错误: 没有提供链接")
        print("\n使用方法:")
        print("1. 在脚本中的 LINKS 列表中添加链接")
        print("2. 或者运行: python scripts/update-articles.py links.txt")
        print("\n示例 links.txt 文件格式:")
        print("  https://mp.weixin.qq.com/s/xxxxx")
        print("  https://mp.weixin.qq.com/s/yyyyy")
        return

    # 从链接获取文章信息
    articles = fetch_articles_from_links(links)

    if not articles:
        print("\n警告: 没有成功获取任何文章")
        return

    # 合并现有文章（如果存在）
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    articles_file = sys.argv[2]

    existing_articles = []
    if os.path.exists(articles_file):
        try:
            with open(articles_file, 'r', encoding='utf-8') as f:
                existing_articles = json.load(f)
        except:
            pass

    # 合并文章，去重（基于链接）
    existing_links = {article.get('link') for article in existing_articles}
    new_articles = [a for a in articles if a.get('link') not in existing_links]

    if new_articles:
        all_articles = new_articles + existing_articles
        print(f"\n新增 {len(new_articles)} 篇文章")
    else:
        all_articles = existing_articles
        print(f"\n所有文章已存在，更新现有文章信息")
        # 更新现有文章的信息
        article_map = {a.get('link'): a for a in articles}
        for i, article in enumerate(all_articles):
            link = article.get('link')
            if link in article_map:
                all_articles[i] = article_map[link]

    # 更新文件
    update_articles_file(all_articles, articles_file)

    print(f"\n总计: {len(all_articles)} 篇文章")
    print(f"文件已更新: {articles_file}")


if __name__ == "__main__":
    main()
