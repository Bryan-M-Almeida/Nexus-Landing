import { useI18n } from '../i18n/I18nProvider.jsx'
import SectionHead from './SectionHead.jsx'

export default function HowItWorks() {
  const { t } = useI18n()
  return (
    <section className="section" id="how-it-works">
      <SectionHead code={t.how.code} title={t.how.title}>
        {t.how.sub}
      </SectionHead>

      <div className="how">
        <ol className="steps">
          {t.how.steps.map((s, i) => (
            <li className="step reveal" key={i} style={{ '--i': i }}>
              <span className="step-n mono">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="panel form-mock reveal" aria-label={t.how.formLabel}>
          <div className="panel-bar mono">
            <span>NEXUS://onboarding</span>
            <span className="live"><i /> {t.how.syncing}</span>
          </div>
          {t.how.fields.map(([label, value], i) => (
            <div className="mock-field" key={i} style={{ '--i': i }}>
              <span className="mono">{label}</span>
              <div className="mock-input">{value}</div>
            </div>
          ))}
          <div className="mock-progress">
            <div className="mono"><span>{t.how.neural}</span><span className="pct">100%</span></div>
            <div className="bar"><span /></div>
          </div>
          <p className="mock-reply mono">
            <span className="tag">NEXUS&gt;</span> {t.how.reply}
          </p>
        </div>
      </div>
    </section>
  )
}
