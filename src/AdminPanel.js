import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [anunt, setAnunt] = useState('');
  const [anunturi, setAnunturi] = useState(() => {
    const salvate = localStorage.getItem('anunturiSpeciale');
    return salvate ? JSON.parse(salvate) : [];
  });

  const adaugaAnunt = () => {
    if (anunt.trim()) {
      const listaNoua = [...anunturi, anunt];
      setAnunturi(listaNoua);
      localStorage.setItem('anunturiSpeciale', JSON.stringify(listaNoua));
      setAnunt('');
    }
  };

  return (
    <div className="pagina-admin">
      <h2>Panou Administrator</h2>

      <div className="sectiune-admin">
        <h3>Anunțuri speciale</h3>
        <textarea
          value={anunt}
          onChange={(e) => setAnunt(e.target.value)}
          placeholder="Scrie un anunț pentru utilizatori"
        />
        <button onClick={adaugaAnunt}>Adaugă Anunț</button>

        <ul className="lista-anunturi">
          {anunturi.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
