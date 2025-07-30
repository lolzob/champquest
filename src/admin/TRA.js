// === TRA.js ===
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TRA.css';

function TRA() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [cheie, setCheie] = useState('');
  const [tradusa, setTradusa] = useState('');
  const [jsonGenerat, setJsonGenerat] = useState(null);

  let user = {};
  try {
    const raw = localStorage.getItem('user');
    user = JSON.parse(raw);
  } catch {}

  const isCQ = user.email === 'lolzob';
  const isTRA = ['TRA', 'MOD', 'ADM'].includes(user.rol);
  if (!isTRA && !isCQ) {
    navigate('/');
    return null;
  }

  const limbaTinta = user.lang || 'xx';

  // Exemple RO și EN
  const ro = { auth: { login: 'Autentificare' }, menu: { home: 'Acasă' } };
  const en = { auth: { login: 'Login' }, menu: { home: 'Home' } };

  const extractValue = (obj, path) =>
    path.split('.').reduce((acc, key) => (acc ? acc[key] : ''), obj);

  const valoareRo = extractValue(ro, cheie);
  const valoareEn = extractValue(en, cheie);

  const handleSave = () => {
    const keys = cheie.split('.');
    if (keys.length !== 2) {
      alert(t('tra.alert_cheie'));
      return;
    }

    const structura = {
      [keys[0]]: {
        [keys[1]]: tradusa,
      },
    };

    setJsonGenerat(structura);

    /*
    // === Cod backend (pregătit) ===
    fetch('/api/save-translation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lang: limbaTinta,
        key: cheie,
        value: tradusa
      })
    });
    */
  };

  return (
    <>
      <h2 className="titlu-tra">
        {t('tra.sectiune')} ({limbaTinta.toUpperCase()})
      </h2>

      <div className="container-patrate-tra">
        <div
          className="patrat-rol-tra mesaj-verificare mic-tra"
          onClick={() => navigate('/echipa/admin/tramesaj?tab=verificare')}
        >
          {t('tra.mesaje_verificare')}: <span className="verde">2</span>
        </div>
        <div
          className="patrat-rol-tra mesaj-asteptare mic-tra"
          onClick={() => navigate('/echipa/admin/tramesaj?tab=asteptare')}
        >
          {t('tra.mesaje_asteptare')}: <span className="rosu">1</span>
        </div>
      </div>

      <input
        type="text"
        value={cheie}
        onChange={(e) => setCheie(e.target.value)}
        placeholder={t('tra.placeholder_cheie')}
        className="camp-input-tra"
      />

      <div className="container-patrate-tra">
        <div className="patrat-rol-tra">
          <div className="titlu-patrat-tra">{t('tra.romana')}</div>
          <div>{valoareRo || t('tra.necompletat')}</div>
        </div>
        <div className="patrat-rol-tra">
          <div className="titlu-patrat-tra">{t('tra.engleza')}</div>
          <div>{valoareEn || t('tra.necompletat')}</div>
        </div>
      </div>

      <div className="patrat-rol-tra patrat-limba-tinta-tra">
        <div className="titlu-patrat-tra">
          {t('tra.traducere_in')} <strong>{limbaTinta.toUpperCase()}</strong>
        </div>
        <textarea
          value={tradusa}
          onChange={(e) => setTradusa(e.target.value)}
          placeholder={t('tra.placeholder_traducere')}
          className="camp-textarea-tra"
        />
      </div>

      <button onClick={handleSave} className="buton-salveaza-tra">
        {t('tra.salveaza')}
      </button>

      {jsonGenerat && (
        <div className="json-output-tra">
          {JSON.stringify(jsonGenerat, null, 2)}
        </div>
      )}
    </>
  );
}

export default TRA;
