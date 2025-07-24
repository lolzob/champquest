import React from 'react';
import './CautatoriTalente.css';

const CautatoriTalente = () => {
  return (
    <div className="pagina-cautatori-talente">
      <h2>Căutători de Talente</h2>
      <p>Aici poți gestiona activitatea căutătorilor de talente pentru echipa ta de juniori.</p>

      <ul className="lista-talente">
        <li>Căutător 1 – Regiunea Moldova – Activ</li>
        <li>Căutător 2 – Regiunea Transilvania – Pauză</li>
        <li>Căutător 3 – Regiunea Muntenia – În misiune</li>
      </ul>
    </div>
  );
};

export default CautatoriTalente;
