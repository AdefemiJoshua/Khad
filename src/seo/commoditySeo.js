const TARGET_MARKETS = "Nigeria, UK, EU, USA";

const COMMODITY_SEO = {
  "dried-ginger": {
    name: "Dried Split Ginger",
    title: "Dried Ginger Exporter (Nigeria) | Khadesh Global",
    description:
      `Export and supply of dried split ginger from Nigeria to ${TARGET_MARKETS}. Quality-focused sourcing, reliable packaging, and export support.`,
    keywords:
      "dried ginger exporter, dried split ginger, zingiber officinale, ginger export Nigeria, agricultural commodities supplier",
    category: "Agricultural Commodity",
  },
  "shea-butter": {
    name: "Shea Butter",
    title: "Shea Butter Exporter (Nigeria) | Khadesh Global",
    description:
      `Export and supply of shea butter from Nigeria to ${TARGET_MARKETS}. Trusted sourcing, export documentation support, and consistent quality.`,
    keywords:
      "shea butter exporter, shea nuts, shea butter export Nigeria, cosmetic grade shea butter, agricultural commodities exporter",
    category: "Agricultural Commodity",
  },
  "processed-cashew-nuts-w240-w320": {
    name: "Processed Cashew Nuts (W240, W320)",
    title: "Processed Cashew Nuts W240/W320 Export | Khadesh Global",
    description:
      `Export and supply of processed cashew nuts W240 and W320 from Nigeria to ${TARGET_MARKETS}. Export-ready packaging and consistent kernel quality.`,
    keywords:
      "cashew nuts w240, cashew nuts w320, processed cashew nuts exporter, cashew export Nigeria, agricultural commodities supplier",
    category: "Agricultural Commodity",
  },
  "soya-beans": {
    name: "Soya Beans (Soybean)",
    title: "Soya Beans (Soybean) Exporter | Khadesh Global",
    description:
      `Export and supply of soya beans (soybean) from Nigeria to ${TARGET_MARKETS}. Reliable sourcing, specification-led lots, and export support.`,
    keywords:
      "soya beans exporter, soybean exporter, glycine max, soybean export Nigeria, agricultural commodities export",
    category: "Agricultural Commodity",
  },
  "sesame-seeds": {
    name: "Sesame Seeds",
    title: "Sesame Seeds Exporter | Khadesh Global",
    description:
      `Export and supply of sesame seeds (including hulled options) from Nigeria to ${TARGET_MARKETS}. Cleaned, export-ready lots and reliable delivery.`,
    keywords:
      "sesame seeds exporter, hulled sesame seeds, sesamum indicum, sesame export Nigeria, agricultural commodities supplier",
    category: "Agricultural Commodity",
  },
  "dried-hibiscus-flower": {
    name: "Dried Hibiscus Flower",
    title: "Dried Hibiscus Flower Exporter | Khadesh Global",
    description:
      `Export and supply of dried hibiscus flower (Hibiscus sabdariffa) from Nigeria to ${TARGET_MARKETS}. Food-grade supply for tea, beverage, and culinary use.`,
    keywords:
      "dried hibiscus flower exporter, hibiscus sabdariffa, dried hibiscus export Nigeria, hibiscus tea supplier, agricultural commodities export",
    category: "Agricultural Commodity",
  },
};

export function getCommoditySeo(slug) {
  if (!slug) return null;
  return COMMODITY_SEO[slug] || null;
}

