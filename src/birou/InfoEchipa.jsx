import React from 'react';
import { useTranslation } from 'react-i18next';

const InfoEchipa = ({ echipa }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="titlu-sectiune">{t('echipa.infoEchipa')}</h2>
      <ul>
        <li><strong>{t('echipa.nume')}:</strong> {echipa.nume}</li>
        <li><strong>{t('echipa.tara')}:</strong> {echipa.tara}</li>
        <li><strong>{t('echipa.regiune')}:</strong> {echipa.regiune}</li>
        <li><strong>{t('echipa.divizie')}:</strong> {echipa.divizie}</li>
        <li><strong>{t('echipa.buget')}:</strong> {echipa.buget} €</li>
      </ul>
    </div>
  );
};

export default InfoEchipa;
