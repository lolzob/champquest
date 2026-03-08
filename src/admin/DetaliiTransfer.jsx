import React, { useState } from 'react';
import './DetaliiTransfer.css';
import { useTranslation } from 'react-i18next';

// Simulare rol user (in realitate iei din localStorage sau context)
function getUserRole() {
  try {
    const raw = localStorage.getItem('user');
    const user = JSON.parse(raw);
    return user?.rol || 'adm';
  } catch {
    return 'adm';
  }
}

// Dummy data demo
const transferData = {
  idTransfer: 'TRF12345',
  nrLicitatii: [
    { nr: 1, data: '2025-03-10', ora: '12:05', pret: 120000, echipa: 'FC Barsa', user: 'UserA', ip: '86.120.99.10' },
    { nr: 2, data: '2025-03-10', ora: '12:15', pret: 130000, echipa: 'FC Real', user: 'UserB', ip: '45.180.51.30' },
    { nr: 3, data: '2025-03-10', ora: '12:25', pret: 150000, echipa: 'FC Barsa', user: 'UserA', ip: '86.120.99.10' }, // Castigatoare
  ],
  dataFinala: '2025-03-10',
  oraFinala: '12:25',
  pretCastigator: 150000,
  pretEstimativ: 132000,
  pretPornire: 120000,
  echipaCastigatoare: 'FC Barsa',
  userCastigator: 'UserA',
  ipCastigator: '86.120.99.10',
  ipCastigatorDes: '86.120.99.10',
  cookieCastigator: 'cookieA',
  echipaVanzator: 'FC Milan',
  userVanzator: 'UserC',
  ipVanzator: '77.88.66.55',
  ipVanzatorDes: '77.88.66.55',
  cookieVanzator: 'cookieC',
  idJucator: 'JUC234',
  numeJucator: 'Andrei Popescu',
  dataInitiala: '2025-02-27',
  clubInitial: { id: 'CLB01', nume: 'FC Milan' },
  clubFinal: { id: 'CLB02', nume: 'FC Barsa' },
  calitate1: { tip: 'Extremă', grad: 'Divin', valoare: 21 },
  calitate2: { tip: 'Atacant', grad: 'Extraterestru', valoare: 20 },
  varstaAni: 21,
  varstaZile: 12,
};

function formatDate(data) {
  if (!data) return '';
  const [yyyy, mm, dd] = data.split('-');
  return `${dd}.${mm}.${yyyy}`;
}

