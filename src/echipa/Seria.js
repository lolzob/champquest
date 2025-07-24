import React from 'react';
import './Seria.css';

const Seria = () => {
  return (
    <div className="pagina-seria">
      <h2>Seria actuală</h2>
      <p>Aici poți vedea poziția echipei tale în clasament, alături de adversarii din serie.</p>

      <div className="tabel-clasament">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Echipă</th>
              <th>M</th>
              <th>V</th>
              <th>E</th>
              <th>Î</th>
              <th>GM</th>
              <th>GP</th>
              <th>GV</th>
              <th>Puncte</th>
            </tr>
          </thead>
          <tbody>
            {/* Aici se vor genera rândurile pentru echipe */}
            <tr>
              <td>1</td>
              <td>ChampQuest FC</td>
              <td>10</td>
              <td>8</td>
              <td>1</td>
              <td>1</td>
              <td>24</td>
              <td>8</td>
              <td>+16</td>
              <td>25</td>
            </tr>
            {/* alte echipe */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Seria;
