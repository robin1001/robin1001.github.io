import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// 读取构建后的 index.html
const distPath = join(process.cwd(), 'dist');
const indexHtml = readFileSync(join(distPath, 'index.html'), 'utf-8');
const html404 = readFileSync(join(distPath, '404.html'), 'utf-8');

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
  
  // 移除所有现有的样式链接和重复的 favicon
  fixed404 = fixed404.replace(/<link[^>]*rel="stylesheet"[^>]*>/g, '');
  fixed404 = fixed404.replace(/<link[^>]*rel="icon"[^>]*>/g, '');
  
  // 添加所有样式链接（在 </head> 之前，但保留第一个 favicon）
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

