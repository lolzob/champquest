import React from 'react';
import './DespreChampQuest.css';
import { useNavigate } from 'react-router-dom';

function DespreChampQuest() {
  const navigate = useNavigate();

  return (
    <div className="despre-container">
      <h2>Despre ChampQuest</h2>

      <p>
        <strong>ChampQuest</strong> este mai mult decât un joc — este aventura ta în lumea fotbalului, acolo unde pasiunea, strategia și viziunea de manager se întâlnesc. Devii conducătorul unui club mic, necunoscut, și ai misiunea să-l duci în topul ligilor naționale și internaționale.
      </p>

      <p>
        Tu alegi tactica, tu decizi cine joacă și cine stă pe bancă, tu investești în stadion, academie și transferuri. Fiecare alegere contează. Fiecare decizie poate însemna victorie sau eșec. Nu există scurtături. Nu există noroc. Doar fotbal autentic și competiție reală.
      </p>

      <h3>Ce oferă ChampQuest?</h3>
      <ul>
        <li>⚽ Campionate realiste, cu promovare și retrogradare</li>
        <li>📈 Evoluție autentică a jucătorilor – bazată pe antrenamente și meciuri</li>
        <li>💰 Piață de transfer dinamică – licitezi în timp real pentru viitoarele staruri</li>
        <li>🏟️ Construiește baza clubului – stadion, centru medical, academie</li>
        <li>🧠 Tactici complexe – 4-4-2, 3-5-2, 5-4-1, pressing, marcaj, moral și formă</li>
        <li>🌍 Competiții internaționale – alătură-te unei comunități globale</li>
      </ul>

      <h3>Ce ne face diferiți?</h3>
      <p>
        La ChampQuest, toți pornesc de la zero. Nu contează dacă ești nou sau experimentat, dacă ai jucat alte jocuri sau nu. Nu există conturi premium care să decidă campioni. Totul ține de strategie, răbdare și dedicare.
      </p>

      <h3>Tu ești următorul campion?</h3>
      <p>
        Dacă visezi să construiești un imperiu fotbalistic, să conduci o echipă de tineri spre glorie și să înfrunți mii de alți manageri reali ... atunci ChampQuest este pentru tine.
      </p>

      <p className="slogan-final">Intră acum în joc și scrie-ți legenda!</p>

      <button className="button green" onClick={() => navigate('/inscriere')}>
        Începe aventura ta!
      </button>
    </div>
  );
}

export default DespreChampQuest;
