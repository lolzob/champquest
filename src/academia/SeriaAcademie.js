import React from 'react';
import './SeriaAcademie.css';

const SeriaAcademie = () => {
  return (
    <div className="pagina-seria">
      <h2>Seria echipei mici</h2>
      <p>Aici este afișată componența seriei din cadrul academiei.</p>

      <div className="tabel-serie">
        <table>
          <thead>
            <tr>
              <th>Loc</th>
              <th>Echipă</th>
              <th>Meciuri</th>
              <th>Puncte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Juniorii Cluj</td>
              <td>10</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Academia Nord</td>
              <td>10</td>
              <td>23</td>
            </tr>
            <tr>
              <td>3</td>
              <td>FC Sud</td>
              <td>10</td>
              <td>19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeriaAcademie;
