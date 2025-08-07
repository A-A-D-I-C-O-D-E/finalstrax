// components/StickyScrollSection.tsx

import React from 'react';
import t2 from '../assets/billboard.a71a6e72.jpg';

export default function StickyScrollSection() {
  return (
    <section className="w-full h-screen flex bg-white overflow-hidden">
      {/* Sticky Left Image */}
      <div className="w-1/3 h-screen sticky top-0 flex items-center justify-center">
        <div className="p-6 shadow-xl rounded-xl bg-white">
          <img
            src="https://source.unsplash.com/400x400/?technology,teamwork"
            alt="Collaboration"
            className="rounded-lg w-80 h-80 object-cover"
          />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Collaborate</h3>
            <p className="text-sm text-gray-500 ">
              Enhance teamwork with powerful real-time collaboration features.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Right Content with hidden scrollbar */}
      <div className="w-1/2 h-screen overflow-y-auto scrollbar-hide px-10 py-20 space-y-32">
        {/* Section 1 */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Knowledge at Your Fingertips</h2>
          <p className="text-gray-600 leading-relaxed">
            Huly offers a wide range of features to create and manage your project documentation. Huly's suite of collaborative editing tools boosts team efficiency.
          </p>
          <p className="mt-4 text-gray-600 mb-10">
            <strong>Documents in Huly</strong> can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items.
          </p>

          <img src={t2} alt='lkl' className='rounded-lg'/>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Rich Formatting</h3>
          <p className="text-gray-600">
            Documents can be enhanced with rich text formatting, images, attachments and code blocks. Use documents to organize team plans, create technical documentation and support your team's progress towards shared goals.
          </p>
          <div className="mt-6 bg-gray-900 p-4 rounded-md text-sm text-white font-mono">
            <pre>
              <code>
{`interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 },
];

const findUser = (name: string): User | undefined =>
  users.find(user => user.name === name);`}
              </code>
            </pre>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Version History</h3>
          <p className="text-gray-600">
            Track every edit effortlessly, and never lose a single change.
          </p>
        </div>
      </div>
    </section>
  );
}
