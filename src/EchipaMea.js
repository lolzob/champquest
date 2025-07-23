import React from 'react';
import './EchipaMea.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EchipaMea = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleDeconectare = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('echipa');
    navigate('/');
  };

  const echipa = JSON.parse(localStorage.getItem('echipa')) || {
    nume: 'Fără nume',
    tara: '',
    regiune: '',
    buget: 0,
    divizie: ''
  };

  return (
    <div className="pagina-echipa">
      {/* === NAVBAR === */}
      <nav className="navbar">
        <div className="nav-left">
          <button className="nav-button">{t('echipa.global')}</button>
          <button className="nav-button">{t('echipa.forum')}</button>
          <button className="nav-button">{t('echipa.ajutor')}</button>
          <button className="nav-button admin-button">Admin</button>
        </div>

        <div className="nav-center">
          <button className="nav-button deconectare-button" onClick={handleDeconectare}>
            {t('echipa.deconectare')}
          </button>
        </div>

        <div className="nav-right">
          <button className="nav-button activ">{t('echipa.echipaMea')}</button>
        </div>
      </nav>

      {/* === CONȚINUT === */}
      <div className="continut-echipa">
        {/* === CARD STÂNGA === */}
        <div className="card-stanga">
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

        {/* === CARD DREAPTA === */}
        <div className="card-dreapta">
          <h2 className="titlu-echipa">{echipa.nume}</h2>
          <ul>
            <li>{t('echipa.infoEchipa')}</li>
            <li>{t('echipa.birou')}</li>
            <li>{t('echipa.finante')}: {echipa.buget.toLocaleString()} €</li>
            <li>{t('echipa.staff')}</li>
            <li>{t('echipa.stadion')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EchipaMea;
