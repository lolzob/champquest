// === MOD.js ===
import React from 'react';
import './MOD.css';
import { useTranslation } from 'react-i18next';

function MOD() {
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const tara = user?.lang || 'ro';

  const handleClick = (tip) => {
    window.location.href = `/modmesaj?tip=${tip}`;
  };

  const handleForumClick = () => {
    window.location.href = `https://forum.champquest.eu/${tara}`;
  };

  return (
    <>
      <h2 className="titlu-mod">{t('mod.panou')} (MOD)</h2>
      <div className="container-patrate-mod">
        <div className="patrat-mod" onClick={() => handleClick('verificare')}>
          <div className="titlu-patrat-mod">{t('mod.mesaje_verificare')}</div>
          <div className="verde">9</div>
        </div>
        <div className="patrat-mod" onClick={() => handleClick('asteptare')}>
          <div className="titlu-patrat-mod">{t('mod.mesaje_asteptare')}</div>
          <div className="rosu">4</div>
        </div>
      </div>

      <div className="patrat-forum-mod">
        <div className="titlu-forum-mod">{t('mod.catre_forum')}</div>
        <button className="buton-forum-mod" onClick={handleForumClick}>
          {t('mod.intra_forum')} ({tara.toUpperCase()})
        </button>
      </div>
    </>
  );
}

export default MOD;
