import React from 'react';
import './Finante.css';

const Finante = () => {
  return (
    <div className="pagina-finante">
      <h2>Finanțele clubului</h2>
      <p>Aici poți vizualiza veniturile și cheltuielile clubului tău.</p>

      <div className="sectiune-finante">
        <h3>Venituri</h3>
        <ul>
          <li>Vânzări bilete: (de completat)</li>
          <li>Sponsorizări: (de completat)</li>
          <li>Premii competiții: (de completat)</li>
          <li>Vânzări jucători: (de completat)</li>
        </ul>
      </div>

      <div className="sectiune-finante">
        <h3>Cheltuieli</h3>
        <ul>
          <li>Salarii jucători: (de completat)</li>
          <li>Salarii staff: (de completat)</li>
          <li>Întreținere stadion: (de completat)</li>
          <li>Transferuri: (de completat)</li>
        </ul>
      </div>

      <div className="sectiune-finante">
        <h3>Buget actual</h3>
        <p>Total disponibil: (de completat)</p>
      </div>
    </div>
  );
};

export default Finante;
