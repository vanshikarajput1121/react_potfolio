import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        diamond-bg
        border-t
        border-cyan-400/10
        py-10
        px-6
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-3
          gap-8
          items-center
        "
      >
        {/* Brand */}

        <div>
          <h3 className="text-2xl font-bold text-cyan-400">
            Vanshika Rana
          </h3>

          <p className="mt-1 text-gray-400">
            Cloud Security & Web Development
          </p>
        </div>

        {/* Social */}

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/vanshikarajput1121"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vanshika Rana GitHub"
            className="
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              transition-all
            "
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/vanshika-rana1121"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vanshika Rana LinkedIn"
            className="
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              transition-all
            "
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:vanshikarajput1121@gmail.com"
            aria-label="Email Vanshika Rana"
            className="
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              transition-all
            "
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <a
            href="#home"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Profile
          </a>

          <a
            href="#skills"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Technologies
          </a>

          <a
            href="#qualifications"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Qualifications
          </a>

          <a
            href="#projects"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-8 pt-6 border-t border-cyan-400/10 flex flex-col md:flex-row items-center justify-between gap-4" >
        <p className="text-gray-500 text-sm text-center">
          Made with{" "}
          <span className="text-cyan-400">♥</span>{" "}
          by Vanshika Rana
          <br />
          © 2026 All rights reserved.
        </p>

        <button
          type="button"
          onClick={goTop}
          aria-label="Back to top"
          className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            bg-cyan-400/10
            border
            border-cyan-400/20
            text-cyan-400
            hover:bg-cyan-400
            hover:text-[#071326]
            transition-all
          "
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}