import { GITHUB_URL } from '../config.js'
import { GithubIcon } from './Hero.jsx'

export default function Nav({ visible }) {
  return (
    <header className={`nav ${visible ? 'is-visible' : ''}`}>
      <a href="#top" className="nav-logo" aria-label="NEXUS — início">
        N<i>.</i>E<i>.</i>X<i>.</i>U<i>.</i>S
      </a>
      <nav className="nav-links" aria-label="Seções">
        <a href="#sobre">Sobre</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#perfis">Perfis</a>
        <a href="#roadmap">Roadmap</a>
      </nav>
      <a className="btn btn-sm btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
        <GithubIcon /> <span className="hide-sm">GitHub</span>
      </a>
    </header>
  )
}
