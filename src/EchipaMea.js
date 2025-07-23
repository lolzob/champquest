import React from 'react';
import './EchipaMea.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Power } from 'lucide-react';
import CeasSiData from './components/CeasSiData';
import InfoEchipa from './birou/InfoEchipa';

const EchipaMea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // === Protecție la parsare user ===
  let user = {};
  try {
    const rawUser = localStorage.getItem('user');
    user = JSON.parse(rawUser);
  } catch {
    user = {};
  }

  // === Protecție la parsare echipa ===
  let echipa = {
    nume: 'Fără nume',
    tara: '',
    regiune: '',
    buget: 0,
    divizie: ''
  };
  try {
    const rawEchipa = localStorage.getItem('echipa');
    const parsed = JSON.parse(rawEchipa);
    if (parsed) echipa = parsed;
  } catch {}

  const handleDeconectare = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('echipa');
    navigate('/');
  };

  return (
    <div className="pagina-echipa">
      {/* === NAVBAR === */}
      <nav className="navbar">
        <div className="nav-left">
          <button className="nav-button">{t('echipa.global')}</button>
          <button className="nav-button">{t('echipa.forum')}</button>
          <button className="nav-button">{t('echipa.ajutor')}</button>
          {user.admin && (
            <button className="nav-button admin-button">Admin</button>
          )}
        </div>

        <div className="nav-right">
          <CeasSiData />
          <button
            className="nav-button activ"
            onClick={() => navigate('/echipa')}
          >
            {t('echipa.echipaMea')}
          </button>
          <button
            className="nav-button deconectare-button"
            onClick={handleDeconectare}
            title={t('echipa.deconectare')}
          >
            <Power size={21} />
          </button>
        </div>
      </nav>

      {/* === CONȚINUT === */}
      <div className="continut-echipa">
        {/* === CARD STÂNGA === */}
        <div className="card-stanga">
          <Routes>
            <Route path="/info" element={<InfoEchipa echipa={echipa} />} />
            <Route path="*" element={<h2 className="titlu-sectiune">{t('echipa.noutati')}</h2>} />
          </Routes>
        </div>

        {/* === CARD DREAPTA === */}
        <div className="card-dreapta">
          {/* Nume și informații echipă */}
          <div className="sectiune">
            <h2 className="titlu-echipa">{echipa.nume}</h2>
            <ul>
              <li onClick={() => navigate('/echipa/info')}>{t('echipa.infoEchipa')}</li>
              <li>{t('echipa.birou')}</li>
              <li>{t('echipa.staff')}</li>
              <li>{t('echipa.finante')}</li>
              <li>{t('echipa.stadion')}</li>
            </ul>
          </div>

          {/* Echipa mare */}
          <div className="sectiune">
            <h2 className="titlu-sectiune">{t('echipa.echipaMare')}</h2>
            <ul>
              <li>{t('echipa.seria')}</li>
              <li>{t('echipa.cupa')}</li>
              <li>{t('echipa.meciuri')}</li>
              <li>{t('echipa.amicale')}</li>
              <li>{t('echipa.jucatori')}</li>
              <li>{t('echipa.antrenament')}</li>
              <li>{t('echipa.listaTransfer')}</li>
            </ul>
          </div>

          {/* Echipa mică */}
          <div className="sectiune">
            <h2 className="titlu-sectiune">{t('echipa.echipaMica')}</h2>
            <ul>
              <li>{t('echipa.seria')}</li>
              <li>{t('echipa.meciuri')}</li>
              <li>{t('echipa.amicale')}</li>
              <li>{t('echipa.jucatori')}</li>
              <li>{t('echipa.antrenament')}</li>
              <li>{t('echipa.cautatoriTalente')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchipaMea;