const TARGET_MARKETS = "Nigeria, UK, EU, USA";

const COMMODITY_SEO = {
  "dried-ginger": {
    name: "Dried Split Ginger",
    title: "ginger export Nigeria | Khadesh Global Dried Split Ginger",
    description:
      "ginger export Nigeria supplying premium dried split ginger sourced from Nigerian farmers for global markets.",
    keywords:
      "ginger export Nigeria, dried split ginger, zingiber officinale, ginger supplier, agricultural export company Nigeria",
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
    title: "cashew nuts export Nigeria | Khadesh Global W240 W320",
    description:
      "cashew nuts export Nigeria supplying premium graded cashew kernels for global food and confectionery industries.",
    keywords:
      "cashew nuts export Nigeria, cashew kernels W240, cashew kernels W320, cashew supplier Nigeria, agricultural export",
    category: "Agricultural Commodity",
  },
  "soya-beans": {
    name: "Soya Beans (Soybean)",
    title: "soybean export Nigeria | Khadesh Global Glycine Max",
    description:
      "soybean export Nigeria supplying high-quality soybeans for food, feed, and industrial use globally.",
    keywords:
      "soybean export Nigeria, soya beans exporter, glycine max, soybean supplier, agricultural export company Nigeria",
    category: "Agricultural Commodity",
  },
  "sesame-seeds": {
    name: "Sesame Seeds",
    title: "sesame seeds export Nigeria | Khadesh Global Premium Grade",
    description:
      "sesame seeds export Nigeria supplying clean, export-grade sesame seeds from Nigerian farmers.",
    keywords:
      "sesame seeds export Nigeria, sesamum indicum, cleaned sesame seeds, sesame supplier Nigeria, agricultural export",
    category: "Agricultural Commodity",
  },
  "dried-hibiscus-flower": {
    name: "Dried Hibiscus Flower",
    title: "hibiscus flower export Nigeria | Khadesh Global Dried Hibiscus",
    description:
      "hibiscus flower export Nigeria supplying premium dried hibiscus flowers from Northern Nigeria to global markets.",
    keywords:
      "hibiscus flower export Nigeria, dried hibiscus flower, hibiscus sabdariffa, sun dried calyces, agricultural export",
    category: "Agricultural Commodity",
  },
};

export function getCommoditySeo(slug) {
  if (!slug) return null;
  return COMMODITY_SEO[slug] || null;
}
