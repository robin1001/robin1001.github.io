import './App.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Banner from './components/Banner';
import Profile from './components/Profile';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Publications from './components/Publications';

// 处理 GitHub Pages 404 重定向
function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 检查是否有 404 重定向参数（格式：/?/path）
    // 404.html 会将路径编码为查询参数
    const search = location.search;
    if (search.startsWith('/?/')) {
      // 提取路径部分
      const path = search.slice(3).replace(/~and~/g, '&');
      // 移除查询参数和 hash，只保留路径
      const cleanPath = path.split('&').find(param => !param.includes('=')) || path.split('&')[0];
      if (cleanPath) {
        navigate(cleanPath, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
}

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <RedirectHandler />
        <div className="App">
          <Banner />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

