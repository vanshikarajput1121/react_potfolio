import React, { useState } from 'react';
import { 
  FaShieldAlt, FaReact, FaBrain, FaCode, FaNetworkWired, FaUserSecret, 
  FaCloud, FaDatabase, FaAws, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaTools 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiPostman, 
  SiMetasploit, SiBurpsuite, SiWireshark, SiMongodb, SiExpress, SiDocker
} from 'react-icons/si';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: FaCode },
    { id: 'cybersecurity', label: 'Cyber Security', icon: FaShieldAlt },
    { id: 'cloud', label: 'Cloud Security', icon: FaCloud },
    { id: 'webdev', label: 'Web Development', icon: FaReact },
    { id: 'ai', label: 'AI & Prompt Engineering', icon: FaBrain },
  ];

  const skills = [
    { name: 'Network Security', icon: FaNetworkWired, category: 'cybersecurity', description: 'Firewall configuration, IDS/IPS, monitoring' },
    { name: 'Ethical Hacking', icon: FaUserSecret, category: 'cybersecurity', description: 'Penetration testing, vulnerability assessment' },
    { name: 'Wireshark', icon: SiWireshark, category: 'cybersecurity', description: 'Packet analysis & troubleshooting' },
    { name: 'Metasploit', icon: SiMetasploit, category: 'cybersecurity', description: 'Exploit development & testing' },
    { name: 'Burp Suite', icon: SiBurpsuite, category: 'cybersecurity', description: 'Web app security testing' },

    { name: 'AWS Security', icon: FaAws, category: 'cloud', description: 'IAM, encryption, secure cloud architecture' },
    { name: 'Docker & Containers', icon: SiDocker, category: 'cloud', description: 'Secure containerization & deployment' },
    { name: 'Database Security', icon: FaDatabase, category: 'cloud', description: 'Data encryption, access control, backups' },

    { name: 'React.js', icon: FaReact, category: 'webdev', description: 'Component-based UI development' },
    { name: 'TailwindCSS', icon: SiTailwindcss, category: 'webdev', description: 'Utility-first CSS framework' },
    { name: 'JavaScript', icon: SiJavascript, category: 'webdev', description: 'Dynamic scripting language' },
    { name: 'TypeScript', icon: SiTypescript, category: 'webdev', description: 'Typed superset of JavaScript' },
    { name: 'HTML5', icon: SiHtml5, category: 'webdev', description: 'Markup language for web content' },
    { name: 'Node.js', icon: FaNodeJs, category: 'webdev', description: 'JavaScript runtime for server-side apps' },
    { name: 'Express.js', icon: SiExpress, category: 'webdev', description: 'Minimalist web framework for Node.js' },
    { name: 'MongoDB', icon: SiMongodb, category: 'webdev', description: 'NoSQL database for modern apps' },
    { name: 'Python', icon: FaPython, category: 'webdev', description: 'Versatile programming language' },
    { name: 'Postman', icon: SiPostman, category: 'webdev', description: 'API testing & development tool' },
    { name: 'Git', icon: FaGitAlt, category: 'webdev', description: 'Version control system' },
    { name: 'GitHub', icon: FaGithub, category: 'webdev', description: 'Code hosting & collaboration' },

    { name: 'Prompt Engineering', icon: FaBrain, category: 'ai', description: 'Designing effective AI prompts' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div 
      id="skills"  // ✅ Section ID added here
      className="bg-[#0A192F] text-white p-10 rounded-2xl shadow-xl"
    >
      {/* Heading with Icon */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <FaTools className="text-4xl text-cyan-400 drop-shadow-lg" />
        <h2 className="text-4xl font-bold text-cyan-400">Technologies & Skills</h2>
      </div>
      <p className="text-gray-300 mb-8 text-center">Tools and languages I work with</p>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {skillCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg transition 
              ${activeCategory === cat.id ? 'bg-cyan-700 text-black font-semibold' : 'bg-[#1E293B] text-gray-300 hover:bg-cyan-600'}
            `}
          >
            <cat.icon /> {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredSkills.map((skill, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-lg bg-gradient-to-r from-[#1E293B] to-[#0A192F] shadow-lg flex flex-col items-center text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl hover:animate-bounce-once`}
          >
            <skill.icon className="text-5xl mb-4 text-cyan-300 drop-shadow-lg" />
            <h3 className="text-xl font-semibold mb-2 text-cyan-200">{skill.name}</h3>
            <p className="text-sm opacity-0 hover:opacity-100 transition duration-500 text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
