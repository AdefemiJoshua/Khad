import { useEffect } from "react";

const DEFAULT_META = {
  title: "Khadesh Global | Agricultural Commodities and Project Services",
  description:
    "Khadesh Global Integrated Services Limited delivers agricultural commodities and project management services across global markets.",
  image: "/main-logo-512.png",
};

const ROUTE_META = {
  "/": {
    title: "Khadesh Global | Global Agricultural Trading",
    description:
      "Explore Khadesh Global's agricultural commodities and integrated supply chain services.",
  },
  "/project-management": {
    title: "Project Management | Khadesh Global",
    description:
      "Professional project management services delivered with structured execution and measurable outcomes.",
  },
  "/commodities": {
    title: "Commodities | Khadesh Global",
    description:
      "Browse Khadesh Global's agricultural commodities portfolio.",
  },
  "/our-agents": {
    title: "Our Agents | Khadesh Global",
    description:
      "Meet Khadesh Global's trusted agent network supporting regional and global distribution.",
  },
  "/our-strategy": {
    title: "Our Strategy | Khadesh Global",
    description:
      "Understand the growth, sourcing, and operational strategy that drives Khadesh Global.",
  },
  "/sustainability": {
    title: "Sustainability | Khadesh Global",
    description:
      "Discover our sustainability approach across procurement, operations, and long-term partnerships.",
  },
  "/quality-assurance-compliance": {
    title: "Quality Assurance & Compliance | Khadesh Global",
    description:
      "Review Khadesh Global's quality assurance framework, HACCP-aligned controls, traceability, and export compliance support.",
  },
  "/about-us": {
    title: "About Us | Khadesh Global",
    description:
      "Learn about Khadesh Global Integrated Services Limited and our mission-driven operating model.",
  },
  "/our-mission": {
    title: "Our Mission | Khadesh Global",
    description:
      "Read Khadesh Global's mission and long-term commitment to dependable service delivery.",
  },
  "/our-vision": {
    title: "Our Vision | Khadesh Global",
    description:
      "Explore our vision for sustainable growth in commodities and integrated services.",
  },
  "/our-commitment": {
    title: "Our Commitment | Khadesh Global",
    description:
      "See how Khadesh Global maintains quality, integrity, and consistent stakeholder value.",
  },
  "/our-partners": {
    title: "Our Partners | Khadesh Global",
    description:
      "Discover partner organizations that support Khadesh Global's operations and expansion.",
  },
  "/our-value-proposition": {
    title: "Our Value Proposition | Khadesh Global",
    description:
      "Understand the operational strengths and value proposition that differentiate Khadesh Global.",
  },
  "/contact-us": {
    title: "Contact Us | Khadesh Global",
    description:
      "Contact Khadesh Global for inquiries, partnerships, commodity requests, and project support.",
  },
  "/local-supply": {
    title: "Local Supply | Khadesh Global",
    description:
      "Reliable local supply services with quality control and responsive delivery support.",
  },
};

const setMeta = (attribute, key, content) => {
  let tag = document.head.querySelector(`meta[${attribute}='${key}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

export default function SeoMeta({ pathname }) {
  useEffect(() => {
    const normalizedPath = pathname.toLowerCase();
    const routeMeta = ROUTE_META[normalizedPath] || {};
    const meta = { ...DEFAULT_META, ...routeMeta };

    document.title = meta.title;

    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", meta.image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", meta.image);
  }, [pathname]);

  return null;
}
