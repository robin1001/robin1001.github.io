import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts, BlogPost } from '../utils/blogUtils';
import './BlogList.css';

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getAllBlogPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-loading">加载中...</div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1 className="blog-title">博客文章</h1>
        <div className="blog-list">
          {posts.length === 0 ? (
            <div className="blog-empty">暂无文章</div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-item"
              >
                <div className="blog-item-header">
                  <h2 className="blog-item-title">{post.title}</h2>
                  {post.date && (
                    <span className="blog-item-date">{post.date}</span>
                  )}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="blog-item-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

