import { Routes, Route, Navigate } from 'react-router-dom';
import { HMpage } from './pages/HMpage';
import { About } from './pages/Aboutpage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Layout } from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { InfoPage } from './pages/InfoPage';
import { Page } from './pages/Page';
import { ThemePage } from './pages/ThemePage';



function App() {

  return (
    
    <AuthProvider>
        <div className='provider'>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HMpage />} />
              <Route path="/maininfo" element={<InfoPage />} />
              <Route path="/theme" element={<Page />} />
              <Route path="/theme2" element={<ThemePage />} />
              <Route path="about" element={<About />}>
                <Route path="contacts" element={<p>Пример текста</p>} />
                <Route path="team" element={<p>Команда А Б В </p>} />
              </Route>
              <Route path="about-us" element={<Navigate to="/about" replace />} />
              <Route path="*" element={<Notfoundpage />} />
            </Route>
          </Routes></div>
      </AuthProvider>
  );
}

export default App;
