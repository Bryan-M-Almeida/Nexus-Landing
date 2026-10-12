import HudRings from './HudRings.jsx'
import NexusWordmark from './NexusWordmark.jsx'
import { GithubIcon } from './Hero.jsx'
import { GITHUB_URL } from '../config.js'

export default function FinalCta() {
  return (
    <section className="final-cta" id="cta">
      <div className="final-rings" aria-hidden="true"><HudRings /></div>
      <div className="final-inner reveal">
        <p className="eyebrow mono"><span>06 // INITIALIZE</span></p>
        <h2>Ready to activate</h2>
        <NexusWordmark as="p" className="wordmark-sm" />
        <p className="section-sub">
          The code is open. Explore the repository, leave a star and follow the project as it evolves during the Hackathon.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubIcon /> View repository
          </a>
          <a className="btn btn-ghost btn-lg" href={`${GITHUB_URL}/stargazers`} target="_blank" rel="noreferrer">
            ★ Leave a star
          </a>
        </div>
      </div>
    </section>
  )
}
