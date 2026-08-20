import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      text: "Connect with me professionally",
      href: "https://linkedin.com/in/vanshika-rana-492290418",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      text: "Explore my projects and code",
      href: "https://github.com/vanshikarajput1121",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      text: "vanshikarajput1121@gmail.com",
      href: "mailto:vanshikarajput1121@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="portfolio-section diamond-bg"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <FaPaperPlane className="text-4xl text-cyan-400" />

            <h2 className="text-4xl md:text-5xl font-bold section-title">
              Contact Me
            </h2>
          </div>

          <p className="mt-3 text-gray-400">
            Let&apos;s connect and build something meaningful
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;

            return (
              <a
                key={idx}
                href={contact.href}
                target={
                  contact.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
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
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                  "
                >
                  <Icon className="text-3xl text-cyan-300" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-cyan-200">
                  {contact.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400 break-words">
                  {contact.text}
                </p>
              </a>
            );
          })}
        </div>

        {/* Location */}

        <div
          className="
            card-3d
            glass-card
            rounded-2xl
            mt-7
            p-6
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <FaMapMarkerAlt className="text-2xl text-cyan-400" />

          <div>
            <p className="text-sm text-gray-400">
              Location
            </p>

            <p className="text-gray-200">
              Kaithal, Haryana, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}