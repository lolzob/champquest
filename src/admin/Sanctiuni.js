import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Sanctiuni.css';

const jucatori = [
  { id: '101', nume: 'Ion Popescu' },
  { id: '102', nume: 'Maria Ionescu' },
  { id: '103', nume: 'Vasile Gheorghe' },
];

// === Config tipuri avertismente ===
const tipuriAvertizare = [
  { tip: 1, descriereKey: 'sanctiuni.avertizare.tip1', textKey: 'sanctiuni.avertizare.text1' },
  { tip: 2, descriereKey: 'sanctiuni.avertizare.tip2', textKey: 'sanctiuni.avertizare.text2' },
  { tip: 3, descriereKey: 'sanctiuni.avertizare.tip3', textKey: 'sanctiuni.avertizare.text3' },
  { tip: 4, descriereKey: 'sanctiuni.avertizare.tip4', textKey: 'sanctiuni.avertizare.text4' },
  { tip: 5, descriereKey: 'sanctiuni.avertizare.tip5', textKey: 'sanctiuni.avertizare.text5' },
  { tip: 6, descriereKey: 'sanctiuni.avertizare.tip6', textKey: 'sanctiuni.avertizare.text6' },
];

// === Config tipuri amenzi ===
const tipuriAmenda = [
  { tip: 1, descriereKey: 'sanctiuni.amenda.tip1', textKey: 'sanctiuni.amenda.text1' },
  { tip: 2, descriereKey: 'sanctiuni.amenda.tip2', textKey: 'sanctiuni.amenda.text2' },
  { tip: 3, descriereKey: 'sanctiuni.amenda.tip3', textKey: 'sanctiuni.amenda.text3' },
  { tip: 4, descriereKey: 'sanctiuni.amenda.tip4', textKey: 'sanctiuni.amenda.text4' },
  { tip: 5, descriereKey: 'sanctiuni.amenda.tip5', textKey: 'sanctiuni.amenda.text5' },
  { tip: 6, descriereKey: 'sanctiuni.amenda.tip6', textKey: 'sanctiuni.amenda.text6' },
];

