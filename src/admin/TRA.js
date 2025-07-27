// === TRA.js ===
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TRA.css';

function TRA() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [cheie, setCheie] = useState('');
  const [tradusa, setTradusa] = useState('');
  const [jsonGenerat, setJsonGenerat] = useState(null);

  // === User curent ===
  let user = {};
  try {
    const raw = localStorage.getItem('user');
    user = JSON.parse(raw);
  } catch {}

  const isCQ = user.email === 'lolzob';
  const isTRA = ['TRA', 'MOD', 'ADM'].includes(user.rol);

  // === Protecție acces ===
  if (!isTRA && !isCQ) {
    navigate('/');
    return null;
  }

  const limbaTinta = user.lang || 'xx'; // ex: "de", "es", "fr"

  // === Simulare traduceri RO și EN (din locale) ===
  const ro = {
    auth: { login: 'Autentificare' },
    menu: { home: 'Acasă' },
  };

  const en = {
    auth: { login: 'Login' },
    menu: { home: 'Home' },
  };

  // === Extrage valoarea unei chei gen "menu.home"
  const extractValue = (obj, path) => {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : ''), obj);
  };

  const valoareRo = extractValue(ro, cheie);
  const valoareEn = extractValue(en, cheie);
  const valoarePreview = i18n.language === 'ro' ? valoareRo : i18n.language === 'en' ? valoareEn : tradusa;

  const handleSave = () => {
    const keys = cheie.split('.');
    if (keys.length !== 2) {
      alert('Folosește chei de forma "grup.cheie" ex: menu.home');
      return;
    }

    const structura = {
      [keys[0]]: {
        [keys[1]]: tradusa,
      },
    };

    setJsonGenerat(structura);

    // === Pregătit pentru backend ===
    /*
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
    <div className="pagina-admin">
      <h2 className="titlu-admin">Secțiunea Traducători ({limbaTinta.toUpperCase()})</h2>

      <div style={{ padding: '0 30px' }}>
        <input
          type="text"
          value={cheie}
          onChange={(e) => setCheie(e.target.value)}
          placeholder="Introdu cheia de tradus (ex: menu.home)"
          style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
        />

        <div className="container-roluri">
          <div className="patrat-rol" style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', color: '#333' }}>Română</div>
            <div>{valoareRo || '(necompletat)'}</div>
          </div>

          <div className="patrat-rol" style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', color: '#333' }}>Engleză</div>
            <div>{valoareEn || '(necompletat)'}</div>
          </div>

          <div className="patrat-rol" style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', color: '#333' }}>
              {limbaTinta.toUpperCase()}
            </div>
            <textarea
              value={tradusa}
              onChange={(e) => setTradusa(e.target.value)}
              placeholder="Scrie traducerea aici"
              style={{
                width: '100%',
                height: '60px',
                resize: 'none',
                marginTop: '4px',
              }}
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#62A930',
            border: 'none',
            color: 'white',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Salvează traducerea
        </button>

        <div
          className="patrat-rol"
          style={{
            marginTop: '30px',
            width: '100%',
            backgroundColor: '#E0ECF7',
            fontSize: '14px',
          }}
        >
          <div style={{ fontSize: '12px', marginBottom: '6px' }}>
            Previzualizare în limba activă: <strong>{i18n.language.toUpperCase()}</strong>
          </div>
          {valoarePreview || '(nu există traducere)'}
        </div>

        {jsonGenerat && (
          <div
            style={{
              marginTop: '20px',
              padding: '10px',
              backgroundColor: '#f8f8f8',
              border: '1px dashed #ccc',
              whiteSpace: 'pre-wrap',
              fontFamily: 'monospace',
            }}
          >
            {JSON.stringify(jsonGenerat, null, 2)}
          </div>
        )}
      </div>
    </div>
  );
}

export default TRA;
