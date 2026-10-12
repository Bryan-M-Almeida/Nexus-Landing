import { useCallback, useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Features from './components/Features.jsx'
import Profiles from './components/Profiles.jsx'
import Roadmap from './components/Roadmap.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const handleIntroDone = useCallback(() => setIntroDone(true), [])

  // Reveal .reveal elements as they scroll into view
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Nav visible={introDone} />
      <main>
        <Hero onIntroDone={handleIntroDone} />
        <About />
        <HowItWorks />
        <Features />
        <Profiles />
        <Roadmap />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
