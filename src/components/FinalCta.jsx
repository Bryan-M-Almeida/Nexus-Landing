import { GITHUB_URL } from '../config.js'
import { useI18n } from '../i18n/I18nProvider.jsx'
import { GithubIcon } from './Hero.jsx'
import HudRings from './HudRings.jsx'
import NexusWordmark from './NexusWordmark.jsx'

export default function FinalCta() {
  const { t } = useI18n()
  return (
    <section className="final-cta" id="cta">
      <div className="final-rings" aria-hidden="true"><HudRings /></div>
      <div className="final-inner reveal">
        <p className="eyebrow mono"><span>{t.cta.code}</span></p>
        <h2>{t.cta.title}</h2>
        <NexusWordmark as="p" className="wordmark-sm" />
        <p className="section-sub">{t.cta.sub}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubIcon /> {t.cta.repo}
          </a>
          <a className="btn btn-ghost btn-lg" href={`${GITHUB_URL}/stargazers`} target="_blank" rel="noreferrer">
            ★ {t.cta.star}
          </a>
        </div>
      </div>
    </section>
  )
}
