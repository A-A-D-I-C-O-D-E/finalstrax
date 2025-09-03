import React from "react";
import HeroSection_ai from "./HeroSection-ai";

const Ai_automation = () => {
  const agentsData = [
    {
      title: "Essential Bots",
      desc: "Lead Follow-Up, Appointment Booking, WhatsApp Welcome, Invoice & Payment Reminder, Customer Feedback Bots",
      color: "bg-yellow-50 border-yellow-300",
    },
    {
      title: "Growth Automations",
      desc: "CRM Integration, AI Website & WhatsApp Chatbots, Social Media Auto-Posting, Proposal & Contract Generator, Cart Recovery Automation",
      color: "bg-blue-50 border-blue-300",
    },
    {
      title: "Enterprise AI",
      desc: "Voice AI Assistant, Sales AI Agent, AI Customer Support Hub, HR & Recruitment Bot, Finance Automation, Project Management Bot",
      color: "bg-green-50 border-green-300",
    },
    {
      title: "High-End AI Systems",
      desc: "AI Business Consultant (Mind Replica), End-to-End Business Launch Automation, AI Data Analyst Bot, Predictive Sales & Marketing Bot, AI Talent & Training, Industry-Specific Automation",
      color: "bg-purple-50 border-purple-300",
    },
  ];

  return (
    <>
    <HeroSection_ai/>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        AI-Powered Agents That Save You Time, Money, and Effort
      </h2>
      <p className="text-center text-gray-600 mb-10">
        From everyday productivity bots to advanced enterprise systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agentsData.map((agent, index) => (
          <div
            key={index}
            className={`border ${agent.color} rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300`}
          >
            <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
            <p className="text-gray-700">{agent.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Ai_automation;
