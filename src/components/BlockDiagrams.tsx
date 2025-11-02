import React from 'react';

export const WindTidalWaveBlockDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Aspect Headers */}
      <div className="flex justify-between px-12 text-lg font-semibold">
        <div className="text-slate-200">Mechanical aspect</div>
        <div className="text-slate-200">Electrical aspect</div>
      </div>

      <svg width="900" height="500" viewBox="0 0 900 500" className="w-full h-auto">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
          </marker>
        </defs>

        {/* Vertical Divider Line */}
        <line x1="450" y1="50" x2="450" y2="450" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />

        {/* Mechanical Components */}
        {/* Wind Turbine */}
        <g transform="translate(50,50)">
          <rect width="80" height="120" fill="#475569" stroke="#1e293b" strokeWidth="2" />
          <circle cx="80" cy="40" r="30" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
          {/* Turbine blades */}
          <line x1="80" y1="40" x2="105" y2="25" stroke="#1e293b" strokeWidth="4" />
          <line x1="80" y1="40" x2="55" y2="25" stroke="#1e293b" strokeWidth="4" />
          <line x1="80" y1="40" x2="80" y2="65" stroke="#1e293b" strokeWidth="4" />
          <text x="40" y="145" textAnchor="middle" fill="#f8fafc" fontSize="14">Wind</text>
          <text x="40" y="160" textAnchor="middle" fill="#f8fafc" fontSize="14">Turbine</text>
        </g>

        {/* Tidal Turbine */}
        <g transform="translate(50,200)">
          <rect width="100" height="80" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
          <circle cx="50" cy="40" r="25" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
          {/* Underwater turbine */}
          <line x1="50" y1="40" x2="70" y2="25" stroke="#0284c7" strokeWidth="3" />
          <line x1="50" y1="40" x2="30" y2="25" stroke="#0284c7" strokeWidth="3" />
          <line x1="50" y1="40" x2="50" y2="60" stroke="#0284c7" strokeWidth="3" />
          <text x="50" y="100" textAnchor="middle" fill="#f8fafc" fontSize="14">Tidal Turbine</text>
          {/* Water waves */}
          <path d="M0,15 Q25,0 50,15 Q75,30 100,15" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <path d="M0,25 Q25,10 50,25 Q75,40 100,25" fill="none" stroke="#38bdf8" strokeWidth="2" />
        </g>

        {/* Wave Energy Converter */}
        <g transform="translate(50,350)">
          <rect width="120" height="60" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
          {/* Wave representation */}
          <path d="M0,30 Q30,0 60,30 Q90,60 120,30" fill="none" stroke="#38bdf8" strokeWidth="3" />
          {/* Float */}
          <rect x="45" y="10" width="30" height="40" fill="#475569" stroke="#1e293b" strokeWidth="2" />
          <text x="60" y="80" textAnchor="middle" fill="#f8fafc" fontSize="14">Wave Converter</text>
        </g>

        {/* Power Conditioning (Inverter / Converter) - more realistic icon */}
        <g transform="translate(230,170)">
          <rect x="0" y="0" width="180" height="140" rx="8" fill="#334155" stroke="#1e293b" strokeWidth="2" filter="url(#shadow)" />
          {/* front panel */}
          <rect x="12" y="14" width="156" height="46" rx="6" fill="#1f2937" opacity="0.6" />
          <text x="90" y="40" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="600">Power Conditioning</text>
          {/* sine wave (AC) */}
          <path d="M30,85 C40,65 60,105 70,85 C80,65 100,105 110,85" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
          <text x="45" y="110" textAnchor="start" fill="#cbd5e1" fontSize="11">AC</text>
          {/* DC symbol */}
          <g transform="translate(120,90)">
            <rect x="-10" y="-8" width="20" height="16" rx="2" fill="#0ea5e9" opacity="0.12" />
            <rect x="-8" y="-3" width="16" height="2" fill="#cbd5e1" />
            <rect x="-8" y="2" width="10" height="2" fill="#cbd5e1" />
            <text x="18" y="6" fill="#cbd5e1" fontSize="11">DC</text>
          </g>
          {/* arrows showing conversion */}
          <g>
            <path d="M72,90 L96,90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <path d="M72,100 L96,100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
          </g>
          <text x="90" y="130" textAnchor="middle" fill="#cbd5e1" fontSize="11">AC / DC Conversion · Sync</text>
        </g>

        {/* Electrical Components */}
        {/* Generator (realistic icon) */}
        <g transform="translate(480,170)">
          {/* housing */}
          <rect x="0" y="10" width="140" height="120" rx="6" fill="#0f766e" stroke="#064e3b" strokeWidth="2" filter="url(#shadow)" />
          {/* ventilation slots */}
          <g fill="#07585a" opacity="0.18">
            <rect x="12" y="26" width="116" height="6" rx="3" />
            <rect x="12" y="40" width="116" height="6" rx="3" />
            <rect x="12" y="54" width="116" height="6" rx="3" />
          </g>
          {/* rotor / shaft */}
          <g transform="translate(70,80)">
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
              <circle cx="0" cy="0" r="28" fill="#065f46" stroke="#044c3a" strokeWidth="3" />
              {/* rotor poles */}
              <path d="M-18,0 L18,0" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
              <path d="M0,-18 L0,18" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            </g>
            {/* shaft */}
            <rect x="28" y="-4" width="36" height="8" rx="2" fill="#94a3b8" />
            <rect x="64" y="-2" width="10" height="4" rx="1" fill="#475569" />
          </g>
          {/* coupling and name */}
          <text x="70" y="138" textAnchor="middle" fill="#d1fae5" fontSize="12">Synchronous Generator</text>
        </g>

        {/* Power Transformer (realistic icon) */}
        <g transform="translate(660,185)">
          <rect x="0" y="8" width="96" height="82" rx="6" fill="#0b5f8a" stroke="#074a6e" strokeWidth="2" filter="url(#shadow)" />
          {/* core legs */}
          <rect x="12" y="18" width="18" height="62" fill="#072f3a" rx="2" />
          <rect x="66" y="18" width="18" height="62" fill="#072f3a" rx="2" />
          {/* top yoke */}
          <rect x="12" y="12" width="72" height="8" fill="#0f4652" />
          {/* coils (primary left, secondary right) */}
          <g transform="translate(36,36)" stroke="#cfeafe" strokeWidth="2" fill="none">
            <path d="M-14,0 q3,-8 8,0 q3,8 8,0 q3,-8 8,0" />
          </g>
          <g transform="translate(60,36)" stroke="#fbbf24" strokeWidth="2" fill="none">
            <path d="M-14,0 q3,-8 8,0 q3,8 8,0 q3,-8 8,0" />
          </g>
          {/* electromagnetic flux pulse */}
          <circle cx="48" cy="48" r="30" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4,4">
            <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="48" y="104" textAnchor="middle" fill="#e6f8ff" fontSize="11">Power Transformer</text>
        </g>

        {/* Load */}
        <g transform="translate(780,195)">
          <rect width="70" height="90" fill="#be123c" stroke="#9f1239" strokeWidth="2" />
          <text x="35" y="50" textAnchor="middle" fill="#f8fafc" fontSize="14">Load</text>
        </g>

        {/* Connecting Lines */}
        <line x1="130" y1="110" x2="250" y2="240" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="150" y1="240" x2="250" y2="240" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="170" y1="380" x2="250" y2="240" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="400" y1="240" x2="500" y2="240" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="600" y1="240" x2="650" y2="240" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="730" y1="240" x2="780" y2="240" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </svg>
    </div>
  );
};

