import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-text)] py-8 mt-12 border-t border-[var(--color-cyan)]/30">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">

        <div>
          <h3 className="text-2xl font-bold text-[var(--color-cyan)]">Vanshika Rana</h3>
          <p className="text-gray-400">Cloud Security & Web Development</p>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/vanshikarajput1121" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[var(--color-blue)] transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a 
            href="https://linkedin.com/in/vanshika-rana1121" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[var(--color-blue)] transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a 
            href="mailto:vanshikarana11218@gmail.com" 
            className="text-gray-400 hover:text-[var(--color-blue)] transition-colors"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        <div className="flex justify-center md:justify-end gap-4 text-sm">
          <a href="#home" className="text-gray-400 hover:text-[var(--color-cyan)] transition-colors">Profile</a>
          <a href="#skills" className="text-gray-400 hover:text-[var(--color-cyan)] transition-colors">Technologies</a>
          <a href="#about" className="text-gray-400 hover:text-[var(--color-cyan)] transition-colors">Qualifications</a>
          <a href="#projects" className="text-gray-400 hover:text-[var(--color-cyan)] transition-colors">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-[var(--color-cyan)] transition-colors">Contact</a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Made with <span className="text-[var(--color-cyan)]">♥</span> by Vanshika Rana <br />© 2026 All rights reserved
      </div>
    </footer>
  )
}
