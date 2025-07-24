import React from 'react';
import './Meciuri.css';

const Meciuri = () => {
  return (
    <div className="pagina-meciuri">
      <h2>Meciurile echipei</h2>
      <p>Aici sunt afișate toate meciurile recente și viitoare ale echipei tale.</p>

      <div className="lista-meciuri">
        <ul>
          <li>
            <strong>ChampQuest FC</strong> vs FC Rapid - <span>28.07.2025</span> - <em>Ora 20:00</em>
          </li>
          <li>
            <strong>FC Gloria</strong> vs ChampQuest FC - <span>03.08.2025</span> - <em>Ora 18:00</em>
          </li>
          {/* alte meciuri */}
        </ul>
      </div>
    </div>
  );
};

export default Meciuri;
