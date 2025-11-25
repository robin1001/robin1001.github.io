import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Banner
    'banner.title': '个人主页',
    'banner.home': '个人主页',
    'banner.publications': 'Publications',
    'banner.blog': 'Blog',
    'banner.github': 'GitHub',

    // Profile sections
    'profile.bio': '个人简介',
    'profile.education': '学历背景',
    'profile.work': '工作背景',

    // Profile data
    'profile.name': '张彬彬',
    'profile.title.prefix': '',
    'profile.title.link': 'WeNet 开源社区',
    'profile.title.suffix': '创始人',
    'profile.bio.text': '**大家好，我是张彬彬，欢迎来到我的主页。**\n\n- 🔭 我是 [WeNet 开源社区](https://wenet.org.cn/) 的创始人，我曾创建或参与创建的开源项目有：\n\n  - [WeNet](https://github.com/wenet-e2e/wenet), 流行的，产品优先的端到端语音识别框架。\n\n  - [WenetSpeech](http://wenet.org.cn/WenetSpeech/), 1万小时的大规模多领域中文语音识别开源数据集。\n\n  - 语音识别公开课（创建者之一）: 1) [WeNet 实战课程](https://edu.speechhome.com/p/t_pc/goods_pc_detail/goods_detail/course_27jU7hlWuYqO7ymQ6zYO2yIPEHC?app_id=appzxw56sw27444), 2) [语音识别：从入门到精通](https://www.shenlanxueyuan.com/course/245).\n\n- 🌱 我的兴趣包括语音、深度学习框架和编译器、计算机体系结构。',

    // Education
    'education.master': '硕士',
    'education.bachelor': '学士',
    'education.school': '西北工业大学',
    'education.master.period': '2014 - 2017',
    'education.master.desc': '语音识别、深度学习',
    'education.bachelor.period': '2010 - 2014',
    'education.bachelor.desc': '计算机科学与技术',

    // Work
    'work.techlead': 'Tech Lead',
    'work.speechtechlead': 'Speech Tech Lead',
    'work.speechscientist': 'Speech Scientist',
    'work.speechintern': 'Speech Intern',
    'work.horizon': '地平线',
    'work.mobvoi': '出门问问',
    'work.microsoft': '微软',
    'work.baidu': '百度',
    'work.horizon.current.period': '2021.11 - 至今',
    'work.horizon.current.desc': '语音识别、语音合成、大模型等',
    'work.mobvoi.period': '2018.08 - 2021.11',
    'work.mobvoi.desc': '专注于语音技术和产品，端到端语音识别',
    'work.microsoft.period': '2017.04 - 2018.08',
    'work.microsoft.desc': '专注于声学建模',
    'work.horizon.intern.period': '2016',
    'work.horizon.intern.desc': '专注于声学建模',
    'work.baidu.period': '2015',
    'work.baidu.desc': '专注于声学建模',
    'work.present': '至今',

    // Publications
    'publications.title': '发表文章',
    'publications.expand': '展开',
    'publications.collapse': '收起',
    'publications.description.prefix': '或者你可以在 Google Scholar 访问',
    'publications.description.link': '我的文章',
    'publications.description.suffix': '',

    // Blog
    'blog.title': '博客文章',
    'blog.tab.tech': '科技',
    'blog.tab.essay': '随笔',
    'blog.tab.notes': '笔记',
  },
  en: {
    // Banner
    'banner.title': 'Personal Homepage',
    'banner.home': 'Home',
    'banner.publications': 'Publications',
    'banner.blog': 'Blog',
    'banner.github': 'GitHub',

    // Profile sections
    'profile.bio': 'About',
    'profile.education': 'Education',
    'profile.work': 'Work Experience',

    // Profile data
    'profile.name': 'Binbin Zhang',
    'profile.title.prefix': 'Founder of ',
    'profile.title.link': 'WeNet Open Source Community',
    'profile.title.suffix': '',
    'profile.bio.text': '**Hi everyone, This is Binbin Zhang, nice to meet you.**\n\n- 🔭 I\'m a believer of open source. I\'m the founder of [WeNet Community](https://wenet.org.cn/). Here are the open source projects that I created:\n\n  - [WeNet](https://github.com/wenet-e2e/wenet), a popular, production first and production ready end-to-end speech recognition toolkit.\n\n  - [WenetSpeech](http://wenet.org.cn/WenetSpeech/), a 10000+ hours open source multi-domain chinese corpus for speech recognition.\n\n  - Open courses(co-creator) on speech recognition: 1) [WeNet in Action](https://edu.speechhome.com/p/t_pc/goods_pc_detail/goods_detail/course_27jU7hlWuYqO7ymQ6zYO2yIPEHC?app_id=appzxw56sw27444), 2) [Automatic Speech Recognition](https://www.shenlanxueyuan.com/course/245).\n\n- 🌱 My interests include speech, deep learning frameworks and compilers, and computer architecture.',

    // Education
    'education.master': 'Master\'s Degree',
    'education.bachelor': 'Bachelor\'s Degree',
    'education.school': 'Northwestern Polytechnical University',
    'education.master.period': '2014 - 2017',
    'education.master.desc': 'Speech Recognition, Deep Learning',
    'education.bachelor.period': '2010 - 2014',
    'education.bachelor.desc': 'Computer Science and Technology',

    // Work
    'work.techlead': 'Tech Lead',
    'work.speechtechlead': 'Speech Tech Lead',
    'work.speechscientist': 'Speech Scientist',
    'work.speechintern': 'Speech Intern',
    'work.horizon': 'Horizon Robotics',
    'work.mobvoi': 'Mobvoi',
    'work.microsoft': 'Microsoft',
    'work.baidu': 'Baidu Inc',
    'work.horizon.current.period': '2021.11 - Present',
    'work.horizon.current.desc': 'Speech recognition, speech synthesis, large language models, etc.',
    'work.mobvoi.period': '2018.08 - 2021.11',
    'work.mobvoi.desc': 'Focusing on speech technology and products, end-to-end speech recognition',
    'work.microsoft.period': '2017.04 - 2018.08',
    'work.microsoft.desc': 'Focusing on acoustic modeling',
    'work.horizon.intern.period': '2016',
    'work.horizon.intern.desc': 'Focusing on acoustic modeling',
    'work.baidu.period': '2015',
    'work.baidu.desc': 'Focusing on acoustic modeling',
    'work.present': 'Present',

    // Publications
    'publications.title': 'Publications',
    'publications.expand': 'Expand',
    'publications.collapse': 'Collapse',
    'publications.description.prefix': 'Or you can visit',
    'publications.description.link': 'my publications',
    'publications.description.suffix': ' on Google Scholar',

    // Blog
    'blog.title': 'Blog',
    'blog.tab.tech': 'Tech',
    'blog.tab.essay': 'Essay',
    'blog.tab.notes': 'Notes',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    const translation = translations[language][key];
    return translation !== undefined ? translation : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

