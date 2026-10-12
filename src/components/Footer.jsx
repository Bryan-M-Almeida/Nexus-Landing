import { GITHUB_URL } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="mono">TEAM N<i>.</i>E<i>.</i>X<i>.</i>U<i>.</i>S · HACKATHON {new Date().getFullYear()}</span>
      <a className="mono" href={GITHUB_URL} target="_blank" rel="noreferrer">github.com/Bryan-M-Almeida/nexusAI</a>
    </footer>
  )
}
