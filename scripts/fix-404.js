import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// 读取构建后的 index.html
const distPath = join(process.cwd(), 'dist');
const publicPath = join(process.cwd(), 'public');

const indexHtmlPath = join(distPath, 'index.html');
const html404DistPath = join(distPath, '404.html');
const html404PublicPath = join(publicPath, '404.html');

// 检查文件是否存在
if (!existsSync(indexHtmlPath)) {
  console.error('❌ Error: dist/index.html not found');
  process.exit(1);
}

const indexHtml = readFileSync(indexHtmlPath, 'utf-8');

// 如果 dist/404.html 不存在，从 public/404.html 读取
let html404;
if (existsSync(html404DistPath)) {
  html404 = readFileSync(html404DistPath, 'utf-8');
} else if (existsSync(html404PublicPath)) {
  html404 = readFileSync(html404PublicPath, 'utf-8');
} else {
  console.error('❌ Error: 404.html not found in dist or public directory');
  process.exit(1);
}

// 从 index.html 提取脚本和样式链接
const scriptMatch = indexHtml.match(/<script[^>]*src="([^"]+)"[^>]*><\/script>/);
const linkMatches = indexHtml.matchAll(/<link[^>]*href="([^"]+)"[^>]*>/g);

if (scriptMatch) {
  const scriptTag = scriptMatch[0];
  
  // 替换 404.html 中的脚本
  let fixed404 = html404.replace(
    /<script type="module"[^>]*src="[^"]+"[^>]*><\/script>/,
    scriptTag
  );
  
  // 移除所有现有的样式链接
  fixed404 = fixed404.replace(/<link[^>]*rel="stylesheet"[^>]*>/g, '');
  
  // 保留原有的 favicon（如果存在），否则从 index.html 获取
  const faviconMatch = fixed404.match(/<link[^>]*rel="icon"[^>]*>/);
  if (!faviconMatch) {
    const faviconFromIndex = Array.from(linkMatches).find(m => m[1] && m[1].includes('favicon'));
    if (faviconFromIndex) {
      // 在 </head> 之前添加 favicon
      fixed404 = fixed404.replace('</head>', `    ${faviconFromIndex[0]}\n  </head>`);
    }
  }
  
  // 添加所有样式链接（在 </head> 之前）
  const linkTags = Array.from(linkMatches)
    .filter(m => m[1] && !m[1].includes('favicon')) // 排除 favicon
    .map(m => m[0])
    .join('\n    ');
  if (linkTags) {
    fixed404 = fixed404.replace('</head>', `    ${linkTags}\n  </head>`);
  }
  
  writeFileSync(join(distPath, '404.html'), fixed404, 'utf-8');
  console.log('✓ Fixed 404.html script and style paths');
} else {
  console.warn('⚠ Could not find script tag in index.html');
}

