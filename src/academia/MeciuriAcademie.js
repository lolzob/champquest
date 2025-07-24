import React from 'react';
import './MeciuriAcademie.css';

const MeciuriAcademie = () => {
  return (
    <div className="pagina-meciuri-academie">
      <h2>Meciuri ale echipei mici</h2>
      <p>Programul și rezultatele meciurilor din academie.</p>

      <ul className="lista-meciuri">
        <li>20 Iulie 2025 - Juniorii Cluj 2 - 1 Academia Nord</li>
        <li>13 Iulie 2025 - FC Sud 1 - 1 Juniorii Cluj</li>
        <li>06 Iulie 2025 - Academia Nord 3 - 0 FC Sud</li>
      </ul>
    </div>
  );
};

export default MeciuriAcademie;