export default function DetaliiTransfer() {
  const { t } = useTranslation();
  const rol = getUserRole(); // 'cq' sau 'adm'

  const [corectiePozitiva, setCorectiePozitiva] = useState('');
  const corectieNegativa = corectiePozitiva ? `-${corectiePozitiva}` : '';
  const [optMsg, setOptMsg] = useState('opt1');

  // Mesaje auto pentru anulare transfer
  const mesajOptiuni = {
    opt1: t('detaliitransfer.msgAnulare1', `Transferul ${transferData.idTransfer} a fost anulat deoarece suma ${transferData.pretCastigator} nu reflectă valoarea reală a jucătorului ${transferData.numeJucator}, ceea ce indică un posibil acord neregulamentar între manageri.`),
    opt2: t('detaliitransfer.msgAnulare2', `Transferul ${transferData.idTransfer} a fost anulat, deoarece suma ${transferData.pretCastigator} nu reflectă valoarea reală a jucătorului ${transferData.numeJucator} și sugerează o posibilă mutare de fonduri între cluburi.`),
    opt3: t('detaliitransfer.msgAnulare3', `Transferul ${transferData.idTransfer} a fost anulat deoarece ambele cluburi implicate sunt administrate de același utilizator, fapt care contravine regulilor jocului.`),
  };

  // Mesaje auto pentru ajustare transfer
  const mesajAjustareCumparator = corectiePozitiva
    ? t('detaliitransfer.msgAjustareCumparator', `Transferul ${transferData.idTransfer} a fost ajustat, deoarece suma ${transferData.pretCastigator} nu reflecta valoarea reala a jucatoului ${transferData.numeJucator}. Modificarea s-a făcut cu suma de ${corectiePozitiva}.`)
    : '';
  const mesajAjustareVanzator = corectiePozitiva
    ? t('detaliitransfer.msgAjustareVanzator', `Transferul ${transferData.idTransfer} a fost ajustat deoarece suma ${transferData.pretCastigator} nu reflecta valoarea valoarea reala a jucatoului ${transferData.numeJucator}. Modificarea s-a făcut cu suma de ${corectieNegativa}.`)
    : '';

  // Click pe nume jucator -> deschide pagina reala jucator
  function handleJucatorClick() {
    window.open(`/jucator/${transferData.idJucator}`, '_blank');
  }

  // Licitatiile - invers (castigatoare prima)
  const licitatiiReverse = [...transferData.nrLicitatii].reverse();

  return (
    <div className="detaliitransfer-pagina">
      {/* Titlu */}
      <div className="detaliitransfer-titlu">{t('detaliitransfer.titlu', 'Panoul cu detalii transfer')}</div>
      {/* Info jucator */}
      <div className="detaliitransfer-flex-row">
        <div className="detaliitransfer-card detaliitransfer-bg-green">
          <span className="detaliitransfer-label-black">{t('detaliitransfer.numeJucator', 'Nume jucator')}:</span>
          <div
            className="detaliitransfer-jucator-link"
            onClick={handleJucatorClick}
            title={t('detaliitransfer.veziJucator', 'Vezi pagina jucător')}
          >
            {transferData.numeJucator}
          </div>
          <span className="detaliitransfer-label-black">{t('detaliitransfer.varstaJucator', 'Varsta jucator')}:</span>
          <div>{transferData.varstaAni} {t('detaliitransfer.ani', 'ani')} {t('detaliitransfer.si', 'și')} {transferData.varstaZile} {t('detaliitransfer.zile', 'zile')}</div>
        </div>
        {/* Calitati jucator */}
        <div className="detaliitransfer-card detaliitransfer-bg-green">
          <span className="detaliitransfer-label-black">{t('detaliitransfer.calitatePrincipala', 'Calitatea principala')}:</span>
          <div>
            {transferData.calitate1.tip} : {transferData.calitate1.grad} ({transferData.calitate1.valoare})
          </div>
          <span className="detaliitransfer-label-black">{t('detaliitransfer.calitateSecundara', 'Calitate secundara')}:</span>
          <div>
            {transferData.calitate2.grad} ({transferData.calitate2.valoare})
          </div>
        </div>
      </div>
      {/* Tabel licitatii */}
      <div className="detaliitransfer-card detaliitransfer-bg-blue">
        {/* ID transfer - la mijloc, pe o singura linie cu background special */}
        <div className="detaliitransfer-table-id detaliitransfer-table-id-highlight">
          <span className="detaliitransfer-label-black">{t('detaliitransfer.idTransfer', 'ID transfer')}:</span>
          <span className="detaliitransfer-table-idval">{transferData.idTransfer}</span>
        </div>
        <table className="detaliitransfer-tabel">
          <thead>
            <tr>
              <th className="detaliitransfer-label-black">{t('detaliitransfer.nrLic', 'Nr. de licitații')}</th>
              <th className="detaliitransfer-label-black">{t('detaliitransfer.data', 'Data')}</th>
              <th className="detaliitransfer-label-black">{t('detaliitransfer.ora', 'Ora')}</th>
              <th className="detaliitransfer-label-black">{t('detaliitransfer.pret', 'Preț')}</th>
              <th className="detaliitransfer-label-black">{t('detaliitransfer.echipa', 'Echipa')}</th>
              <th className="detaliitransfer-label-black">{t('detaliitransfer.user', 'User')}</th>
              <th className="detaliitransfer-label-black">{t('detaliitransfer.ipUser', 'IP user')}</th>
            </tr>
          </thead>
          <tbody>
            {licitatiiReverse.map((licitatie) => (
              <tr key={licitatie.nr} className={licitatie.pret === transferData.pretCastigator ? 'detaliitransfer-bold' : ''}>
                <td>{licitatie.nr}</td>
                <td>{formatDate(licitatie.data)}</td>
                <td>{licitatie.ora}</td>
                <td>{licitatie.pret}</td>
                <td>{licitatie.echipa}</td>
                <td>{licitatie.user}</td>
                <td>{licitatie.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Spatiu mai mare intre tabel si preturi */}
      <div style={{ height: 28 }}></div>
      {/* Preturi */}
      <div className="detaliitransfer-flex-row detaliitransfer-flex-row-center">
        <div className="detaliitransfer-card detaliitransfer-bg-purple">
          <span className="detaliitransfer-label-black">{t('detaliitransfer.pretCastigator', 'Prețul câștigător')}</span>
          <div>{transferData.pretCastigator}</div>
        </div>
        <div className="detaliitransfer-card detaliitransfer-bg-purple">
          <span className="detaliitransfer-label-black">{t('detaliitransfer.pretEstimativ', 'Prețul estimativ')}</span>
          <div>{transferData.pretEstimativ}</div>
        </div>
        <div className="detaliitransfer-card detaliitransfer-bg-purple">
          <span className="detaliitransfer-label-black">{t('detaliitransfer.pretPornire', 'Preț de pornire')}</span>
          <div>{transferData.pretPornire}</div>
        </div>
      </div>
      {/* Ajustare transfer */}
      <div className="detaliitransfer-ajustare-wrapper detaliitransfer-bg-ajustare">
        <div className="detaliitransfer-ajustare-titlu detaliitransfer-label-black">{t('detaliitransfer.ajustareTitlu', 'Ajustare transfer')}</div>
        <div className="detaliitransfer-flex-row detaliitransfer-flex-row-center">
          {/* Cumparator */}
          <div className="detaliitransfer-card detaliitransfer-bg-yellow">
            <span className="detaliitransfer-label-black">{t('detaliitransfer.dateCumparator', 'Date cumpărător')}</span>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.echipa', 'Echipa')}:</span>
              <input className="detaliitransfer-input" value={transferData.echipaCastigatoare} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.numeUser', 'Nume user')}:</span>
              <input className="detaliitransfer-input" value={transferData.userCastigator} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.ipTransfer', 'IP transfer')}:</span>
              <input className="detaliitransfer-input" value={transferData.ipCastigator} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.ipDesFolosit', 'IP des folosit')}:</span>
              <input className="detaliitransfer-input" value={transferData.ipCastigatorDes} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.cookie', 'Cookie')}:</span>
              <input className="detaliitransfer-input" value={transferData.cookieCastigator} readOnly />
            </div>
            <div className="detaliitransfer-separator" />
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.corectiePozitiva', 'Corecție pozitivă')}:</span>
              <input
                className="detaliitransfer-input"
                type="number"
                min={0}
                value={corectiePozitiva}
                onChange={e => setCorectiePozitiva(e.target.value)}
                placeholder={t('detaliitransfer.suma', 'Suma')}
              />
            </div>
            {corectiePozitiva && (
              <div className="detaliitransfer-msg-ajustare">{mesajAjustareCumparator}</div>
            )}
          </div>
          {/* Vanzator */}
          <div className="detaliitransfer-card detaliitransfer-bg-yellow">
            <span className="detaliitransfer-label-black">{t('detaliitransfer.dateVanzator', 'Date vânzător')}</span>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.echipa', 'Echipa')}:</span>
              <input className="detaliitransfer-input" value={transferData.echipaVanzator} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.numeUser', 'Nume user')}:</span>
              <input className="detaliitransfer-input" value={transferData.userVanzator} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.ipTransfer', 'IP transfer')}:</span>
              <input className="detaliitransfer-input" value={transferData.ipVanzator} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.ipDesFolosit', 'IP des folosit')}:</span>
              <input className="detaliitransfer-input" value={transferData.ipVanzatorDes} readOnly />
            </div>
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.cookie', 'Cookie')}:</span>
              <input className="detaliitransfer-input" value={transferData.cookieVanzator} readOnly />
            </div>
            <div className="detaliitransfer-separator" />
            <div className="detaliitransfer-flex">
              <span>{t('detaliitransfer.corectieNegativa', 'Corecție negativă')}:</span>
              <input
                className="detaliitransfer-input"
                type="number"
                value={corectieNegativa}
                readOnly
                placeholder={t('detaliitransfer.suma', 'Suma')}
              />
            </div>
            {corectieNegativa && (
              <div className="detaliitransfer-msg-ajustare">{mesajAjustareVanzator}</div>
            )}
          </div>
        </div>
        <div className="detaliitransfer-ajustare-btnwrap">
          <button className="detaliitransfer-btn-green">{t('detaliitransfer.trimiteAjustare', 'Trimite ajustare')}</button>
        </div>
      </div>
      {/* Anulare transfer – doar CQ */}
      {rol === 'cq' && (
        <div className="detaliitransfer-anulare-wrapper detaliitransfer-bg-anulare">
          <div className="detaliitransfer-anulare-titlu detaliitransfer-label-black">{t('detaliitransfer.anulareTitlu', 'Anulare transfer')}</div>
          <div className="detaliitransfer-flex-row">
            <div className="detaliitransfer-flex">
              <span className="detaliitransfer-label-black">{t('detaliitransfer.idJucator', 'ID jucător')}:</span>
              <input className="detaliitransfer-input" value={transferData.idJucator} readOnly />
              <span className="detaliitransfer-label-black">{t('detaliitransfer.numeJucator', 'Nume jucător')}:</span>
              <input className="detaliitransfer-input" value={transferData.numeJucator} readOnly />
            </div>
          </div>
          <div className="detaliitransfer-flex-row">
            <div className="detaliitransfer-flex">
              <span className="detaliitransfer-label-black">{t('detaliitransfer.idClubInitial', 'ID club inițial')}:</span>
              <input className="detaliitransfer-input" value={transferData.clubInitial.id} readOnly />
              <span className="detaliitransfer-label-black">{t('detaliitransfer.numeClubInitial', 'Nume club inițial')}:</span>
              <input className="detaliitransfer-input" value={transferData.clubInitial.nume} readOnly />
            </div>
          </div>
          <div className="detaliitransfer-flex-row">
            <div className="detaliitransfer-flex">
              <span className="detaliitransfer-label-black">{t('detaliitransfer.dataInitialaTransfer', 'Data inițială transfer')}:</span>
              <input className="detaliitransfer-input" value={formatDate(transferData.dataInitiala)} readOnly />
              <span className="detaliitransfer-label-black">{t('detaliitransfer.sumaRetrasa', 'Suma retrasă')}:</span>
              <input className="detaliitransfer-input" value={`-${transferData.pretCastigator}`} readOnly />
            </div>
          </div>
          <div className="detaliitransfer-flex-row">
            <div className="detaliitransfer-flex">
              <span className="detaliitransfer-label-black">{t('detaliitransfer.idClubFinal', 'ID club final')}:</span>
              <input className="detaliitransfer-input" value={transferData.clubFinal.id} readOnly />
              <span className="detaliitransfer-label-black">{t('detaliitransfer.numeClubFinal', 'Nume club final')}:</span>
              <input className="detaliitransfer-input" value={transferData.clubFinal.nume} readOnly />
            </div>
          </div>
          <div className="detaliitransfer-flex-row">
            <div className="detaliitransfer-flex">
              <span className="detaliitransfer-label-black">{t('detaliitransfer.dataFinalaTransfer', 'Data finală transfer')}:</span>
              <input className="detaliitransfer-input" value={formatDate(transferData.dataFinala)} readOnly />
              <span className="detaliitransfer-label-black">{t('detaliitransfer.sumaRestituita', 'Suma restituită')}:</span>
              <input className="detaliitransfer-input" value={transferData.pretCastigator} readOnly />
            </div>
          </div>
          <div className="detaliitransfer-flex-row detaliitransfer-flex-row-center">
            <div className="detaliitransfer-flex" style={{ alignItems: 'flex-start' }}>
              <span className="detaliitransfer-label-black" style={{ marginTop: 0 }}>{t('detaliitransfer.tipMesaj', 'Tip mesaj')}:</span>
              <select
                className="detaliitransfer-select"
                value={optMsg}
                onChange={e => setOptMsg(e.target.value)}
                style={{ marginTop: 0 }}
              >
                <option value="opt1">{t('detaliitransfer.opt1', 'Opt. 1')}</option>
                <option value="opt2">{t('detaliitransfer.opt2', 'Opt. 2')}</option>
                <option value="opt3">{t('detaliitransfer.opt3', 'Opt. 3')}</option>
              </select>
              <span className="detaliitransfer-msg-anulare-inline">{mesajOptiuni[optMsg]}</span>
            </div>
          </div>
          <div className="detaliitransfer-anulare-btnwrap">
            <button className="detaliitransfer-btn-green">{t('detaliitransfer.trimiteAnulare', 'Trimite anulare')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
