import SectionHead from './SectionHead.jsx'

const STEPS = [
  { n: '01', t: 'Formulário inicial', d: 'Você conta o essencial: nome, profissão, rotina, interesses e objetivos. Leva menos de 2 minutos.' },
  { n: '02', t: 'Perfil base', d: 'O NEXUS monta seu perfil, escolhe o tom de voz e ativa os módulos certos para a sua área.' },
  { n: '03', t: 'Adaptação contínua', d: 'Cada interação alimenta a memória persistente. Quanto mais você usa, mais ele te entende.' },
]

const FIELDS = [
  ['NOME', 'Alex Martins'],
  ['PROFISSÃO', 'Desenvolvedor(a) Full-Stack'],
  ['ROTINA', 'Começa às 9h · foco à tarde'],
  ['INTERESSES', 'IA, games, café'],
]

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <SectionHead code="02 // PROTOCOLO" title="Do formulário a uma IA que é só sua">
        Um fluxo simples na entrada, uma IA cada vez mais pessoal na saída.
      </SectionHead>

      <div className="how">
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step reveal" key={s.n} style={{ '--i': i }}>
              <span className="step-n mono">{s.n}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="panel form-mock reveal" aria-label="Exemplo do formulário de perfil">
          <div className="panel-bar mono">
            <span>NEXUS://onboarding</span>
            <span className="live"><i /> SINCRONIZANDO</span>
          </div>
          {FIELDS.map(([label, value], i) => (
            <div className="mock-field" key={label} style={{ '--i': i }}>
              <span className="mono">{label}</span>
              <div className="mock-input">{value}</div>
            </div>
          ))}
          <div className="mock-progress">
            <div className="mono"><span>PERFIL NEURAL</span><span className="pct">100%</span></div>
            <div className="bar"><span /></div>
          </div>
          <p className="mock-reply mono">
            <span className="tag">NEXUS&gt;</span> Prazer, Alex. Ativei os módulos de código e agenda.
            Quer que eu revise seus PRs toda manhã?
          </p>
        </div>
      </div>
    </section>
  )
}
