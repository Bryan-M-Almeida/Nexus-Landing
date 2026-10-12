import SectionHead from './SectionHead.jsx'

const PARTS = [
  { k: 'N', hl: 'N', rest: 'etworked', desc: 'Conectada a APIs e serviços externos — clima, agenda, notícias, ferramentas.' },
  { k: 'EX', hl: 'Ex', rest: 'periential', desc: 'Aprende com a experiência: cada interação refina o que ela sabe sobre você.' },
  { k: 'I', hl: 'I', rest: 'ntelligence &', desc: 'Raciocínio contextual, não respostas genéricas. Ela lembra, relaciona e antecipa.', dim: true },
  { k: 'U', hl: 'U', rest: 'ser', desc: 'Centrada no usuário: tom, prioridades e módulos moldados ao seu perfil.' },
  { k: 'S', hl: 'S', rest: 'ystem', desc: 'Um sistema modular, pronto para crescer — até a gestão da sua casa inteligente.' },
]

export default function About() {
  return (
    <section className="section" id="sobre">
      <SectionHead code="01 // IDENTIDADE" title="Não é um chatbot. É um sistema que te conhece.">
        O NEXUS é uma assistente adaptativa: começa com o básico sobre você e evolui a cada conversa,
        guardando contexto de verdade entre as sessões.
      </SectionHead>

      <div className="acronym">
        {PARTS.map((p, i) => (
          <article className={`acronym-item reveal ${p.dim ? 'is-dim' : ''}`} key={p.k} style={{ '--i': i }}>
            <span className="acronym-letter">{p.k}</span>
            <h3><b>{p.hl}</b>{p.rest}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
