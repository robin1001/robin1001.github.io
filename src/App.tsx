import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Banner from './components/Banner';
import Profile from './components/Profile';

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <div className="App">
        <Banner />
        <Profile />
      </div>
    </LanguageProvider>
  );
}

export default App;

