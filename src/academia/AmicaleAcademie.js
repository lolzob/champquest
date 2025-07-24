import React from 'react';
import './AmicaleAcademie.css';

const AmicaleAcademie = () => {
  return (
    <div className="pagina-amicale-academie">
      <h2>Meciuri amicale</h2>
      <p>Lista meciurilor amicale ale echipei mici.</p>

      <ul className="lista-amicale">
        <li>15 Iulie 2025 - Juniorii Cluj 1 - 1 Viitorul Junior</li>
        <li>08 Iulie 2025 - Tineretul Est 0 - 2 Juniorii Cluj</li>
        <li>01 Iulie 2025 - Juniorii Cluj 3 - 3 FC Academia Vest</li>
      </ul>
    </div>
  );
};

export default AmicaleAcademie;
