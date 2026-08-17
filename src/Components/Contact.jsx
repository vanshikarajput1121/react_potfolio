import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-[var(--color-navy)] text-[var(--color-text)] p-10 rounded-2xl shadow-xl">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <FaEnvelope className="text-4xl text-[var(--color-cyan)] drop-shadow-lg" />
        <h2 className="text-4xl font-bold text-[var(--color-cyan)]">Contact Me</h2>
      </div>
      <p className="text-gray-300 mb-8 text-center">Get in touch with me</p>

      {/* Contact Details */}
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[var(--color-charcoal)] to-[var(--color-navy)] shadow-md hover:scale-105 transition">
          <FaLinkedin className="text-[var(--color-blue)] text-xl" />
          <a 
            href="https://linkedin.com/in/vanshika-rana-492290418" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-[var(--color-cyan)]"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[var(--color-charcoal)] to-[var(--color-navy)] shadow-md hover:scale-105 transition">
          <FaGithub className="text-[var(--color-blue)] text-xl" />
          <a 
            href="https://github.com/vanshikarajput1121" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-[var(--color-cyan)]"
          >
            GitHub Profile
          </a>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[var(--color-charcoal)] to-[var(--color-navy)] shadow-md hover:scale-105 transition">
          <FaEnvelope className="text-[var(--color-blue)] text-xl" />
          <a href="mailto:vanshikarana11218@gmail.com" className="text-gray-300 hover:text-[var(--color-cyan)]">
            vanshikarana11218@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[var(--color-charcoal)] to-[var(--color-navy)] shadow-md hover:scale-105 transition">
          <FaPhone className="text-[var(--color-blue)] text-xl" />
          <a href="tel:+919671943636" className="text-gray-300 hover:text-[var(--color-cyan)]">
            +91 9671943636
          </a>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[var(--color-charcoal)] to-[var(--color-navy)] shadow-md hover:scale-105 transition">
          <FaMapMarkerAlt className="text-[var(--color-blue)] text-xl" />
          <p className="text-gray-300">VPO Batta, Kalayat, 136117</p>
        </div>
      </div>
    </section>
  )
}
