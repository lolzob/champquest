import React from 'react';
import './Regulament.css';
import { useTranslation } from 'react-i18next';

function Regulament() {
  const { t } = useTranslation();

  return (
    <div className="regulament-container">
      <h2>🛡️ {t('regulament.titlu')}</h2>

      <section>
        <h3>{t('regulament.sec1_titlu')}</h3>
        <p>{t('regulament.sec1_text')}</p>
      </section>

      <section>
        <h3>{t('regulament.sec2_titlu')}</h3>
        <ul>
          <li>{t('regulament.sec2_p1')}</li>
          <li>{t('regulament.sec2_p2')}</li>
          <li>{t('regulament.sec2_p3')}</li>
        </ul>
      </section>

      <section>
        <h3>{t('regulament.sec3_titlu')}</h3>
        <ul>
          <li>{t('regulament.sec3_p1')}</li>
          <li>{t('regulament.sec3_p2')}</li>
        </ul>
      </section>

      <section>
        <h3>{t('regulament.sec4_titlu')}</h3>
        <ul>
          <li>{t('regulament.sec4_p1')}</li>
          <li>{t('regulament.sec4_p2')}</li>
        </ul>
      </section>

      <section>
        <h3>{t('regulament.sec5_titlu')}</h3>
        <ul>
          <li>{t('regulament.sec5_p1')}</li>
          <li>{t('regulament.sec5_p2')}</li>
        </ul>
      </section>

      <section>
        <h3>{t('regulament.sec6_titlu')}</h3>
        <ul>
          <li>{t('regulament.sec6_p1')}</li>
          <li>{t('regulament.sec6_p2')}</li>
        </ul>
      </section>

      <section>
        <h3>{t('regulament.sec7_titlu')}</h3>
        <p>{t('regulament.sec7_text')}</p>
      </section>

      <section>
        <h3>{t('regulament.sec8_titlu')}</h3>
        <p>{t('regulament.sec8_text')}</p>
      </section>

      <section>
        <h3>{t('regulament.sec9_titlu')}</h3>
        <p>{t('regulament.sec9_text')}</p>
      </section>

      <div className="regulament-footer">
        <strong>💙 {t('regulament.multumire1')}</strong><br />
        {t('regulament.multumire2')}
      </div>
    </div>
  );
}

export default Regulament;
