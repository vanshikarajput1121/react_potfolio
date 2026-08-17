import React from 'react';
import { FaSchool, FaUniversity, FaLock, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function QualificationExperience() {
  const qualifications = [
    {
      title: "Higher Secondary Education",
      institution: "MDN Global School, Kaithal",
      year: "Passing Year: 2026",
      icon: FaSchool,
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Amity University Online",
      year: "Currently Pursuing",
      icon: FaUniversity,
    },
    {
      title: "Diploma in Cyber Security & Web Development",
      institution: "Hartron Advance Skill Centre, Kaithal",
      year: "Currently Pursuing",
      icon: FaLock,
    },
  ];

  const experiences = [
    {
      role: "Cyber Security & Web Development Trainee",
      company: "Hartron Advance Skill Centre, Kaithal",
      duration: "1.5 Years",
      icon: FaBriefcase,
    },
  ];

  return (
    <div className="bg-[#0A192F] text-white p-10 rounded-2xl shadow-xl space-y-12">
      {/* Qualifications Section */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-2">
          <FaGraduationCap className="text-4xl text-cyan-400 drop-shadow-lg" />
          <h2 className="text-4xl font-bold text-cyan-400">Qualifications</h2>
        </div>
        <p className="text-gray-300 mb-8 text-center">My academic journey & certifications</p>

        <div className="grid md:grid-cols-3 gap-6">
          {qualifications.map((q, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-lg bg-gradient-to-r from-[#1E293B] to-[#0A192F] shadow-lg flex flex-col items-center text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl hover:animate-bounce-once"
            >
              <q.icon className="text-6xl mb-4 text-cyan-300 drop-shadow-lg" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-200">{q.title}</h3>
              <p className="text-sm text-gray-300">{q.institution}</p>
              <p className="text-xs mt-2 italic text-gray-400">{q.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-2">
          <FaBriefcase className="text-4xl text-cyan-400 drop-shadow-lg" />
          <h2 className="text-4xl font-bold text-cyan-400">Experience</h2>
        </div>
        <p className="text-gray-300 mb-8 text-center">My professional journey</p>

        <div className="grid md:grid-cols-2 gap-6 justify-center">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-lg bg-gradient-to-r from-[#1E293B] to-[#0A192F] shadow-lg flex flex-col items-center text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl hover:animate-bounce-once"
            >
              <exp.icon className="text-6xl mb-4 text-cyan-300 drop-shadow-lg" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-200">{exp.role}</h3>
              <p className="text-sm text-gray-300">{exp.company}</p>
              <p className="text-xs mt-2 italic text-gray-400">Duration: {exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
