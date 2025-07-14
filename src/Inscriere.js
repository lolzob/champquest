import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tariCuRegiuni from './data/tari_cu_regiuni.json';
import './Inscriere.css';

function Inscriere() {
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

  const fieldOrder = [
    'email',
    'parola',
    'manager',
    'varsta',
    'tara',
    'regiunea',
    'echipa',
    'terms',
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Adresa de email nu este validă.';
        }
        break;
      case 'parola':
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/.test(value)) {
          return 'Parola trebuie să aibă minim 12 caractere, litere mari și mici, cifre și simboluri.';
        }
        break;
      case 'manager':
        if (!/^[a-z0-9_-]{4,}$/.test(value)) {
          return 'Manager: minim 4 caractere, doar litere mici, cifre, - sau _.';
        }
        break;
      case 'varsta':
        if (!value) return 'Selectează o opțiune pentru vârstă.';
        break;
      case 'tara':
        if (!value) return 'Selectează o țară.';
        break;
      case 'regiunea':
        if (!value) return 'Selectează o regiune.';
        break;
      case 'echipa':
        if (!/^[A-Z0-9][a-z0-9]{2,}$/.test(value)) {
          return 'Echipă: minim 3 caractere, litere și cifre. Prima literă mare dacă e literă.';
        }
        break;
      case 'terms':
        if (!value) return 'Trebuie să accepți Termenii.';
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
            nextField === 'terms'
              ? 'input[name="terms"]'
              : `[name="${nextField}"]`
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

    if (formData.varsta === 'sub12') {
      navigate('/sub12');
      return;
    }

    if (Object.keys(allErrors).length === 0) {
      navigate('/confirmare-email');
    }
  };

  const tari = Object.keys(tariCuRegiuni).sort();
  const regiuni = formData.tara ? tariCuRegiuni[formData.tara] || [] : [];

  const getFieldClass = (field) => {
    if (!touched[field]) return '';
    if (errors[field]) return 'invalid';
    return 'valid';
  };

  return (
    <div className="inscriere-container">
      <h2>Ia-ți echipa!</h2>
      <form className="inscriere-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresa de email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => handleKeyDown(e, 'email')}
          className={getFieldClass('email')}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="password"
          placeholder="Parolă"
          name="parola"
          value={formData.parola}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => handleKeyDown(e, 'parola')}
          className={getFieldClass('parola')}
          disabled={!!errors.email || !formData.email}
        />
        {errors.parola && <span className="error">{errors.parola}</span>}

        <input
          type="text"
          placeholder="Nume manager"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => handleKeyDown(e, 'manager')}
          className={getFieldClass('manager')}
          disabled={!!errors.parola || !formData.parola}
        />
        {errors.manager && <span className="error">{errors.manager}</span>}

        <select
          name="varsta"
          value={formData.varsta}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getFieldClass('varsta')}
          disabled={!!errors.manager || !formData.manager}
        >
          <option value="">Vârstă</option>
          <option value="18+">18 & peste</option>
          <option value="12-18">12-18 (acord parental)</option>
          <option value="sub12">&lt; 12</option>
        </select>
        {errors.varsta && <span className="error">{errors.varsta}</span>}

        <select
          name="tara"
          value={formData.tara}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getFieldClass('tara')}
          disabled={!!errors.varsta || !formData.varsta}
        >
          <option value="">Selectează țara</option>
          {tari.map((tara) => (
            <option key={tara} value={tara}>{tara}</option>
          ))}
        </select>
        {errors.tara && <span className="error">{errors.tara}</span>}

        <select
          name="regiunea"
          value={formData.regiunea}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getFieldClass('regiunea')}
          disabled={!!errors.tara || !formData.tara}
        >
          <option value="">Selectează regiunea</option>
          {regiuni.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {errors.regiunea && <span className="error">{errors.regiunea}</span>}

        <input
          type="text"
          placeholder="Numele echipei"
          name="echipa"
          value={formData.echipa}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => handleKeyDown(e, 'echipa')}
          className={getFieldClass('echipa')}
          disabled={!!errors.regiunea || !formData.regiunea}
        />
        {errors.echipa && <span className="error">{errors.echipa}</span>}

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agree"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={!!errors.echipa || !formData.echipa}
          />
          <label htmlFor="agree">
            <span className="subtext">I agree to the </span>
            <span className="link">Terms of Use and Privacy Policy.</span>
          </label>
        </div>
        {errors.terms && <span className="error">{errors.terms}</span>}

        <button
          type="submit"
          className="button green"
          disabled={!formData.terms || !!errors.terms}
        >
          Înregistrează-te
        </button>
      </form>
    </div>
  );
}

export default Inscriere;
