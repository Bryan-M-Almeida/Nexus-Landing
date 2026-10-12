import { GITHUB_URL } from '../config.js'
import { GithubIcon } from './Hero.jsx'

export default function Nav({ visible }) {
  return (
    <header className={`nav ${visible ? 'is-visible' : ''}`}>
      <a href="#top" className="nav-logo" aria-label="NEXUS — home">
        N<i>.</i>E<i>.</i>X<i>.</i>U<i>.</i>S
      </a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#about">About</a>
        <a href="#how-it-works">How it works</a>
        <a href="#profiles">Profiles</a>
        <a href="#roadmap">Roadmap</a>
      </nav>
      <a className="btn btn-sm btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
        <GithubIcon /> <span className="hide-sm">GitHub</span>
      </a>
    </header>
  )
}
