import React from "react";
import {
  FaSchool,
  FaUniversity,
  FaLock,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

export default function QualificationExperience() {
  const qualifications = [
    {
      title: "Higher Secondary Education",
      institution: "MDN Global School, Kaithal",
      year: "Passing Year: 2026",
      icon: FaSchool,
    },
    {
      title:
        "Bachelor of Computer Applications (BCA)",
      institution: "Amity University Online",
      year: "2026-2029",
      icon: FaUniversity,
    },
    {
      title:
        "Diploma in Cyber Security & Web Development",
      institution:
        "Hartron Advance Skill Centre, Kaithal",
      year: "Currently Pursuing",
      icon: FaLock,
    },
  ];

  const experiences = [
    {
      role:
        "Cyber Security & Web Development Trainee",
      company:
        "Hartron Advance Skill Centre, Kaithal",
      duration: "1.5 Years",
      icon: FaBriefcase,
    },
  ];

  return (
    <section
      id="qualifications"
      className="portfolio-section diamond-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* =================================================
            QUALIFICATIONS
        ================================================= */}

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <FaGraduationCap className="text-4xl text-cyan-400" />

            <h2 className="text-4xl md:text-5xl font-bold section-title">
              Qualifications
            </h2>
          </div>

          <p className="mt-3 text-gray-400">
            My academic journey & certifications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {qualifications.map((q, idx) => {
            const Icon = q.icon;

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
                    mb-6
                  "
                >
                  <Icon className="text-5xl text-cyan-300" />
                </div>

                <h3 className="text-xl font-semibold text-cyan-200">
                  {q.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  {q.institution}
                </p>

                <span
                  className="
                    inline-block
                    mt-4
                    px-4
                    py-1.5
                    rounded-full
                    bg-cyan-400/5
                    border
                    border-cyan-400/10
                    text-xs
                    text-gray-400
                  "
                >
                  {q.year}
                </span>
              </div>
            );
          })}
        </div>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <div className="text-center mt-24 mb-12">
          <div className="flex items-center justify-center gap-3">
            <FaBriefcase className="text-4xl text-cyan-400" />

            <h2 className="text-4xl md:text-5xl font-bold section-title">
              Experience
            </h2>
          </div>

          <p className="mt-3 text-gray-400">
            My professional journey
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;

            return (
              <div
                key={idx}
                className="
                  card-3d
                  glass-card
                  rounded-2xl
                  p-8
                  text-center
                  group
                "
              >
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
                    mb-6
                  "
                >
                  <Icon className="text-5xl text-cyan-300" />
                </div>

                <h3 className="text-2xl font-semibold text-cyan-200">
                  {exp.role}
                </h3>

                <p className="mt-3 text-gray-300">
                  {exp.company}
                </p>

                <span
                  className="
                    inline-block
                    mt-4
                    px-4
                    py-1.5
                    rounded-full
                    bg-cyan-400/5
                    border
                    border-cyan-400/10
                    text-xs
                    text-gray-400
                  "
                >
                  Duration: {exp.duration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}