export const BiomassBlockDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Aspect Headers */}
      <div className="flex justify-between px-12 text-lg font-semibold">
        <div className="text-slate-200">Mechanical aspect</div>
        <div className="text-slate-200">Electrical aspect</div>
      </div>

      <svg width="900" height="400" viewBox="0 0 900 400" className="w-full h-auto">
        <defs>
          <marker id="arrowhead-biomass" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
          </marker>
          {/* Define gradients for component fills */}
          <linearGradient id="boilerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        {/* Vertical Divider Line */}
        <line x1="450" y1="50" x2="450" y2="350" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />

        {/* Mechanical Components */}
        {/* Waste Input */}
        <rect x="50" y="150" width="100" height="80" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
        <text x="100" y="190" textAnchor="middle" fill="#1e293b" fontSize="14">Waste</text>
        
        {/* Devolatilization Reactor */}
        <rect x="200" y="150" width="60" height="120" fill="#475569" stroke="#1e293b" strokeWidth="2" />
        <text x="230" y="280" textAnchor="middle" fill="#f8fafc" fontSize="12">Devolatilization</text>
        <text x="230" y="295" textAnchor="middle" fill="#f8fafc" fontSize="12">Reactor</text>

        {/* Boiler */}
        <g transform="translate(300,120)">
          <rect width="120" height="140" fill="url(#boilerGradient)" stroke="#1e293b" strokeWidth="2" />
          <text x="60" y="80" textAnchor="middle" fill="#f8fafc" fontSize="14">Boiler</text>
          {/* Steam bubbles */}
          <circle cx="40" cy="30" r="3" fill="#f8fafc" />
          <circle cx="60" cy="25" r="3" fill="#f8fafc" />
          <circle cx="80" cy="35" r="3" fill="#f8fafc" />
          <circle cx="70" cy="45" r="3" fill="#f8fafc" />
          <circle cx="50" cy="40" r="3" fill="#f8fafc" />
        </g>

        {/* Fire symbols */}
        <g transform="translate(320,280)">
          <text fontSize="24">🔥</text>
          <text x="30" fontSize="24">🔥</text>
          <text x="60" fontSize="24">🔥</text>
        </g>

        {/* Electrical Components */}
        {/* Steam Turbine */}
        <circle cx="550" cy="190" r="40" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
        <text x="550" y="160" textAnchor="middle" fill="#f8fafc" fontSize="14">Steam</text>
        <text x="550" y="175" textAnchor="middle" fill="#f8fafc" fontSize="14">Turbine</text>

        {/* Generator (realistic) */}
        <g transform="translate(600,140)">
          <rect x="0" y="8" width="120" height="100" rx="6" fill="#0f766e" stroke="#064e3b" strokeWidth="2" filter="url(#shadow)" />
          <g fill="#07585a" opacity="0.18">
            <rect x="12" y="24" width="96" height="6" rx="3" />
            <rect x="12" y="40" width="96" height="6" rx="3" />
          </g>
          <g transform="translate(60,80)">
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
              <circle cx="0" cy="0" r="26" fill="#065f46" stroke="#044c3a" strokeWidth="3" />
              <path d="M-16,0 L16,0" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
              <path d="M0,-16 L0,16" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            </g>
            <rect x="26" y="-4" width="32" height="8" rx="2" fill="#94a3b8" />
          </g>
          <text x="60" y="118" textAnchor="middle" fill="#d1fae5" fontSize="12">Generator</text>
        </g>

        {/* Power Converter (transformer-style icon) */}
        <g transform="translate(740,160)">
          <rect x="0" y="6" width="72" height="68" rx="6" fill="#0b5f8a" stroke="#074a6e" strokeWidth="2" filter="url(#shadow)" />
          <rect x="8" y="16" width="14" height="52" fill="#072f3a" rx="2" />
          <rect x="50" y="16" width="14" height="52" fill="#072f3a" rx="2" />
          <rect x="8" y="10" width="56" height="6" fill="#0f4652" />
          <g transform="translate(28,36)" stroke="#cfeafe" strokeWidth="2" fill="none">
            <path d="M-10,0 q2,-6 6,0 q2,6 6,0" />
          </g>
          <g transform="translate(52,36)" stroke="#fbbf24" strokeWidth="2" fill="none">
            <path d="M-10,0 q2,-6 6,0 q2,6 6,0" />
          </g>
          <circle cx="36" cy="36" r="26" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4,4">
            <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="36" y="84" textAnchor="middle" fill="#e6f8ff" fontSize="11">Power Conv.</text>
        </g>

        {/* Load */}
        <rect x="810" y="165" width="50" height="50" fill="#be123c" stroke="#9f1239" strokeWidth="2" />
        <text x="835" y="195" textAnchor="middle" fill="#f8fafc" fontSize="14">Load</text>

        {/* Connecting Lines */}
        <line x1="150" y1="190" x2="200" y2="190" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-biomass)" />
        <line x1="260" y1="190" x2="300" y2="190" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-biomass)" />
        <line x1="420" y1="190" x2="510" y2="190" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-biomass)" />
        <line x1="590" y1="190" x2="620" y2="190" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-biomass)" />
        <line x1="700" y1="190" x2="730" y2="190" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-biomass)" />
        <line x1="780" y1="190" x2="810" y2="190" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-biomass)" />
      </svg>
    </div>
  );
};

