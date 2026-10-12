import { LANGUAGES } from '../i18n/translations.js'
import { useI18n } from '../i18n/I18nProvider.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          title={l.name}
          aria-label={l.name}
          aria-pressed={lang === l.code}
          className={lang === l.code ? 'is-active' : ''}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
