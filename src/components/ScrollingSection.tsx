// components/StickyScrollSection.tsx
import React from "react";
import { motion } from "framer-motion";
import t2 from "../assets/billboard.a71a6e72.jpg";

export default function StickyScrollSection() {
  const sections = [
    {
      title: "Knowledge at Your Fingertips",
      desc1:
        "Huly offers a wide range of features to create and manage your project documentation. Huly's suite of collaborative editing tools boosts team efficiency.",
      desc2:
        "Documents in Huly can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items.",
      img: t2,
    },
    {
      title: "Rich Formatting",
      desc1:
        "Documents can be enhanced with rich text formatting, images, attachments, and code blocks. Use documents to organize team plans, create technical documentation, and support your team's progress towards shared goals.",
      code: `interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 },
];

const findUser = (name: string): User | undefined =>
  users.find(user => user.name === name);`,
    },
    {
      title: "Version History",
      desc1:
        "Track every edit effortlessly, and never lose a single change.",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Sticky Left Image */}
      <div className="md:w-1/3 w-full md:h-screen md:sticky top-0 flex items-center justify-center p-6">
        <div className="p-6 shadow-xl rounded-2xl bg-white max-w-xs w-full text-center">
          <img
            src="https://source.unsplash.com/400x400/?technology,teamwork"
            alt="Collaboration"
            className="rounded-xl w-full h-80 object-cover"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800">Collaborate</h3>
            <p className="text-sm text-gray-500 mt-1">
              Enhance teamwork with powerful real-time collaboration features.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable / Animated Content */}
      <div className="md:w-2/3 w-full md:h-screen overflow-y-auto scrollbar-hide px-6 md:px-10 py-10 md:py-20 space-y-24">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              {sec.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{sec.desc1}</p>
            {sec.desc2 && (
              <p className="mt-4 text-gray-600">{sec.desc2}</p>
            )}
            {sec.img && (
              <img
                src={sec.img}
                alt={sec.title}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            )}
            {sec.code && (
              <div className="mt-6 bg-gray-900 p-4 rounded-lg text-sm text-white font-mono overflow-x-auto">
                <pre>
                  <code>{sec.code}</code>
                </pre>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
