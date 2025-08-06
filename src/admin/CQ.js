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
          <div
            className="cq-patrat cq-mic cq-bg-bej"
            onClick={() => navigate('/echipa/admin/echipaonoff')}
          >
            {t('cq.echipa_on_of')}
          </div>
        </div>

        {/* Rând 3 */}
        <div className="cq-rand">
          <div 
            className="cq-patrat cq-mic cq-bg-mov"
            onClick={() => navigate('/echipa/admin/sanctiuni')}
            >
              {t('cq.avertizare')}
          </div>
          <div 
            className="cq-patrat cq-mic cq-bg-rosu"
            onClick={() => navigate('/echipa/admin/sanctiuni')}
            >
              {t('cq.amenda')}
          </div>
        </div>

        {/* Rând 4 */}
        <div className="cq-rand">
          <div className="cq-patrat cq-mic cq-bg-crem"
            onClick={() => navigate('/echipa/admin/panouadmin')}
            >
            {t('cq.inchidere_admin')}
          </div>
          <div 
            className="cq-patrat cq-mic cq-bg-gri"
            onClick={() => navigate('/echipa/admin/sanctiuni')}
            >
              {t('cq.sterge_amenda')}
          </div>
        </div>
      </div>
    </>
  );
}

export default CQ;
