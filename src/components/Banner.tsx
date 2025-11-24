import React from 'react';
import './Banner.css';
import { useLanguage } from '../contexts/LanguageContext';

interface Link {
  nameKey: string;
  url: string;
  iconType: 'google-scholar' | 'github' | 'blog';
}

const Banner: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  const links: Link[] = [
    {
      nameKey: 'banner.publications',
      url: 'https://scholar.google.com/citations?user=IduEkNQAAAAJ',
      iconType: 'google-scholar'
    },
    {
      nameKey: 'banner.blog',
      url: '#blog',
      iconType: 'blog'
    },
    {
      nameKey: 'banner.github',
      url: 'https://github.com/robin1001',
      iconType: 'github'
    }
  ];

  const renderIcon = (link: Link) => {
    switch (link.iconType) {
      case 'google-scholar':
        return (
          <svg className="banner-link-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          </svg>
        );
      case 'github':
        return (
          <svg className="banner-link-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case 'blog':
        return (
          <svg className="banner-link-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-header">
          <h1 className="banner-title">{t('banner.title')}</h1>
          <div className="banner-right">
            <div className="banner-links">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="banner-link"
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {renderIcon(link)}
                  <span className="banner-link-text">{t(link.nameKey)}</span>
                </a>
              ))}
            </div>
            <button className="language-toggle" onClick={toggleLanguage}>
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

