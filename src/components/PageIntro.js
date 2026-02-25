import React from "react";

const INTRO_BY_PATH = {
  "/": {
    title: "Cultivating Trust, Exporting Excellence",
    subtitle: "Integrated sourcing, commodities, and project services built for reliable delivery.",
    stats: ["Africa to Global Markets", "Value-Led Operations"],
  },
  "/project-management": {
    title: "Execution With Clarity",
    subtitle: "Structured planning, risk control, and dependable project outcomes.",
    stats: ["Scope Discipline", "Risk-Managed", "Outcome Focused"],
  },
  "/commodities": {
    title: "Portfolio Built For Scale",
    subtitle: "Agricultural commodities curated for quality and continuity.",
    stats: ["Agriculture Focused", "Quality-Checked", "Global Demand Ready"],
  },
  "/our-agents": {
    title: "Trusted Field Network",
    subtitle: "Regional intelligence and reliable touchpoints where operations matter most.",
    stats: ["Regional Reach", "Partner Reliability", "On-Ground Presence"],
  },
  "/our-strategy": {
    title: "Strategy With Momentum",
    subtitle: "A focused model for growth, resilience, and market responsiveness.",
    stats: ["Market-Led", "Data-Informed", "Long-Term Value"],
  },
  "/sustainability": {
    title: "Sustainable By Design",
    subtitle: "Responsible sourcing and stewardship integrated into every decision.",
    stats: ["Ethical Sourcing", "Community Minded", "Future-Focused"],
  },
  "/quality-assurance-compliance": {
    title: "Quality You Can Verify",
    subtitle: "Food safety controls, traceability, and compliance built into every shipment.",
    stats: ["HACCP-Aligned", "EU-Ready", "Traceable Lots"],
  },
  "/about-us": {
    title: "Built On Purpose",
    subtitle: "A Nigerian company committed to quality, trust, and measurable value.",
    stats: ["Mission-Driven", "Integrity-Led", "Service-Centered"],
  },
  "/our-mission": {
    title: "Mission In Motion",
    subtitle: "Delivering practical value through disciplined service and trusted partnerships.",
    stats: ["Value Delivery", "Reliable Process", "People + Markets"],
  },
  "/our-vision": {
    title: "Vision For Growth",
    subtitle: "To be a preferred partner across commodities and integrated services.",
    stats: ["Scalable Systems", "Market Leadership", "Sustainable Growth"],
  },
  "/our-commitment": {
    title: "Commitment You Can Measure",
    subtitle: "Consistency, transparency, and accountability at every stage.",
    stats: ["Quality Promise", "Operational Discipline", "Client Trust"],
  },
  "/our-partners": {
    title: "Partnerships That Perform",
    subtitle: "Collaborating with organizations that raise standards and unlock impact.",
    stats: ["Shared Standards", "Cross-Border Support", "Mutual Growth"],
  },
  "/our-value-proposition": {
    title: "Clear Competitive Value",
    subtitle: "Integrated capabilities that reduce friction across supply and execution.",
    stats: ["Speed + Reliability", "Risk-Aware Delivery", "Strategic Advantage"],
  },
  "/contact-us": {
    title: "Let’s Build Together",
    subtitle: "Talk to our team for sourcing, supply, and project collaboration.",
    stats: ["Fast Response", "Practical Support", "Open Communication"],
  },
  "/local-supply": {
    title: "Stronger Local Supply",
    subtitle: "Connecting local capability to consistent, dependable demand.",
    stats: ["Local Impact", "Reliable Access", "Sustainable Network"],
  },
};

export default function PageIntro({ pathname }) {
  const key = pathname.toLowerCase();
  const intro = INTRO_BY_PATH[key] || INTRO_BY_PATH["/"];

  return (
    <section className="page-intro reveal-on-scroll" aria-label="Page introduction">
      <p className="page-intro-kicker">Khadesh Global</p>
      <h1>{intro.title}</h1>
      <p className="page-intro-subtitle">{intro.subtitle}</p>
      <div className="page-intro-stats">
        {intro.stats.map((stat) => (
          <span key={stat} className="stat-chip">
            {stat}
          </span>
        ))}
      </div>
    </section>
  );
}
