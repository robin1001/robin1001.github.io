import React from 'react';
import './Profile.css';
import { useLanguage } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';

interface Education {
  degree: string;
  degreeKey: string;
  school: string;
  schoolKey: string;
  period: string;
  periodKey: string;
  description: string;
  descriptionKey: string;
  logo?: string;
}

interface Work {
  position: string;
  positionKey: string;
  company: string;
  companyKey: string;
  period: string;
  periodKey: string;
  description: string;
  descriptionKey: string;
  logo?: string;
}

interface ProfileData {
  name: string;
  nameKey: string;
  image: string;
  bio: string;
  bioKey: string;
  education: Education[];
  work: Work[];
}

const Profile: React.FC = () => {
  const { t } = useLanguage();

  const profileData: ProfileData = {
    name: '张彬彬',
    nameKey: 'profile.name',
    image: 'https://wenet.org.cn/images/avatars/binbin.jpg',
    bio: '我是一名充满热情的软件工程师，专注于前端开发和用户体验设计。热爱学习新技术，喜欢分享知识，致力于创造有价值的数字产品。',
    bioKey: 'profile.bio.text',
    education: [
      {
        degree: '硕士',
        degreeKey: 'education.master',
        school: '西北工业大学',
        schoolKey: 'education.school',
        period: '2014 - 2017',
        periodKey: 'education.master.period',
        description: '语音识别、深度学习',
        descriptionKey: 'education.master.desc',
        logo: ''
      },
      {
        degree: '学士',
        degreeKey: 'education.bachelor',
        school: '西北工业大学',
        schoolKey: 'education.school',
        period: '2010 - 2014',
        periodKey: 'education.bachelor.period',
        description: '计算机科学与技术',
        descriptionKey: 'education.bachelor.desc',
        logo: ''
      }
    ],
    work: [
      {
        position: 'Tech Lead',
        positionKey: 'work.techlead',
        company: 'Horizon Robotics',
        companyKey: 'work.horizon',
        period: '2021.11 - 至今',
        periodKey: 'work.horizon.current.period',
        description: '语音识别、语音合成、大模型等',
        descriptionKey: 'work.horizon.current.desc',
        logo: 'https://logo.clearbit.com/horizon.ai'
      },
      {
        position: 'Speech Tech Lead',
        positionKey: 'work.speechtechlead',
        company: 'Mobvoi',
        companyKey: 'work.mobvoi',
        period: '2018.08 - 2021.11',
        periodKey: 'work.mobvoi.period',
        description: '专注于语音技术和产品，端到端语音识别',
        descriptionKey: 'work.mobvoi.desc',
        logo: 'https://logo.clearbit.com/mobvoi.com'
      },
      {
        position: 'Speech Scientist',
        positionKey: 'work.speechscientist',
        company: 'Microsoft',
        companyKey: 'work.microsoft',
        period: '2017.04 - 2018.08',
        periodKey: 'work.microsoft.period',
        description: '专注于声学建模',
        descriptionKey: 'work.microsoft.desc',
        logo: 'https://logo.clearbit.com/microsoft.com'
      },
      {
        position: 'Speech Intern',
        positionKey: 'work.speechintern',
        company: 'Horizon Robotics',
        companyKey: 'work.horizon',
        period: '2016',
        periodKey: 'work.horizon.intern.period',
        description: '专注于声学建模',
        descriptionKey: 'work.horizon.intern.desc',
        logo: 'https://logo.clearbit.com/horizon.ai'
      },
      {
        position: 'Speech Intern',
        positionKey: 'work.speechintern',
        company: 'Baidu Inc',
        companyKey: 'work.baidu',
        period: '2015',
        periodKey: 'work.baidu.period',
        description: '专注于声学建模',
        descriptionKey: 'work.baidu.desc',
        logo: 'https://logo.clearbit.com/baidu.com'
      }
    ]
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-image-container">
          <img
            src={profileData.image}
            alt={t(profileData.nameKey)}
            className="profile-image"
          />
        </div>
        <div className="profile-header-info">
          <h1 className="profile-name">
            {t(profileData.nameKey)}
            <span className="profile-name-separator">@</span>
            <img
              src="https://wenet.org.cn/images/wenet_logo/wenet_blank.png"
              alt="WeNet"
              className="profile-name-logo"
            />
          </h1>
          <p className="profile-title">
            {t('profile.title.prefix') !== '' && <span>{t('profile.title.prefix')}</span>}
            <a
              href="https://wenet.org.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-title-link"
            >
              {t('profile.title.link')}
            </a>
            {t('profile.title.suffix') !== '' && <span>{t('profile.title.suffix')}</span>}
          </p>
        </div>
      </div>

      <div className="profile-section">
        <h2 className="section-title">{t('profile.bio')}</h2>
        <div className="profile-bio">
          <ReactMarkdown>{t(profileData.bioKey)}</ReactMarkdown>
        </div>
      </div>

      <div className="profile-section">
        <h2 className="section-title">{t('profile.education')}</h2>
        <div className="timeline">
          {profileData.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <p className="timeline-period">{t(edu.periodKey)}</p>
                <h3 className="timeline-title">{t(edu.degreeKey)}</h3>
                <div className="timeline-company">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt={`${t(edu.schoolKey)} logo`}
                      className="timeline-logo"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <p className="timeline-subtitle">{t(edu.schoolKey)}</p>
                </div>
                <p className="timeline-description">{t(edu.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h2 className="section-title">{t('profile.work')}</h2>
        <div className="timeline">
          {profileData.work.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <p className="timeline-period">
                  {t(job.periodKey).replace('至今', t('work.present'))}
                </p>
                <h3 className="timeline-title">{t(job.positionKey)}</h3>
                <div className="timeline-company">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${t(job.companyKey)} logo`}
                      className="timeline-logo"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <p className="timeline-subtitle">{t(job.companyKey)}</p>
                </div>
                <p className="timeline-description">{t(job.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
