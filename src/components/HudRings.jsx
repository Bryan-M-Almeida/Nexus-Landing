const C = 300 // centro do viewBox 600x600

// Divide a circunferência em `n` segmentos, cada um preenchido em `fill` (0–1)
function dash(r, n, fill) {
  const seg = (2 * Math.PI * r) / n
  return `${seg * fill} ${seg * (1 - fill)}`
}

// Um arco único de `len` (0–1) da circunferência
function arc(r, len) {
  const circ = 2 * Math.PI * r
  return `${circ * len} ${circ * (1 - len)}`
}

function Ring({ delay = 0, dur = 30, reverse = false, sway = false, children }) {
  return (
    <g className="ring-boot" style={{ '--delay': `${delay}s` }}>
      <g
        className={sway ? 'ring-sway' : 'ring-spin'}
        style={{ '--dur': `${dur}s`, '--dir': reverse ? 'reverse' : 'normal' }}
      >
        {children}
      </g>
    </g>
  )
}

export default function HudRings({ className = '' }) {
  return (
    <svg className={`hud-rings ${className}`} viewBox="0 0 600 600" aria-hidden="true">
      <defs>
        <radialGradient id="ringCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0d1a2b" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#060b13" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#030508" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx={C} cy={C} r="250" fill="url(#ringCore)" className="ring-core" />

      {/* Retícula vertical */}
      <g className="ring-boot crosshair" style={{ '--delay': '0.9s' }}>
        <line x1={C} y1="0" x2={C} y2="34" className="st-red" />
        <line x1={C} y1="566" x2={C} y2="600" className="st-red" />
        <line x1={C} y1="62" x2={C} y2="78" className="st-blue-bright" />
        <line x1={C} y1="522" x2={C} y2="538" className="st-red" />
        <line x1="286" y1="72" x2="314" y2="72" className="st-red thin" />
        <line x1="286" y1="528" x2="314" y2="528" className="st-red thin" />
      </g>

      {/* 1 · anel externo pontilhado */}
      <Ring delay={0} dur={140}>
        <circle cx={C} cy={C} r="292" className="st-faint" strokeDasharray="2 7" />
      </Ring>

      {/* 2 · faixas largas translúcidas */}
      <Ring delay={0.15} dur={48} reverse>
        <circle cx={C} cy={C} r="272" className="st-band" strokeDasharray={dash(272, 4, 0.72)} />
        <circle cx={C} cy={C} r="279" className="st-faint" />
      </Ring>

      {/* 3 · anel fino com arco vermelho */}
      <Ring delay={0.3} dur={20}>
        <circle cx={C} cy={C} r="258" className="st-blue thin" />
        <circle cx={C} cy={C} r="258" className="st-red bold" strokeDasharray={arc(258, 0.06)} filter="url(#glow)" />
        <circle cx={C} cy={C} r="258" className="st-red bold" strokeDasharray={arc(258, 0.02)} strokeDashoffset={-810} />
      </Ring>

      {/* 4 · arcos azuis brilhantes topo/base */}
      <Ring delay={0.45} dur={28} reverse>
        <circle cx={C} cy={C} r="244" className="st-blue-bright bold" strokeDasharray={dash(244, 2, 0.17)} filter="url(#glow)" />
        <circle cx={C} cy={C} r="244" className="st-red" strokeDasharray={dash(244, 2, 0.045)} strokeDashoffset={-140} />
      </Ring>

      {/* 5 · marcações (ticks) */}
      <Ring delay={0.6} dur={90}>
        <circle cx={C} cy={C} r="230" className="st-ticks" strokeDasharray={dash(230, 120, 0.12)} />
        <circle cx={C} cy={C} r="224" className="st-faint" />
      </Ring>

      {/* 6 · colchetes vermelhos laterais (oscilam) */}
      <Ring delay={0.75} dur={7} sway>
        <circle
          cx={C} cy={C} r="210"
          className="st-red bold"
          strokeDasharray={dash(210, 2, 0.11)}
          strokeDashoffset={(Math.PI * 210 * 0.11) / 2}
          filter="url(#glow)"
        />
      </Ring>

      {/* 7 · anel interno */}
      <Ring delay={0.9} dur={60} reverse>
        <circle cx={C} cy={C} r="196" className="st-blue thin" strokeDasharray={dash(196, 3, 0.9)} />
      </Ring>

      <g className="ring-boot" style={{ '--delay': '1s' }}>
        <circle cx={C} cy={C} r="168" className="st-faint" />
      </g>
    </svg>
  )
}
