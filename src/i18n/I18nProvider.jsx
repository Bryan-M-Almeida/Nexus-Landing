import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { LANGUAGES, TRANSLATIONS } from './translations.js'

const STORAGE_KEY = 'nexus-lang'
const CODES = LANGUAGES.map((l) => l.code)
const I18nContext = createContext(null)

function match(value) {
  const code = value?.toLowerCase().slice(0, 2)
  return CODES.includes(code) ? code : null
}

// Priority: ?lang= in the URL → last choice → browser language → English
function detectLanguage() {
  const fromUrl = match(new URLSearchParams(window.location.search).get('lang'))
  if (fromUrl) return fromUrl
  try {
    const stored = match(localStorage.getItem(STORAGE_KEY))
    if (stored) return stored
  } catch {}
  for (const l of navigator.languages ?? [navigator.language]) {
    const found = match(l)
    if (found) return found
  }
  return 'en'
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  const setLang = useCallback((code) => {
    setLangState(code)
    try { localStorage.setItem(STORAGE_KEY, code) } catch {}
    const url = new URL(window.location.href)
    url.searchParams.set('lang', code)
    window.history.replaceState(null, '', url)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', TRANSLATIONS[lang].meta.description)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang, setLang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
