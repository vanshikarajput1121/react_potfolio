import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, User, Globe, GraduationCap, FolderOpen, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Profile', href: '#home', icon: User },
  { name: 'Technologies', href: '#skills', icon: Globe },
  { name: 'Qualifications', href: '#about', icon: GraduationCap },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Profile')

  // Scrollspy effect: update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100
      navLinks.forEach(link => {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(link.name)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between gap-4 px-6 py-3 rounded-full bg-[#0A192F]/95 backdrop-blur-md shadow-lg border border-cyan-500/20">
        
        {/* Logo */}
        <a
          href="#home"
          className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-[#0A192F] font-bold text-lg shrink-0 shadow-md hover:scale-105 transition"
        >
          VR
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = active === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-400 text-[#0A192F] shadow-md'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                <Icon size={16} />
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="https://github.com/vanshikarajput1121"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/vanshika-rana-492290418"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>

          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.85, rotate: 180 }}
            className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0A192F] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <button
            className="md:hidden p-2 text-cyan-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-2 rounded-2xl bg-[#0A192F] shadow-lg border border-cyan-500/20"
          >
            <div className="flex flex-col p-3 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.name)
                      setIsOpen(false)
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors text-sm font-medium"
                  >
                    <Icon size={16} />
                    {link.name}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

