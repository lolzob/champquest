// === AdminPanel.js ===
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

function AdminPanel() {
  const navigate = useNavigate();
  let user = {};
  try {
    const raw = localStorage.getItem('user');
    user = JSON.parse(raw);
  } catch {}

  const isCQ = user.email === 'lolzob';
  const rol = user.rol || '';

  return (
    <div className="pagina-admin">
      <h2 className="titlu-admin">Panoul Admin</h2>
      <div className="container-roluri">
        {(rol === 'TRA' || rol === 'MOD' || rol === 'ADM' || isCQ) && (
          <div className="patrat-rol" onClick={() => navigate('/echipa/admin/tra')}>TRA</div>
        )}
        {(rol === 'MOD' || rol === 'ADM' || isCQ) && (
          <div className="patrat-rol" onClick={() => navigate('/echipa/admin/mod')}>MOD</div>
        )}
        {(rol === 'ADM' || isCQ) && (
          <div className="patrat-rol" onClick={() => navigate('/echipa/admin/adm')}>ADM</div>
        )}
        {isCQ && (
          <div className="patrat-rol" onClick={() => navigate('/echipa/admin/cq')}>CQ</div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
