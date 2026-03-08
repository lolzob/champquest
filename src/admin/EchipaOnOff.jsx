import React, { useState } from 'react';
import './EchipaOnOff.css';
import { useTranslation } from 'react-i18next';

// Dummy data for teams in waiting list
const echipeAsteptare = [
  {
    id: 'E001', user: 'AlexUser', email: 'alex@example.com', echipa: 'Eagles',
    ziua: '2025-08-01', ip: '86.120.99.10', tara: 'Romania', oras: 'Bucuresti', isp: 'Orange', ispType: 'residential',
    proxy: '', vpn: '', cookie: 'cook123', cookieUnique: true
  },
  {
    id: 'E002', user: 'SimonaUser', email: 'simona@example.com', echipa: 'Sharks',
    ziua: '2025-08-03', ip: '45.180.51.30', tara: 'Moldova', oras: 'Chisinau', isp: 'Moldtelecom', ispType: 'datacenter',
    proxy: 'proxyX', vpn: '', cookie: 'cook234', cookieUnique: false
  },
  // ... up to 18 teams
];

// Helper for formatting date to DD.MM.YYYY
function formatZiua(ziua) {
  if (!ziua) return '';
  const [yyyy, mm, dd] = ziua.split('-');
  if (yyyy && mm && dd) return `${dd}.${mm}.${yyyy}`;
  return ziua;
}

