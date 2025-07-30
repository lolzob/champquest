// === MOD.js ===
import React from 'react';
import './MOD.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MOD() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const countryCode = user?.lang?.toUpperCase() || 'RO';

  return (
    <>
      <h2 className="titlu-mod">{t('mod.panou')}</h2>

      {/* Pătrate pentru mesaje */}
      <div className="container-patrate-mod">
        <div
          className="patrat-mod mic-mod"
          onClick={() => navigate('/echipa/admin/modmesaj')}
        >
          {t('mod.mesaje_verificare')} <span className="verde-mod">9</span>
        </div>
        <div
          className="patrat-mod mic-mod"
          onClick={() => navigate('/echipa/admin/modmesaj')}
        >
          {t('mod.mesaje_asteptare')} <span className="rosu-mod">9</span>
        </div>
      </div>

      {/* Pătrat forum */}
      <div className="patrat-forum-mod">
        <div className="text-forum-mod">{t('mod.catre_forum')} ({countryCode})</div>
        <button
          className="buton-forum-mod"
          onClick={() => window.open(`https://forum.champquest.eu/${countryCode.toLowerCase()}`, '_blank')}
        >
          {t('mod.forum')}
        </button>
      </div>
    </>
  );
}

export default MOD;
