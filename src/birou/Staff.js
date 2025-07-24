import React from 'react';
import './Staff.css';

const Staff = () => {
  return (
    <div className="pagina-staff">
      <h2>Staff tehnic</h2>
      <p>Aici poți gestiona echipa tehnică a clubului tău.</p>

      <div className="sectiune-staff">
        <h3>Antrenori</h3>
        <ul>
          <li>Antrenor principal: (de completat)</li>
          <li>Secund: (de completat)</li>
          <li>Specialist fitness: (de completat)</li>
          <li>Preparator portari: (de completat)</li>
        </ul>
      </div>

      <div className="sectiune-staff">
        <h3>Personal medical</h3>
        <ul>
          <li>Medic echipă: (de completat)</li>
          <li>Kinetoterapeut: (de completat)</li>
        </ul>
      </div>

      <div className="sectiune-staff">
        <h3>Scouteri / Observatori</h3>
        <ul>
          <li>Observator tineret: (de completat)</li>
          <li>Scouter principal: (de completat)</li>
        </ul>
      </div>
    </div>
  );
};

export default Staff;
