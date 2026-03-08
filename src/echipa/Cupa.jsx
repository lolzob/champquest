import React from 'react';
import './Cupa.css';

const Cupa = () => {
  return (
    <div className="pagina-cupa">
      <h2>Competiția de Cupă</h2>
      <p>Aici sunt afișate informații despre parcursul echipei în cupă.</p>

      <div className="tabel-cupa">
        <table>
          <thead>
            <tr>
              <th>Tur</th>
              <th>Adversar</th>
              <th>Scor</th>
              <th>Rezultat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tur 1</td>
              <td>FC Progresul</td>
              <td>3 - 1</td>
              <td>Victorie</td>
            </tr>
            <tr>
              <td>Tur 2</td>
              <td>AS Gloria</td>
              <td>1 - 2</td>
              <td>Înfrângere</td>
            </tr>
            {/* alte meciuri */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cupa;
