// === EchipaMea.js ===
import React, { useState, useEffect } from 'react';
import './EchipaMea.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Power } from 'lucide-react';
import CeasSiData from './components/CeasSiData';

// Pagini din birou
import InfoEchipa from './birou/InfoEchipa';
import BiroulMeu from './birou/BiroulMeu';
import Staff from './birou/Staff';
import Stadion from './birou/Stadion';
import Finante from './birou/Finante';

// Pagini din echipa
import Seria from './echipa/Seria';
import Meciuri from './echipa/Meciuri';
import Cupa from './echipa/Cupa';
import Amicale from './echipa/Amicale';
import Jucatori from './echipa/Jucatori';
import Antrenament from './echipa/Antrenament';
import ListaTransfer from './echipa/ListaTransfer';

// Pagini din academia
import SeriaAcademie from './academia/SeriaAcademie';
import MeciuriAcademie from './academia/MeciuriAcademie';
import AmicaleAcademie from './academia/AmicaleAcademie';
import JucatoriAcademie from './academia/JucatoriAcademie';
import AntrenamentAcademie from './academia/AntrenamentAcademie';
import CautatoriTalente from './academia/CautatoriTalente';

// Pagina admin
import AdminPanel from './admin/AdminPanel';
import TRA from './admin/TRA';
import TraMesaj from './admin/TraMesaj';
import MOD from './admin/MOD';
import ADM from './admin/ADM';
import CQ from './admin/CQ';

