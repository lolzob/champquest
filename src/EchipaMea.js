import React from 'react';
import './EchipaMea.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Power } from 'lucide-react';
import CeasSiData from './components/CeasSiData';

// Pagini din birou
import InfoEchipa from './birou/InfoEchipa';
import BirouMeu from './birou/BirouMeu';
import Staff from './birou/Staff';
import Stadion from './birou/Stadion';
import Finante from './birou/Finante';

// Pagini din echipa
import Seria from './echipa/Seria';
import Meciuri from './echipa/Meciuri';
import Cupa from './echipa/Cupa';
import Amicale from './echipa/Amicale';
import Jucatori from './echipa/Jucatori';
import Antrenament from './echipa/Antrenament';
import ListaTransfer from './echipa/ListaTransfer';

// Pagini din academia
import SeriaAcademie from './academia/SeriaAcademie';
import MeciuriAcademie from './academia/MeciuriAcademie';
import AmicaleAcademie from './academia/AmicaleAcademie';
import JucatoriAcademie from './academia/JucatoriAcademie';
import AntrenamentAcademie from './academia/AntrenamentAcademie';
import CautatoriTalente from './academia/CautatoriTalente';

const EchipaMea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  let user = {};
  try {
    const rawUser = localStorage.getItem('user');
    user = JSON.parse(rawUser);
  } catch {
    user = {};
  }

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
            <Route path="/birou" element={<BirouMeu />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/stadion" element={<Stadion />} />
            <Route path="/finante" element={<Finante />} />
            <Route path="/seria" element={<Seria />} />
            <Route path="/meciuri" element={<Meciuri />} />
            <Route path="/cupa" element={<Cupa />} />
            <Route path="/amicale" element={<Amicale />} />
            <Route path="/jucatori" element={<Jucatori />} />
            <Route path="/antrenament" element={<Antrenament />} />
            <Route path="/lista-transfer" element={<ListaTransfer />} />
            <Route path="/seria-academie" element={<SeriaAcademie />} />
            <Route path="/meciuri-academie" element={<MeciuriAcademie />} />
            <Route path="/amicale-academie" element={<AmicaleAcademie />} />
            <Route path="/jucatori-academie" element={<JucatoriAcademie />} />
            <Route path="/antrenament-academie" element={<AntrenamentAcademie />} />
            <Route path="/cautatori-talente" element={<CautatoriTalente />} />
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
              <li onClick={() => navigate('/echipa/birou')}>{t('echipa.biroul')}</li>
              <li onClick={() => navigate('/echipa/staff')}>{t('echipa.staff')}</li>
              <li onClick={() => navigate('/echipa/stadion')}>{t('echipa.stadion')}</li>
              <li onClick={() => navigate('/echipa/finante')}>{t('echipa.finante')}</li>
            </ul>
          </div>

          {/* Echipa mare */}
          <div className="sectiune">
            <h2 className="titlu-sectiune">{t('echipa.echipaMare')}</h2>
            <ul>
              <li onClick={() => navigate('/echipa/seria')}>{t('echipa.seria')}</li>
              <li onClick={() => navigate('/echipa/meciuri')}>{t('echipa.meciuri')}</li>
              <li onClick={() => navigate('/echipa/cupa')}>{t('echipa.cupa')}</li>
              <li onClick={() => navigate('/echipa/amicale')}>{t('echipa.amicale')}</li>
              <li onClick={() => navigate('/echipa/jucatori')}>{t('echipa.jucatori')}</li>
              <li onClick={() => navigate('/echipa/antrenament')}>{t('echipa.antrenament')}</li>
              <li onClick={() => navigate('/echipa/lista-transfer')}>{t('echipa.listaTransfer')}</li>
            </ul>
          </div>

          {/* Echipa mică */}
          <div className="sectiune">
            <h2 className="titlu-sectiune">{t('echipa.echipaMica')}</h2>
            <ul>
              <li onClick={() => navigate('/echipa/seria-academie')}>{t('echipa.seria')}</li>
              <li onClick={() => navigate('/echipa/meciuri-academie')}>{t('echipa.meciuri')}</li>
              <li onClick={() => navigate('/echipa/amicale-academie')}>{t('echipa.amicale')}</li>
              <li onClick={() => navigate('/echipa/jucatori-academie')}>{t('echipa.jucatori')}</li>
              <li onClick={() => navigate('/echipa/antrenament-academie')}>{t('echipa.antrenament')}</li>
              <li onClick={() => navigate('/echipa/cautatori-talente')}>{t('echipa.cautatoriTalente')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchipaMea;
