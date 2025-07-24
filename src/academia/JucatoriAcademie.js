import React from 'react';
import './JucatoriAcademie.css';

const JucatoriAcademie = () => {
  return (
    <div className="pagina-jucatori-academie">
      <h2>Jucători Academia</h2>
      <p>Lista jucătorilor tineri aflați în formare.</p>

      <table className="tabel-jucatori">
        <thead>
          <tr>
            <th>Nume</th>
            <th>Vârstă</th>
            <th>Poziție</th>
            <th>Skill principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ionel Popescu</td>
            <td>15</td>
            <td>Mijlocaș</td>
            <td>Creativitate</td>
          </tr>
          <tr>
            <td>Andrei Ionescu</td>
            <td>16</td>
            <td>Fundaș</td>
            <td>Marcaj</td>
          </tr>
          <tr>
            <td>Florin Dobre</td>
            <td>14</td>
            <td>Atacant</td>
            <td>Finalizare</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JucatoriAcademie;
