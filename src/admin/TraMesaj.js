// === TraMesaj.js ===
import React, { useState } from 'react';
import './TraMesaj.css';
import { useTranslation } from 'react-i18next';

function TraMesaj() {
  const { t } = useTranslation();
  const [mesajSelectat, setMesajSelectat] = useState(null);
  const [raspunsUser, setRaspunsUser] = useState('');
  const [mesajADM, setMesajADM] = useState('');

  const mesajeVerificare = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    nume: `User${i + 1}`,
    subiect: `Subiect ${i + 1}`,
    continut: `Mesaj complet trimis de User${i + 1}.`
  }));

  const mesajeAsteptare = Array.from({ length: 9 }, (_, i) => ({
    id: i + 11,
    nume: `User${i + 11}`,
    subiect: `Subiect ${i + 11}`,
    continut: `Mesaj complet în așteptare de la User${i + 11}.`
  }));

  const handleClickMesaj = (mesaj) => {
    setMesajSelectat(mesaj);
    setRaspunsUser('');
  };

  const trimiteMesajADM = () => {
    if (!mesajADM.trim()) return;
    alert('Mesaj trimis către ADM:\n' + mesajADM);
    setMesajADM('');
  };

  const trimiteSiInchide = () => {
    if (!raspunsUser.trim()) return;
    alert('Răspuns trimis către utilizator:\n' + raspunsUser);
    setRaspunsUser('');
    setMesajSelectat(null);
  };

  return (
    <>
      <h2 className="titlu-tramesaj">{t('tra.panou_mesaje')} (XX)</h2>

      {/* Liste cu mesaje */}
      <div className="container-mesaje-tramesaj">
        <div className="lista-verificare-tramesaj">
          <div className="titlu-cart-lista-tramesaj">{t('tra.mesaje_verificare')}</div>
          <ul>
            {mesajeVerificare.map((msg) => (
              <li key={msg.id} onClick={() => handleClickMesaj(msg)}>
                <strong>{msg.nume}</strong>: {msg.subiect}
              </li>
            ))}
          </ul>
        </div>
        <div className="lista-asteptare-tramesaj">
          <div className="titlu-cart-lista-tramesaj">{t('tra.mesaje_asteptare')}</div>
          <ul>
            {mesajeAsteptare.map((msg) => (
              <li key={msg.id} onClick={() => handleClickMesaj(msg)}>
                <strong>{msg.nume}</strong>: {msg.subiect}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mesaj de la user + răspuns */}
      <div className="container-mesaj-utilizator-tramesaj">
        <div className="mesaj-user-tramesaj">
          <div className="titlu-cart-tramesaj">{t('tra.mesaj_utilizator')}</div>
          <div>
            <strong>{mesajSelectat?.subiect || '-'}</strong>
            <p>{mesajSelectat?.continut || t('tra.niciun_mesaj')}</p>
          </div>
        </div>
        <div className="raspuns-user-tramesaj">
          <div className="titlu-cart-tramesaj">{t('tra.raspuns_utilizator')}</div>
          <textarea
            className="textarea-tramesaj"
            value={raspunsUser}
            onChange={(e) => setRaspunsUser(e.target.value)}
            placeholder={t('tra.placeholder_raspuns')}
          />
          <div className="butoane-raspuns-tramesaj">
            <button className="buton-tramesaj" onClick={() => alert('Răspuns trimis:\n' + raspunsUser)}>
              {t('tra.trimite')}
            </button>
            <button className="buton-tramesaj" onClick={trimiteSiInchide}>
              {t('tra.trimite_si_inchide')}
            </button>
          </div>
        </div>
      </div>

      {/* Mesaj către ADM */}
      <div className="mesaj-catre-adm-tramesaj">
        <div className="titlu-cart-tramesaj">{t('tra.mesaj_catre_adm')}</div>
        <textarea
          className="textarea-tramesaj"
          value={mesajADM}
          onChange={(e) => setMesajADM(e.target.value)}
          placeholder={t('tra.placeholder_adm')}
        />
        <button onClick={trimiteMesajADM} className="buton-tramesaj adm">
            {t('tra.trimite')}
        </button>
      </div>
    </>
  );
}

export default TraMesaj;
