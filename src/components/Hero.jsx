import { useEffect, useState } from 'react'
import HudRings from './HudRings.jsx'
import NexusWordmark from './NexusWordmark.jsx'
import { GITHUB_URL } from '../config.js'

// Fases da intro: 0 = aros girando · 1 = nome entra · 2 = conteúdo liberado
const TIMELINE = [1700, 3300]

function Connector({ side }) {
  return (
    <svg
      className={`hero-connector ${side}`}
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M100 17 H72 L62 6 H0" />
      <path d="M100 23 H72 L62 34 H0" />
      <path className="accent" d="M100 20 H90" />
    </svg>
  )
}

export default function Hero({ onIntroDone }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPhase(2)
      onIntroDone?.()
      return
    }
    const t1 = setTimeout(() => setPhase(1), TIMELINE[0])
    const t2 = setTimeout(() => {
      setPhase(2)
      onIntroDone?.()
    }, TIMELINE[1])
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onIntroDone])

  return (
    <section className={`hero phase-${phase}`} id="top">
      <div className="hud-corners" aria-hidden="true">
        <span className="tl" /><span className="tr" /><span className="bl" /><span className="br" />
      </div>
      <div className="hud-sideticks left" aria-hidden="true" />
      <div className="hud-sideticks right" aria-hidden="true" />

      <div className="hero-stage">
        <Connector side="left" />
        <Connector side="right" />
        <HudRings />

        <div className="hero-title">
          <p className="hero-team">TEAM</p>
          <NexusWordmark show={phase >= 1} />
          <p className="hero-acronym">
            Networked Experiential Intelligence &amp; User System
          </p>
        </div>

        <div className="hero-status mono" aria-hidden="true">
          <span className="dot" /> {phase < 1 ? 'INICIALIZANDO SISTEMAS…' : 'SISTEMA ONLINE'}
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-lead">
          A assistente de IA que <strong>aprende quem você é</strong>. Inspirada no J.A.R.V.I.S,
          com memória persistente, acesso a APIs e perfis adaptados à sua profissão.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubIcon /> Ver no GitHub
          </a>
          <a className="btn btn-ghost" href="#como-funciona">
            Como funciona
          </a>
        </div>
      </div>

      <a className="scroll-cue" href="#sobre" aria-label="Rolar para a próxima seção">
        <span />
      </a>
    </section>
  )
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}
