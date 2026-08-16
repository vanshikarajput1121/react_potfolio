import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-16 pt-32 pb-16 bg-ivory dark:bg-navy diamond-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-6xl md:text-7xl text-navy dark:text-ivory"
          >
            Vanshika Rana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-lg text-charcoal/80 dark:text-ivory/70 leading-relaxed"
          >
           “I’m a Bachelor of Computer Applications student specializing in Cloud Security. Skilled in React, Node.js, and web development, I focus on building secure, scalable applications. My passion lies in combining cybersecurity expertise with modern development tools to create innovative solutions and grow as a versatile IT professional.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#projects" className="px-6 py-2.5 rounded-full bg-gold text-navy font-semibold hover:bg-gold/90 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-2.5 rounded-full border border-gold text-navy dark:text-ivory hover:bg-gold/10 transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: circular photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold shadow-xl"
        >
          <img src={profileImg} alt="Vanshika Rana" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  )
}