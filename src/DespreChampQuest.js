import React from 'react';
import './DespreChampQuest.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function DespreChampQuest() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="despre-container">
      <h2>{t('despre.titlu')}</h2>

      <p><strong>ChampQuest</strong> {t('despre.paragraf1')}</p>
      <p>{t('despre.paragraf2')}</p>

      <h3>{t('despre.subtitlu1')}</h3>
      <ul>
        <li>⚽ {t('despre.list1')}</li>
        <li>📈 {t('despre.list2')}</li>
        <li>💰 {t('despre.list3')}</li>
        <li>🏟️ {t('despre.list4')}</li>
        <li>🧠 {t('despre.list5')}</li>
        <li>🌍 {t('despre.list6')}</li>
      </ul>

      <h3>{t('despre.subtitlu2')}</h3>
      <p>{t('despre.paragraf3')}</p>

      <h3>{t('despre.subtitlu3')}</h3>
      <p>{t('despre.paragraf4')}</p>

      <p className="slogan-final">{t('despre.invitat')}</p>

      <button className="button green" onClick={() => navigate('/inscriere')}>
        {t('despre.buton')}
      </button>
    </div>
  );
}

export default DespreChampQuest;
