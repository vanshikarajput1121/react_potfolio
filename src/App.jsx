import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Qualification from "./Components/Qualification";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="diamond-bg min-h-screen bg-[#050b18] text-white">
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}