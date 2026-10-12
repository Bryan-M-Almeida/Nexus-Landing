import SectionHead from './SectionHead.jsx'

const PARTS = [
  { k: 'N', hl: 'N', rest: 'etworked', desc: 'Connected to external APIs and services — weather, calendar, news, tools.' },
  { k: 'EX', hl: 'Ex', rest: 'periential', desc: 'Learns from experience: every interaction refines what it knows about you.' },
  { k: 'I', hl: 'I', rest: 'ntelligence &', desc: 'Contextual reasoning, not generic answers. It remembers, connects and anticipates.', dim: true },
  { k: 'U', hl: 'U', rest: 'ser', desc: 'User-centered: tone, priorities and modules shaped around your profile.' },
  { k: 'S', hl: 'S', rest: 'ystem', desc: 'A modular system built to grow — all the way to running your smart home.' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead code="01 // IDENTITY" title="Not a chatbot. A system that knows you.">
        NEXUS is an adaptive assistant: it starts with the basics about you and evolves with every
        conversation, keeping real context across sessions.
      </SectionHead>

      <div className="acronym">
        {PARTS.map((p, i) => (
          <article className={`acronym-item reveal ${p.dim ? 'is-dim' : ''}`} key={p.k} style={{ '--i': i }}>
            <span className="acronym-letter">{p.k}</span>
            <h3><b>{p.hl}</b>{p.rest}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
