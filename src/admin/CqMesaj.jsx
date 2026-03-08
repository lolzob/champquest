import React, { useState } from 'react';
import './CqMesaj.css';
import { useTranslation } from 'react-i18next';

function CqMesaj() {
  const { t } = useTranslation();
  const [mesajSelectatUser, setMesajSelectatUser] = useState(null);
  const [mesajSelectatAdmin, setMesajSelectatAdmin] = useState(null);
  const [raspunsUserCQ, setRaspunsUserCQ] = useState('');
  const [mesajCatreAdmin, setMesajCatreAdmin] = useState('');
  const [raspunsAdminCQ, setRaspunsAdminCQ] = useState('');
  const [mesajSistem, setMesajSistem] = useState('');

  const mesajeDeLaUtilizatori = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    nume: `User${i + 1}`,
    subiect: `Subiect CQ USER ${i + 1}`,
    continut: `Mesaj de la User${i + 1} pentru CQ.`
  }));

  const mesajeDeLaAdmini = Array.from({ length: 4 }, (_, i) => ({
    id: i + 21,
    nume: `Admin${i + 1}`,
    subiect: `Subiect CQ ADMIN ${i + 1}`,
    continut: `Mesaj de la Admin${i + 1} pentru CQ.`
  }));

  const handleClickMesajUser = (mesaj) => {
    setMesajSelectatUser(mesaj);
    setRaspunsUserCQ('');
  };

  const handleClickMesajAdmin = (mesaj) => {
    setMesajSelectatAdmin(mesaj);
    setMesajCatreAdmin('');
    setRaspunsAdminCQ('');
  };

  const trimiteRaspunsUserCQ = () => {
    if (!raspunsUserCQ.trim()) return;
    alert('Răspuns trimis către utilizator:\n' + raspunsUserCQ);
    setRaspunsUserCQ('');
  };

  const trimiteMesajCatreAdmin = () => {
    if (!mesajCatreAdmin.trim()) return;
    alert('Mesaj trimis către admini:\n' + mesajCatreAdmin);
    setMesajCatreAdmin('');
  };

  const trimiteRaspunsAdminCQ = () => {
    if (!raspunsAdminCQ.trim()) return;
    alert('Răspuns trimis către admini:\n' + raspunsAdminCQ);
    setRaspunsAdminCQ('');
  };

  const trimiteMesajSistem = () => {
    if (!mesajSistem.trim()) return;
    alert('Mesaj sistem trimis în pagina de noutăți:\n' + mesajSistem);
    setMesajSistem('');
  };

  return (
    <>
      <h2 className="titlu-cqmesaj">{t('cqmesaj.panou')} (XX)</h2>

      <div className="container-mesaje-cqmesaj">
        <div className="lista-user-cqmesaj">
          <div className="titlu-cart-lista-cqmesaj">{t('cq.mesaje_utilizatori') || 'Mesaje de la utilizatori'}</div>
          <ul>
            {mesajeDeLaUtilizatori.map((msg) => (
              <li key={msg.id} onClick={() => handleClickMesajUser(msg)}>
                <strong>{msg.nume}</strong>: {msg.subiect}
              </li>
            ))}
          </ul>
        </div>
        <div className="lista-admin-cqmesaj">
          <div className="titlu-cart-lista-cqmesaj">{t('cq.mesaje_admini') || 'Mesaje de la admini'}</div>
          <ul>
            {mesajeDeLaAdmini.map((msg) => (
              <li key={msg.id} onClick={() => handleClickMesajAdmin(msg)}>
                <strong>{msg.nume}</strong>: {msg.subiect}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-mesaj-user-cqmesaj">
        <div className="mesaj-user-cqmesaj">
          <div className="titlu-cart-cqmesaj">{t('cq.mesaj_utilizator') || 'Mesaj de la utilizator'}</div>
          <div>
            <strong>{mesajSelectatUser?.subiect || '-'}</strong>
            <p>{mesajSelectatUser?.continut || t('cq.niciun_mesaj')}</p>
          </div>
        </div>
        <div className="raspuns-user-cqmesaj">
          <div className="titlu-cart-cqmesaj">{t('cq.raspuns_utilizator') || 'Răspuns către utilizator'}</div>
          <textarea
            className="textarea-cqmesaj"
            value={raspunsUserCQ}
            onChange={(e) => setRaspunsUserCQ(e.target.value)}
            placeholder={t('cq.placeholder_raspuns_user')}
          />
          <div className="butoane-raspuns-cqmesaj">
            <button className="buton-trimite-user-cqmesaj" onClick={trimiteRaspunsUserCQ}>
              {t('cq.trimite') || 'Trimite'}
            </button>
          </div>
        </div>
      </div>

      <div className="container-mesaj-admin-cqmesaj">
        <div className="mesaj-admin-cqmesaj">
          <div className="titlu-cart-cqmesaj">{t('cq.mesaj_catre_admin') || 'Mesaj către admini'}</div>
          <div>
            <strong>{mesajSelectatAdmin?.subiect || '-'}</strong>
            <p>{mesajSelectatAdmin?.continut || t('cq.niciun_mesaj')}</p>
          </div>
        </div>
        <div className="raspuns-admin-cqmesaj">
          <div className="titlu-cart-cqmesaj">{t('cq.raspuns_admin') || 'Răspuns către admini'}</div>
          <textarea
            className="textarea-cqmesaj"
            value={raspunsAdminCQ}
            onChange={(e) => setRaspunsAdminCQ(e.target.value)}
            placeholder={t('cq.placeholder_raspuns_admin')}
          />
          <div className="butoane-raspuns-cqmesaj">
            <button className="buton-trimite-admin-cqmesaj" onClick={trimiteRaspunsAdminCQ}>
              {t('cq.trimite') || 'Trimite'}
            </button>
          </div>
        </div>
      </div>

      <div className="mesaj-sistem-cqmesaj">
        <div className="titlu-cart-cqmesaj">{t('cq.mesaj_sistem') || 'Mesaj sistem'}</div>
        <textarea
          className="textarea-cqmesaj"
          value={mesajSistem}
          onChange={(e) => setMesajSistem(e.target.value)}
          placeholder={t('cq.placeholder_sistem')}
        />
        <button className="buton-trimite-sistem-cqmesaj" onClick={trimiteMesajSistem}>
          {t('cq.trimite') || 'Trimite'}
        </button>
      </div>
    </>
  );
}

export default CqMesaj;
