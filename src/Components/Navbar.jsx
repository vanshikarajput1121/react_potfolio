import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, User, Globe, GraduationCap, FolderOpen } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Profile', href: '#home', icon: User },
  { name: 'Qualifications', href: '#about', icon: GraduationCap },
  { name: 'Technologies', href: '#skills', icon: Globe },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Profile')

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-full bg-ivory/95 dark:bg-charcoal/95 backdrop-blur-md shadow-lg border border-charcoal/5 dark:border-gold/10">
        {/* Logo */}
        <a
          href="#home"
          className="w-10 h-10 rounded-full bg-navy dark:bg-gold flex items-center justify-center text-ivory dark:text-navy font-bold text-sm shrink-0"
        >
          VR
        </a>

        {/* Desktop pill links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = active === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy text-ivory dark:bg-gold dark:text-navy'
                    : 'text-charcoal dark:text-ivory/70 hover:text-gold'
                }`}
              >
                <Icon size={16} />
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/vanshikarajput1121"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-charcoal dark:text-ivory/70 hover:text-gold transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/vanshika-rana-492290418~"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-charcoal dark:text-ivory/70 hover:text-gold transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
      
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.85, rotate: 180 }}
            className="p-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-navy transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <button
            className="md:hidden p-2 text-navy dark:text-ivory"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden overflow-hidden mt-2 rounded-2xl bg-ivory dark:bg-charcoal shadow-lg border border-charcoal/5 dark:border-gold/10"
          >
            <div className="flex flex-col p-3 gap-1">
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
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-charcoal dark:text-ivory/80 hover:bg-gold/10 hover:text-gold transition-colors text-sm font-medium"
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
