import React, { useState } from 'react';
import './PanouAdmin.css';
import { useTranslation } from 'react-i18next';

const useri = [
  { id: '201', nume: 'Alex Manager' },
  { id: '202', nume: 'Simona Boss' },
  { id: '203', nume: 'Cristi Admin' },
];

const tipuriAdmin = [
  { value: 'TRA', label: 'TRA' },
  { value: 'MOD', label: 'MOD' },
  { value: 'ADM', label: 'ADM' },
];

export default function PanouAdmin() {
  const { t } = useTranslation();

  const [idNumire, setIdNumire] = useState('');
  const [numeNumire, setNumeNumire] = useState('');
  const [tipNumire, setTipNumire] = useState('TRA');

  const [idRenuntare, setIdRenuntare] = useState('');
  const [numeRenuntare, setNumeRenuntare] = useState('');
  const [tipRenuntare, setTipRenuntare] = useState('TRA');

  const handleIdChange = (setterId, setterNume) => (e) => {
    const id = e.target.value;
    setterId(id);
    const user = useri.find(u => u.id === id);
    setterNume(user ? user.nume : '');
  };

  const mesajNumire = idNumire && numeNumire
    ? t('panouadmin.numire.mesaj', { nume: numeNumire, tip: tipNumire })
    : t('panouadmin.numire.incomplet');

  const mesajRenuntare = idRenuntare && numeRenuntare
    ? t('panouadmin.renuntare.mesaj', { nume: numeRenuntare, tip: tipRenuntare })
    : t('panouadmin.renuntare.incomplet');

  const submitNumire = () => {
    if (idNumire && numeNumire) {
      alert(`Confirmare: ${mesajNumire}`);
      setIdNumire(''); setNumeNumire(''); setTipNumire('TRA');
    }
  };

  const submitRenuntare = () => {
    if (idRenuntare && numeRenuntare) {
      alert(`Confirmare: ${mesajRenuntare}`);
      setIdRenuntare(''); setNumeRenuntare(''); setTipRenuntare('TRA');
    }
  };

  return (
    <div className="panouadmin-pagina">
      <h2 className="panouadmin-titlu">{t('panouadmin.titlu')}</h2>
      <div className="panouadmin-row">
        <div className="panouadmin-card panouadmin-card-bg-verde">
          <div className="panouadmin-card-title">{t('panouadmin.numire.titlu')}</div>
          <div className="panouadmin-card-label">{t('panouadmin.id')}
            <input className="panouadmin-input" type="text" value={idNumire}
              onChange={handleIdChange(setIdNumire, setNumeNumire)} />
          </div>
          <div className="panouadmin-card-label">{t('panouadmin.nume')}
            <input className="panouadmin-input" type="text" value={numeNumire} readOnly />
          </div>
          <div className="panouadmin-card-label">{t('panouadmin.tip')}
            <select className="panouadmin-select" value={tipNumire}
              onChange={e => setTipNumire(e.target.value)}>
              {tipuriAdmin.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="panouadmin-card panouadmin-card-bg-verde">
          <div className="panouadmin-card-title">{t('panouadmin.confirmare')}</div>
          <textarea className="panouadmin-textarea" value={mesajNumire} readOnly />
          <button className="panouadmin-btn-confirm" onClick={submitNumire}>
            {t('panouadmin.trimite')}
          </button>
        </div>
      </div>

      <div className="panouadmin-row">
        <div className="panouadmin-card panouadmin-card-bg-albastru">
          <div className="panouadmin-card-title">{t('panouadmin.renuntare.titlu')}</div>
          <div className="panouadmin-card-label">{t('panouadmin.id')}
            <input className="panouadmin-input" type="text" value={idRenuntare}
              onChange={handleIdChange(setIdRenuntare, setNumeRenuntare)} />
          </div>
          <div className="panouadmin-card-label">{t('panouadmin.nume')}
            <input className="panouadmin-input" type="text" value={numeRenuntare} readOnly />
          </div>
          <div className="panouadmin-card-label">{t('panouadmin.tip')}
            <select className="panouadmin-select" value={tipRenuntare}
              onChange={e => setTipRenuntare(e.target.value)}>
              {tipuriAdmin.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="panouadmin-card panouadmin-card-bg-albastru">
          <div className="panouadmin-card-title">{t('panouadmin.confirmare')}</div>
          <textarea className="panouadmin-textarea" value={mesajRenuntare} readOnly />
          <button className="panouadmin-btn-confirm" onClick={submitRenuntare}>
            {t('panouadmin.trimite')}
          </button>
        </div>
      </div>
    </div>
  );
}
