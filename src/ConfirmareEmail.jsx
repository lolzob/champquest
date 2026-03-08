import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmareEmail.css';

function ConfirmareEmail() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 12000); // 12 secunde

    return () => clearTimeout(timer); // curățăm timerul la unmount
  }, [navigate]);

  return (
    <div className="confirmare-container">
      <h2>Contul tău a fost creat cu succes!</h2>
        <p>Vei primi un email pentru confirmarea contului.</p>
        <p>Vei fi redirecționat automat la pagina principală în câteva secunde.</p>
    </div>
  );
}

export default ConfirmareEmail;
