import { useEffect, useState } from 'react'
import SectionHead from './SectionHead.jsx'

const PROFILES = [
  {
    id: 'dev', label: 'Developer',
    tone: 'Technical · direct',
    msg: "Good morning, Alex. Last night's build passed and 2 PRs are waiting for your review. Want a summary of the changes?",
    modules: ['GitHub API', 'Tech docs', 'Calendar', 'Focus/Pomodoro'],
  },
  {
    id: 'med', label: 'Healthcare',
    tone: 'Precise · careful',
    msg: 'Your shift starts at 7 PM. I pulled 3 new papers on the topic you were researching yesterday.',
    modules: ['Shift schedule', 'Research papers', 'Reminders', 'Quick notes'],
  },
  {
    id: 'stu', label: 'Student',
    tone: 'Didactic · encouraging',
    msg: 'Calculus exam in 3 days. I built a 40-minute daily review plan. Shall we start with derivatives?',
    modules: ['Calendar', 'Flashcards', 'Summaries', 'Pomodoro'],
  },
  {
    id: 'des', label: 'Designer',
    tone: 'Visual · creative',
    msg: "The client's feedback just came in. I also saved 4 new references to the project moodboard.",
    modules: ['Moodboard', 'Palettes', 'Email', 'Deadlines'],
  },
  {
    id: 'biz', label: 'Entrepreneur',
    tone: 'Objective · strategic',
    msg: "Investor meeting at 3 PM. I've prepared this week's numbers and the 3 points you wanted to highlight.",
    modules: ['Finance', 'CRM', 'Email', 'Industry news'],
  },
]

function useTypewriter(text, speed = 18) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(text)
      return
    }
    setOut('')
    let i = 0
    const id = setInterval(() => {
      i++
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return out
}

export default function Profiles() {
  const [active, setActive] = useState(PROFILES[0].id)
  const p = PROFILES.find((x) => x.id === active)
  const typed = useTypewriter(p.msg)

  return (
    <section className="section" id="profiles">
      <SectionHead code="04 // PROFILES" title="One AI, many versions of you">
        NEXUS changes its behavior based on your profession. Pick a profile and see how it responds.
      </SectionHead>

      <div className="profiles reveal">
        <div className="profile-tabs" role="tablist" aria-label="Professional profiles">
          {PROFILES.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={x.id === active}
              className={`profile-tab ${x.id === active ? 'is-active' : ''}`}
              onClick={() => setActive(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>

        <div className="panel profile-screen" role="tabpanel">
          <div className="panel-bar mono">
            <span>ACTIVE PROFILE: {p.label.toUpperCase()}</span>
            <span>TONE: {p.tone}</span>
          </div>
          <p className="profile-msg mono" aria-live="polite">
            <span className="tag">NEXUS&gt;</span> {typed}<span className="caret" />
          </p>
          <div className="profile-modules">
            <span className="mono label">LOADED MODULES</span>
            <ul>
              {p.modules.map((m) => <li key={m} className="mono">{m}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
