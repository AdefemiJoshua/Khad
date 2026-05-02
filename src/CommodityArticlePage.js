import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CommodityArticlePage.module.css";
import sesameSeedsImage from "./assets/commodities/SESAME.png";
import driedHibiscusImage from "./assets/commodities/driedhibiscusflower.png";
import driedGingerImage from "./assets/commodities/driedginger.png";
import sheaButterImage from "./assets/commodities/Sheabutter.png";
import soyaBeansImage from "./assets/commodities/soyabeans.png";
import sheaButterHeroImage from "./assets/commodities/como.jpg";
import cashewW240Image from "./assets/commodities/W240.png";
import cashewW320Image from "./assets/commodities/W320.png";

const CONTACT_EMAIL = "khadeshglobalintegratedservice@gmail.com";
const CONTACT_EMAIL_SECONDARY = "info@khadeshglobal.co.uk";
const CONTACT_PHONE = "+2348069081589";
const WHATSAPP_BASE = "https://wa.me/+2348069081589";

const ARTICLES = {
  "shea-butter": {
    label: "Shea Butter",
    heading: "SHEA BUTTER, SHEA NUTS",
    title: "Shea Butter: Complete Guide on Import/Export From Nigeria & Africa",
    heroImage: sheaButterHeroImage,
    image: sheaButterImage,
    intro: [
      "The Shea tree is a perennial crop predominantly found in West and East Africa. A Shea tree usually takes 11 to 15 years before it starts bearing fruits, and it can remain productive for more than 200 years.",
      "The fruit is typically around 5 cm long and 3-4 cm wide. It is elliptic and yellow or green with a thick butter-like material. The mucous pericarp contains a seed that is oval or round in shape.",
      "The seed has a big oily nut from which Shea Butter is extracted. The nut goes through crushing, roasting, grinding, and separation. The resulting paste is kneaded with water so the butter oil rises to the surface.",
      "Raw or unrefined Shea Butter is commonly yellow. After further refining, it can become white. Shea butter is triglyceride in nature.",
      "Local women are a critical part of the shea butter value chain. In recent years, there has also been growing mechanization to support higher supply and stronger standardization."
    ],
    usedFor: [
      "Shea butter is used mainly in the food industry (especially confectionery and beverages) and is widely used as a cocoa butter substitute.",
      "It is edible and increasingly used in cooking.",
      "It is also used in cosmetics and personal care products such as:",
    ],
    cosmeticUses: [
      "Skin and hair moisturizing creams",
      "Stretch mark prevention products during pregnancy",
      "Hair treatment for dry scalp",
      "Aftersun products",
      "Skin treatment after sunburn",
      "Anti-ageing and anti-wrinkle creams",
      "Shaving and aftershave creams",
      "Fatigue and pain-reduction products",
      "Products for insect bites and stings",
      "Baby care products against diaper rash",
      "Hair conditioners, lip gloss, and soaps"
    ],
    markets: [
      "Nigeria is a leading global exporter of shea butter, and the shea tree is grown in about 21 states in Nigeria.",
      "China is one of the leading importers of shea butter globally.",
      "Major producers include:",
    ],
    productionRanks: [
      "Nigeria - 39.87% (302.96k metric ton)",
      "Mali - 29.76% (226.09k metric ton)",
      "Burkina Faso - 18.43% (140.04k metric ton)",
      "Ghana - 4.18% (31.59k metric ton)",
      "Ivory Coast - 4.16% (31.59k metric ton)",
      "Benin - 1.83% (13.91k metric ton)",
      "Togo - 1.76% (13.39k metric ton)"
    ],
    westVsEast: [
      "There are two dominant species: Vitellaria Paradoxa (common in West Africa) and Vitellaria Nilotica (common in Uganda).",
      "West African shea butter generally has better consistency, a higher melting point, higher sterol and Vitamin A concentration, and lower oleic acid concentration than East African shea butter."
    ],
    grades: [
      "Unrefined Shea Butter: extracted directly without additional processing; usually yellowish and preferred for moisturizing and healing.",
      "Refined Shea Butter: processed, often bleached/deodorized, with reduced natural color, smell, and some natural nutrients.",
      "Ultra-Refined Shea Butter: goes through multiple filtering steps and is mostly used as an input in cosmetics manufacturing."
    ],
    exportSpecs: [
      "Low Free Fatty Acid (FFA < 1%)",
      "Low peroxide value (< 2 mEq/kg)",
      "Low impurity level (< 0.2%)",
      "Low moisture content (< 0.2%)"
    ],
    sourcingTips: [
      "Exporter should be registered with CAC.",
      "Exporter should be registered with NEPC.",
      "Exporter should have a domiciliary account for international payments.",
      "Required documents usually include: Certificate of Origin, Bill of Lading, Inspection Certificate, Phytosanitary Certificate, and Fumigation Certificate."
    ],
    paymentMethods: [
      "Bank (T/T) Payment",
      "Advance Payment",
      "Letter of Credit (LC)"
    ],
    shippingNotes: [
      "Air freight is often preferred for smaller shipments; sea freight is usually cheaper for larger volumes.",
      "Delivery cost depends on volume, route, and season.",
      "Time-sensitive orders often use air freight.",
      "Common trade terms include FOB and CIF depending on control and logistics capability."
    ],
    pricingNote:
      "As of July 2022, Grade A (unrefined) Shea Butter was quoted around $2,200-$2,600 per metric ton in international markets ($2.2-$2.6/kg).",
    tradeSpecs: [
      "Origin: Nigeria",
      "Product Type: Shea Butter",
      "Physical Specification: Based on buyer's specification",
      "Quantity: Based on buyer's specification",
      "Price: Negotiable / Metric Tonne",
      "Trial Order: 1 Metric Tonne",
      "Trade Process: FOB/CIF",
      "Payment Method: 100% irrevocable & confirmed L/C at sight",
      "Shipping Time: 15 to 25 days after confirmation of L/C",
      "Loading Port: Lagos, Nigeria"
    ],
    qualitySpecs: [
      "Type: Grade A 100% Natural, Organic, & Unrefined",
      "Colour: Beige / White / Yellow",
      "Inspection: SGS / Cotecna / Bureau Veritas / Intertek"
    ],
    shippingDocs: [
      "Bill of Lading",
      "Certificate of Origin",
      "SGS Inspection Certificate",
      "Phytosanitary Certificate",
      "Fumigation Certificate",
      "Commercial Invoice",
      "Packing List"
    ],
  },
  "sesame-seeds": {
    label: "Sesame Seeds",
    heading: "SESAME SEEDS",
    title: "Sesamum indicum",
    image: sesameSeedsImage,
    intro: [
      "Sesame seeds are extracted from the Sesamum indicum plant. They are pale yellow to golden brown with a nutty taste.",
      "We provide Hulled Sesame Seeds (seeds with the tough husk removed) for versatility and convenience.",
      "These little seeds are fantastic at relieving joint pain, balancing blood sugar, reducing the risk of diabetes and lowering cholesterol.",
      "They contain niacin, B6, protein, and folate and are packed with antioxidants."
    ],
    waysToUse: [
      "Bake into bread: Sesame seed bread is nutritious and rich in B vitamins and antioxidants.",
      "Sprinkle onto burger buns: Adds a light crunch and flavor.",
      "Use as an oil: Sesame seed oil is excellent in stir-fries and adds a light nutty flavor.",
      "Add to tofu: Toasted sesame seeds give tofu a delicate crunch.",
      "Include in soups: Add a tablespoon to improve flavor and nutrition."
    ],
    qualityStatement: [
      "At Khadesh Global, we guarantee exceptional quality Sesame Seeds.",
      "Enjoy their nutritional benefits as part of a healthy and balanced diet."
    ],
    productSpecifications: [
      "Product Name: Sesame Seeds",
      "Botanical Name: Sesamum indicum"
    ],
    productDescription: [
      "Clean, sound, mature, dried sesame seeds obtained from well-developed sesame pods.",
      "Free from live insects, mould, foreign odour, and harmful contaminants."
    ],
    physicalChemicalSpecifications: [
      "Purity: 99.90% – 99.98%",
      "Moisture Content: Max 7%",
      "Oil Content: 48% – 52%",
      "FFA (as Oleic Acid): Max 2%",
      "Admixture: Max 0.5%",
      "Damaged Seeds: Max 1%",
      "Foreign Matter: Max 0.1%",
      "Immature/Shrivelled Seeds: Max 1%",
      "Colour: Natural white / Brown (as specified)",
      "Odour: Fresh and neutral"
    ],
    contaminantLimits: [
      "Lead (Pb): ≤ 3.0 mg/kg",
      "Cadmium (Cd): ≤ 0.2 mg/kg",
      "Mercury (Hg): ≤ 0.1 mg/kg",
      "Aflatoxin B1: ≤ 5 ug/kg",
      "Total Aflatoxins: ≤ 10 ug/kg"
    ],
    additivesTreatment: [
      "No artificial coloring",
      "No preservatives",
      "Non-GMO",
      "Not irradiated (unless requested by buyer)"
    ],
    packaging: [
      "25kg or 50kg new PP bags",
      "25kg Kraft paper bags (food-grade, EU export)",
      "1MT Jumbo bags (upon request)",
      "Inner liner available upon buyer’s request"
    ],
    storageShelfLife: [
      "Store in cool, dry, well-ventilated warehouse",
      "Keep away from moisture and direct sunlight",
      "Shelf life: 12–24 months under proper storage conditions"
    ],
    availableVarieties: [
      "Natural White Sesame Seeds",
      "Hulled Sesame Seeds",
      "Brown sesame seeds"
    ]
  },
  "dried-hibiscus-flower": {
    label: "Dried Hibiscus Flower",
    heading: "HIBISCUS FLOWER",
    title: "Dried Hibiscus Flower Export from Nigeria (Hibiscus sabdariffa)",
    image: driedHibiscusImage,
    intro: [
      "Khadesh Global supplies and exports premium dried hibiscus flowers (Hibiscus sabdariffa) sourced directly from trusted farmers in Northern Nigeria, specifically Kano, Bauchi, and Gombe States.",
      "Our hibiscus is carefully processed to meet international export standards for global buyers.",
      "We work closely with local farmers to ensure consistent quality and reliable supply, while carefully cleaning and sun-drying our hibiscus flowers to preserve their natural color, taste, and quality.",
      "Our products are supplied to international markets such as the USA and Mexico, including beverage companies, herbal manufacturers, and food processors."
    ],
    usesAndBenefits: [
      {
        title: "Beverages",
        points: [
          "Used to produce hibiscus tea (sorrel), a natural antioxidant-rich drink popular in global health and wellness markets."
        ]
      },
      {
        title: "Food Applications",
        points: [
          "Used in jams, syrups, desserts, and sauces for its natural tart flavor and vibrant red color."
        ]
      },
      {
        title: "Natural Dye",
        points: [
          "Used as an eco-friendly dye in food coloring and textile production."
        ]
      }
    ],
    whyChoose: [
      "Direct sourcing from farmers in Kano, Bauchi & Gombe (Northern Nigeria)",
      "Carefully cleaned and sun-dried for premium export quality",
      "Consistent deep red color and natural tart flavor",
      "Reliable bulk supply for international buyers",
      "Supplying USA, Mexico, and other global markets"
    ],
    productSpecifications: [
      "Product Name: Dried Hibiscus Flowers",
      "Botanical Name: Hibiscus sabdariffa",
      "Plant Part: Dried Calyces",
      "Grade: Food Grade (Tea & Beverage Use)",
      "Drying Method: Sun-dried / Hygienically processed"
    ],
    physicalOrganoleptic: [
      "Appearance: Clean whole dried calyces",
      "Color: Deep red to burgundy",
      "Odor: Natural, free from musty smell",
      "Taste: Naturally tart",
      "Foreign Matter: ≤ 0.5%",
      "Broken Pieces: ≤ 5%",
      "Infestation: None",
      "Mold: None"
    ],
    chemicalParameters: [
      "Moisture Content: ≤ 8–10%",
      "Total Ash: ≤ 10%",
      "Acid Insoluble Ash: ≤ 1.5%"
    ],
    exportCompliance: [
      "Aflatoxin B1: ≤ 5 µg/kg",
      "Total Aflatoxins: ≤ 10 µg/kg",
      "Heavy Metals: Within EU/US limits",
      "Pesticide Residues: Compliant with international standards"
    ],
    additivesTreatment: [
      "No artificial coloring",
      "No preservatives",
      "Non-GMO",
      "Not irradiated (unless requested by buyer)"
    ],
    packaging: [
      "25kg food-grade polypropylene bags with inner liner",
      "Kraft paper packaging (optional)",
      "Clearly labeled with batch number, production date, and net weight"
    ],
    storageShelfLife: [
      "Store in a cool, dry, and ventilated environment",
      "Avoid moisture and direct sunlight",
      "Shelf Life: Up to 24 months under proper storage conditions"
    ]
  },
  "dried-ginger": {
    label: "Dried Split Ginger",
    heading: "DRIED SPLIT GINGER",
    title: "Dried Split Ginger Export from Nigeria (Zingiber officinale)",
    image: driedGingerImage,
    intro: [
      "Khadesh Global supplies and exports premium dried split ginger (Zingiber officinale) sourced directly from trusted farmers across major ginger-producing regions in Nigeria, including Southern Kaduna, Nasarawa, Benue, Niger, and Gombe States.",
      "The ginger is carefully harvested, cleaned, split, and sun-dried to preserve its natural aroma, potency, and export quality.",
      "Our dried split ginger is widely used in global food, pharmaceutical, and cosmetic industries due to its strong flavor, high gingerol content, and long shelf life.",
      "It is ideal for bulk buyers because it is lightweight, stable, and cost-efficient for international trade."
    ],
    whyChoose: [
      "Sourced directly from farmers in Southern Kaduna, Nasarawa, Benue, Niger & Gombe (Nigeria)",
      "Carefully cleaned, split, and sun-dried for export-grade quality",
      "Strong aroma and high natural gingerol content",
      "Consistent quality for bulk international supply",
      "Reliable export partner for global buyers"
    ],
    applications: {
      "Food Industry": [
        "Used in spice production, powdered ginger, sauces, baked goods, and beverages such as ginger tea and herbal infusions."
      ],
      "Pharmaceutical Industry": [
        "Used in herbal medicines and supplements for digestion support, anti-inflammatory formulations, and immune-boosting products."
      ],
      "Cosmetic and Personal Care Industry": [
        "Used in skincare and haircare products for antioxidant and scalp health benefits."
      ],
      "Industrial and Other Uses": [
        "Used for essential oil extraction, aromatherapy, and natural medicinal products."
      ]
    },
    physicalSpecifications: [
      "Form: Whole fingers / Split / Sliced",
      "Color: Light brown to yellowish",
      "Odor: Strong natural aromatic smell",
      "Taste: Pungent and spicy",
      "Moisture Content: ≤ 10%",
      "Foreign Matter: ≤ 0.5%",
      "Admixture: ≤ 0.5%",
      "Broken Pieces: ≤ 5%",
      "Size: 3–8 cm (depending on grade)"
    ],
    chemicalSpecifications: [
      "Volatile Oil Content: 1.5% – 3% (minimum)",
      "Total Ash: ≤ 8%",
      "Acid Insoluble Ash: ≤ 2%"
    ],
    packaging: [
      "25kg / 50kg PP bags",
      "Jute bags (export standard)",
      "Vacuum packaging available on request",
      "Private labeling available"
    ],
    shelfLife: "24 months under cool, dry storage conditions"
  },
  "soya-beans": {
    label: "Soya Beans",
    heading: "SOYA BEANS",
    title: "Soya Beans Export from Nigeria (Glycine max)",
    image: soyaBeansImage,
    intro: [
      "Khadesh Global supplies and exports high-quality soya beans (Glycine max) sourced directly from trusted farmers across major soybean-producing regions in Nigeria, including Benue, Nasarawa, Plateau, Taraba, Kaduna, Niger, and Kebbi States.",
      "Our soybeans are carefully cleaned, sorted, and prepared to meet international export standards.",
      "Nigeria is one of Africa’s growing soybean producers, and our sourcing network ensures consistent supply for global food, feed, and industrial markets.",
      "Soya beans are highly valued for their rich protein and oil content and are widely used in food production, animal feed, and industrial applications such as biodiesel and food processing."
    ],
    uses: {
      "Food Industry": [
        "Used in the production of soy milk, tofu, soy flour, cooking oil, and protein-based foods."
      ],
      "Animal Feed Industry": [
        "A major ingredient in livestock and poultry feed due to its high protein content."
      ],
      "Industrial Use": [
        "Used in biodiesel production, adhesives, and various industrial formulations."
      ]
    },
    whyChoose: [
      "Sourced directly from farmers in Benue, Nasarawa, Plateau, Taraba, Kaduna, Niger & Kebbi (Nigeria)",
      "Cleaned, sorted, and export-grade quality",
      "High protein content with consistent oil yield",
      "Reliable bulk supply for international markets",
      "Strong quality control and export compliance"
    ],
    productSpecifications: [
      "Product Name: Soybean",
      "Botanical Name: Glycine max"
    ],
    physicalSpecifications: [
      "Color: Natural yellow",
      "Moisture Content: Max 12–13%",
      "Foreign Matter: Max 1–2%",
      "Broken/Split Seeds: Max 3–5%",
      "Damaged Seeds: Max 2–3%",
      "Admixture: Max 1%",
      "Immature Seeds: Max 2%",
      "Odor: Fresh, natural",
      "Insect Infestation: None",
      "Live Weevils: None"
    ],
    chemicalSpecifications: [
      "Protein: 35–40% minimum",
      "Oil Content: 18–20%",
      "Free Fatty Acid: Max 2%",
      "Aflatoxin: ≤ 3–10 ppb"
    ],
    packaging: [
      "25kg PP bags",
      "50kg PP bags",
      "Bulk container shipment",
      "Jumbo bags available on request"
    ],
    shelfLifeTable: [
      "Store in a cool, dry, and well-ventilated area",
      "Maintain moisture below 13%",
      "Avoid humidity and pests",
      "Shelf Life: 12 months (up to 18 months in controlled storage)"
    ]
  },
  "processed-cashew-nuts-w240-w320": {
    label: "Processed Cashew Nuts W240 and W320",
    heading: "PROCESSED CASHEW NUTS",
    title: "Cashew Nuts W240 & W320 Export from Nigeria",
    heroImage: cashewW320Image,
    image: cashewW240Image,
    intro: [
      "Khadesh Global supplies and exports premium cashew nuts (W240 and W320 grades) sourced directly from trusted farmers across major cashew-producing regions in Nigeria, including Oyo, Osun, Ogun, Kogi, Kwara, Edo, Enugu, and Anambra States.",
      "Our cashew kernels are carefully processed, sorted, and packed to meet international export standards.",
      "Nigeria is one of the leading cashew-producing countries in Africa, and our supply chain ensures consistent quality kernels for global food processing, snack production, and confectionery industries.",
      "Cashew nuts are highly valued for their rich nutrient profile, including healthy fats, protein, calcium, iron, and vitamin B1, making them a key ingredient in global food and beverage manufacturing."
    ],
    applications: [
      "Snack Industry: Consumed as roasted, salted, honey-coated, or flavored snack products.",
      "Food Processing Industry: Used in ice cream, cakes, chocolates, sweets, and confectionery toppings.",
      "Food Ingredients: Ground into powder or paste for flavor enhancement and nutritional enrichment."
    ],
    whyChoose: [
      "Sourced directly from farmers in Oyo, Osun, Ogun, Kogi, Kwara, Edo, Enugu & Anambra (Nigeria)",
      "Export-grade W240 and W320 kernels",
      "Clean, white kernels with minimal breakage",
      "Strict quality control and sorting process",
      "Reliable bulk supply for international markets"
    ],
    specs: [
      "Color: White to light ivory",
      "Texture: Crisp",
      "W240: 240 kernels per pound",
      "W320: 320 kernels per pound",
      "Moisture Content: Max 5%",
      "Broken Kernels: Max 5%",
      "Spotted Kernels: Max 1%",
      "Scrapes: Max 5%",
      "Insect Infestation: None"
    ],
    packaging: [
      "1kg, 5kg, 10kg cartons",
      "Export-grade protective packaging",
      "Customized packaging available upon request"
    ]
  }
};

