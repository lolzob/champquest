// === AdminPanel.js ===
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './AdminPanel.css';

function AdminPanel() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  let user = {};
  try {
    const raw = localStorage.getItem('user');
    user = JSON.parse(raw);
  } catch {}

  const isCQ = user.email === 'lolzob';
  const rol = (user.rol || '').toUpperCase(); // ✅ aici corectăm

  return (
    <div className="pagina-admin">
      <h2 className="titlu-admin">{t('admin.titlu')}</h2>
      <div className="container-roluri-admin">
        {(rol === 'TRA' || rol === 'MOD' || rol === 'ADM' || isCQ) && (
          <div className="patrat-rol-admin" onClick={() => navigate('/echipa/admin/tra')}>
            {t('admin.tra')}
          </div>
        )}
        {(rol === 'MOD' || rol === 'ADM' || isCQ) && (
          <div className="patrat-rol-admin" onClick={() => navigate('/echipa/admin/mod')}>
            {t('admin.mod')}
          </div>
        )}
        {(rol === 'ADM' || isCQ) && (
          <div className="patrat-rol-admin" onClick={() => navigate('/echipa/admin/adm')}>
            {t('admin.adm')}
          </div>
        )}
        {isCQ && (
          <div className="patrat-rol-admin" onClick={() => navigate('/echipa/admin/cq')}>
            {t('admin.cq')}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