export default function EchipaOnOff() {
  const { t } = useTranslation();

  // ✅ Detectare rol
  let user = {};
  try {
    const raw = localStorage.getItem('user');
    user = JSON.parse(raw);
  } catch {}
  const isCQ = user.rol === 'cq';

  const [echipaSelectata, setEchipaSelectata] = useState(null);
  const [idInchidere, setIdInchidere] = useState('');
  const [userInchidere, setUserInchidere] = useState('');
  const [numeEchipaInchidere, setNumeEchipaInchidere] = useState('');
  const [numeUserInchidere, setNumeUserInchidere] = useState('');

  const selectEchipa = echipa => {
    setEchipaSelectata(echipa);
  };

  const handleIdInchidereChange = e => {
    const idEchipa = e.target.value;
    setIdInchidere(idEchipa);
    const echipa = echipeAsteptare.find(e => e.id === idEchipa);
    if (echipa) {
      setUserInchidere(echipa.user);
      setNumeEchipaInchidere(echipa.echipa);
      setNumeUserInchidere(echipa.user);
    } else {
      setUserInchidere('');
      setNumeEchipaInchidere('');
      setNumeUserInchidere('');
    }
  };

  return (
    <div className="echipaonoff-pagina">
      {/* Titlu */}
      <div className="echipaonoff-titlu">{t('echipaonoff.adminTitlu', 'Panoul Admin ON/OFF')}</div>

      {/* Lista de asteptare */}
      <div className="echipaonoff-listaasteptare">
        <div className="echipaonoff-listaasteptare-titlu">{t('echipaonoff.listaTitlu', 'Lista de asteptare')}</div>
        <div className="echipaonoff-listaasteptare-grid">
          {echipeAsteptare.length === 0 ? (
            <div className="echipaonoff-listaasteptare-empty">{t('echipaonoff.nuEchipe', 'Nu sunt echipe in asteptare')}</div>
          ) : (
            [0,1,2].map(col => (
              <div key={col} className="echipaonoff-coloana">
                {echipeAsteptare.slice(col*6, (col+1)*6).map(echipa => (
                  <div
                    key={echipa.id}
                    className={`echipaonoff-echipa-card${echipaSelectata?.id===echipa.id ? ' echipaonoff-echipa-card-sel':''}`}
                    onClick={() => selectEchipa(echipa)}
                  >
                    <span className="echipaonoff-echipa-nume">
                      {echipa.echipa}
                      <span className="echipaonoff-sageata"> &rarr; </span>
                    </span>
                    <span className="echipaonoff-echipa-user">{echipa.user}</span>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Accepta echipa */}
      <div className="echipaonoff-acceptaechipa">
        <div className="echipaonoff-acceptaechipa-titlu">{t('echipaonoff.acceptaTitlu', 'Acceptă echipa')}</div>
        <div className="echipaonoff-acceptaechipa-grid">
          <div className="echipaonoff-acceptaechipa-label">
            {t('echipaonoff.numeUser', 'Nume user')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata?.user || ''} readOnly />
            {t('echipaonoff.email', 'Email')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata?.email || ''} readOnly />
          </div>
          <div className="echipaonoff-acceptaechipa-label">
            {t('echipaonoff.numeEchipa', 'Nume echipă')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata?.echipa || ''} readOnly />
            {t('echipaonoff.ziua', 'Ziua înregistrării')}:
            <input className="echipaonoff-input" type="text" value={formatZiua(echipaSelectata?.ziua) || ''} readOnly />
          </div>
          <div className="echipaonoff-acceptaechipa-butoane">
            <button className="echipaonoff-btn-confirm" disabled={!echipaSelectata}>
              {t('echipaonoff.accepta', 'Acceptă')}
            </button>
            <button className="echipaonoff-btn-refuza" disabled={!echipaSelectata}>
              {t('echipaonoff.refuza', 'Refuză')}
            </button>
          </div>
        </div>
      </div>

      {/* Verificare echipa */}
      <div className="echipaonoff-verificareechipa">
        <div className="echipaonoff-verificareechipa-titlu">{t('echipaonoff.verificareTitlu', 'Verificare echipa')}</div>
        <div className="echipaonoff-verificareechipa-grid">
          <div className="echipaonoff-verificareechipa-label">
            {t('echipaonoff.ipUser', 'IP user')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata?.ip || ''} readOnly />
          </div>
          <div className="echipaonoff-verificareechipa-label">
            {t('echipaonoff.ipTaraOras', 'IP Țara (Oraș)')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata ? `${echipaSelectata.tara} (${echipaSelectata.oras})` : ''} readOnly />
          </div>
          <div className="echipaonoff-verificareechipa-label">
            {t('echipaonoff.ipISP', 'IP ISP')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata ? `${echipaSelectata.isp} (${echipaSelectata.ispType})` : ''} readOnly />
          </div>
          <div className="echipaonoff-verificareechipa-label">
            {t('echipaonoff.proxy', 'Proxy')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata ? (echipaSelectata.proxy || t('echipaonoff.noProxy', 'no proxy')) : ''} readOnly />
          </div>
          <div className="echipaonoff-verificareechipa-label">
            {t('echipaonoff.vpn', 'VPN')}:
            <input className="echipaonoff-input" type="text" value={echipaSelectata ? (echipaSelectata.vpn || t('echipaonoff.noVPN', 'no vpn')) : ''} readOnly />
          </div>
          <div className="echipaonoff-verificareechipa-label">
            {t('echipaonoff.cookies', 'Cookies')}:
            <input
              className="echipaonoff-input"
              style={echipaSelectata ? { color: echipaSelectata.cookieUnique ? 'green' : 'red', fontWeight: 'bold' } : {}}
              type="text"
              value={
                echipaSelectata
                  ? echipaSelectata.cookieUnique
                    ? echipaSelectata.cookie
                    : `${echipaSelectata.cookie} (${t('echipaonoff.duplicat', 'duplicat')})`
                  : ''
              }
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Închidere echipă – doar CQ */}
      {isCQ && (
        <div className="echipaonoff-inchidereechipa">
          <div className="echipaonoff-inchidereechipa-titlu">{t('echipaonoff.inchidereTitlu', 'Închidere echipă')}</div>
          <div className="echipaonoff-inchidereechipa-grid">
            <div className="echipaonoff-inchidereechipa-label">
              {t('echipaonoff.idEchipa', 'ID echipă')}:
              <input className="echipaonoff-input" type="text" value={idInchidere} onChange={handleIdInchidereChange} />
              {t('echipaonoff.idUser', 'ID user')}:
              <input className="echipaonoff-input" type="text" value={userInchidere} readOnly />
            </div>
            <div className="echipaonoff-inchidereechipa-label">
              {t('echipaonoff.numeEchipa', 'Nume echipă')}:
              <input className="echipaonoff-input" type="text" value={numeEchipaInchidere} readOnly />
              {t('echipaonoff.numeUser', 'Nume user')}:
              <input className="echipaonoff-input" type="text" value={numeUserInchidere} readOnly />
            </div>
            <div className="echipaonoff-inchidereechipa-butoane">
              <button className="echipaonoff-btn-inchide" disabled={!idInchidere}>
                {t('echipaonoff.inchide', 'Închide')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
