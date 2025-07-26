// === Autentificare.js ===
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Autentificare() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!user.trim()) newErrors.user = t('home.eroare_email') || 'Email lipsă';
    if (!pass.trim()) newErrors.pass = t('home.eroare_parola') || 'Parolă lipsă';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // ✅ Simulare de autentificare reușită
      alert('Autentificare reușită (simulare)');

      // ✅ Salvăm starea utilizatorului în localStorage cu rol admin pentru "lolzob"
      const userObject = {
        email: user,
        admin: user.trim().toLowerCase() === 'lolzob'
      };
      localStorage.setItem('user', JSON.stringify(userObject));

      // ✅ Salvăm echipa utilizatorului (simulat)
      const echipa = {
        nume: "Răzeșii",
        tara: "România",
        regiune: "Iași",
        buget: 1250000,
        divizie: "Divizia C"
      };
      localStorage.setItem('echipa', JSON.stringify(echipa));

      // ✅ Redirecționare către pagina echipei
      navigate('/echipa');
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
