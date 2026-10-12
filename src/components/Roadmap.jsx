import { useI18n } from '../i18n/I18nProvider.jsx'
import SectionHead from './SectionHead.jsx'

export default function Roadmap() {
  const { t } = useI18n()
  return (
    <section className="section" id="roadmap">
      <SectionHead code={t.roadmap.code} title={t.roadmap.title} />
      <ol className="roadmap">
        {t.roadmap.phases.map((ph, i) => (
          <li className={`phase panel reveal ${i === 0 ? 'is-current' : ''}`} key={i} style={{ '--i': i }}>
            <div className="phase-top mono">
              <span>{t.roadmap.phase} {String(i + 1).padStart(2, '0')}</span>
              <span className="phase-status">{ph.status}</span>
            </div>
            <h3>{ph.t}</h3>
            <ul>
              {ph.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
