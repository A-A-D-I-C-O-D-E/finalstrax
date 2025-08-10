/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";


// ServicePage.tsx
// Tailwind + small scoped CSS for glow animations



export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-zinc-900 text-slate-100">
      {/* Global small background glow */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none mt-20">
        <div className="absolute left-0 top-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-orange-600/10 via-rose-600/8 to-transparent blur-3xl transform -translate-x-1/3 animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-700/6 via-indigo-700/6 to-transparent blur-3xl transform translate-x-1/4" />
      </div>

      {/* Hero */}
    
      {/* Services Grid */}
     
      {/* Contact Section (same page) */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pb-28 pt-40 ">
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-8 rounded-2xl shadow-xl border border-slate-700/30 ">
          <h3 className="text-2xl font-semibold ">Contact Us</h3>
          <p className="mt-2 text-slate-300">Get in touch — we’ll reply within 1 business day.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Full name"
              className="p-3 rounded-lg bg-slate-900 border border-slate-700/30"
            />
            <input
              placeholder="Email"
              className="p-3 rounded-lg bg-slate-900 border border-slate-700/30"
            />
            <input
              placeholder="Company"
              className="p-3 rounded-lg bg-slate-900 border border-slate-700/30 md:col-span-2"
            />
            <textarea
              placeholder="How can we help?"
              rows={5}
              className="p-3 rounded-lg bg-slate-900 border border-slate-700/30 md:col-span-2"
            />

            <div className="md:col-span-2 flex items-center justify-between">
              <div className="text-sm text-slate-400">We respect your privacy.</div>
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-black font-semibold shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer small */}
     

      {/* Scoped styles for glow border animation and small utilities */}
      <style>{`
        /* slight perspective helper */
        .perspective-1000 { transform-style: preserve-3d; }

        /* slow pulse used for background glow */
        @keyframes pulse-slow {
          0% { transform: translateX(-10%) scale(1); opacity: .8 }
          50% { transform: translateX(10%) scale(1.03); opacity: .6 }
          100% { transform: translateX(-10%) scale(1); opacity: .8 }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite }

        /* Card glow border animation (continuous left -> right) */
        @keyframes rim-move {
          0% { background-position: 0% 50% }
          100% { background-position: 200% 50% }
        }

        .glow-border {
          position: relative;
          overflow: visible;
        }
        .glow-border::after {
          content: "";
          position: absolute;
          left: -2px;
          top: -2px;
          right: -2px;
          bottom: -2px;
          z-index: 0;
          border-radius: 14px;
          padding: 2px;
          background: linear-gradient(90deg, rgba(255,126,45,0.95), rgba(48, 51, 255, 0.9), rgba(255,126,45,0.6));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          background-size: 200% 100%;
          animation: rim-move 3s linear infinite;
          filter: blur(10px);
          opacity: .9;
          pointer-events: none;
        }

        /* Bring card inner content above glow */
        .glow-border > * { position: relative; z-index: 2 }

        /* small 3D tilt on hover */
        .tilt-on-hover { transition: transform .35s cubic-bezier(.2,.9,.2,1), box-shadow .35s }
        .tilt-on-hover:hover { transform: translateY(-6px) rotateX(6deg) rotateY(-4deg) scale(1.02); box-shadow: 0 30px 70px rgba(0,0,0,0.6) }

        /* subtle entrance */
        .reveal { opacity: 0; transform: translateY(18px); animation: revealUp .7s forwards; }
        .reveal.delay-1 { animation-delay: .08s }
        .reveal.delay-2 { animation-delay: .16s }
        .reveal.delay-3 { animation-delay: .24s }
        .reveal.delay-4 { animation-delay: .32s }
        .reveal.delay-5 { animation-delay: .40s }

        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0) }
        }

      `}</style>
    </div>
  );
}