export default function Sanctiuni() {
  const { t } = useTranslation();

  let role = '';
  try {
    const raw = localStorage.getItem('user');
    const user = JSON.parse(raw);
    role = (user?.rol || '').toUpperCase();
  } catch {}

  // === AVERTISARE ===
  const [idAvertizare, setIdAvertizare] = useState('');
  const [numeAvertizare, setNumeAvertizare] = useState('');
  const [tipAvertizareSelectat, setTipAvertizareSelectat] = useState(1);
  const [mesajAvertizare, setMesajAvertizare] = useState('');

  // === AMENDA ===
  const [idAmenda, setIdAmenda] = useState('');
  const [numeAmenda, setNumeAmenda] = useState('');
  const [tipAmendaSelectat, setTipAmendaSelectat] = useState(1);
  const [mesajAmenda, setMesajAmenda] = useState('');

  // === ȘTERGERE AMENDĂ ===
  const [idStergere, setIdStergere] = useState('');
  const [numeStergere, setNumeStergere] = useState('');
  const [tipStergereSelectat, setTipStergereSelectat] = useState(1);
  const [mesajStergere, setMesajStergere] = useState('');

  // === Utilitare ===
  const handleIdChange = (setterId, setterNume) => (e) => {
    const id = e.target.value;
    setterId(id);
    const jucator = jucatori.find(j => j.id === id);
    setterNume(jucator ? jucator.nume : '');
  };

  const handleTipChange = (setTip, setMesaj, lista, isStergere = false) => (e) => {
    const tip = Number(e.target.value);
    setTip(tip);
    const obj = lista.find(t => t.tip === tip);
    const mesaj = obj ? t(obj.textKey) : '';
    setMesaj(isStergere ? t('sanctiuni.stergere.prefix') + mesaj : mesaj);
  };

  const submitGeneric = (type, id, nume, tip, mesaj) => {
    if (id && nume && mesaj) {
      alert(t(`sanctiuni.${type}.confirmAlert`, { nume, id, tip, mesaj }));
      if (type === 'avertizare') {
        setIdAvertizare(''); setNumeAvertizare(''); setTipAvertizareSelectat(1); setMesajAvertizare('');
      } else if (type === 'amenda') {
        setIdAmenda(''); setNumeAmenda(''); setTipAmendaSelectat(1); setMesajAmenda('');
      } else {
        setIdStergere(''); setNumeStergere(''); setTipStergereSelectat(1); setMesajStergere('');
      }
    }
  };

  useEffect(() => {
    const av = tipuriAvertizare.find(t => t.tip === tipAvertizareSelectat);
    const am = tipuriAmenda.find(t => t.tip === tipAmendaSelectat);
    const st = tipuriAmenda.find(t => t.tip === tipStergereSelectat);
    setMesajAvertizare(av ? t(av.textKey) : '');
    setMesajAmenda(am ? t(am.textKey) : '');
    setMesajStergere(st ? t('sanctiuni.stergere.prefix') + t(st.textKey) : '');
    // eslint-disable-next-line
  }, []);

  const renderListaTipuri = (lista) => (
    <div className="sanctiuni-tipuri-grid">
      <div>
        {lista.slice(0, 3).map(tip => (
          <div key={tip.tip}><strong>Tip {tip.tip}:</strong> {t(tip.descriereKey)}</div>
        ))}
      </div>
      <div>
        {lista.slice(3).map(tip => (
          <div key={tip.tip}><strong>Tip {tip.tip}:</strong> {t(tip.descriereKey)}</div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="sanctiuni-pagina">
      <h2 className="titlu-sanctiuni">{t('sanctiuni.titlu')}</h2>

      {(role === 'ADM' || role === 'CQ') && (
        <>
          {/* Avertisment */}
          <div className="sanctiuni-row">
            <div className="sanctiuni-card sanctiuni-card-bg-avertizare">
              <div className="sanctiuni-card-title">{t('sanctiuni.avertizare.title')}</div>
              <div className="sanctiuni-card-label">{t('sanctiuni.idjucator')}
                <input className="sanctiuni-input" type="text" value={idAvertizare}
                  onChange={handleIdChange(setIdAvertizare, setNumeAvertizare)} />
              </div>
              <div className="sanctiuni-card-label">{t('sanctiuni.numejucator')}
                <input className="sanctiuni-input" type="text" value={numeAvertizare} readOnly />
              </div>
              <div className="sanctiuni-card-label">{t('sanctiuni.avertizare.tip')}
                <select className="sanctiuni-select" value={tipAvertizareSelectat}
                  onChange={handleTipChange(setTipAvertizareSelectat, setMesajAvertizare, tipuriAvertizare)}>
                  {tipuriAvertizare.map(tip => (
                    <option key={tip.tip} value={tip.tip}>Tip {tip.tip}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sanctiuni-card sanctiuni-card-bg-avertizare">
              <div className="sanctiuni-card-title">{t('sanctiuni.avertizare.mesaj')}</div>
              <textarea className="sanctiuni-textarea" value={mesajAvertizare}
                onChange={e => setMesajAvertizare(e.target.value)}
                placeholder={t('sanctiuni.avertizare.placeholder')} />
              <button className="sanctiuni-btn-confirm" onClick={() =>
                submitGeneric('avertizare', idAvertizare, numeAvertizare, tipAvertizareSelectat, mesajAvertizare)
              }>
                {t('sanctiuni.confirmare')}
              </button>
            </div>
          </div>
          <div className="sanctiuni-list-card sanctiuni-list-tipuri-avertizare">
            <div className="sanctiuni-list-title">{t('sanctiuni.avertizare.lista')}</div>
            {renderListaTipuri(tipuriAvertizare)}
          </div>

          {/* Amendă */}
          <div className="sanctiuni-row">
            <div className="sanctiuni-card sanctiuni-card-bg-amenda">
              <div className="sanctiuni-card-title">{t('sanctiuni.amenda.title')}</div>
              <div className="sanctiuni-card-label">{t('sanctiuni.idjucator')}
                <input className="sanctiuni-input" type="text" value={idAmenda}
                  onChange={handleIdChange(setIdAmenda, setNumeAmenda)} />
              </div>
              <div className="sanctiuni-card-label">{t('sanctiuni.numejucator')}
                <input className="sanctiuni-input" type="text" value={numeAmenda} readOnly />
              </div>
              <div className="sanctiuni-card-label">{t('sanctiuni.amenda.tip')}
                <select className="sanctiuni-select" value={tipAmendaSelectat}
                  onChange={handleTipChange(setTipAmendaSelectat, setMesajAmenda, tipuriAmenda)}>
                  {tipuriAmenda.map(tip => (
                    <option key={tip.tip} value={tip.tip}>Tip {tip.tip}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sanctiuni-card sanctiuni-card-bg-amenda">
              <div className="sanctiuni-card-title">{t('sanctiuni.amenda.mesaj')}</div>
              <textarea className="sanctiuni-textarea" value={mesajAmenda}
                onChange={e => setMesajAmenda(e.target.value)}
                placeholder={t('sanctiuni.amenda.placeholder')} />
              <button className="sanctiuni-btn-confirm" onClick={() =>
                submitGeneric('amenda', idAmenda, numeAmenda, tipAmendaSelectat, mesajAmenda)
              }>
                {t('sanctiuni.confirmare')}
              </button>
            </div>
          </div>
          <div className="sanctiuni-list-card sanctiuni-list-tipuri-amenda">
            <div className="sanctiuni-list-title">{t('sanctiuni.amenda.lista')}</div>
            {renderListaTipuri(tipuriAmenda)}
          </div>
        </>
      )}

      {/* Ștergere amendă doar pentru CQ */}
      {role === 'CQ' && (
        <>
          <div className="sanctiuni-row">
            <div className="sanctiuni-card sanctiuni-card-bg-stergere">
              <div className="sanctiuni-card-title">{t('sanctiuni.stergere.title')}</div>
              <div className="sanctiuni-card-label">{t('sanctiuni.idjucator')}
                <input className="sanctiuni-input" type="text" value={idStergere}
                  onChange={handleIdChange(setIdStergere, setNumeStergere)} />
              </div>
              <div className="sanctiuni-card-label">{t('sanctiuni.numejucator')}
                <input className="sanctiuni-input" type="text" value={numeStergere} readOnly />
              </div>
              <div className="sanctiuni-card-label">{t('sanctiuni.amenda.tip')}
                <select className="sanctiuni-select" value={tipStergereSelectat}
                  onChange={handleTipChange(setTipStergereSelectat, setMesajStergere, tipuriAmenda, true)}>
                  {tipuriAmenda.map(tip => (
                    <option key={tip.tip} value={tip.tip}>Tip {tip.tip}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sanctiuni-card sanctiuni-card-bg-stergere">
              <div className="sanctiuni-card-title">{t('sanctiuni.stergere.mesaj')}</div>
              <textarea className="sanctiuni-textarea" value={mesajStergere}
                onChange={e => setMesajStergere(e.target.value)}
                placeholder={t('sanctiuni.stergere.placeholder')} />
              <button className="sanctiuni-btn-confirm" onClick={() =>
                submitGeneric('stergere', idStergere, numeStergere, tipStergereSelectat, mesajStergere)
              }>
                {t('sanctiuni.confirmare')}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
