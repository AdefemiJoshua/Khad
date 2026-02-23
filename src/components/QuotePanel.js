import React from "react";

const QUOTE_BY_PATH = {
  "/": "We move value across borders with discipline, trust, and speed.",
  "/project-management": "Execution quality is not accidental; it is engineered.",
  "/commodities": "Strong supply starts with strong relationships and standards.",
  "/our-agents": "Local intelligence is one of our strongest global assets.",
  "/our-strategy": "Strategy only matters when it survives real market pressure.",
  "/sustainability": "Long-term value requires responsible decisions today.",
  "/about-us": "Our reputation is built one delivery, one promise at a time.",
  "/our-mission": "Our mission is practical impact through reliable service.",
  "/our-vision": "Our vision is growth that remains responsible and resilient.",
  "/our-commitment": "Commitment means consistency, especially when markets fluctuate.",
  "/our-partners": "Partnerships scale better when trust and standards are shared.",
  "/our-value-proposition": "Integrated capability is where speed and reliability meet.",
  "/contact-us": "Great outcomes start with one clear conversation.",
  "/local-supply": "Local networks become stronger when demand is dependable.",
};

export default function QuotePanel({ pathname }) {
  const key = pathname.toLowerCase();
  const quote = QUOTE_BY_PATH[key] || QUOTE_BY_PATH["/"];

  return (
    <aside className="quote-panel reveal-on-scroll" aria-label="Highlight quote">
      <p>“{quote}”</p>
    </aside>
  );
}