const EchipaMea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  let user = {};
  try {
    const rawUser = localStorage.getItem('user');
    user = JSON.parse(rawUser);
  } catch {
    user = {};
  }

  let echipa = {
    nume: 'Fără nume',
    tara: '',
    regiune: '',
    buget: 0,
    divizie: ''
  };
  try {
    const rawEchipa = localStorage.getItem('echipa');
    const parsed = JSON.parse(rawEchipa);
    if (parsed) echipa = parsed;
  } catch {}

  const handleDeconectare = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('echipa');
    navigate('/');
  };

  const currentPath = location.pathname;
  const navItem = (path, labelKey) => (
    <li onClick={() => navigate(path)} className={currentPath === path ? 'activ' : ''}>
      {t(labelKey)}
    </li>
  );

  // === PROGRAM SAPTAMANAL ===
  const zile = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'];
  const [ziSelectata, setZiSelectata] = useState('');
  const [saptamanaCurenta, setSaptamanaCurenta] = useState([]);

  const programZilnic = Object.fromEntries(zile.map(zi => [zi, t(`program_zilnic.${zi}`)]));

  useEffect(() => {
    const azi = new Date();
    const ziAzi = azi.getDay();
    const offset = ziAzi === 0 ? -6 : 1 - ziAzi;
    const luni = new Date(azi);
    luni.setDate(azi.getDate() + offset);

    const saptamanaNoua = zile.map((zi, idx) => {
      const d = new Date(luni);
      d.setDate(d.getDate() + idx);
      const ziua = d.getDate().toString().padStart(2, '0');
      const luna = (d.getMonth() + 1).toString().padStart(2, '0');
      const an = d.getFullYear();
      return {
        zi,
        data: `${ziua}.${luna}.${an}`,
        activ: azi.toDateString() === d.toDateString(),
      };
    });
    setSaptamanaCurenta(saptamanaNoua);
    const aziZi = saptamanaNoua.find((z) => z.activ);
    if (aziZi) setZiSelectata(aziZi.zi);
  }, [t]);

  // === ANUNTURI SPECIALE (acum e gol) ===
  const anunturiSpeciale = [];

  return (
    <div className="pagina-echipa">
      <nav className="navbar">
        <div className="nav-left">
          <button className="nav-button">{t('echipa.global')}</button>
          <button className="nav-button">{t('echipa.forum')}</button>
          <button className="nav-button">{t('echipa.ajutor')}</button>
          {user.admin && (
            <button
              className="nav-button admin-button"
              onClick={() => navigate('/echipa/admin')}
              >
                Admin
            </button>
          )}
        </div>

        <div className="nav-right">
          <CeasSiData />
          <button
            className="nav-button activ"
            onClick={() => navigate('/echipa')}
          >
            {t('echipa.echipaMea')}
          </button>
          <button
            className="nav-button deconectare-button"
            onClick={handleDeconectare}
            title={t('echipa.deconectare')}
          >
            <Power size={21} />
          </button>
        </div>
      </nav>

      <div className="continut-echipa">
        <div className="card-stanga">
          <Routes>
            <Route path="/info" element={<InfoEchipa echipa={echipa} />} />
            <Route path="/birou" element={<BiroulMeu echipa={echipa} />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/stadion" element={<Stadion />} />
            <Route path="/finante" element={<Finante />} />
            <Route path="/seria" element={<Seria />} />
            <Route path="/meciuri" element={<Meciuri />} />
            <Route path="/cupa" element={<Cupa />} />
            <Route path="/amicale" element={<Amicale />} />
            <Route path="/jucatori" element={<Jucatori />} />
            <Route path="/antrenament" element={<Antrenament />} />
            <Route path="/lista-transfer" element={<ListaTransfer />} />
            <Route path="/seria-academie" element={<SeriaAcademie />} />
            <Route path="/meciuri-academie" element={<MeciuriAcademie />} />
            <Route path="/amicale-academie" element={<AmicaleAcademie />} />
            <Route path="/jucatori-academie" element={<JucatoriAcademie />} />
            <Route path="/antrenament-academie" element={<AntrenamentAcademie />} />
            <Route path="/cautatori-talente" element={<CautatoriTalente />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/tra" element={<TRA />} />
            <Route path="/admin/tramesaj" element={<TraMesaj />} />
            <Route path="/admin/mod" element={<MOD />} />
            <Route path="/admin/adm" element={<ADM />} />
            <Route path="/admin/cq" element={<CQ />} />
            <Route
              path="*"
              element={
                <>
                  <h2 className="titlu-sectiune">{t('echipa.noutati')}</h2>
                  <div className="zile-container">
                    {saptamanaCurenta.map(({ zi, data }) => (
                      <div
                        key={zi}
                        className={`zi-patrat ${ziSelectata === zi ? 'activ' : ''}`}
                        onClick={() => setZiSelectata(zi)}
                      >
                        <div className="zi-titlu">{zi}</div>
                        <div className="zi-data">{data}</div>
                      </div>
                    ))}
                  </div>
                  <div className="program-zi">
                    <p>{programZilnic[ziSelectata]}</p>
                  </div>

                  {/* === Anunțuri speciale doar dacă există === */}
                  {anunturiSpeciale.length > 0 && (
                    <div className="card-anunturi">
                      <h3>Anunțuri speciale</h3>
                      <ul>
                        {anunturiSpeciale.map((anunt, idx) => (
                          <li key={idx}>{anunt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              }
            />
          </Routes>
        </div>

        <div className="card-dreapta">
          <div className="sectiune">
            <h2 className="titlu-echipa">{echipa.nume}</h2>
            <ul>
              {navItem('/echipa/info', 'echipa.infoEchipa')}
              {navItem('/echipa/birou', 'echipa.biroul')}
              {navItem('/echipa/staff', 'echipa.staff')}
              {navItem('/echipa/stadion', 'echipa.stadion')}
              {navItem('/echipa/finante', 'echipa.finante')}
            </ul>
          </div>

          <div className="sectiune">
            <h2 className="titlu-sectiune">{t('echipa.echipaMare')}</h2>
            <ul>
              {navItem('/echipa/seria', 'echipa.seria')}
              {navItem('/echipa/meciuri', 'echipa.meciuri')}
              {navItem('/echipa/cupa', 'echipa.cupa')}
              {navItem('/echipa/amicale', 'echipa.amicale')}
              {navItem('/echipa/jucatori', 'echipa.jucatori')}
              {navItem('/echipa/antrenament', 'echipa.antrenament')}
              {navItem('/echipa/lista-transfer', 'echipa.listaTransfer')}
            </ul>
          </div>

          <div className="sectiune">
            <h2 className="titlu-sectiune">{t('echipa.echipaMica')}</h2>
            <ul>
              {navItem('/echipa/seria-academie', 'echipa.seria')}
              {navItem('/echipa/meciuri-academie', 'echipa.meciuri')}
              {navItem('/echipa/amicale-academie', 'echipa.amicale')}
              {navItem('/echipa/jucatori-academie', 'echipa.jucatori')}
              {navItem('/echipa/antrenament-academie', 'echipa.antrenament')}
              {navItem('/echipa/cautatori-talente', 'echipa.cautatoriTalente')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchipaMea;
