import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Globe,
  GraduationCap,
  FolderOpen,
  Mail,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// =====================================================
// NAVIGATION LINKS
// =====================================================

const navLinks = [
  {
    name: "Profile",
    href: "#home",
    icon: User,
  },
  {
    name: "Technologies",
    href: "#skills",
    icon: Globe,
  },
  {
    name: "Qualifications",
    href: "#qualifications",
    icon: GraduationCap,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderOpen,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

// =====================================================
// RESUME
// IMPORTANT: PDF must be inside public/
// =====================================================

const RESUME_URL = "/Vanshika_Rana_Resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Profile");

  // =====================================================
  // SCROLL SPY
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "Profile";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom =
          sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = link.name;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU ON DESKTOP
  // =====================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =====================================================
  // NAVIGATION CLICK
  // =====================================================

  const handleNavClick = (name, href) => {
    setActive(name);
    setIsOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =====================================================
  // RESUME CLICK
  // =====================================================

  const handleResumeClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">

      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          px-4
          md:px-6
          py-3
          rounded-full
          bg-[#071326]/90
          backdrop-blur-xl
          border
          border-cyan-400/20
          shadow-[0_15px_50px_rgba(0,0,0,0.4)]
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            handleNavClick("Profile", "#home")
          }
          className="
            w-11
            h-11
            md:w-12
            md:h-12
            shrink-0
            rounded-full
            bg-cyan-400
            text-[#071326]
            font-bold
            text-lg
            flex
            items-center
            justify-center
            shadow-[0_0_25px_rgba(34,211,238,0.25)]
            hover:scale-110
            transition-transform
          "
          aria-label="Go to Profile"
        >
          VR
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden md:flex items-center gap-1">

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.name;

            return (
              <button
                key={link.name}
                type="button"
                onClick={() =>
                  handleNavClick(
                    link.name,
                    link.href
                  )
                }
                className={`
                  relative
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-cyan-400 text-[#071326] shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10"
                  }
                `}
              >
                <Icon size={16} />
                <span>{link.name}</span>
              </button>
            );
          })}

          {/* =================================================
              DESKTOP RESUME
          ================================================= */}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeClick}
            className="
              ml-2
              flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-full
              text-sm
              font-semibold
              bg-cyan-400
              text-[#071326]
              shadow-[0_0_20px_rgba(34,211,238,0.25)]
              hover:bg-cyan-300
              hover:scale-105
              transition-all
              duration-300
            "
            aria-label="Open Vanshika Rana Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* =================================================
            SOCIAL ICONS + MOBILE MENU
        ================================================= */}

        <div className="flex items-center gap-3">

          {/* GITHUB */}

          <a
            href="https://github.com/vanshikarajput1121"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vanshika Rana GitHub"
            className="
              hidden
              sm:block
              text-gray-300
              hover:text-cyan-400
              hover:scale-110
              transition-all
            "
          >
            <FaGithub size={21} />
          </a>

          {/* LINKEDIN */}

          <a
            href="https://linkedin.com/in/vanshika-rana1121"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vanshika Rana LinkedIn"
            className="
              hidden
              sm:block
              text-gray-300
              hover:text-cyan-400
              hover:scale-110
              transition-all
            "
          >
            <FaLinkedin size={21} />
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="
              md:hidden
              p-2
              text-cyan-400
              hover:text-cyan-300
              transition-colors
            "
            onClick={() =>
              setIsOpen((prev) => !prev)
            }
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              md:hidden
              mt-3
              rounded-2xl
              overflow-hidden
              bg-[#071326]/95
              backdrop-blur-xl
              border
              border-cyan-400/20
              shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            "
          >
            <div className="p-3 space-y-2">

              {/* MOBILE NAV LINKS */}

              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive =
                  active === link.name;

                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() =>
                      handleNavClick(
                        link.name,
                        link.href
                      )
                    }
                    className={`
                      w-full
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      rounded-xl
                      text-sm
                      font-medium
                      transition-all
                      ${
                        isActive
                          ? "bg-cyan-400 text-[#071326]"
                          : "text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
                      }
                    `}
                  >
                    <Icon size={17} />
                    <span>{link.name}</span>
                  </button>
                );
              })}

              {/* =================================================
                  MOBILE RESUME
              ================================================= */}

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  text-sm
                  font-semibold
                  bg-cyan-400
                  text-[#071326]
                  hover:bg-cyan-300
                  transition-all
                "
              >
                <FileText size={18} />
                <span>View Resume</span>
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}