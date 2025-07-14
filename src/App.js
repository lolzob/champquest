import './App.css';
import trofeuImg from './foto-1.jpg';
import logo from './logo.png';
import Inscriere from './Inscriere';
import Autentificare from './Autentificare';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Sub12 from './Sub12';
import ConfirmareEmail from './ConfirmareEmail';
import AcordParental from './AcordParental';
import DespreChampQuest from './DespreChampQuest'; // ✅ Import nou

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* HEADER */}
      <header className="app-header">
        <Link to="/">
          <img src={logo} alt="ChampQuest Logo" className="header-logo" />
        </Link>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        {location.pathname === '/inscriere' ? (
          <Link to="/" className="nav-button left">Home</Link>
        ) : (
          <Link to="/inscriere" className="nav-button left">Înscriere</Link>
        )}
        <Link to="/despre" className="nav-button center">Despre ChampQuest</Link>
        <button className="nav-button right">Regulament</button>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/inscriere" element={<Inscriere />} />
        <Route path="/sub12" element={<Sub12 />} />
        <Route path="/acord-parental" element={<AcordParental />} />
        <Route path="/confirmare-email" element={<ConfirmareEmail />} />
        <Route path="/despre" element={<DespreChampQuest />} /> {/* ✅ Rută nouă */}
        <Route path="/" element={
          <main className="main-content">
            {/* STÂNGA: Imagine + Slogan */}
            <div className="left-section">
              <img src={trofeuImg} alt="Trofeu și minge" className="main-image" />
              <p className="slogan">
                Totul începe cu tine. De la amator la campion. Ia-ți echipa și scrie istorie!
              </p>
            </div>

            {/* DREAPTA: Card autentificare */}
            <div className="right-section">
              <Autentificare />
            </div>
          </main>
        } />
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
