import SectionHead from './SectionHead.jsx'

const STEPS = [
  { n: '01', t: 'Onboarding form', d: 'Tell it the essentials: name, profession, routine, interests and goals. Takes less than 2 minutes.' },
  { n: '02', t: 'Base profile', d: 'NEXUS builds your profile, picks the right tone of voice and enables the modules for your field.' },
  { n: '03', t: 'Continuous adaptation', d: 'Every interaction feeds its persistent memory. The more you use it, the better it understands you.' },
]

const FIELDS = [
  ['NAME', 'Alex Martins'],
  ['PROFESSION', 'Full-Stack Developer'],
  ['ROUTINE', 'Starts at 9 AM · deep focus in the afternoon'],
  ['INTERESTS', 'AI, games, coffee'],
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <SectionHead code="02 // PROTOCOL" title="From one form to an AI that's truly yours">
        A simple flow going in, an increasingly personal AI coming out.
      </SectionHead>

      <div className="how">
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step reveal" key={s.n} style={{ '--i': i }}>
              <span className="step-n mono">{s.n}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="panel form-mock reveal" aria-label="Sample onboarding form">
          <div className="panel-bar mono">
            <span>NEXUS://onboarding</span>
            <span className="live"><i /> SYNCING</span>
          </div>
          {FIELDS.map(([label, value], i) => (
            <div className="mock-field" key={label} style={{ '--i': i }}>
              <span className="mono">{label}</span>
              <div className="mock-input">{value}</div>
            </div>
          ))}
          <div className="mock-progress">
            <div className="mono"><span>NEURAL PROFILE</span><span className="pct">100%</span></div>
            <div className="bar"><span /></div>
          </div>
          <p className="mock-reply mono">
            <span className="tag">NEXUS&gt;</span> Nice to meet you, Alex. I've enabled the code and calendar
            modules. Want me to review your PRs every morning?
          </p>
        </div>
      </div>
    </section>
  )
}