const ListBlock = ({ items }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default function CommodityArticlePage() {
  const { slug } = useParams();
  const article = ARTICLES[slug];

  if (!article) {
    return (
      <section className={styles.wrapper}>
        <div className={styles.card}>
          <h1>Commodity Article Not Found</h1>
          <p>The requested commodity article is not available yet.</p>
          <Link to="/commodities" className={styles.backLink}>
            Back to Commodities
          </Link>
        </div>
      </section>
    );
  }

  const orderLink = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Hello Khadesh Global, I want to place an order for ${article.label}.`
  )}`;

  const enquireMeta = (() => {
    switch (slug) {
      case "sesame-seeds":
        return { title: "Enquire About Sesame Seeds", noun: "sesame seed requirements" };
      case "dried-ginger":
        return { title: "Enquire About Ginger", noun: "ginger requirements" };
      case "dried-hibiscus-flower":
        return { title: "Enquire About Dried Hibiscus Flowers", noun: "dried hibiscus flower requirements" };
      case "processed-cashew-nuts-w240-w320":
        return { title: "Enquire About Cashew Nuts", noun: "cashew nut requirements" };
      case "soya-beans":
        return { title: "Enquire About Soybeans", noun: "soybean requirements" };
      case "shea-butter":
        return { title: "Enquire About Shea Butter", noun: "shea butter requirements" };
      default:
        return { title: `Enquire About ${article.label}`, noun: `${article.label} requirements` };
    }
  })();

  return (
    <section className={styles.wrapper}>
      <article className={styles.card}>
        <header className={styles.hero}>
          <img src={article.heroImage || article.image} alt={article.label} className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <p className={styles.kicker}>Commodity Article</p>
            <h1>{article.heading}</h1>
            <h2>{article.title}</h2>
          </div>
        </header>

        <div className={styles.layout}>
          <main className={styles.mainContent}>
            <section className={styles.section}>
              <h3>What is {article.label}?</h3>
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            {slug === "shea-butter" && (
              <>
                <section className={styles.section}>
                  <h3>What is Shea Butter Used For?</h3>
                  {article.usedFor.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ListBlock items={article.cosmeticUses} />
                </section>

                <section className={styles.section}>
                  <img src={article.image} alt="Shea Butter - Neogric" className={styles.inlineImage} />
                  <p className={styles.caption}>Shea Butter -Khadeshglobal-Redefining The Agric Supply Chain In Africa</p>
                </section>

                <section className={styles.section}>
                  <h3>The Difference Between West And East African Shea Butter</h3>
                  {article.westVsEast.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>

                <section className={styles.section}>
                  <h3>Three Major Grades of Shea Butter Exported From Nigeria</h3>
                  <ListBlock items={article.grades} />
                  <p>Export-grade refined shea butter commonly expects:</p>
                  <ListBlock items={article.exportSpecs} />
                </section>

                <section className={styles.section}>
                  <h3>Below Are Our Shea Butter Trade Specifications</h3>
                  <ListBlock items={article.tradeSpecs} />
                  <h3>Specifications</h3>
                  <ListBlock items={article.qualitySpecs} />
                  <h3>Expected Shipping Documents</h3>
                  <ListBlock items={article.shippingDocs} />
                </section>
              </>
            )}

            {slug === "processed-cashew-nuts-w240-w320" && (
              <>
                <section className={styles.section}>
                  <h3>Applications of Cashew Nuts</h3>
                  <ListBlock items={article.applications} />
                </section>

                <section className={styles.section}>
                  <h3>Why Choose Khadesh Global</h3>
                  <ListBlock items={article.whyChoose} />
                </section>

                <section className={styles.section}>
                  <h3>Physical Characteristics</h3>
                  <ListBlock items={article.specs} />
                </section>

                <section className={styles.section}>
                  <h3>Our Specific Packaging</h3>
                  <ListBlock items={article.packaging} />
                  <div className={styles.cashewImageGrid}>
                    <figure className={styles.cashewImageCard}>
                      <img src={cashewW320Image} alt="Cashew nuts W320" className={styles.inlineImage} />
                      <figcaption className={styles.cashewGradeTag}>W320</figcaption>
                    </figure>
                    <figure className={styles.cashewImageCard}>
                      <img src={cashewW240Image} alt="Cashew nuts W240" className={styles.inlineImage} />
                      <figcaption className={styles.cashewGradeTag}>W240</figcaption>
                    </figure>
                  </div>
                </section>
              </>
            )}

            {slug === "dried-ginger" && (
              <>
                <section className={styles.section}>
                  <h3>Applications/Uses of Dried Split Ginger</h3>
                  {Object.entries(article.applications).map(([category, items]) => (
                    <div key={category}>
                      <h3>{category}</h3>
                      <ListBlock items={items} />
                    </div>
                  ))}
                </section>

                <section className={styles.section}>
                  <h3>Why Choose Khadesh Global Ginger</h3>
                  <ListBlock items={article.whyChoose} />
                </section>

                <section className={styles.section}>
                  <h3>Physical Specifications</h3>
                  <ListBlock items={article.physicalSpecifications} />
                </section>

                <section className={styles.section}>
                  <h3>Chemical Specifications</h3>
                  <ListBlock items={article.chemicalSpecifications} />
                </section>

                <section className={styles.section}>
                  <h3>Packaging</h3>
                  <ListBlock items={article.packaging} />
                  <h3>Shelf Life</h3>
                  <p>{article.shelfLife}</p>
                </section>
              </>
            )}

            {slug === "dried-hibiscus-flower" && (
              <>
                <section className={styles.section}>
                  <h3>Uses of Dried Hibiscus Flower</h3>
                  {article.usesAndBenefits.map((group) => (
                    <div key={group.title}>
                      <h3>{group.title}</h3>
                      {group.points.length ? <ListBlock items={group.points} /> : null}
                    </div>
                  ))}
                </section>

                <section className={styles.section}>
                  <h3>Why Choose Khadesh Global</h3>
                  <ListBlock items={article.whyChoose} />
                </section>

                <section className={styles.section}>
                  <h3>Product Specifications</h3>
                  <ListBlock items={article.productSpecifications} />
                </section>

                <section className={styles.section}>
                  <h3>Physical & Organoleptic Characteristics</h3>
                  <ListBlock items={article.physicalOrganoleptic} />
                </section>

                <section className={styles.section}>
                  <h3>Chemical Parameters</h3>
                  <ListBlock items={article.chemicalParameters} />
                </section>

                <section className={styles.section}>
                  <h3>Export Compliance</h3>
                  <ListBlock items={article.exportCompliance} />
                </section>

                <section className={styles.section}>
                  <h3>Additives & Treatment</h3>
                  <ListBlock items={article.additivesTreatment} />
                  <h3>Packaging</h3>
                  <ListBlock items={article.packaging} />
                  <h3>Storage & Shelf Life</h3>
                  <ListBlock items={article.storageShelfLife} />
                </section>
              </>
            )}

            {slug === "sesame-seeds" && (
              <>
                <section className={styles.section}>
                  <h3>Ways to Eat Sesame Seeds</h3>
                  <ListBlock items={article.waysToUse} />
                </section>

                <section className={styles.section}>
                  <h3>Quality Statement</h3>
                  <ListBlock items={article.qualityStatement} />
                </section>

                <section className={styles.section}>
                  <h3>Product Specifications</h3>
                  <ListBlock items={article.productSpecifications} />
                  <h3>Product Description</h3>
                  <ListBlock items={article.productDescription} />
                </section>

                <section className={styles.section}>
                  <h3>Physical & Chemical Specifications</h3>
                  <ListBlock items={article.physicalChemicalSpecifications} />
                </section>

                <section className={styles.section}>
                  <h3>Contaminant Limits (EU Compliant)</h3>
                  <ListBlock items={article.contaminantLimits} />
                  <h3>Additives & Treatment</h3>
                  <ListBlock items={article.additivesTreatment} />
                </section>

                <section className={styles.section}>
                  <h3>Packaging</h3>
                  <ListBlock items={article.packaging} />
                  <h3>Storage & Shelf Life</h3>
                  <ListBlock items={article.storageShelfLife} />
                  <h3>Available Varieties</h3>
                  <ListBlock items={article.availableVarieties} />
                </section>
              </>
            )}

            {slug === "soya-beans" && (
              <>
                <section className={styles.section}>
                  <h3>Uses of Soya Beans</h3>
                  {Object.entries(article.uses).map(([category, items]) => (
                    <div key={category}>
                      <h3>{category}</h3>
                      <ListBlock items={items} />
                    </div>
                  ))}
                </section>

                <section className={styles.section}>
                  <h3>Why Choose Khadesh Global Soybeans</h3>
                  <ListBlock items={article.whyChoose} />
                </section>

                <section className={styles.section}>
                  <h3>Product Specifications</h3>
                  <ListBlock items={article.productSpecifications} />
                </section>

                <section className={styles.section}>
                  <h3>Physical Specifications</h3>
                  <ListBlock items={article.physicalSpecifications} />
                </section>

                <section className={styles.section}>
                  <h3>Chemical Specifications</h3>
                  <ListBlock items={article.chemicalSpecifications} />
                </section>

                <section className={styles.section}>
                  <h3>Packaging</h3>
                  <ListBlock items={article.packaging} />
                  <h3>Shelf Life</h3>
                  <ListBlock items={article.shelfLifeTable} />
                </section>
              </>
            )}

            <Link to="/commodities" className={styles.backLink}>
              Back to Commodities
            </Link>
          </main>

          <aside className={styles.sidebar}>
            <section className={styles.contactBlock}>
              <h3>To Contact</h3>
              <p>Tel: {CONTACT_PHONE}</p>
              <p className={styles.contactLine}>
                <span>Email:</span> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
              <p className={styles.contactLine}>
                <span>Email:</span> <a href={`mailto:${CONTACT_EMAIL_SECONDARY}`}>{CONTACT_EMAIL_SECONDARY}</a>
              </p>
              <p>WhatsApp: {CONTACT_PHONE}</p>

              <h3>{enquireMeta.title}</h3>
              <p>
                Click the button below and tell us about your {enquireMeta.noun}. We support buyers, suppliers, and trade
                partners with sourcing, supply, and export coordination based on mutually agreed terms.
              </p>
              <a href={orderLink} target="_blank" rel="noopener noreferrer" className={styles.orderButton}>
                PLACE YOUR ORDER
              </a>
            </section>
          </aside>
        </div>
      </article>
    </section>
  );
}
