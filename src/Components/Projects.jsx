import React from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaComments,
  FaStore,
  FaLink,
  FaArrowRight,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      emoji: "🌐",
      tech: "HTML, CSS, Tailwind CSS, React",
      concepts:
        "Responsive UI, Components, Routing, Deployment",
      icon: FaLaptopCode,
    },
    {
      title: "E-Commerce (Basic)",
      emoji: "🛒",
      tech: "MERN Stack",
      concepts:
        "Authentication, CRUD, Cart, Orders, MongoDB, REST API",
      icon: FaShoppingCart,
    },
    {
      title: "Real-Time Chat App",
      emoji: "💬",
      tech: "MERN + Socket.IO",
      concepts:
        "Real-time Messaging, Online Users, Typing Indicator",
      icon: FaComments,
    },
    {
      title: "Real-Time E-Commerce",
      emoji: "🛍️",
      tech: "MERN + Redux Toolkit + Socket.IO",
      concepts:
        "Live Product Updates, Live Cart, Admin Dashboard",
      icon: FaStore,
    },
    {
      title: "Blockchain Basics",
      emoji: "⛓️",
      tech: "Web3",
      concepts:
        "Wallet Connection, Smart Contract Basics, DApp Introduction",
      icon: FaLink,
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <FaLaptopCode className="text-4xl text-cyan-400" />

            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
              Projects
            </h2>
          </div>

          <p className="text-gray-400 mt-4">
            My practical work & implementations
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, idx) => {
            const Icon = project.icon;

            return (
              <div
                key={idx}
                className="
                  group
                  relative
                  overflow-hidden
                  p-8
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#172B45]
                  via-[#0D2038]
                  to-[#071426]
                  border
                  border-cyan-400/10
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-3deg)]
                  hover:border-cyan-400/40
                  hover:shadow-[0_30px_60px_rgba(34,211,238,0.14)]
                "
              >
                {/* Number
                <span className="absolute top-5 right-6 text-xs font-mono text-cyan-400/30">
                  PROJECT_{String(idx + 1).padStart(2, "0")}
                </span> */}

                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full group-hover:bg-cyan-400/20 transition-all" />

                <div className="relative flex items-start gap-5">
                  <div
                    className="
                      shrink-0
                      w-20
                      h-20
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-cyan-400/5
                      border
                      border-cyan-400/20
                      group-hover:-translate-y-2
                      group-hover:rotate-3
                      transition-all
                      duration-500
                    "
                  >
                    <Icon className="text-4xl text-cyan-300" />
                  </div>

                  <div>
                    <span className="text-xl">
                      {project.emoji}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-cyan-200 mt-1">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-cyan-400">
                      {project.tech}
                    </p>
                  </div>
                </div>

                <p className="relative mt-6 text-sm text-gray-400 leading-relaxed">
                  {project.concepts}
                </p>

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                    group-hover:text-cyan-300
                    transition-colors
                  "
                >
                  Explore Project
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}