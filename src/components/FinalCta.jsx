import HudRings from './HudRings.jsx'
import NexusWordmark from './NexusWordmark.jsx'
import { GithubIcon } from './Hero.jsx'
import { GITHUB_URL } from '../config.js'

export default function FinalCta() {
  return (
    <section className="final-cta" id="cta">
      <div className="final-rings" aria-hidden="true"><HudRings /></div>
      <div className="final-inner reveal">
        <p className="eyebrow mono"><span>06 // INICIAR</span></p>
        <h2>Pronto para ativar o</h2>
        <NexusWordmark as="p" className="wordmark-sm" />
        <p className="section-sub">
          O código está aberto. Explore o repositório, deixe sua estrela e acompanhe a evolução do projeto no Hackathon.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubIcon /> Acessar repositório
          </a>
          <a className="btn btn-ghost btn-lg" href={`${GITHUB_URL}/stargazers`} target="_blank" rel="noreferrer">
            ★ Deixar uma estrela
          </a>
        </div>
      </div>
    </section>
  )
}
