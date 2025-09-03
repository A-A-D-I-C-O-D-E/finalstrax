import React from "react";
import HeroSection_Business from "./HeroSection_Business";

const Business = () => {
  const roadmapData = [
    {
      title: "Market Research & Analysis",
      desc: "We conduct in-depth research on your industry, competitors, and customer behavior. Our analysis helps identify market gaps, customer needs, and upcoming opportunities so your business can make data-driven decisions.",
      color: "border-yellow-400 bg-yellow-50",
    },
    {
      title: "Business Strategy & Roadmaps",
      desc: "We help you design a clear business strategy that defines long-term goals, actionable steps, and milestones. Our detailed roadmaps keep your team aligned and focused on scaling efficiently.",
      color: "border-blue-400 bg-blue-50",
    },
    {
      title: "Branding & Positioning",
      desc: "We craft strong brand identities and positioning strategies that make your business stand out. From messaging to design, we ensure your brand resonates with the right audience and builds lasting trust.",
      color: "border-green-400 bg-green-50",
    },
    {
      title: "Go-To-Market Strategy",
      desc: "We create tailored go-to-market strategies that define your launch plan, marketing channels, and sales tactics. This ensures your product or service enters the market with maximum impact and adoption.",
      color: "border-purple-400 bg-purple-50",
    },
  ];

  return (
    <>
    <HeroSection_Business/>
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Business Roadmaps That Actually Work
        </h1>
        <p className="text-lg text-gray-600">
          From market research to scaling strategies, we build business roadmaps
          that ensure growth and success.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg border shadow-sm p-6 transition hover:shadow-md ${item.color}`}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default Business;
