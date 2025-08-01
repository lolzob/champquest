import React from 'react';
import './ADM.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ADM() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <h2 className="titlu-adm">{t('adm.panou')}</h2>

      <div className="container-patrate-adm">
        <div className="rand-patrate-adm">
          <div
            className="patrat-adm mic-adm patrat-verificare"
            onClick={() => navigate('/echipa/admin/admmesaj')}
          >
            {t('mod.mesaje_verificare')} <span className="verde-adm">9</span>
          </div>
          <div
            className="patrat-adm mic-adm patrat-asteptare"
            onClick={() => navigate('/echipa/admin/admmesaj')}
          >
            {t('mod.mesaje_asteptare')} <span className="rosu-adm">9</span>
          </div>
        </div>

        <div className="rand-patrate-adm">
          <div
            className="patrat-adm mic-adm patrat-mesaj-tra"
            onClick={() => navigate('/echipa/admin/admmesaj')}
          >
            {t('adm.mesaj_tra')} <span className="rosu-adm">2</span>
          </div>
          <div
            className="patrat-adm mic-adm patrat-mesaj-mod"
            onClick={() => navigate('/echipa/admin/admmesaj')}
          >
            {t('adm.mesaj_mod')} <span className="rosu-adm">1</span>
          </div>
        </div>

        <div className="rand-patrate-adm">
          <div className="patrat-adm mic-adm patrat-lista-transferuri" tabIndex={0}>
            {t('adm.lista_transferuri')}
          </div>
          <div className="patrat-adm mic-adm patrat-aprobare-echipa" tabIndex={0}>
            {t('adm.aprobare_echipa')}
          </div>
        </div>

        <div className="rand-patrate-adm">
          <div className="patrat-adm mic-adm patrat-avertizare" tabIndex={0}>
            {t('adm.avertizare')}
          </div>
          <div className="patrat-adm mic-adm patrat-amenda" tabIndex={0}>
            {t('adm.amenda')}
          </div>
        </div>
      </div>
    </>
  );
}

export default ADM;
