import React, { useState } from 'react';
import './AdmMesaj.css';
import { useTranslation } from 'react-i18next';

function AdmMesaj() {
  const { t } = useTranslation();
  const [mesajSelectat, setMesajSelectat] = useState(null);
  const [raspunsUser, setRaspunsUser] = useState('');
  const [raspunsTRA, setRaspunsTRA] = useState('');
  const [raspunsMOD, setRaspunsMOD] = useState('');
  const [mesajCQ, setMesajCQ] = useState('');

  const mesajeVerificare = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    nume: `Utilizator${i + 1}`,
    subiect: `Subiect ADM ${i + 1}`,
    continut: `Mesaj de la Utilizator${i + 1} pentru administrator.`,
    tra: `Mesaj TRA legat de utilizatorul ${i + 1}`,
    mod: `Mesaj MOD referitor la utilizatorul ${i + 1}`
  }));

  const mesajeAsteptare = Array.from({ length: 5 }, (_, i) => ({
    id: i + 21,
    nume: `Utilizator${i + 21}`,
    subiect: `Subiect ADM ${i + 21}`,
    continut: `Mesaj în așteptare de la Utilizator${i + 21}.`,
    tra: `Comentariu TRA pentru utilizatorul ${i + 21}`,
    mod: `Observație MOD pentru utilizatorul ${i + 21}`
  }));

  const handleClickMesaj = (mesaj) => {
    setMesajSelectat(mesaj);
    setRaspunsUser('');
    setRaspunsTRA('');
    setRaspunsMOD('');
  };

  const trimiteRaspunsUser = () => {
    if (!raspunsUser.trim()) return;
    alert('Răspuns trimis către utilizator:\n' + raspunsUser);
    setRaspunsUser('');
  };

  const trimiteRaspunsTRA = () => {
    if (!raspunsTRA.trim()) return;
    alert('Răspuns trimis către TRA:\n' + raspunsTRA);
    setRaspunsTRA('');
  };

  const trimiteRaspunsMOD = () => {
    if (!raspunsMOD.trim()) return;
    alert('Răspuns trimis către MOD:\n' + raspunsMOD);
    setRaspunsMOD('');
  };

  const trimiteMesajCQ = () => {
    if (!mesajCQ.trim()) return;
    alert('Mesaj trimis către CQ:\n' + mesajCQ);
    setMesajCQ('');
  };

  return (
    <>
      <h2 className="titlu-admmesaj">{t('adm.panou_mesaje')} (XX)</h2>

      <div className="container-mesaje-admmesaj">
        <div className="lista-verificare-admmesaj">
          <div className="titlu-cart-lista-admmesaj">{t('adm.mesaje_verificare')}</div>
          <ul>
            {mesajeVerificare.map((msg) => (
              <li key={msg.id} onClick={() => handleClickMesaj(msg)}>
                <strong>{msg.nume}</strong>: {msg.subiect}
              </li>
            ))}
          </ul>
        </div>
        <div className="lista-asteptare-admmesaj">
          <div className="titlu-cart-lista-admmesaj">{t('adm.mesaje_asteptare')}</div>
          <ul>
            {mesajeAsteptare.map((msg) => (
              <li key={msg.id} onClick={() => handleClickMesaj(msg)}>
                <strong>{msg.nume}</strong>: {msg.subiect}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-mesaj-utilizator-admmesaj">
        <div className="mesaj-user-admmesaj">
          <div className="titlu-cart-admmesaj">{t('adm.mesaj_utilizator')}</div>
          <div>
            <strong>{mesajSelectat?.subiect || '-'}</strong>
            <p>{mesajSelectat?.continut || t('adm.niciun_mesaj')}</p>
          </div>
        </div>
        <div className="raspuns-user-admmesaj">
          <div className="titlu-cart-admmesaj">{t('adm.raspuns_utilizator')}</div>
          <textarea
            className="textarea-admmesaj"
            value={raspunsUser}
            onChange={(e) => setRaspunsUser(e.target.value)}
            placeholder={t('adm.placeholder_raspuns')}
          />
          <div className="butoane-raspuns-admmesaj">
            <button className="buton-trimite-utilizator" onClick={trimiteRaspunsUser}>
              {t('adm.trimite')}
            </button>
          </div>
        </div>
      </div>

      <div className="container-mesaj-tra-admmesaj">
        <div className="mesaj-tra-admmesaj">
          <div className="titlu-cart-admmesaj">{t('adm.mesaj_tra')}</div>
          <div>
            <p>{mesajSelectat?.tra || t('adm.niciun_mesaj')}</p>
          </div>
        </div>
        <div className="raspuns-tra-admmesaj">
          <div className="titlu-cart-admmesaj">{t('adm.raspuns_tra')}</div>
          <textarea
            className="textarea-admmesaj"
            value={raspunsTRA}
            onChange={(e) => setRaspunsTRA(e.target.value)}
            placeholder={t('adm.placeholder_raspuns_tra')}
          />
          <div className="butoane-raspuns-admmesaj">
            <button className="buton-trimite-tra" onClick={trimiteRaspunsTRA}>
              {t('adm.trimite')}
            </button>
          </div>
        </div>
      </div>

      <div className="container-mesaj-mod-admmesaj">
        <div className="mesaj-mod-admmesaj">
          <div className="titlu-cart-admmesaj">{t('adm.mesaj_mod')}</div>
          <div>
            <p>{mesajSelectat?.mod || t('adm.niciun_mesaj')}</p>
          </div>
        </div>
        <div className="raspuns-mod-admmesaj">
          <div className="titlu-cart-admmesaj">{t('adm.raspuns_mod')}</div>
          <textarea
            className="textarea-admmesaj"
            value={raspunsMOD}
            onChange={(e) => setRaspunsMOD(e.target.value)}
            placeholder={t('adm.placeholder_raspuns_mod')}
          />
          <div className="butoane-raspuns-admmesaj">
            <button className="buton-trimite-mod" onClick={trimiteRaspunsMOD}>
              {t('adm.trimite')}
            </button>
          </div>
        </div>
      </div>

      <div className="mesaj-catre-cq-admmesaj">
        <div className="titlu-cart-admmesaj">{t('adm.mesaj_catre_cq')}</div>
        <textarea
          className="textarea-admmesaj"
          value={mesajCQ}
          onChange={(e) => setMesajCQ(e.target.value)}
          placeholder={t('adm.placeholder_cq')}
        />
        <button className="buton-trimite-cq" onClick={trimiteMesajCQ}>
          {t('adm.trimite')}
        </button>
      </div>
    </>
  );
}

export default AdmMesaj;
