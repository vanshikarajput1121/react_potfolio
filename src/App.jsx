import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Qualification from './Components/Qualification'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

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
