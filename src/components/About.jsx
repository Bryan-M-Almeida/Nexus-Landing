import { useI18n } from '../i18n/I18nProvider.jsx'
import SectionHead from './SectionHead.jsx'

// The acronym itself stays in English in every language
const PARTS = [
  { k: 'N', hl: 'N', rest: 'etworked' },
  { k: 'EX', hl: 'Ex', rest: 'periential' },
  { k: 'I', hl: 'I', rest: 'ntelligence &', dim: true },
  { k: 'U', hl: 'U', rest: 'ser' },
  { k: 'S', hl: 'S', rest: 'ystem' },
]

export default function About() {
  const { t } = useI18n()
  return (
    <section className="section" id="about">
      <SectionHead code={t.about.code} title={t.about.title}>
        {t.about.sub}
      </SectionHead>

      <div className="acronym">
        {PARTS.map((p, i) => (
          <article className={`acronym-item reveal ${p.dim ? 'is-dim' : ''}`} key={p.k} style={{ '--i': i }}>
            <span className="acronym-letter">{p.k}</span>
            <h3><b>{p.hl}</b>{p.rest}</h3>
            <p>{t.about.parts[i]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
