import React, { useState } from "react";
import {
  FaShieldAlt,
  FaReact,
  FaBrain,
  FaCode,
  FaNetworkWired,
  FaUserSecret,
  FaCloud,
  FaDatabase,
  FaAws,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaTools,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiPostman,
  SiMetasploit,
  SiBurpsuite,
  SiWireshark,
  SiMongodb,
  SiExpress,
  SiDocker,
} from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const skillCategories = [
    {
      id: "all",
      label: "All Skills",
      icon: FaCode,
    },
    {
      id: "cybersecurity",
      label: "Cyber Security",
      icon: FaShieldAlt,
    },
    {
      id: "cloud",
      label: "Cloud Security",
      icon: FaCloud,
    },
    {
      id: "webdev",
      label: "Web Development",
      icon: FaReact,
    },
    {
      id: "ai",
      label: "AI & Prompt Engineering",
      icon: FaBrain,
    },
  ];

  const skills = [
    {
      name: "Network Security",
      icon: FaNetworkWired,
      category: "cybersecurity",
      description:
        "Firewall configuration, IDS/IPS and network monitoring.",
    },
    {
      name: "Ethical Hacking",
      icon: FaUserSecret,
      category: "cybersecurity",
      description:
        "Penetration testing and vulnerability assessment.",
    },
    {
      name: "Wireshark",
      icon: SiWireshark,
      category: "cybersecurity",
      description:
        "Packet analysis and network troubleshooting.",
    },
    {
      name: "Metasploit",
      icon: SiMetasploit,
      category: "cybersecurity",
      description:
        "Security testing and exploitation frameworks.",
    },
    {
      name: "Burp Suite",
      icon: SiBurpsuite,
      category: "cybersecurity",
      description:
        "Web application security testing.",
    },
    {
      name: "AWS Security",
      icon: FaAws,
      category: "cloud",
      description:
        "IAM, encryption and secure cloud architecture.",
    },
    {
      name: "Docker & Containers",
      icon: SiDocker,
      category: "cloud",
      description:
        "Containerization and secure deployment.",
    },
    {
      name: "Database Security",
      icon: FaDatabase,
      category: "cloud",
      description:
        "Access control, encryption and backups.",
    },
    {
      name: "React.js",
      icon: FaReact,
      category: "webdev",
      description:
        "Component-based modern UI development.",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      category: "webdev",
      description:
        "Utility-first responsive styling.",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "webdev",
      description:
        "Dynamic and interactive web applications.",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "webdev",
      description:
        "Typed JavaScript for scalable applications.",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      category: "webdev",
      description:
        "Semantic structure for modern websites.",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      category: "webdev",
      description:
        "Server-side JavaScript runtime.",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      category: "webdev",
      description:
        "Backend APIs and server-side applications.",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "webdev",
      description:
        "NoSQL database for modern applications.",
    },
    {
      name: "Python",
      icon: FaPython,
      category: "webdev",
      description:
        "Programming language for automation and development.",
    },
    {
      name: "Postman",
      icon: SiPostman,
      category: "webdev",
      description:
        "API testing and development.",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      category: "webdev",
      description:
        "Version control and source management.",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      category: "webdev",
      description:
        "Code hosting and collaboration.",
    },
    {
      name: "Prompt Engineering",
      icon: FaBrain,
      category: "ai",
      description:
        "Designing effective prompts for AI systems.",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(
          (skill) =>
            skill.category === activeCategory
        );

  return (
    <section
      id="skills"
      className="portfolio-section diamond-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <FaTools className="text-4xl text-cyan-400" />

            <h2 className="text-4xl md:text-5xl font-bold section-title">
              Technologies & Skills
            </h2>
          </div>

          <p className="mt-3 text-gray-400">
            Tools and technologies I work with
          </p>
        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const active =
              activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  setActiveCategory(cat.id)
                }
                className={`
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  border
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-cyan-400 text-[#071326] border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                      : "bg-[#0d1b31]/80 text-gray-300 border-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-300"
                  }
                `}
              >
                <Icon />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredSkills.map(
            (skill, idx) => {
              const Icon = skill.icon;

              return (
                <div
                  key={idx}
                  className="
                    card-3d
                    glass-card
                    rounded-2xl
                    p-7
                    text-center
                    group
                  "
                >
                  {/* 3D Icon */}

                  <div
                    className="
                      icon-3d
                      mx-auto
                      w-20
                      h-20
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      shadow-[0_10px_30px_rgba(34,211,238,0.08)]
                      mb-5
                    "
                  >
                    <Icon className="text-5xl text-cyan-300" />
                  </div>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-cyan-200
                      group-hover:text-cyan-300
                      transition-colors
                    "
                  >
                    {skill.name}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>

                  <div
                    className="
                      mt-5
                      h-1
                      w-12
                      mx-auto
                      rounded-full
                      bg-cyan-400/40
                      group-hover:w-20
                      transition-all
                      duration-500
                    "
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}