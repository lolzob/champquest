import React from 'react';
import './Jucatori.css';

const Jucatori = () => {
  return (
    <div className="pagina-jucatori">
      <h2>Lotul Echipei</h2>
      <p>Aici sunt afișați jucătorii activi ai echipei.</p>

      <div className="tabel-jucatori">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nume</th>
              <th>Poziție</th>
              <th>Vârstă</th>
              <th>Valoare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Andrei Popescu</td>
              <td>Portar</td>
              <td>28</td>
              <td>850.000 €</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Marian Ionescu</td>
              <td>Fundaș</td>
              <td>24</td>
              <td>650.000 €</td>
            </tr>
            {/* alți jucători */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jucatori;
