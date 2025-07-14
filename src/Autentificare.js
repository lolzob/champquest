import React, { useState } from 'react';

function Autentificare() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!user.trim()) newErrors.user = 'Completează utilizatorul';
    if (!pass.trim()) newErrors.pass = 'Completează parola';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Autentificare reușită (simulare)');
      // aici poți trimite datele spre server
    }
  };

  return (
    <form className="auth-card" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Utilizator"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {errors.user && <span className="error">{errors.user}</span>}

      <input
        type="password"
        placeholder="Parolă"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      {errors.pass && <span className="error">{errors.pass}</span>}

      <button type="submit" className="button green">Autentificare</button>
    </form>
  );
}

export default Autentificare;
