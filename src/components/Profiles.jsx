import { useEffect, useState } from 'react'
import SectionHead from './SectionHead.jsx'

const PROFILES = [
  {
    id: 'dev', label: 'Desenvolvedor',
    tone: 'Técnico · direto',
    msg: 'Bom dia, Alex. O build da madrugada passou e 2 PRs aguardam sua revisão. Quer um resumo das mudanças?',
    modules: ['GitHub API', 'Docs técnicas', 'Agenda', 'Foco/Pomodoro'],
  },
  {
    id: 'med', label: 'Saúde',
    tone: 'Preciso · cuidadoso',
    msg: 'Seu plantão começa às 19h. Separei 3 artigos novos sobre o tema que você pesquisou ontem.',
    modules: ['Agenda de plantões', 'Artigos científicos', 'Lembretes', 'Notas rápidas'],
  },
  {
    id: 'stu', label: 'Estudante',
    tone: 'Didático · motivador',
    msg: 'Prova de Cálculo em 3 dias. Montei um plano de revisão de 40 min por dia. Começamos por derivadas?',
    modules: ['Calendário', 'Flashcards', 'Resumos', 'Pomodoro'],
  },
  {
    id: 'des', label: 'Designer',
    tone: 'Visual · criativo',
    msg: 'O feedback do cliente chegou. Também separei 4 referências novas para o moodboard do projeto.',
    modules: ['Moodboard', 'Paletas', 'E-mail', 'Prazos'],
  },
  {
    id: 'biz', label: 'Empreendedor',
    tone: 'Objetivo · estratégico',
    msg: 'Reunião com o investidor às 15h. Preparei os números da semana e os 3 pontos que você quis destacar.',
    modules: ['Finanças', 'CRM', 'E-mail', 'Notícias do setor'],
  },
]

function useTypewriter(text, speed = 18) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(text)
      return
    }
    setOut('')
    let i = 0
    const id = setInterval(() => {
      i++
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return out
}

export default function Profiles() {
  const [active, setActive] = useState(PROFILES[0].id)
  const p = PROFILES.find((x) => x.id === active)
  const typed = useTypewriter(p.msg)

  return (
    <section className="section" id="perfis">
      <SectionHead code="04 // PERFIS" title="Uma IA, muitas versões de você">
        O NEXUS muda de comportamento conforme sua profissão. Escolha um perfil e veja como ele responde.
      </SectionHead>

      <div className="profiles reveal">
        <div className="profile-tabs" role="tablist" aria-label="Perfis profissionais">
          {PROFILES.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={x.id === active}
              className={`profile-tab ${x.id === active ? 'is-active' : ''}`}
              onClick={() => setActive(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>

        <div className="panel profile-screen" role="tabpanel">
          <div className="panel-bar mono">
            <span>PERFIL ATIVO: {p.label.toUpperCase()}</span>
            <span>TOM: {p.tone}</span>
          </div>
          <p className="profile-msg mono" aria-live="polite">
            <span className="tag">NEXUS&gt;</span> {typed}<span className="caret" />
          </p>
          <div className="profile-modules">
            <span className="mono label">MÓDULOS CARREGADOS</span>
            <ul>
              {p.modules.map((m) => <li key={m} className="mono">{m}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
