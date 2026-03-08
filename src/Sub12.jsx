import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sub12.css';

function Sub12() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 45000); // 45 secunde

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="sub12-container">
      <h2>
        👋 Salutare!<br /><br />
        Din păcate, înscrierile sunt disponibile doar pentru cei cu vârsta de <strong>12 ani sau mai mult</strong>.<br /><br />
        🙏 Te rugăm să revii când împlinești 12 ani.<br />
        📝 La acel moment, vei avea nevoie și de acordul unui părinte pentru înscriere.<br /><br />
        ⚽ Îți dorim succes și te așteptăm cu drag pe ChampQuest! 🏆
    </h2>

    </div>
  );
}

export default Sub12;
