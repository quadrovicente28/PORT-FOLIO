import { useState } from 'react'
import About from './components/About'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {

  return (
    <div>
      <NavBar />
      <HeroSection />
      <Projects />
      <About />
    </div>
  )
}

export default App
