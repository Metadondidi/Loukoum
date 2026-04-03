import { useState } from 'react'
import Nav from './components/Nav'
import Ticker from './components/Ticker'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Releases from './components/Releases'
import Mixes from './components/Mixes'
import Venues from './components/Venues'
import Contact from './components/Contact'

const SECTIONS = ['home', 'about', 'releases', 'mixes', 'stages', 'contact']

export default function App() {
  const [active, setActive] = useState('home')

  function nav(id) {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <Nav active={active} onNav={nav} />
      <Ticker />

      <main>
        {active === 'home'     && <Hero key="home"     onNav={nav} />}
        {active === 'about'    && <div key="about"    className="section-visible"><Bio /></div>}
        {active === 'releases' && <div key="releases" className="section-visible"><Releases /></div>}
        {active === 'mixes'    && <div key="mixes"    className="section-visible"><Mixes /></div>}
        {active === 'stages'   && <div key="stages"   className="section-visible"><Venues /></div>}
        {active === 'contact'  && <div key="contact"  className="section-visible"><Contact /></div>}
      </main>
    </div>
  )
}
