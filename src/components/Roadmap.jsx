import SectionHead from './SectionHead.jsx'

const PHASES = [
  {
    n: 'PHASE 01', t: 'Prototype', status: 'IN DEVELOPMENT', current: true,
    items: ['Onboarding form', 'Base user profile', 'Persistent memory', 'API integrations'],
  },
  {
    n: 'PHASE 02', t: 'Professional profiles', status: 'NEXT',
    items: ['Field-specific modules', 'Per-profile tone of voice', 'Proactive routines and reminders'],
  },
  {
    n: 'PHASE 03', t: 'Smart home', status: 'FUTURE',
    items: ['IoT device integration', 'Environment automations', 'Voice commands'],
  },
]

export default function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <SectionHead code="05 // ROADMAP" title="Where NEXUS is headed" />
      <ol className="roadmap">
        {PHASES.map((ph, i) => (
          <li className={`phase panel reveal ${ph.current ? 'is-current' : ''}`} key={ph.n} style={{ '--i': i }}>
            <div className="phase-top mono">
              <span>{ph.n}</span>
              <span className="phase-status">{ph.status}</span>
            </div>
            <h3>{ph.t}</h3>
            <ul>
              {ph.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
