import { useState } from 'react'
import About from './components/About'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <NavBar nav={nav} setNav={setNav} />
      <HeroSection nav={nav} />
      <Projects />
      <About />
    </div>
  )
}

export default App
