import React, { useEffect, useState } from 'react';
import './Publications.css';
import { useLanguage } from '../contexts/LanguageContext';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  citations: string;
  link: string;
}

const Publications: React.FC = () => {
  const { t } = useLanguage();
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedAuthors, setExpandedAuthors] = useState<Set<number>>(new Set());

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const response = await fetch('/publications.json');
        if (response.ok) {
          const data = await response.json();
          
          // 按时间排序（最新的在前）
          const sortedData = [...data].sort((a, b) => {
            const yearA = a.year ? parseInt(a.year, 10) : 0;
            const yearB = b.year ? parseInt(b.year, 10) : 0;
            
            // 如果年份相同，保持原顺序
            if (yearA === yearB) {
              return 0;
            }
            
            // 没有年份的文章放在最后
            if (yearA === 0) return 1;
            if (yearB === 0) return -1;
            
            // 按年份倒序排列（最新的在前）
            return yearB - yearA;
          });
          
          setPublications(sortedData);
        } else {
          console.error('Failed to load publications');
        }
      } catch (error) {
        console.error('Error loading publications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  const toggleAuthors = (index: number) => {
    const newExpanded = new Set(expandedAuthors);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedAuthors(newExpanded);
  };

  const truncateAuthors = (authors: string, maxLength: number = 100): string => {
    if (authors.length <= maxLength) return authors;
    return authors.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="publications-container">
        <div className="publications-loading">加载中...</div>
      </div>
    );
  }

  return (
    <div className="publications-container">
      <div className="publications-content">
        <h1 className="publications-title">{t('publications.title')}</h1>
        <p className="publications-description">
          {t('publications.description.prefix')}{' '}
          <a 
            href="https://scholar.google.com/citations?user=IduEkNQAAAAJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="publications-scholar-link"
          >
            {t('publications.description.link')}
          </a>
          {t('publications.description.suffix') && ` ${t('publications.description.suffix')}`}
        </p>
        <div className="publications-list">
          {publications.length === 0 ? (
            <div className="publications-empty">暂无文章</div>
          ) : (
            publications.map((pub, index) => {
              const isExpanded = expandedAuthors.has(index);
              const shouldTruncate = pub.authors.length > 100;
              const displayAuthors = shouldTruncate && !isExpanded 
                ? truncateAuthors(pub.authors) 
                : pub.authors;

              return (
                <div key={index} className="publication-item">
                  <div className="publication-header">
                    <h2 className="publication-title">
                      {pub.link ? (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="publication-title-link"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h2>
                    {pub.year && (
                      <span className="publication-year">{pub.year}</span>
                    )}
                  </div>
                  
                  <div className="publication-authors">
                    <span className="publication-label">作者：</span>
                    <span className="publication-authors-text">
                      {displayAuthors}
                    </span>
                    {shouldTruncate && (
                      <button
                        className="publication-toggle-authors"
                        onClick={() => toggleAuthors(index)}
                      >
                        {isExpanded ? t('publications.collapse') : t('publications.expand')}
                      </button>
                    )}
                  </div>

                  {pub.venue && (
                    <div className="publication-venue">
                      <span className="publication-label">会议/期刊：</span>
                      <span className="publication-venue-text">{pub.venue}</span>
                    </div>
                  )}

                  {pub.citations && pub.citations !== '0' && (
                    <div className="publication-citations">
                      <span className="publication-label">引用数：</span>
                      <span className="publication-citations-text">{pub.citations}</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;

