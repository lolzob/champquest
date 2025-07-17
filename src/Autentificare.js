import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Autentificare() {
  const { t } = useTranslation();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!user.trim()) newErrors.user = t('home.eroare_email');
    if (!pass.trim()) newErrors.pass = t('home.eroare_parola');

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Autentificare reușită (simulare)');
      // aici va fi integrat backend-ul
    }
  };

  return (
    <form className="auth-card" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t('home.email')}
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {errors.user && <span className="error">{errors.user}</span>}

      <input
        type="password"
        placeholder={t('home.parola')}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      {errors.pass && <span className="error">{errors.pass}</span>}

      <button type="submit" className="button green">
        {t('home.buton_login')}
      </button>
    </form>
  );
}

export default Autentificare;
