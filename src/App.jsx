import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0A192F] text-white font-sans bg-pattern min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
