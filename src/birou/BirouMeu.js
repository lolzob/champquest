import React from 'react';
import './BirouMeu.css';

const BirouMeu = ({ echipa }) => {
  return (
    <div className="birou-meu">
      <h2>Biroul meu</h2>
      <p>Aici vei putea gestiona funcțiile administrative ale clubului tău.</p>

      <div className="sectiune-birou">
        <h3>Structură administrativă</h3>
        <ul>
          <li>Președinte: (de completat)</li>
          <li>Manager adjunct: (de completat)</li>
          <li>Departament PR: (de completat)</li>
          <li>Ofițer de presă: (de completat)</li>
        </ul>
      </div>

      <div className="sectiune-birou">
        <h3>Mesaje / Notificări</h3>
        <p>(aici pot apărea mesaje importante pentru conducerea clubului)</p>
      </div>

      <div className="sectiune-birou">
        <h3>Statistici și performanțe</h3>
        <p>Buget: <strong>{echipa.buget} €</strong></p>
        <p>Divizie: <strong>{echipa.divizie}</strong></p>
      </div>
    </div>
  );
};

export default BirouMeu;
