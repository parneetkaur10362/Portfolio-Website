import React from "react";

export const WindTidalWaveDiagram: React.FC = () => (
  <svg viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto h-32" role="img" aria-label="Wind, tidal and wave diagram">
    {/* Wind Turbine */}
    <g>
      <rect x="20" y="60" width="8" height="30" fill="#64748b" />
      <circle cx="24" cy="60" r="10" fill="#60a5fa" />
      <line x1="24" y1="60" x2="24" y2="45" stroke="#60a5fa" strokeWidth="3" />
      <line x1="24" y1="60" x2="34" y2="70" stroke="#60a5fa" strokeWidth="3" />
      <line x1="24" y1="60" x2="14" y2="70" stroke="#60a5fa" strokeWidth="3" />
    </g>
    {/* Tidal Turbine */}
    <g>
      <rect x="90" y="75" width="8" height="15" fill="#0ea5e9" />
      <ellipse cx="94" cy="75" rx="10" ry="6" fill="#38bdf8" />
      <line x1="94" y1="75" x2="104" y2="80" stroke="#0ea5e9" strokeWidth="2" />
      <line x1="94" y1="75" x2="84" y2="80" stroke="#0ea5e9" strokeWidth="2" />
    </g>
    {/* Wave Energy Buoy */}
    <g>
      <ellipse cx="170" cy="85" rx="14" ry="6" fill="#a5b4fc" />
      <rect x="164" y="70" width="12" height="15" fill="#818cf8" />
      <rect x="168" y="60" width="4" height="10" fill="#6366f1" />
    </g>
    {/* Water */}
    <path d="M0 95 Q 40 90 80 95 T 160 95 T 240 95 T 320 95 V100 H0Z" fill="#bae6fd" />
  {/* Sun */}
  <circle cx="300" cy="20" r="12" fill="#fbbf24" />
  </svg>
);

export const BiomassDiagram: React.FC = () => (
  <svg viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto h-32" role="img" aria-label="Biomass system diagram">
    {/* Cattle */}
    <ellipse cx="40" cy="80" rx="18" ry="10" fill="#fbbf24" />
    <rect x="30" y="60" width="20" height="20" fill="#f59e42" />
    {/* Biogas Digester */}
    <ellipse cx="120" cy="80" rx="22" ry="12" fill="#34d399" />
    <rect x="98" y="70" width="44" height="20" fill="#059669" />
    {/* Gas Pipe */}
    <rect x="142" y="75" width="30" height="4" fill="#fbbf24" />
    {/* Generator */}
    <rect x="180" y="70" width="24" height="18" fill="#f87171" />
    <rect x="188" y="60" width="8" height="10" fill="#fca5a5" />
    {/* Fertilizer */}
    <ellipse cx="250" cy="90" rx="14" ry="6" fill="#a3e635" />
    <rect x="243" y="80" width="14" height="10" fill="#65a30d" />
  </svg>
);

export const OTECDiagram: React.FC = () => (
  <svg viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto h-32" role="img" aria-label="OTEC system diagram">
    {/* Ocean */}
    <rect x="0" y="60" width="320" height="40" fill="#38bdf8" />
    {/* Warm Water Intake */}
    <rect x="40" y="50" width="10" height="10" fill="#fbbf24" />
    <line x1="45" y1="60" x2="45" y2="90" stroke="#fbbf24" strokeWidth="3" />
    {/* Cold Water Intake */}
    <rect x="80" y="80" width="10" height="10" fill="#6366f1" />
    <line x1="85" y1="80" x2="85" y2="100" stroke="#6366f1" strokeWidth="3" />
    {/* Evaporator */}
    <rect x="120" y="60" width="18" height="18" fill="#f59e42" />
    {/* Turbine */}
    <circle cx="170" cy="70" r="10" fill="#f87171" />
    {/* Condenser */}
    <rect x="210" y="60" width="18" height="18" fill="#818cf8" />
    {/* Output */}
    <rect x="260" y="70" width="24" height="12" fill="#fbbf24" />
    {/* Arrows */}
    <polygon points="58,69 70,69 64,75" fill="#fbbf24" />
    <polygon points="138,69 150,69 144,75" fill="#f59e42" />
    <polygon points="188,69 200,69 194,75" fill="#f87171" />
    <polygon points="228,69 240,69 234,75" fill="#818cf8" />
  </svg>
);

export default { WindTidalWaveDiagram, BiomassDiagram, OTECDiagram };
