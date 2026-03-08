// === PanouTransferuri.js ===
import React from 'react';
import './PanouTransferuri.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PanouTransferuri() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Exemplu de date transferuri (acestea vin din API în practică)
  const transfers = [
    {
      id: 1,
      playerName: "Cristian Popescu",
      suspicious: true,
      finalPrice: 1200000,
      initialPrice: 800000,
      bids: 5,
      date: "12.03.2025",
      time: "18:35:42",
    },
    {
      id: 2,
      playerName: "Alex Ionescu",
      suspicious: false,
      finalPrice: 950000,
      initialPrice: 700000,
      bids: 3,
      date: "11.03.2025",
      time: "20:20:18",
    },
    // ...până la maxim 45 jucători
  ];

  return (
    <div className="panou-transferuri-page">
      <h2 className="panou-transferuri-title">{t('transfer.panel_title')}</h2>
      <div className="panou-transferuri-box">
        <table className="panou-transferuri-table">
          <thead>
            <tr>
              <th>{t('transfer.player')}</th>
              <th>{t('transfer.final_price')}</th>
              <th>{t('transfer.initial_price')}</th>
              <th>{t('transfer.bids')}</th>
              <th>{t('transfer.date')}</th>
              <th>{t('transfer.time')}</th>
              <th>{t('transfer.details')}</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((transfer) => (
              <tr
                key={transfer.id}
                className={
                  transfer.suspicious
                    ? "panou-transferuri-row-suspect"
                    : ""
                }
              >
                <td>{transfer.playerName}</td>
                <td className="panou-transferuri-final-price">
                  {transfer.finalPrice.toLocaleString('ro-RO')}
                </td>
                <td className="panou-transferuri-initial-price">
                  {transfer.initialPrice.toLocaleString('ro-RO')}
                </td>
                <td>{transfer.bids}</td>
                <td>{transfer.date}</td>
                <td>{transfer.time}</td>
                <td>
                  <button
                    className="panou-transferuri-details-button"
                    onClick={() => navigate(`/echipa/admin/detaliitransfer/${transfer.id}`)}
                  >
                    {t('transfer.details_button')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PanouTransferuri;
