const COMMODITY_SEO = {
  "dried-ginger": {
    name: "Dried Split Ginger",
    title: "ginger export Nigeria | Khadesh Global Dried Split Ginger",
    description:
      "ginger export Nigeria supplying premium dried split ginger sourced from Nigerian farmers for global markets.",
    keywords:
      "ginger export Nigeria, dried split ginger, zingiber officinale, ginger supplier, agricultural export company Nigeria",
    category: "Agricultural Commodity",
    imageAlt: "ginger export Nigeria dried split ginger",
  },
  "shea-butter": {
    name: "Shea Butter",
    title: "shea butter export Nigeria | Khadesh Global Premium Supply",
    description:
      "shea butter export Nigeria supplying quality-checked shea butter for cosmetics, personal care, and industrial use across global markets.",
    keywords:
      "shea butter export Nigeria, shea butter supplier Nigeria, vitellaria paradoxa, cosmetic grade shea butter, agricultural export company Nigeria",
    category: "Agricultural Commodity",
    imageAlt: "shea butter export Nigeria",
  },
  "processed-cashew-nuts-w240-w320": {
    name: "Processed Cashew Nuts (W240, W320)",
    title: "cashew nuts export Nigeria | Khadesh Global W240 W320",
    description:
      "cashew nuts export Nigeria supplying premium graded cashew kernels for global food and confectionery industries.",
    keywords:
      "cashew nuts export Nigeria, cashew kernels W240, cashew kernels W320, cashew supplier Nigeria, agricultural export",
    category: "Agricultural Commodity",
    imageAlt: "cashew nuts export Nigeria kernel grading",
  },
  "soya-beans": {
    name: "Soya Beans (Soybean)",
    title: "soybean export Nigeria | Khadesh Global Glycine Max",
    description:
      "soybean export Nigeria supplying high-quality soybeans for food, feed, and industrial use globally.",
    keywords:
      "soybean export Nigeria, soya beans exporter, glycine max, soybean supplier, agricultural export company Nigeria",
    category: "Agricultural Commodity",
    imageAlt: "soybean export Nigeria yellow soybeans",
  },
  "sesame-seeds": {
    name: "Sesame Seeds",
    title: "sesame seeds export Nigeria | Khadesh Global Premium Grade",
    description:
      "sesame seeds export Nigeria supplying clean, export-grade sesame seeds from Nigerian farmers.",
    keywords:
      "sesame seeds export Nigeria, sesamum indicum, cleaned sesame seeds, sesame supplier Nigeria, agricultural export",
    category: "Agricultural Commodity",
    imageAlt: "sesame seeds export Nigeria cleaned seeds",
  },
  "dried-hibiscus-flower": {
    name: "Dried Hibiscus Flower",
    title: "hibiscus flower export Nigeria | Khadesh Global Dried Hibiscus",
    description:
      "hibiscus flower export Nigeria supplying premium dried hibiscus flowers from Northern Nigeria to global markets.",
    keywords:
      "hibiscus flower export Nigeria, dried hibiscus flower, hibiscus sabdariffa, sun dried calyces, agricultural export",
    category: "Agricultural Commodity",
    imageAlt: "hibiscus flower export Nigeria sun dried calyces",
  },
};

export function getCommoditySeo(slug) {
  if (!slug) return null;
  return COMMODITY_SEO[slug] || null;
}
