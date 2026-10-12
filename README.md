# NEXUS · Landing Page

Landing page (CTA) do projeto **NEXUS — Networked Experiential Intelligence & User System**,
uma IA assistente adaptativa inspirada no J.A.R.V.I.S. Repositório do projeto:
https://github.com/Bryan-M-Almeida/nexusAI

## Rodando

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção em /dist
```

## Estrutura

| Arquivo | O que faz |
| --- | --- |
| `src/components/HudRings.jsx` | Os aros HUD em SVG (boot + rotação contínua) |
| `src/components/Hero.jsx` | Intro: aros → nome N.E.X.U.S → conteúdo e CTAs |
| `src/components/NexusWordmark.jsx` | Logotipo animado letra a letra |
| `src/components/About.jsx` | Significado do acrônimo |
| `src/components/HowItWorks.jsx` | Fluxo formulário → perfil → adaptação |
| `src/components/Features.jsx` | Capacidades (memória, APIs, perfis…) |
| `src/components/Profiles.jsx` | Demo interativa de perfis por profissão |
| `src/components/Roadmap.jsx` | Fases do projeto (até casa inteligente) |
| `src/components/FinalCta.jsx` | CTA final para o GitHub |
| `src/config.js` | URL do repositório |
| `src/index.css` | Paleta, tipografia e todas as animações |

O tempo da intro fica em `TIMELINE` dentro de `Hero.jsx`. Usuários com
"reduzir movimento" ativado no sistema veem a página já no estado final.
