import React, { useState, useEffect } from 'react';
import './CeasSiData.css';

const CeasSiData = () => {
  const [timp, setTimp] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTimp(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const ora = timp.toLocaleTimeString('ro-RO', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // ✅ Formatul 23.07.2025
  const zi = String(timp.getDate()).padStart(2, '0');
  const luna = String(timp.getMonth() + 1).padStart(2, '0');
  const an = timp.getFullYear();
  const data = `${zi}.${luna}.${an}`;

  return (
    <div className="ceas-navbar">
      <div className="ceas">{ora}</div>
      <div className="data">{data}</div>
    </div>
  );
};

export default CeasSiData;
