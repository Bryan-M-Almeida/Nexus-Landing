import SectionHead from './SectionHead.jsx'

const PHASES = [
  {
    n: 'FASE 01', t: 'Protótipo', status: 'EM DESENVOLVIMENTO', current: true,
    items: ['Formulário de onboarding', 'Perfil base do usuário', 'Memória persistente', 'Integração com APIs'],
  },
  {
    n: 'FASE 02', t: 'Perfis profissionais', status: 'PRÓXIMO',
    items: ['Módulos especializados por área', 'Tom de voz por perfil', 'Rotinas e lembretes proativos'],
  },
  {
    n: 'FASE 03', t: 'Casa inteligente', status: 'FUTURO',
    items: ['Integração com dispositivos IoT', 'Automações de ambiente', 'Comandos por voz'],
  },
]

export default function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <SectionHead code="05 // ROADMAP" title="Para onde o NEXUS vai" />
      <ol className="roadmap">
        {PHASES.map((ph, i) => (
          <li className={`phase panel reveal ${ph.current ? 'is-current' : ''}`} key={ph.n} style={{ '--i': i }}>
            <div className="phase-top mono">
              <span>{ph.n}</span>
              <span className="phase-status">{ph.status}</span>
            </div>
            <h3>{ph.t}</h3>
            <ul>
              {ph.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
