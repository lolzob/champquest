import React from 'react';
import './AntrenamentAcademie.css';

const AntrenamentAcademie = () => {
  return (
    <div className="pagina-antrenament-academie">
      <h2>Antrenament Academia</h2>
      <p>Programul și progresul de antrenament al jucătorilor tineri.</p>

      <ul className="lista-antrenamente">
        <li>Luni – Tehnică individuală</li>
        <li>Marți – Viteză și rezistență</li>
        <li>Miercuri – Tactici defensive</li>
        <li>Joi – Finalizare și șuturi</li>
        <li>Vineri – Meci de pregătire intern</li>
      </ul>
    </div>
  );
};

export default AntrenamentAcademie;
