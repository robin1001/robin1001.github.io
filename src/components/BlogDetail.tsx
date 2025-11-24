import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBlogPost, BlogPost } from '../utils/blogUtils';
import './BlogDetail.css';

const CDN_BASE_URL = 'https://robin1001-1256283475.cos.ap-shanghai.myqcloud.com';

// 处理 markdown 内容，将图片 URL 替换为 CDN 地址
function processImageUrls(content: string): string {
  // 匹配 markdown 图片语法: ![alt](url) 或 ![alt](url "title")
  return content.replace(
    /!\[([^\]]*)\]\(([^\)]+)\)/g,
    (match, alt, url) => {
      // 如果已经是完整 URL（http/https），保持不变
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return match;
      }
      
      // 处理 /public/img/ 路径，保留 /public 前缀
      if (url.startsWith('/public/')) {
        return `![${alt}](${CDN_BASE_URL}${url})`;
      }
      
      // 处理 /img/ 路径（没有 public 前缀）
      if (url.startsWith('/img/')) {
        return `![${alt}](${CDN_BASE_URL}${url})`;
      }
      
      // 处理拼写错误的路径（如 /pulibc/img/），修正为 /public/img/
      if (url.match(/^\/[^\/]+\/img\//)) {
        const imagePath = url.replace(/^\/[^\/]+/, '/public');
        return `![${alt}](${CDN_BASE_URL}${imagePath})`;
      }
      
      // 其他情况保持原样
      return match;
    }
  );
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  // 处理后的 markdown 内容
  const processedContent = useMemo(() => {
    if (!post) return '';
    return processImageUrls(post.content);
  }, [post]);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const blogPost = await getBlogPost(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          // 如果文章不存在，可以重定向到列表页
          navigate('/blog', { replace: true });
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-loading">加载中...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-container">
        <div className="blog-empty">文章不存在</div>
        <Link to="/blog" className="blog-back-link">返回博客列表</Link>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-content">
        <Link to="/blog" className="blog-back-link">← 返回博客列表</Link>
        
        <article className="blog-article">
          <header className="blog-article-header">
            <h1 className="blog-article-title">{post.title}</h1>
            <div className="blog-article-meta">
              {post.date && (
                <span className="blog-article-date">发布时间: {post.date}</span>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="blog-article-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="blog-article-content">
            <ReactMarkdown>{processedContent}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;

