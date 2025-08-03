import React from 'react';
import './CQ.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CQ() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <h2 className="cq-titlu">{t('cq.panou')}</h2>

      <div className="cq-container">
        {/* Rând 1 */}
        <div className="cq-rand">
          <div
            className="cq-patrat cq-mic cq-bg-albastru"
            onClick={() => navigate('/echipa/admin/cqmesaj')}
          >
            {t('cq.mesaj_jucatori')}
          </div>
          <div
            className="cq-patrat cq-mic cq-bg-albastru"
            onClick={() => navigate('/echipa/admin/cqmesaj')}
          >
            {t('cq.mesaj_admini')}
          </div>
        </div>

        {/* Rând 2 */}
        <div className="cq-rand">
          <div className="cq-patrat cq-mic cq-bg-verde">{t('cq.lista_transferuri')}</div>
          <div className="cq-patrat cq-mic cq-bg-verde">{t('cq.aproba_echipa')}</div>
        </div>

        {/* Rând 3 */}
        <div className="cq-rand">
          <div className="cq-patrat cq-mic cq-bg-mov">{t('cq.avertizare')}</div>
          <div className="cq-patrat cq-mic cq-bg-rosu">{t('cq.amenda')}</div>
        </div>

        {/* Rând 4 */}
        <div className="cq-rand">
          <div className="cq-patrat cq-mic cq-bg-crem">{t('cq.inchidere_admin')}</div>
          <div className="cq-patrat cq-mic cq-bg-bej">{t('cq.inchidere_echipa')}</div>
        </div>

        {/* Rând 5 */}
        <div className="cq-rand-centru">
          <div className="cq-patrat cq-mic cq-bg-gri">{t('cq.scoatere_amenda')}</div>
        </div>
      </div>
    </>
  );
}

export default CQ;
