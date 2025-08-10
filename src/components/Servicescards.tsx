import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImag from "../assets/fjdf.png"; // keep your background
import bgImage from '../assets/fjdf.png'

/* ---------------------------
 Helper functions to draw SVG pie slices
----------------------------*/
function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return ["M", cx, cy, "L", start.x, start.y, "A", r, r, 0, largeArcFlag, 0, end.x, end.y, "Z"].join(" ");
}

/* ---------------------------
 Data structure
----------------------------*/
const servicesData: Record<
  string,
  {
    title: string;
    desc: string;
    bg?: string;
    slices: { id: string; label: string; cards: Array<{ title: string; desc: string; features: string[]; img?: string }> }[];
  }
> = {
  it: {
    title: "IT Services",
    desc: "Robust and scalable IT infrastructure solutions and end-to-end development.",
    bg: "",
    slices: [
      {
        id: "website",
        label: "Website",
        cards: [
          {
            title: "WordPress Website",
            desc: "Custom, responsive & SEO-optimized WordPress websites.",
            features: ["Responsive", "SEO-Friendly", "Custom Plugins"],
            img: "https://source.unsplash.com/600x400/?wordpress,website",
          },
          {
            title: "Static HTML / 3D Website",
            desc: "Lightweight static sites / 3D web demos.",
            features: ["Fast", "Lightweight"],
            img: "https://source.unsplash.com/600x400/?html,web",
          },
          {
            title: "Web App",
            desc: "SPA & PWAs for modern user experiences.",
            features: ["React", "API Integration", "PWA"],
            img: "https://source.unsplash.com/600x400/?webapp,code",
          },
        ],
      },
      {
        id: "custom-erp",
        label: "Custom ERP",
        cards: [
          {
            title: "ERP Dashboard",
            desc: "Centralized analytics and business management.",
            features: ["Inventory", "Accounting", "Analytics"],
            img: "https://source.unsplash.com/600x400/?erp,dashboard",
          },
        ],
      },
      {
        id: "app",
        label: "App Dev",
        cards: [
          {
            title: "iOS & Android Apps",
            desc: "Native & cross-platform mobile apps.",
            features: ["Flutter", "React Native", "Performance"],
            img: "https://source.unsplash.com/600x400/?mobile,app",
          },
        ],
      },
      {
        id: "game",
        label: "Game Dev",
        cards: [
          {
            title: "2D & 3D Games",
            desc: "Interactive games with Unity/Unreal.",
            features: ["Graphics", "Multiplayer"],
            img: "https://source.unsplash.com/600x400/?game,unity",
          },
        ],
      },
      {
        id: "ecom",
        label: "E-Commerce",
        cards: [
          {
            title: "Online Store",
            desc: "Custom e-commerce solutions & payment integration.",
            features: ["Payments", "Product Mgmt", "Tracking"],
            img: "https://source.unsplash.com/600x400/?ecommerce,shop",
          },
        ],
      },
      {
        id: "crm",
        label: "ERP / CRM",
        cards: [
          {
            title: "CRM Solutions",
            desc: "Sales & client management tools.",
            features: ["Leads", "Sales", "Automations"],
            img: "https://source.unsplash.com/600x400/?crm,sales",
          },
        ],
      },
    ],
  },

  ai: {
    title: "AI Consultancy",
    desc: "AI strategy, ML systems, automation & intelligent products.",
    slices: [
      {
        id: "ml",
        label: "ML",
        cards: [
          {
            title: "Custom ML Models",
            desc: "Model building & deployment.",
            features: ["Data Prep", "Modeling", "Serving"],
            img: "https://source.unsplash.com/600x400/?machinelearning,ai",
          },
        ],
      },
      {
        id: "nlp",
        label: "NLP",
        cards: [
          {
            title: "NLP Solutions",
            desc: "Text processing, chatbots & summarization.",
            features: ["Chatbot", "Summaries"],
            img: "https://source.unsplash.com/600x400/?nlp,chatbot",
          },
        ],
      },
      {
        id: "cv",
        label: "Computer Vision",
        cards: [
          {
            title: "CV Apps",
            desc: "Image/video analytics & detection.",
            features: ["Detection", "Recognition"],
            img: "https://source.unsplash.com/600x400/?computer-vision,ai",
          },
        ],
      },
      {
        id: "automation",
        label: "Automation",
        cards: [
          {
            title: "Automation Pipelines",
            desc: "Automate business workflows.",
            features: ["RPA", "Scheduling"],
            img: "https://source.unsplash.com/600x400/?automation,robot",
          },
        ],
      },
    ],
  },

  business: {
    title: "Business Consulting",
    desc: "Strategy, growth, systems & operational excellence.",
    slices: [
      {
        id: "strategy",
        label: "Strategy",
        cards: [
          {
            title: "Business Strategy",
            desc: "Go-to-market & scale strategy.",
            features: ["Market fit", "Roadmap"],
            img: "https://source.unsplash.com/600x400/?strategy,business",
          },
        ],
      },
      {
        id: "ops",
        label: "Operations",
        cards: [
          {
            title: "Operations Setup",
            desc: "Systems for efficient operations.",
            features: ["SOPs", "Automation"],
            img: "https://source.unsplash.com/600x400/?operations,office",
          },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        cards: [
          {
            title: "Sales Enablement",
            desc: "CRM & process improvements for sales.",
            features: ["CRM", "Training"],
            img: "https://source.unsplash.com/600x400/?sales,crm",
          },
        ],
      },
    ],
  },
};

/* ---------------------------
 Main Component
----------------------------*/
export default function ServicesPieInteractive() {
  const [selectedMain, setSelectedMain] = useState<string | null>('it');
  const [selectedSlice, setSelectedSlice] = useState<string | null>(null);
  
  const mainList = useMemo(
    () => [
      { id: "it", title: "IT Services", desc: "Robust and scalable IT infrastructure solutions." },
      { id: "ai", title: "AI Consultancy", desc: "Innovative AI strategies for business automation." },
      { id: "business", title: "Business Consulting", desc: "Expert advice to accelerate growth." },
    ],
    []
  );

  // Set default slice when main is selected
  useEffect(() => {
    if (selectedMain && !selectedSlice) {
      const active = servicesData[selectedMain];
      if (active?.slices?.length > 0) {
        setSelectedSlice(active.slices[0].id);
      }
    }
  }, [selectedMain, selectedSlice]);

  const resetToTop = () => {
    setSelectedSlice(null);
    setSelectedMain(null);
  };

  // compute slices for currently selected main
  const active = selectedMain ? servicesData[selectedMain] : null;
  const slices = active?.slices ?? [];

  // svg wheel constants
  const size = 360;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 140;
  const rInner = 60;
  const sliceCount = slices.length || 6;

  return (
    <section className="bg-[#0b0b0c] text-white py-16 px-6 md:px-16" style={{ backgroundImage: `url(${bgImag})`, backgroundSize: "cover"  }}>
      {/* Top service cards with enhanced glow */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 text-transparent bg-clip-text drop-shadow-lg">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {mainList.map((m, i) => (
            <motion.div
              key={m.id}
              className="rounded-xl p-1 relative cursor-pointer"
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
              onClick={() => {
                setSelectedMain(m.id);
                setSelectedSlice(null);
              }}
            >
              {/* Enhanced background glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl blur-2xl opacity-60 -z-10"
                style={{
                  background: i === 0 
                    ? "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(147,51,234,0.4) 50%, rgba(249,115,22,0.3) 100%)"
                    : i === 1
                    ? "radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(168,85,247,0.3) 100%)"
                    : "radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(249,115,22,0.4) 50%, rgba(59,130,246,0.3) 100%)"
                }}
                animate={{ 
                  opacity: [0.4, 0.9, 0.4],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              />
              
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-[-4px] rounded-xl blur-xl -z-20"
                style={{
                  background: "conic-gradient(from 0deg, #00b4ff, #9b5cff, #ff8a00, #00b4ff)"
                }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [180, 180, 180]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="bg-[#111214] rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg relative z-10"
                animate={{ 
                  boxShadow: [
                    "0 10px 30px rgba(2,6,23,0.4)", 
                    "0 10px 45px rgba(59,130,246,0.3)", 
                    "0 10px 30px rgba(2,6,23,0.4)"
                  ] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-md">
                  {m.title}
                </h3>
                <p className="text-gray-300">{m.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* If no main selected, return early */}
        {!selectedMain && (
          <p className="text-center text-gray-400">Click any card above to explore more (IT / AI / Business).</p>
        )}

        {/* Detail Section */}
        {selectedMain && (
          <>
            <div className="mt-12 bg-gradient-to-b from-[#060607]/40 to-transparent rounded-2xl p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: SVG Pie Wheel with zoom animation instead of rotation */}
                <div className="flex justify-center">
                  <motion.svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    className="relative"
                    initial={{ scale: 0.95 }}
                    animate={{ 
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Enhanced defs for gradient strokes and glow filter */}
                    <defs>
                      <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00b4ff" />
                        <stop offset="50%" stopColor="#9b5cff" />
                        <stop offset="100%" stopColor="#ff8a00" />
                      </linearGradient>

                      <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                        <stop offset="50%" stopColor="rgba(147,51,234,0.6)" />
                        <stop offset="100%" stopColor="rgba(249,115,22,0.4)" />
                      </radialGradient>

                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="12" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Background glow circle */}
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={rOuter + 20}
                      fill="url(#glowGrad)"
                      opacity={0.1}
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* draw each slice */}
                    {slices.map((slice, idx) => {
                      const startAngle = (360 / sliceCount) * idx;
                      const endAngle = (360 / sliceCount) * (idx + 1);
                      const outerPath = describeArc(cx, cy, rOuter, startAngle, endAngle);
                      const innerPath = describeArc(cx, cy, rInner, endAngle, startAngle);
                      const pathD = `${outerPath} ${innerPath}`;
                      const midAngle = startAngle + (endAngle - startAngle) / 2;
                      const labelPos = polarToCartesian(cx, cy, (rOuter + rInner) / 2, midAngle);

                      const isSelected = selectedSlice === slice.id;

                      return (
                        <g key={slice.id} className="cursor-pointer" onClick={() => setSelectedSlice(slice.id)}>
                          {/* Base fill with selection highlight */}
                          <path 
                            d={pathD} 
                            fill={isSelected ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.02)"} 
                            stroke="none" 
                          />
                          
                          {/* Main glowing stroke */}
                          <path
                            d={pathD}
                            fill="none"
                            stroke="url(#gradA)"
                            strokeWidth={isSelected ? 5 : 3}
                            style={{ filter: isSelected ? "url(#strongGlow)" : "url(#glow)" }}
                            strokeLinecap="round"
                          />

                          {/* Selection pulse effect */}
                          {isSelected && (
                            <motion.path
                              d={pathD}
                              fill="none"
                              stroke="url(#gradA)"
                              strokeWidth={8}
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                              style={{ filter: "url(#strongGlow)" }}
                            />
                          )}

                          {/* Label */}
                          <text
                            x={labelPos.x}
                            y={labelPos.y}
                            fill={isSelected ? "#ffffff" : "#e6eefc"}
                            fontSize={isSelected ? 14 : 12}
                            fontWeight={isSelected ? 700 : 600}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            style={{ pointerEvents: "none", userSelect: "none" }}
                          >
                            {slice.label}
                          </text>

                          {/* Dividing line */}
                          {(() => {
                            const outerPoint = polarToCartesian(cx, cy, rOuter + 6, startAngle);
                            const innerPoint = polarToCartesian(cx, cy, rInner - 6, startAngle);
                            return (
                              <line
                                x1={innerPoint.x}
                                y1={innerPoint.y}
                                x2={outerPoint.x}
                                y2={outerPoint.y}
                                stroke="url(#gradA)"
                                strokeWidth={1.3}
                                style={{ filter: "url(#glow)" }}
                              />
                            );
                          })()}
                        </g>
                      );
                    })}

                    {/* Center circle */}
                    <circle cx={cx} cy={cy} r={rInner - 8} fill="#0f1113" stroke="rgba(255,255,255,0.03)" strokeWidth={1} />
                    <text x={cx} y={cy - 6} textAnchor="middle" fill="#fff" fontWeight={700} fontSize={14}>
                      {active?.title}
                    </text>
                    <text x={cx} y={cy + 12} textAnchor="middle" fill="#d1d7e6" fontSize={11}>
                      Click a slice
                    </text>
                  </motion.svg>
                </div>

                {/* Right: Info panel with lighting box */}
                <motion.div
                  className="relative p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(15,17,19,0.8) 0%, rgba(30,32,34,0.6) 100%)"
                  }}
                >
                  {/* Animated lighting border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl -z-10"
                    style={{
                      background: "linear-gradient(45deg, #ff0080, #00ff80, #8000ff)",
                      padding: "2px"
                    }}
                    animate={{
                      background: [
                        "linear-gradient(0deg, #ff0080, #00ff80, #8000ff)",
                        "linear-gradient(120deg, #00ff80, #8000ff, #ff0080)",
                        "linear-gradient(240deg, #8000ff, #ff0080, #00ff80)",
                        "linear-gradient(360deg, #ff0080, #00ff80, #8000ff)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Inner glow effect */}
                  <motion.div
                    className="absolute inset-2 rounded-2xl blur-xl opacity-30 -z-10"
                    animate={{
                      background: [
                        "radial-gradient(circle, #ff008060 0%, transparent 70%)",
                        "radial-gradient(circle, #00ff8060 0%, transparent 70%)",
                        "radial-gradient(circle, #8000ff60 0%, transparent 70%)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-3">{active?.title}</h3>
                    <p className="text-gray-300 text-xlS mb-4">{active?.desc}</p>
                    <div className="flex gap-3 flex-wrap">
                      <button
                        className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                        onClick={() => {
                          setSelectedSlice(null);
                        }}
                      >
                        Reset
                      </button>
                      <button
                        className="px-6 py-3 bg-transparent border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition"
                        onClick={() => {
                          resetToTop();
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Cards section with enhanced glow */}
              <div className="mt-10">
                {selectedSlice ? (
                  <>
                    <h4 className="text-xl font-semibold mb-4">
                      {slices.find((s) => s.id === selectedSlice)?.label} — Options
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                      {slices
                        .find((s) => s.id === selectedSlice)!
                        .cards.map((card, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08 * idx }}
                            className="relative bg-gradient-to-b from-slate-900/70 to-slate-800/60 p-6 rounded-2xl border border-slate-700/30 shadow-lg glow-border rounded-2xl reveal bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImage})` }}
      
                          >
                            {/* Enhanced back glow */}
                            <motion.div
                              className="absolute inset-0 -z-10 rounded-xl blur-2xl"
                              style={{ 
                                background: idx % 3 === 0 
                                  ? "radial-gradient(circle, #00b4ff33 0%, #ff8a0033 100%)" 
                                  : idx % 3 === 1
                                  ? "radial-gradient(circle, #9b5cff33 0%, #00ff8033 100%)"
                                  : "radial-gradient(circle, #ff8a0033 0%, #ff008033 100%)"
                              }}
                              animate={{ 
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                duration: 3 + (idx % 3), 
                                repeat: Infinity,
                                delay: idx * 0.5
                              }}
                            />

                            <div className="h-40 bg-gray-800">
                              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-5">
                              <h5 className="text-lg font-semibold mb-2">{card.title}</h5>
                              <p className="text-gray-300 mb-3 text-sm">{card.desc}</p>

                              <div className="flex flex-wrap gap-2">
                                {card.features.map((f, fi) => (
                                  <span key={fi} className="px-6 py-3 bg-transparent border border-orange-500 rounded-full  transition">
                                    {f}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-4 flex items-center justify-between">
                                <button className="px-6 py-3 bg-transparent border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition">
                                  Learn
                                </button>
                                <div className="text-xs text-gray-400">Dashboard style • Demo</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400">Select a slice on the wheel to view available options.</p>
                )}
              </div>
            </div>

            <div className="mt-6 text-right">
              <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700" onClick={() => resetToTop()}>
                ← Back to services
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}