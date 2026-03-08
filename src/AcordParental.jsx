import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import './AcordParental.css';

function AcordParental() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const initialData = location.state || {};

  const [parinte, setParinte] = useState('');
  const [emailParinte, setEmailParinte] = useState('');
  const [codGenerat, setCodGenerat] = useState('');
  const [codIntrodus, setCodIntrodus] = useState('');
  const [confirmat, setConfirmat] = useState(false);
  const [expiraLa, setExpiraLa] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [mesajConfirmare, setMesajConfirmare] = useState(false);
  const [afiseazaCampCod, setAfiseazaCampCod] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'parinte':
        if (value.trim().length < 3) return t('acord.eroare_nume');
        break;
      case 'emailParinte':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t('acord.eroare_email');
        break;
      case 'codIntrodus':
        if (!/^\d{6}$/.test(value)) return t('acord.eroare_cod');
        break;
      default:
        return '';
    }
    return '';
  };

  const handleBlur = (name, value) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const getFieldClass = (field) => {
    if (!touched[field]) return '';
    return errors[field] ? 'invalid' : 'valid';
  };

  const trimiteEmail = async (cod) => {
    const templateParams = {
      parinte: parinte,
      email_parinte: emailParinte,
      cod: cod,
    };

    try {
      await emailjs.send(
        "service_y0kzxc3",
        "template_tbzzjg8",
        templateParams,
        "W936WkjB-BU84KbM8"
      );
    } catch (error) {
      console.error('Eroare trimitere email:', error);
      alert('A apărut o eroare la trimiterea emailului.');
    }
  };

  const genereazaCod = () => {
    const err1 = validateField('parinte', parinte);
    const err2 = validateField('emailParinte', emailParinte);
    if (err1 || err2) {
      setErrors({ parinte: err1, emailParinte: err2 });
      setTouched({ parinte: true, emailParinte: true });
      return;
    }

    const cod = Math.floor(100000 + Math.random() * 900000).toString();
    setMesajConfirmare(true);

    trimiteEmail(cod);

    setTimeout(() => {
      setCodGenerat(cod);
      setExpiraLa(Date.now() + 60 * 60 * 1000); // 1 oră
      setAfiseazaCampCod(true);
    }, 6000);
  };

  const verificaCod = () => {
    const err = validateField('codIntrodus', codIntrodus);
    if (err) {
      setErrors({ codIntrodus: err });
      setTouched({ codIntrodus: true });
      return;
    }

    if (Date.now() > expiraLa) {
      alert(t('acord.cod_expirat'));
      return;
    }

    if (codIntrodus === codGenerat) {
      setConfirmat(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      alert(t('acord.cod_invalid'));
    }
  };

  return (
    <div className="pagina-acord"> {/* adăugăm această clasă pt. controlul întregii pagini */}
      <div className="inscriere-container">
        <h2>{t('acord.titlu')}</h2>

        {!afiseazaCampCod ? (
          <>
            <form className="inscriere-form" onSubmit={(e) => { e.preventDefault(); genereazaCod(); }}>
              <input
                type="text"
                name="parinte"
                placeholder={t('acord.nume_parinte')}
                value={parinte}
                onChange={(e) => setParinte(e.target.value)}
                onBlur={(e) => handleBlur('parinte', e.target.value)}
                className={getFieldClass('parinte')}
              />
              {errors.parinte && <span className="error">{errors.parinte}</span>}

              <input
                type="email"
                name="emailParinte"
                placeholder={t('acord.email_parinte')}
                value={emailParinte}
                onChange={(e) => setEmailParinte(e.target.value)}
                onBlur={(e) => handleBlur('emailParinte', e.target.value)}
                className={getFieldClass('emailParinte')}
              />
              {errors.emailParinte && <span className="error">{errors.emailParinte}</span>}

              <button type="submit" className="button green">
                {t('acord.trimite_cod')}
              </button>
            </form>

            {mesajConfirmare && (
              <p style={{ marginTop: '1rem', color: '#2483C8', fontStyle: 'italic' }}>
                {t('acord.email_confirmare')}
              </p>
            )}
          </>
        ) : (
          <form className="inscriere-form" onSubmit={(e) => { e.preventDefault(); verificaCod(); }}>
            <input
              type="text"
              name="codIntrodus"
              placeholder={t('acord.cod_introdus')}
              value={codIntrodus}
              onChange={(e) => setCodIntrodus(e.target.value)}
              onBlur={(e) => handleBlur('codIntrodus', e.target.value)}
              className={getFieldClass('codIntrodus')}
            />
            {errors.codIntrodus && <span className="error">{errors.codIntrodus}</span>}

            <button type="submit" className="button green">
              {t('acord.confirma')}
            </button>

            {confirmat && (
              <p style={{ color: '#62A930', fontWeight: 'bold' }}>
                {t('acord.confirmat')}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default AcordParental;
