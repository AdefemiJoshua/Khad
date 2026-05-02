import React from "react";
import { Helmet } from "react-helmet-async";
import { getCommoditySeo } from "../seo/commoditySeo";

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
    title: "project management consulting Nigeria | Khadesh Global Services",
    description:
      "project management consulting Nigeria supporting agribusiness, government, manufacturing, and NGO projects.",
    keywords: "project management consulting Nigeria, project planning execution, logistics supply chain management",
  },
  "/commodities": {
    title: "Agricultural Commodities Portfolio | Khadesh Global",
    description:
      "Browse Khadesh Global's agricultural commodities including shea butter, sesame seeds, soya beans, dried hibiscus flower, dried ginger, and cashew nuts.",
    keywords:
      "agricultural commodities list, shea butter export, sesame seeds supplier, soybean exporter, dried hibiscus exporter, dried ginger supplier, cashew nuts w240 w320",
  },
  "/our-agents": {
    title: "commodity trading agents Nigeria | Khadesh Global Agent Program",
    description:
      "commodity trading agents Nigeria offering commission-based opportunities in agricultural trade facilitation.",
    keywords: "commodity trading agents Nigeria, agricultural trade agents, commodity brokers Nigeria",
  },
  "/our-strategy": {
    title: "agricultural supply chain Nigeria | Khadesh Global Strategy",
    description:
      "agricultural supply chain Nigeria integrating farmers, logistics, and buyers into a structured commodity trade system.",
    keywords: "agricultural supply chain Nigeria, farm to export logistics, commodity sourcing strategy",
  },
  "/sustainability": {
    title: "sustainable agriculture Nigeria | Khadesh Global Sustainability",
    description:
      "sustainable agriculture Nigeria promoting ethical sourcing, environmental responsibility, and smallholder farmer inclusion.",
    keywords: "sustainable agriculture Nigeria, responsible sourcing, ethical supply chain, smallholder farmers",
  },
  "/quality-assurance-compliance": {
    title: "agricultural export compliance Nigeria | Khadesh Global QA",
    description:
      "agricultural export compliance Nigeria ensuring food safety, certification, testing, and traceability for global trade.",
    keywords: "agricultural export compliance Nigeria, HACCP, traceability, aflatoxin testing, phytosanitary certificate",
  },
  "/about-us": {
    title: "agricultural export company Nigeria | About Khadesh Global",
    description:
      "agricultural export company Nigeria specializing in sourcing from smallholder farmers and delivering agricultural commodities to global markets with project management support.",
    keywords: "agricultural export company Nigeria, commodity export Nigeria, supply chain management, quality control",
  },
  "/our-mission": {
    title: "agricultural sourcing Nigeria | Khadesh Global Mission",
    description:
      "agricultural sourcing Nigeria focused on ethical sourcing, delivery, and project management solutions across global markets.",
    keywords: "agricultural sourcing Nigeria, ethical sourcing, commodity export mission, project management support",
  },
  "/our-vision": {
    title: "agricultural trade company Nigeria | Khadesh Global Vision",
    description:
      "agricultural trade company Nigeria focused on connecting farmers to global markets through trusted trade and project management solutions.",
    keywords: "agricultural trade company Nigeria, global commodity trade, trusted supply, project management",
  },
  "/our-commitment": {
    title: "Our Commitment | Khadesh Global",
    description:
      "See how Khadesh Global maintains quality, integrity, and consistent stakeholder value.",
  },
  "/our-partners": {
    title: "commodity trading partners Nigeria | Khadesh Global Collaboration",
    description:
      "commodity trading partners Nigeria building long-term supply chain partnerships across agricultural markets.",
    keywords: "commodity trading partners Nigeria, logistics partners, warehousing partners, aggregation partners",
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
    title: "local agricultural supply Nigeria | Khadesh Global Network",
    description:
      "local agricultural supply Nigeria connecting farmers and buyers through structured domestic commodity distribution systems.",
    keywords: "local agricultural supply Nigeria, commodity distribution, aggregation, local buyers, Nigeria markets",
  },
};

export default function SeoMeta({ pathname }) {
  const normalizedPath = (pathname || "/").toLowerCase();
  const routeMeta = ROUTE_META[normalizedPath] || {};
  const commoditySlug = normalizedPath.startsWith("/commodities/")
    ? normalizedPath.split("/")[2]
    : null;
  const commodityMeta = getCommoditySeo(commoditySlug);
  const meta = { ...DEFAULT_META, ...routeMeta, ...(commodityMeta || {}) };

  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "";
  const canonicalUrl = `${origin}${pathname || "/"}`;
  const isCommodityArticle = normalizedPath.startsWith("/commodities/");
  const ogType = isCommodityArticle ? "article" : "website";

  const imageUrl =
    meta.image && meta.image.startsWith("/") && origin ? `${origin}${meta.image}` : meta.image;

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Khadesh Global Integrated Services Limited",
    url: origin || undefined,
    logo: origin ? `${origin}/url-logo-512.png` : "/url-logo-512.png",
    areaServed: ["Nigeria", "United Kingdom", "United States", "European Union"],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Khadesh Global",
    url: origin || undefined,
    potentialAction: {
      "@type": "SearchAction",
      target: origin ? `${origin}/commodities` : "/commodities",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdWebpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Khadesh Global",
      url: origin || undefined,
    },
  };

  const jsonLdProduct =
    isCommodityArticle && commodityMeta
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: commodityMeta.name,
          category: commodityMeta.category,
          description: meta.description,
          brand: {
            "@type": "Brand",
            name: "Khadesh Global",
          },
          url: canonicalUrl,
        }
      : null;

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords ? <meta name="keywords" content={meta.keywords} /> : null}
      <meta
        name="robots"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />
      <meta name="author" content="Khadesh Global Integrated Services Limited" />
      <meta name="language" content="en" />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Khadesh Global" />
      <meta property="og:locale" content="en_NG" />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:site" content="@khadeshglobal" />
      <meta name="twitter:creator" content="@khadeshglobal" />

      <link rel="canonical" href={canonicalUrl} />

      <script type="application/ld+json" data-seo="organization">
        {JSON.stringify(jsonLdOrganization)}
      </script>
      <script type="application/ld+json" data-seo="website">
        {JSON.stringify(jsonLdWebsite)}
      </script>
      <script type="application/ld+json" data-seo="webpage">
        {JSON.stringify(jsonLdWebpage)}
      </script>
      {jsonLdProduct ? (
        <script type="application/ld+json" data-seo="product">
          {JSON.stringify(jsonLdProduct)}
        </script>
      ) : null}
    </Helmet>
  );
}
