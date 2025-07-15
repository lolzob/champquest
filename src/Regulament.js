import React from 'react';
import './Regulament.css';

function Regulament() {
  return (
    <div className="regulament-container">
      <h2>🛡️ Regulamentul Jocului ChampQuest</h2>

      <section>
        <h3>1. 🧠 Ce este ChampQuest?</h3>
        <p>
          ChampQuest este un joc online de strategie sportivă unde devii managerul propriei echipe de fotbal.
          Îți construiești clubul de la zero și concurezi cu alți jucători pentru glorie!
        </p>
      </section>

      <section>
        <h3>2. 👤 Contul tău</h3>
        <ul>
          <li>Poți avea <strong>un singur cont</strong>.</li>
          <li>Nu este permis să creezi conturi multiple pentru avantaje neloiale.</li>
          <li>Dacă ai sub 18 ani, ai nevoie de acordul părinților.</li>
        </ul>
      </section>

      <section>
        <h3>3. ⚽ Joc corect</h3>
        <ul>
          <li>Joacă cinstit. Nu folosi trucuri sau programe automate.</li>
          <li>Este interzisă manipularea pieței de transferuri între conturi.</li>
        </ul>
      </section>

      <section>
        <h3>4. 🗣️ Respectă comunitatea</h3>
        <ul>
          <li>Fii politicos. Limbajul vulgar, ofensator sau rasist este interzis.</li>
          <li>Promovează fair-play-ul și respectul față de ceilalți utilizatori.</li>
        </ul>
      </section>

      <section>
        <h3>5. 💼 Transferuri și economie</h3>
        <ul>
          <li>Transferurile trebuie să reflecte valoarea reală a jucătorilor.</li>
          <li>Tranzacțiile suspecte vor fi verificate de echipa de joc.</li>
        </ul>
      </section>

      <section>
        <h3>6. 🏆 Competiții</h3>
        <ul>
          <li>Participă la campionate, cupe și meciuri amicale în condiții egale.</li>
          <li>Nu există „plată pentru câștig”. Totul ține de strategie și răbdare.</li>
        </ul>
      </section>

      <section>
        <h3>7. ⚠️ Încălcarea regulilor</h3>
        <p>
          Încălcările pot duce la avertisment, suspendare sau ștergerea contului. Vrem un joc corect pentru toată lumea!
        </p>
      </section>

      <section>
        <h3>8. 🧑‍⚖️ Adminii jocului</h3>
        <p>Administratorii sunt responsabili cu menținerea regulilor și pot lua decizii finale în cazuri de abateri.</p>
      </section>

      <section>
        <h3>9. 🔁 Schimbări de regulament</h3>
        <p>
          Regulamentul poate fi modificat oricând pentru a îmbunătăți jocul. Vei fi anunțat la fiecare actualizare importantă.
        </p>
      </section>

      <div className="regulament-footer">
        <strong>💙 Îți mulțumim că faci parte din ChampQuest!</strong><br />
        Joacă cinstit. Bucură-te de joc. Fii un manager de legendă!
      </div>
    </div>
  );
}

export default Regulament;