export const OTECBlockDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Aspect Headers */}
      <div className="flex justify-between px-12 text-lg font-semibold">
        <div className="text-slate-200">Mechanical aspect</div>
        <div className="text-slate-200">Electrical aspect</div>
      </div>

      <svg width="900" height="500" viewBox="0 0 900 500" className="w-full h-auto">
        <defs>
          <marker id="arrowhead-otec" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
          </marker>
          {/* Gradients */}
          <linearGradient id="warmWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="coldWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="heatExchangerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="turbineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          <linearGradient id="generatorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Vertical Divider Line */}
        <line x1="450" y1="50" x2="450" y2="450" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />

        {/* Mechanical Components */}
        {/* Warm Water Intake */}
        <g transform="translate(50,50)">
          <rect width="120" height="100" fill="url(#warmWaterGradient)" stroke="#fb923c" strokeWidth="2" filter="url(#shadow)" />
          <text x="60" y="45" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Warm</text>
          <text x="60" y="65" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Surface</text>
          <text x="60" y="85" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Water</text>
          {/* Animated Water waves */}
          <path d="M20,20 Q40,10 60,20 Q80,30 100,20">
            <animate attributeName="d" 
                    values="M20,20 Q40,10 60,20 Q80,30 100,20;
                           M20,25 Q40,15 60,25 Q80,35 100,25;
                           M20,20 Q40,10 60,20 Q80,30 100,20"
                    dur="3s"
                    repeatCount="indefinite"/>
            <animate attributeName="stroke-width"
                    values="2;3;2"
                    dur="3s"
                    repeatCount="indefinite"/>
            <animate attributeName="stroke"
                    values="#fbbf24;#fb923c;#fbbf24"
                    dur="3s"
                    repeatCount="indefinite"/>
          </path>
        </g>

        {/* Cold Water Intake */}
        <g transform="translate(50,300)">
          <rect width="120" height="100" fill="url(#coldWaterGradient)" stroke="#38bdf8" strokeWidth="2" filter="url(#shadow)" />
          <text x="60" y="45" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Cold</text>
          <text x="60" y="65" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Deep</text>
          <text x="60" y="85" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Water</text>
          {/* Animated Deep water indicator */}
          <g>
            <animate attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="2s"
                    repeatCount="indefinite"/>
            <path d="M30,20 L90,20" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M30,30 L90,30" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" />
          </g>
        </g>

        {/* Heat Exchanger (Evaporator) */}
        <g transform="translate(250,150)">
          <rect width="120" height="140" fill="url(#heatExchangerGradient)" stroke="#1e293b" strokeWidth="2" filter="url(#shadow)" />
          <text x="60" y="40" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Heat</text>
          <text x="60" y="60" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Exchanger</text>
          {/* Animated Heat exchanger coils */}
          <g>
            <animate attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="1.5s"
                    repeatCount="indefinite"/>
            <path d="M30,80 Q45,70 60,80 Q75,90 90,80" fill="none" stroke="#f8fafc" strokeWidth="2" />
            <path d="M30,100 Q45,90 60,100 Q75,110 90,100" fill="none" stroke="#f8fafc" strokeWidth="2" />
            <path d="M30,120 Q45,110 60,120 Q75,130 90,120" fill="none" stroke="#f8fafc" strokeWidth="2" />
          </g>
        </g>

        {/* Electrical Components */}
        {/* Steam Turbine with rotation animation */}
        <g transform="translate(500,150)">
          <circle cx="60" cy="70" r="40" fill="url(#turbineGradient)" stroke="#991b1b" strokeWidth="2" filter="url(#shadow)" />
          <g transform="translate(60,70)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="3s"
              repeatCount="indefinite"/>
            <path d="M-25,0 L25,0 M0,-25 L0,25" stroke="#f8fafc" strokeWidth="4" />
          </g>
          <text x="60" y="75" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Steam</text>
          <text x="60" y="95" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Turbine</text>
        </g>

        {/* Generator */}
        <g transform="translate(650,150)">
          <rect width="100" height="100" fill="#059669" stroke="#047857" strokeWidth="2" filter="url(#shadow)" />
          <circle cx="50" cy="50" r="30" fill="#047857" stroke="#065f46" strokeWidth="2">
            <animate attributeName="r"
                    values="30;32;30"
                    dur="2s"
                    repeatCount="indefinite"/>
          </circle>
          <g transform="translate(50,50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="4s"
              repeatCount="indefinite"/>
            <text y="5" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">G</text>
          </g>
          <text x="50" y="130" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Generator</text>
        </g>

        {/* Load with power indication */}
        <g transform="translate(800,150)">
          <rect width="70" height="100" fill="#be123c" stroke="#9f1239" strokeWidth="2" filter="url(#shadow)" />
          <text x="35" y="85" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Load</text>
          {/* Power indicator */}
          <g transform="translate(35,50)">
            <animate attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="1s"
                    repeatCount="indefinite"/>
            <path d="M0,0 L8,-15 L-8,0 L8,15 Z" fill="#fbbf24" />
          </g>
        </g>

        {/* Flow Lines with Animation */}
        <g>
          {/* Animated flow lines */}
          <path d="M170,100 L250,220">
            <animate attributeName="stroke-dasharray"
                    values="5,5;10,10;5,5"
                    dur="2s"
                    repeatCount="indefinite"/>
            <animate attributeName="stroke"
                    values="#475569;#64748b;#475569"
                    dur="2s"
                    repeatCount="indefinite"/>
          </path>
          <path d="M170,350 L250,220">
            <animate attributeName="stroke-dasharray"
                    values="5,5;10,10;5,5"
                    dur="2s"
                    repeatCount="indefinite"/>
            <animate attributeName="stroke"
                    values="#475569;#64748b;#475569"
                    dur="2s"
                    repeatCount="indefinite"/>
          </path>
          <line x1="370" y1="220" x2="460" y2="220" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-otec)">
            <animate attributeName="stroke-width"
                    values="2;3;2"
                    dur="1.5s"
                    repeatCount="indefinite"/>
          </line>
          <line x1="600" y1="220" x2="650" y2="200" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-otec)">
            <animate attributeName="stroke-width"
                    values="2;3;2"
                    dur="1.5s"
                    repeatCount="indefinite"/>
          </line>
          <line x1="750" y1="200" x2="800" y2="200" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead-otec)">
            <animate attributeName="stroke-width"
                    values="2;3;2"
                    dur="1.5s"
                    repeatCount="indefinite"/>
          </line>
        </g>
      </svg>
    </div>
  );
};