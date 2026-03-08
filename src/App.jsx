import './App.css';
import trofeuImg from './foto-1.jpg';
import logo from './logo.png';
import Inscriere from './Inscriere.jsx';
import Autentificare from './Autentificare.jsx';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Sub12 from './Sub12.jsx';
import ConfirmareEmail from './ConfirmareEmail.jsx';
import AcordParental from './AcordParental.jsx';
import DespreChampQuest from './DespreChampQuest.jsx';
import Regulament from './Regulament.jsx';
import EchipaMea from './EchipaMea.jsx';
import { useTranslation } from 'react-i18next';
import CeasSiData from './components/CeasSiData.jsx';

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isUserLoggedIn = () => {
    try {
      const rawUser = localStorage.getItem('user');
      const user = JSON.parse(rawUser);
      return user && user.email;
    } catch {
      return false;
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ro' ? 'en' : 'ro');
  };

  return (
    <div className="App">
      {/* === HEADER === */}
      <header className="app-header">
        <Link to={isUserLoggedIn() ? "/echipa" : "/"}>
          <img src={logo} alt="ChampQuest Logo" className="header-logo" />
        </Link>
      </header>

      {/* === NAVBAR === */}
      {!location.pathname.startsWith('/echipa') && (
        <nav className="navbar">
          <div className="nav-group">
            {location.pathname === '/inscriere' ? (
              <Link to="/" className="nav-button left">{t('navbar.home')}</Link>
            ) : (
              <Link to="/inscriere" className="nav-button left">{t('navbar.inscriere')}</Link>
            )}
            <Link to="/despre" className="nav-button center">{t('navbar.despre')}</Link>
            <Link to="/regulament" className="nav-button right">{t('navbar.regulament')}</Link>
          </div>

          {/* 🔹 Ceas în dreapta sus */}
          <CeasSiData />

          {location.pathname === '/' && (
            <button onClick={toggleLanguage} className="language-button">
              {i18n.language === 'ro' ? 'EN' : 'RO'}
            </button>
          )}
        </nav>
      )}

      {/* === ROUTES === */}
      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <div className="left-section">
                <img src={trofeuImg} alt="Trofeu și minge" className="main-image" />
                <p className="slogan">{t('home.slogan')}</p>
              </div>
              <div className="right-section">
                <Autentificare />
              </div>
            </main>
          }
        />
        <Route path="/inscriere" element={<Inscriere />} />
        <Route path="/sub12" element={<Sub12 />} />
        <Route path="/acord-parental" element={<AcordParental />} />
        <Route path="/confirmare-email" element={<ConfirmareEmail />} />
        <Route path="/despre" element={<DespreChampQuest />} />
        <Route path="/regulament" element={<Regulament />} />
        <Route path="/echipa/*" element={<EchipaMea />} />
      </Routes>

      {/* === FOOTER === */}
      <footer className="app-footer">
        <div className="social-icons">
          {/* Adaugă icoane aici */}
        </div>
        <p>&copy; 2025 ChampQuest</p>
      </footer>
    </div>
  );
}

export default App;
