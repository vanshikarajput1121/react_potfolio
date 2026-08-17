import React from 'react';
import { FaLaptopCode, FaShoppingCart, FaComments, FaStore, FaLink } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "🌐 Project 1 - Portfolio Website",
      tech: "HTML, CSS, Tailwind CSS, React",
      concepts: "Responsive UI, Components, Routing, Deployment",
      icon: FaLaptopCode,
    },
    {
      title: "🛒 Project 2 - E-Commerce (Basic)",
      tech: "MERN Stack",
      concepts: "Authentication, CRUD, Cart, Orders, MongoDB, REST API",
      icon: FaShoppingCart,
    },
    {
      title: "💬 Project 3 - Real-Time Chat App",
      tech: "MERN + Socket.IO",
      concepts: "Real-time Messaging, Online Users, Typing Indicator",
      icon: FaComments,
    },
    {
      title: "🛍️ Project 4 - Real-Time E-Commerce",
      tech: "MERN + Redux Toolkit + Socket.IO",
      concepts: "Live Product Updates, Live Cart, Admin Dashboard",
      icon: FaStore,
    },
    {
      title: "⛓️ Bonus Project - Blockchain Basics",
      tech: "Web3",
      concepts: "Wallet Connection, Smart Contract Basics, DApp Introduction",
      icon: FaLink,
    },
  ];

  return (
    <section 
  id="projects" 
  className="scroll-mt-28 bg-[var(--color-navy)] text-[var(--color-text)] p-10 rounded-2xl shadow-xl"
>
  <div className="flex items-center justify-center gap-3 mb-2">
    <FaLaptopCode className="text-4xl text-[var(--color-cyan)] drop-shadow-lg" />
    <h2 className="text-4xl font-bold text-[var(--color-cyan)]">Projects</h2>
  </div>
  <p className="text-gray-300 mb-8 text-center">My practical work & implementations</p>

  <div className="grid md:grid-cols-2 gap-6">
    {projects.map((p, idx) => (
      <div 
        key={idx} 
        className="p-6 rounded-lg bg-gradient-to-r from-[var(--color-charcoal)] to-[var(--color-navy)] shadow-lg flex flex-col items-center text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl hover:animate-bounce-once"
      >
        <p.icon className="text-5xl mb-4 text-[var(--color-blue)] drop-shadow-lg" />
        <h3 className="text-xl font-semibold mb-2 text-[var(--color-ice)]">{p.title}</h3>
        <p className="text-sm font-medium text-gray-300">{p.tech}</p>
        <p className="text-xs mt-2 italic opacity-0 hover:opacity-100 transition duration-500 text-gray-400">{p.concepts}</p>
      </div>
    ))}
  </div>
</section>

  );
}
