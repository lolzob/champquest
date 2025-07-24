import React from 'react';
import './ListaTransfer.css';

const ListaTransfer = () => {
  return (
    <div className="pagina-transferuri">
      <h2>Lista de Transferuri</h2>
      <p>Aici sunt jucătorii disponibili pentru transfer și cererile în curs.</p>

      <div className="transfer-table">
        <table>
          <thead>
            <tr>
              <th>Nume</th>
              <th>Poziție</th>
              <th>Vârstă</th>
              <th>Preț cerut</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daniel Stan</td>
              <td>Mijlocaș</td>
              <td>26</td>
              <td>1.200.000 €</td>
              <td>Disponibil</td>
            </tr>
            <tr>
              <td>Cosmin Dobre</td>
              <td>Atacant</td>
              <td>22</td>
              <td>1.600.000 €</td>
              <td>Negociere</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaTransfer;
