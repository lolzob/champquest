import React from "react";
import "./CQCoin.css";

const CQCoin = ({ size = 40 }) => {
  return (
    <svg
      className="cqcoin"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="95" fill="#E6B422" stroke="#B8860B" strokeWidth="8" />
      <path
        d="M 140,50 A 60,60 0 1,0 140,150"
        fill="none"
        stroke="#2483C8"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <circle cx="100" cy="100" r="30" fill="none" stroke="#62A930" strokeWidth="6" />
      <line x1="115" y1="115" x2="130" y2="130" stroke="#62A930" strokeWidth="6" />
      <line x1="100" y1="15" x2="100" y2="70" stroke="#2483C8" strokeWidth="6" />
      <line x1="100" y1="130" x2="100" y2="185" stroke="#2483C8" strokeWidth="6" />
      <polygon
        fill="#FFD700"
        points="100,78 106,92 122,92 110,102 116,118 100,110 84,118 90,102 78,92 94,92"
      />
    </svg>
  );
};

export default CQCoin;
