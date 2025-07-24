import React from 'react';
import './Amicale.css';

const Amicale = () => {
  return (
    <div className="pagina-amicale">
      <h2>Meciuri Amicale</h2>
      <p>Aici sunt afișate meciurile amicale programate sau jucate.</p>

      <div className="lista-amicale">
        <ul>
          <li>ChampQuest FC vs CS Universitatea - 26.07.2025 - Ora 19:00</li>
          <li>FC Ardeal vs ChampQuest FC - 02.08.2025 - Ora 17:30</li>
          {/* alte amicale */}
        </ul>
      </div>
    </div>
  );
};

export default Amicale;
