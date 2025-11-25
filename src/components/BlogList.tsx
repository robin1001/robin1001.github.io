import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts, BlogPost } from '../utils/blogUtils';
import { useLanguage } from '../contexts/LanguageContext';
import './BlogList.css';

type TabType = 'tech' | 'essay' | 'notes';

interface WeChatArticle {
  title: string;
  link: string;
  date: string;
  description?: string;
}

interface BlogItem {
  id: string;
  title: string;
  date: string;
  link?: string;
  slug?: string;
  description?: string;
}

const BlogList: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('tech');
  const [posts, setPosts] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        if (activeTab === 'notes') {
          // 笔记：使用当前 blogs 目录下的所有文章
          const allPosts = await getAllBlogPosts();
          setPosts(allPosts.map(post => ({
            id: post.slug,
            title: post.title,
            date: post.date,
            slug: post.slug,
          })));
        } else if (activeTab === 'tech') {
          // 科技：从 public/tech.json 加载
          const response = await fetch('/tech.json');
          if (response.ok) {
            const articles: WeChatArticle[] = await response.json();
            const sortedArticles = articles
              .map(article => ({
                id: article.link,
                title: article.title,
                date: article.date,
                link: article.link,
                description: article.description,
              }))
              .sort((a, b) => {
                // 按日期降序排序（最新的在前）
                if (!a.date && !b.date) return 0;
                if (!a.date) return 1;
                if (!b.date) return -1;
                return b.date.localeCompare(a.date);
              });
            setPosts(sortedArticles);
          } else {
            setPosts([]);
          }
        } else if (activeTab === 'essay') {
          // 随笔：从 public/articles.json 加载
          const response = await fetch('/articles.json');
          if (response.ok) {
            const articles: WeChatArticle[] = await response.json();
            const sortedArticles = articles
              .map(article => ({
                id: article.link,
                title: article.title,
                date: article.date,
                link: article.link,
                description: article.description,
              }))
              .sort((a, b) => {
                // 按日期降序排序（最新的在前）
                if (!a.date && !b.date) return 0;
                if (!a.date) return 1;
                if (!b.date) return -1;
                return b.date.localeCompare(a.date);
              });
            setPosts(sortedArticles);
          } else {
            setPosts([]);
          }
        }
      } catch (error) {
        console.error('Failed to load posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [activeTab]);

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-loading">加载中...</div>
      </div>
    );
  }

  const renderPostItem = (post: BlogItem) => {
    const content = (
      <>
        <div className="blog-item-header">
          <h2 className="blog-item-title">{post.title}</h2>
          {post.date && (
            <span className="blog-item-date">{post.date}</span>
          )}
        </div>
        {post.description && (
          <div className="blog-item-description">{post.description}</div>
        )}
      </>
    );

    if (post.slug) {
      // 笔记：内部路由
      return (
        <Link
          key={post.id}
          to={`/blog/${post.slug}`}
          className="blog-item"
        >
          {content}
        </Link>
      );
    } else if (post.link) {
      // 科技/随笔：外部链接
      return (
        <a
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-item"
        >
          {content}
        </a>
      );
    }

    return null;
  };

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1 className="blog-title">{t('blog.title')}</h1>
        <div className="blog-tabs">
          <button
            className={`blog-tab ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            {t('blog.tab.tech')}
          </button>
          <button
            className={`blog-tab ${activeTab === 'essay' ? 'active' : ''}`}
            onClick={() => setActiveTab('essay')}
          >
            {t('blog.tab.essay')}
          </button>
          <button
            className={`blog-tab ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            {t('blog.tab.notes')}
          </button>
        </div>
        <div className="blog-list">
          {loading ? (
            <div className="blog-loading">加载中...</div>
          ) : posts.length === 0 ? (
            <div className="blog-empty">暂无文章</div>
          ) : (
            posts.map(renderPostItem)
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

