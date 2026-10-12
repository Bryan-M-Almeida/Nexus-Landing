import SectionHead from './SectionHead.jsx'

const ICONS = {
  memory: <path d="M4 7h16v10H4zM8 7V4m4 3V4m4 3V4M8 20v-3m4 3v-3m4 3v-3M8 11h8v2H8z" />,
  api: <path d="M7 8 3 12l4 4m10-8 4 4-4 4M14 5l-4 14" />,
  profile: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0M18 4l2 2-2 2" />,
  adapt: <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  home: <path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6" />,
}

const FEATURES = [
  { icon: 'memory', t: 'Memória persistente', d: 'Lembra preferências, contexto e conversas anteriores entre sessões — sem você repetir nada.' },
  { icon: 'api', t: 'Acesso a APIs', d: 'Busca dados reais: clima, agenda, notícias, e-mail e as ferramentas que você já usa.' },
  { icon: 'profile', t: 'Perfil por profissão', d: 'Vocabulário, prioridades e módulos ajustados à sua área de atuação.' },
  { icon: 'adapt', t: 'Aprendizado adaptativo', d: 'Ajusta respostas com base nos seus hábitos, horários e feedback.' },
  { icon: 'chat', t: 'Assistente proativo', d: 'Não espera você perguntar: sugere, lembra e avisa no momento certo.' },
  { icon: 'home', t: 'Casa inteligente', d: 'Luzes, clima e dispositivos sob comando do NEXUS.', soon: true },
]

export default function Features() {
  return (
    <section className="section" id="recursos">
      <SectionHead code="03 // MÓDULOS" title="Capacidades do sistema" />
      <div className="features">
        {FEATURES.map((f, i) => (
          <article className={`feature panel reveal ${f.soon ? 'is-soon' : ''}`} key={f.t} style={{ '--i': i % 3 }}>
            <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true">{ICONS[f.icon]}</svg>
            <h3>{f.t}{f.soon && <span className="badge mono">EM BREVE</span>}</h3>
            <p>{f.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
