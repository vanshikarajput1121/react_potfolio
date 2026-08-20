import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        px-6
        md:px-16
        pt-32
        pb-16
        diamond-bg
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              text-cyan-300
              text-sm
              mb-6
            "
          >
            <FaShieldAlt />
            Cybersecurity • Cloud Security • MERN
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              font-script
              text-6xl
              md:text-7xl
              text-cyan-300
              neon-text
            "
          >
            Vanshika Rana
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              mt-4
              text-2xl
              md:text-3xl
              font-bold
              text-white
            "
          >
            Cybersecurity &{" "}
            <span className="text-cyan-400">
              MERN Stack Developer
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-6
              max-w-xl
              text-gray-300
              leading-relaxed
            "
          >
            I’m a Bachelor of Computer Applications
            student specializing in Cloud Security.
            Skilled in React, Node.js, and web
            development, I focus on building secure,
            scalable applications. My passion lies in
            combining cybersecurity expertise with
            modern development tools to create
            innovative solutions.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-full
                bg-cyan-400
                text-[#071326]
                font-semibold
                shadow-[0_0_25px_rgba(34,211,238,0.2)]
                hover:scale-105
                transition-transform
              "
            >
              View Projects
              <FaArrowRight size={13} />
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-full
                border
                border-cyan-400/40
                text-cyan-300
                hover:bg-cyan-400/10
                hover:scale-105
                transition-all
              "
            >
              Contact Me
              <FaCode size={14} />
            </a>
          </motion.div>
        </div>

        {/* =================================================
            RIGHT PROFILE IMAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mx-auto
            relative
            w-64
            h-64
            md:w-96
            md:h-96
          "
        >
          {/* Outer glow */}

          <div
            className="
              absolute
              inset-[-15px]
              rounded-full
              border
              border-cyan-400/10
              animate-pulse
            "
          />

          <div
            className="
              absolute
              inset-[-7px]
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-cyan-400
              blur-md
              opacity-30
            "
          />

          {/* Image */}

          <div
            className="
              relative
              w-full
              h-full
              rounded-full
              overflow-hidden
              border-4
              border-cyan-400/70
              shadow-[0_0_60px_rgba(34,211,238,0.2)]
              float-animation
            "
          >
            <img
              src={profileImg}
              alt="Vanshika Rana - Cybersecurity and MERN Stack Developer"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}