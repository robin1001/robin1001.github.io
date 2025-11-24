export interface BlogPost {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  content: string;
}

// 解析 frontmatter
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const frontmatterText = match[1];
  const body = match[2];
  const frontmatter: Record<string, any> = {};
  
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // 处理数组值（如 tags: [asr, dl]）
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1);
        frontmatter[key] = value.split(',').map(v => v.trim()).filter(v => v);
      } else {
        // 移除引号
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        frontmatter[key] = value;
      }
    }
  });
  
  return { frontmatter, body };
}

// 从文件名提取日期和 slug
function parseFilename(filename: string): { date: string; slug: string } {
  // 格式: 2015-01-26-cnn.md
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
  if (match) {
    return {
      date: match[1],
      slug: match[2]
    };
  }
  // 如果没有日期格式，使用文件名作为 slug
  const slug = filename.replace(/\.md$/, '');
  return {
    date: '',
    slug
  };
}

// 获取所有博客文章
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // 使用 Vite 的 glob 导入功能
  const modules = import.meta.glob('/blogs/*.md', { query: '?raw', import: 'default', eager: true });
  
  const posts: BlogPost[] = [];
  
  for (const path in modules) {
    const content = modules[path] as string;
    const filename = path.split('/').pop() || '';
    
    const { frontmatter, body } = parseFrontmatter(content);
    const { date, slug } = parseFilename(filename);
    
    posts.push({
      slug,
      title: frontmatter.title || slug,
      tags: frontmatter.tags || [],
      date,
      content: body
    });
  }
  
  // 按日期降序排序（最新的在前）
  posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
  
  return posts;
}

// 根据 slug 获取单篇文章
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

