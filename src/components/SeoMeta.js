import { useEffect } from "react";

const DEFAULT_META = {
  title: "Khadesh Global | Agricultural Commodities Export and Supply",
  description:
    "Khadesh Global Integrated Services Limited delivers agricultural commodities and project management services across global markets.",
  keywords:
    "agricultural commodities, commodity export, Nigeria agricultural export, shea butter export, sesame seeds export, soybean export, dried hibiscus export, dried ginger export",
  image: "/main-logo-512.png",
};

const ROUTE_META = {
  "/": {
    title: "Agricultural Commodities Exporter | Khadesh Global",
    description:
      "Khadesh Global exports agricultural commodities from Nigeria and Africa to global buyers with quality assurance and reliable delivery.",
    keywords:
      "agricultural commodities, agricultural commodities exporter, Nigeria commodity export, Africa commodity supplier",
  },
  "/project-management": {
    title: "Project Management | Khadesh Global",
    description:
      "Professional project management services delivered with structured execution and measurable outcomes.",
  },
  "/commodities": {
    title: "Agricultural Commodities Portfolio | Khadesh Global",
    description:
      "Browse Khadesh Global's agricultural commodities including shea butter, sesame seeds, soya beans, dried hibiscus flower, dried ginger, and cashew nuts.",
    keywords:
      "agricultural commodities list, shea butter export, sesame seeds supplier, soybean exporter, dried hibiscus exporter, dried ginger supplier, cashew nuts w240 w320",
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

const setCanonical = (href) => {
  let link = document.head.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const setJsonLd = (id, data) => {
  let script = document.head.querySelector(`script[data-seo='${id}']`);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

export default function SeoMeta({ pathname }) {
  useEffect(() => {
    const normalizedPath = pathname.toLowerCase();
    const routeMeta = ROUTE_META[normalizedPath] || {};
    const meta = { ...DEFAULT_META, ...routeMeta };
    const canonicalUrl = `${window.location.origin}${pathname}`;
    const isCommodityArticle = normalizedPath.startsWith("/commodities/");
    const ogType = isCommodityArticle ? "article" : "website";

    document.title = meta.title;

    setMeta("name", "description", meta.description);
    setMeta("name", "keywords", meta.keywords);
    setMeta("name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    setMeta("name", "author", "Khadesh Global Integrated Services Limited");
    setMeta("name", "language", "en");
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", "Khadesh Global");
    setMeta("property", "og:locale", "en_NG");
    setMeta("property", "og:image", meta.image);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", meta.image);
    setMeta("name", "twitter:url", canonicalUrl);
    setMeta("name", "twitter:site", "@khadeshglobal");
    setMeta("name", "twitter:creator", "@khadeshglobal");
    setCanonical(canonicalUrl);

    const origin = window.location.origin;
    setJsonLd("organization", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Khadesh Global Integrated Services Limited",
      url: origin,
      logo: `${origin}/url-logo-512.png`,
    });

    setJsonLd("website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Khadesh Global",
      url: origin,
      potentialAction: {
        "@type": "SearchAction",
        target: `${origin}/commodities`,
        "query-input": "required name=search_term_string",
      },
    });

    setJsonLd("webpage", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: meta.title,
      description: meta.description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Khadesh Global",
        url: origin,
      },
    });
  }, [pathname]);

  return null;
}
