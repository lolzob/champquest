import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tariCuRegiuni from './data/tari_cu_regiuni.json';
import './Inscriere.css';

function Inscriere() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    parola: '',
    manager: '',
    varsta: '',
    tara: '',
    regiunea: '',
    echipa: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const fieldOrder = ['email','parola','manager','varsta','tara','regiunea','echipa','terms'];

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t('inscriere.eroare_email');
        break;
      case 'parola':
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/.test(value)) return t('inscriere.eroare_parola');
        break;
      case 'manager':
        if (!/^[a-z0-9_-]{4,}$/.test(value)) return t('inscriere.eroare_manager');
        break;
      case 'varsta':
        if (!value) return t('inscriere.eroare_varsta');
        break;
      case 'tara':
        if (!value) return t('inscriere.eroare_tara');
        break;
      case 'regiunea':
        if (!value) return t('inscriere.eroare_regiune');
        break;
      case 'echipa':
        if (!/^[A-Z0-9][a-z0-9]{2,}$/.test(value)) return t('inscriere.eroare_echipa');
        break;
      case 'terms':
        if (!value) return t('inscriere.eroare_termeni');
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === 'checkbox' ? checked : value;

    if (name === 'echipa') {
      val = val.replace(/[^a-zA-Z0-9]/g, '');
      if (val.length > 0) {
        const first = val[0];
        const rest = val.slice(1).toLowerCase();
        val = /^[a-zA-Z]$/.test(first) ? first.toUpperCase() + rest : first + rest;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: val }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, val) }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, formData[name]) }));
  };

  const handleKeyDown = (e, name) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const err = validateField(name, formData[name]);
      setErrors((prev) => ({ ...prev, [name]: err }));
      setTouched((prev) => ({ ...prev, [name]: true }));

      if (!err) {
        const currentIndex = fieldOrder.indexOf(name);
        const nextField = fieldOrder[currentIndex + 1];
        if (nextField) {
          const next = document.querySelector(
            nextField === 'terms' ? 'input[name="terms"]' : `[name="${nextField}"]`
          );
          if (next) next.focus();
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) allErrors[key] = err;
    });
    setErrors(allErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );

    if (formData.varsta === 'sub12') return navigate('/sub12');
    if (formData.varsta === '12-18') return navigate('/acord-parental', { state: formData });
    if (Object.keys(allErrors).length === 0) navigate('/confirmare-email');
  };

  const tari = Object.keys(tariCuRegiuni).sort();
  const regiuni = formData.tara ? tariCuRegiuni[formData.tara] || [] : [];
  const getFieldClass = (field) => (!touched[field] ? '' : errors[field] ? 'invalid' : 'valid');

  return (
    <div className="inscriere-container">
      <h2>{t('inscriere.titlu')}</h2>
      <form className="inscriere-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder={t('inscriere.email')} value={formData.email} onChange={handleChange} onBlur={handleBlur} onKeyDown={(e) => handleKeyDown(e, 'email')} className={getFieldClass('email')} />
        {errors.email && <span className="error">{errors.email}</span>}

        <input type="password" name="parola" placeholder={t('inscriere.parola')} value={formData.parola} onChange={handleChange} onBlur={handleBlur} onKeyDown={(e) => handleKeyDown(e, 'parola')} className={getFieldClass('parola')} disabled={!!errors.email || !formData.email} />
        {errors.parola && <span className="error">{errors.parola}</span>}

        <input type="text" name="manager" placeholder={t('inscriere.nume_manager')} value={formData.manager} onChange={handleChange} onBlur={handleBlur} onKeyDown={(e) => handleKeyDown(e, 'manager')} className={getFieldClass('manager')} disabled={!!errors.parola || !formData.parola} />
        {errors.manager && <span className="error">{errors.manager}</span>}

        <select name="varsta" value={formData.varsta} onChange={handleChange} onBlur={handleBlur} className={getFieldClass('varsta')} disabled={!!errors.manager || !formData.manager}>
          <option value="">{t('inscriere.varsta')}</option>
          <option value="18+">&gt; 18+</option>
          <option value="12-18">12-18</option>
          <option value="sub12">&lt; 12</option>
        </select>
        {errors.varsta && <span className="error">{errors.varsta}</span>}

        <select name="tara" value={formData.tara} onChange={handleChange} onBlur={handleBlur} className={getFieldClass('tara')} disabled={!!errors.varsta || !formData.varsta}>
          <option value="">{t('inscriere.tara')}</option>
          {tari.map((tara) => (
            <option key={tara} value={tara}>{tara}</option>
          ))}
        </select>
        {errors.tara && <span className="error">{errors.tara}</span>}

        <select name="regiunea" value={formData.regiunea} onChange={handleChange} onBlur={handleBlur} className={getFieldClass('regiunea')} disabled={!!errors.tara || !formData.tara}>
          <option value="">{t('inscriere.regiunea')}</option>
          {regiuni.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {errors.regiunea && <span className="error">{errors.regiunea}</span>}

        <input type="text" name="echipa" placeholder={t('inscriere.nume_echipa')} value={formData.echipa} onChange={handleChange} onBlur={handleBlur} onKeyDown={(e) => handleKeyDown(e, 'echipa')} className={getFieldClass('echipa')} disabled={!!errors.regiunea || !formData.regiunea} />
        {errors.echipa && <span className="error">{errors.echipa}</span>}

        <div className="checkbox-container">
          <input type="checkbox" id="agree" name="terms" checked={formData.terms} onChange={handleChange} onBlur={handleBlur} disabled={!!errors.echipa || !formData.echipa} />
          <label htmlFor="agree">
            <span className="subtext">{t('inscriere.checkbox_text')} </span>
            <span className="link">{t('inscriere.link_termeni')}</span>
          </label>
        </div>
        {errors.terms && <span className="error">{errors.terms}</span>}

        <button type="submit" className="button green" disabled={!formData.terms || !!errors.terms}>
          {t('inscriere.buton_trimite')}
        </button>
      </form>
    </div>
  );
}

export default Inscriere;
