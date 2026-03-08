import React from 'react';
import './Antrenament.css';

const Antrenament = () => {
  return (
    <div className="pagina-antrenament">
      <h2>Program de Antrenament</h2>
      <p>Alege tipul de antrenament pentru această săptămână.</p>

      <div className="lista-antrenamente">
        <ul>
          <li>Rezistență</li>
          <li>Viteză</li>
          <li>Forță</li>
          <li>Finalizare</li>
          <li>Marcaj</li>
          <li>Control mingii</li>
        </ul>
      </div>
    </div>
  );
};

export default Antrenament;
