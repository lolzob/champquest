import React, { useState } from 'react';
import './ModMesaj.css';
import { useTranslation } from 'react-i18next';

function ModMesaj() {
  const { t } = useTranslation();
  const [mesajSelectat, setMesajSelectat] = useState(null);
  const [raspunsUser, setRaspunsUser] = useState('');
  const [mesajADM, setMesajADM] = useState('');

  // Poți modifica exemplele de mesaje după necesitate
  const mesajeVerificare = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    nume: `Utilizator${i + 1}`,
    subiect: `Subiect MOD ${i + 1}`,
    continut: `Mesaj de la Utilizator${i + 1} pentru moderator.`
  }));

  const mesajeAsteptare = Array.from({ length: 5 }, (_, i) => ({
    id: i + 21,
    nume: `Utilizator${i + 21}`,
    subiect: `Subiect MOD ${i + 21}`,
    continut: `Mesaj în așteptare de la Utilizator${i + 21}.`
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
      <h2 className="titlu-modmesaj">{t('mod.panou_mesaje')} (XX)</h2>

      {/* Liste cu mesaje */}
      <div className="container-mesaje-modmesaj">
        <div className="lista-verificare-modmesaj">
          <div className="titlu-cart-lista-modmesaj">{t('mod.mesaje_verificare')}</div>
          <ul>
            {mesajeVerificare.map((msg) => (
              <li key={msg.id} onClick={() => handleClickMesaj(msg)}>
                <strong>{msg.nume}</strong>: {msg.subiect}
              </li>
            ))}
          </ul>
        </div>
        <div className="lista-asteptare-modmesaj">
          <div className="titlu-cart-lista-modmesaj">{t('mod.mesaje_asteptare')}</div>
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
      <div className="container-mesaj-utilizator-modmesaj">
        <div className="mesaj-user-modmesaj">
          <div className="titlu-cart-modmesaj">{t('mod.mesaj_utilizator')}</div>
          <div>
            <strong>{mesajSelectat?.subiect || '-'}</strong>
            <p>{mesajSelectat?.continut || t('mod.niciun_mesaj')}</p>
          </div>
        </div>
        <div className="raspuns-user-modmesaj">
          <div className="titlu-cart-modmesaj">{t('mod.raspuns_utilizator')}</div>
          <textarea
            className="textarea-modmesaj"
            value={raspunsUser}
            onChange={(e) => setRaspunsUser(e.target.value)}
            placeholder={t('mod.placeholder_raspuns')}
          />
          <div className="butoane-raspuns-modmesaj">
            <button className="buton-modmesaj" onClick={() => alert('Răspuns trimis:\n' + raspunsUser)}>
              {t('mod.trimite')}
            </button>
            <button className="buton-modmesaj" onClick={trimiteSiInchide}>
              {t('mod.trimite_si_inchide')}
            </button>
          </div>
        </div>
      </div>

      {/* Mesaj către ADM */}
      <div className="mesaj-catre-adm-modmesaj">
        <div className="titlu-cart-modmesaj">{t('mod.mesaj_catre_adm')}</div>
        <textarea
          className="textarea-modmesaj"
          value={mesajADM}
          onChange={(e) => setMesajADM(e.target.value)}
          placeholder={t('mod.placeholder_adm')}
        />
        <button onClick={trimiteMesajADM} className="buton-modmesaj adm">
            {t('mod.trimite')}
        </button>
      </div>
    </>
  );
}

export default ModMesaj;
