import { GITHUB_URL } from '../config.js'
import { useI18n } from '../i18n/I18nProvider.jsx'
import { GithubIcon } from './Hero.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function Nav({ visible }) {
  const { t } = useI18n()
  return (
    <header className={`nav ${visible ? 'is-visible' : ''}`}>
      <a href="#top" className="nav-logo" aria-label={t.nav.home}>
        N<i>.</i>E<i>.</i>X<i>.</i>U<i>.</i>S
      </a>
      <nav className="nav-links" aria-label={t.nav.sections}>
        <a href="#about">{t.nav.about}</a>
        <a href="#how-it-works">{t.nav.how}</a>
        <a href="#profiles">{t.nav.profiles}</a>
        <a href="#roadmap">{t.nav.roadmap}</a>
      </nav>
      <div className="nav-actions">
        <LanguageSwitcher />
        <a className="btn btn-sm btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
          <GithubIcon /> <span className="hide-sm">GitHub</span>
        </a>
      </div>
    </header>
  )
}
