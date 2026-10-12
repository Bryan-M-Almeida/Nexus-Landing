import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider.jsx'
import SectionHead from './SectionHead.jsx'

// Profile ids, in tab order; their copy lives in `profiles.list` in the translations
const PROFILE_IDS = ['dev', 'med', 'stu', 'des', 'biz']

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
  const { t } = useI18n()
  const [active, setActive] = useState(PROFILE_IDS[0])
  const p = t.profiles.list[active]
  const typed = useTypewriter(p.msg)

  return (
    <section className="section" id="profiles">
      <SectionHead code={t.profiles.code} title={t.profiles.title}>
        {t.profiles.sub}
      </SectionHead>

      <div className="profiles reveal">
        <div className="profile-tabs" role="tablist" aria-label={t.profiles.tabsLabel}>
          {PROFILE_IDS.map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={id === active}
              className={`profile-tab ${id === active ? 'is-active' : ''}`}
              onClick={() => setActive(id)}
            >
              {t.profiles.list[id].label}
            </button>
          ))}
        </div>

        <div className="panel profile-screen" role="tabpanel">
          <div className="panel-bar mono">
            <span>{t.profiles.active}: {p.label.toUpperCase()}</span>
            <span>{t.profiles.tone}: {p.tone}</span>
          </div>
          <p className="profile-msg mono" aria-live="polite">
            <span className="tag">NEXUS&gt;</span> {typed}<span className="caret" />
          </p>
          <div className="profile-modules">
            <span className="mono label">{t.profiles.modules}</span>
            <ul>
              {p.modules.map((m) => <li key={m} className="mono">{m}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
