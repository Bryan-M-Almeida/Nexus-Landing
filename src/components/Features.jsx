import { useI18n } from '../i18n/I18nProvider.jsx'
import SectionHead from './SectionHead.jsx'

const ICONS = {
  memory: <path d="M4 7h16v10H4zM8 7V4m4 3V4m4 3V4M8 20v-3m4 3v-3m4 3v-3M8 11h8v2H8z" />,
  api: <path d="M7 8 3 12l4 4m10-8 4 4-4 4M14 5l-4 14" />,
  profile: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0M18 4l2 2-2 2" />,
  adapt: <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  home: <path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6" />,
}

// Same order as `features.items` in the translations
const FEATURES = [
  { icon: 'memory' },
  { icon: 'api' },
  { icon: 'profile' },
  { icon: 'adapt' },
  { icon: 'chat' },
  { icon: 'home', soon: true },
]

export default function Features() {
  const { t } = useI18n()
  return (
    <section className="section" id="features">
      <SectionHead code={t.features.code} title={t.features.title} />
      <div className="features">
        {FEATURES.map((f, i) => (
          <article className={`feature panel reveal ${f.soon ? 'is-soon' : ''}`} key={f.icon} style={{ '--i': i % 3 }}>
            <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true">{ICONS[f.icon]}</svg>
            <h3>
              {t.features.items[i].t}
              {f.soon && <span className="badge mono">{t.features.soon}</span>}
            </h3>
            <p>{t.features.items[i].d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
