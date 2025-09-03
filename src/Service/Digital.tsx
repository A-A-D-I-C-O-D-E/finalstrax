import React from "react";
import HeroSection_Digital from "./HeroSection_Digital";

const Digital = () => {
  const digitalData = [
    {
      title: "Website Design & Development",
      desc: "Smart websites designed to convert visitors into customers while reflecting your brand identity.",
      color: "border-yellow-400 bg-yellow-50",
    },
    {
      title: "CRM Setup & Integration",
      desc: "Seamlessly integrate CRM systems to manage leads, automate follow-ups, and improve customer relationships.",
      color: "border-blue-400 bg-blue-50",
    },
    {
      title: "E-commerce Automation",
      desc: "Automate your online store processes, from inventory management to order fulfillment and payment processing.",
      color: "border-green-400 bg-green-50",
    },
    {
      title: "Social Media Management & Funnel Building",
      desc: "Build effective social funnels, manage campaigns, and engage your audience across multiple platforms.",
      color: "border-purple-400 bg-purple-50",
    },
  ];

  return (
    <>
    <HeroSection_Digital/>
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Smart Digital Setups for Modern Businesses
        </h1>
        <p className="text-lg text-gray-600">
          From websites to social funnels, we provide digital solutions to grow and automate your business.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {digitalData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg border shadow-sm p-6 transition hover:shadow-md ${item.color}`}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Digital;
