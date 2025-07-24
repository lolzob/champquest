import React from 'react';
import './Stadion.css';

const Stadion = () => {
  return (
    <div className="pagina-stadion">
      <h2>Stadionul clubului</h2>
      <p>Aici poți vedea și gestiona informațiile despre stadionul echipei tale.</p>

      <div className="sectiune-stadion">
        <h3>Informații generale</h3>
        <ul>
          <li>Nume stadion: (de completat)</li>
          <li>Capacitate totală: (de completat)</li>
          <li>Locuri pe scaune: (de completat)</li>
          <li>Locuri acoperite: (de completat)</li>
          <li>Teren principal: (de completat)</li>
        </ul>
      </div>

      <div className="sectiune-stadion">
        <h3>Facilități</h3>
        <ul>
          <li>Nocturnă: (da/nu)</li>
          <li>Vestiare moderne: (da/nu)</li>
          <li>Parcare stadion: (da/nu)</li>
          <li>Centru de presă: (da/nu)</li>
        </ul>
      </div>
    </div>
  );
};

export default Stadion;
