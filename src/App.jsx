import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory dark:bg-navy transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <section id="skills" className="min-h-screen bg-ivory dark:bg-navy diamond-bg" />
        <section id="about" className="min-h-screen bg-ivory dark:bg-navy diamond-bg" />
        <section id="projects" className="min-h-screen bg-ivory dark:bg-navy diamond-bg" />
      </main>
    </div>
  )
}