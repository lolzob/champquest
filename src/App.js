import './App.css';
import trofeuImg from './foto-1.jpg';
import logo from './logo.png';
import Inscriere from './Inscriere';
import Autentificare from './Autentificare';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Sub12 from './Sub12';
import ConfirmareEmail from './ConfirmareEmail';
import AcordParental from './AcordParental';
import DespreChampQuest from './DespreChampQuest';
import Regulament from './Regulament';
import EchipaMea from './EchipaMea';
import PrivateRoute from './PrivateRoute';
import { useTranslation } from 'react-i18next';

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ro' ? 'en' : 'ro');
  };

  return (
    <div className="App">
      {/* HEADER */}
      <header className="app-header">
        <Link to="/">
          <img src={logo} alt="ChampQuest Logo" className="header-logo" />
        </Link>
      </header>

      {/* NAVBAR */}
      {location.pathname !== '/echipa' && (
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

          {location.pathname === '/' && (
            <button onClick={toggleLanguage} className="language-button">
              {i18n.language === 'ro' ? 'EN' : 'RO'}
            </button>
          )}
        </nav>
      )}

      {/* ROUTES */}
      <Routes>
        <Route path="/inscriere" element={<Inscriere />} />
        <Route path="/sub12" element={<Sub12 />} />
        <Route path="/acord-parental" element={<AcordParental />} />
        <Route path="/confirmare-email" element={<ConfirmareEmail />} />
        <Route path="/despre" element={<DespreChampQuest />} />
        <Route path="/regulament" element={<Regulament />} />
        <Route
          path="/echipa"
          element={
            <PrivateRoute>
              <EchipaMea />
            </PrivateRoute>
          }
        />
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
      </Routes>

      {/* FOOTER */}
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
