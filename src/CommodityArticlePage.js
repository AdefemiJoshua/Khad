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
      "Trial Order: 10 Metric Tonnes",
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
    heading: "DRIED HIBISCUS FLOWER",
    title: "Hibiscus sabdariffa",
    image: driedHibiscusImage,
    intro: [
      "The dried hibiscus flower, scientifically known as Hibiscus sabdariffa, is a tropical plant renowned for its vibrant red petals and numerous health benefits.",
      "Native to Africa, this flower has been embraced by cultures worldwide for its unique flavour and medicinal properties.",
      "When dried, hibiscus flowers are used in teas, beverages, herbal medicine, and cosmetic formulations.",
      "At Khadesh Global, we specialize in the supply and export of high-quality dried hibiscus flowers to meet growing global demand."
    ],
    usesAndBenefits: [
      {
        title: "Beverages",
        points: [
          "One of the most popular uses of dried hibiscus flowers is beverages.",
          "The petals are steeped to create a tangy drink known as hibiscus tea or sorrel.",
          "This tea is rich in antioxidants that help combat oxidative stress and inflammation."
        ]
      },
      {
        title: "Culinary Uses",
        points: [
          "Dried hibiscus petals are used in salads, desserts, jams, and jellies.",
          "They add tart flavor and vibrant color.",
          "Chefs use hibiscus to give a unique twist to traditional dishes."
        ]
      },
      {
        title: "Dye Production",
        points: [
          "The vibrant red color of hibiscus petals is used for natural dye production.",
          "These dyes are used in textiles and food coloring as eco-friendly alternatives."
        ]
      }
    ],
    qualityAndPricing: [
      "Our hibiscus flowers are sourced from top farms for consistent quality.",
      "The drying process is carefully controlled to preserve natural taste and health benefits.",
      "We offer competitive pricing without compromising quality.",
      "Our efficient supply chain allows us to provide excellent value to customers."
    ],
    productSpecifications: [
      "Product Name: Dried Hibiscus Flowers",
      "Botanical Name: Hibiscus sabdariffa",
      "Plant Part: Dried Calyces",
      "Grade: Food Grade - Suitable for Herbal Tea & Beverage Use",
      "Drying Method: Sun-dried / Mechanically dried under hygienic conditions"
    ],
    physicalOrganoleptic: [
      "Appearance: Clean, well-dried whole calyces",
      "Color: Uniform deep red to burgundy",
      "Odor: Characteristic, free from musty/off-odors",
      "Taste: Natural tart flavor",
      "Foreign Matter: ≤ 0.5%",
      "Broken Pieces: ≤ 5%",
      "Infestation: None",
      "Visible Mold: None"
    ],
    chemicalParameters: [
      "Moisture Content: ≤ 8-10%",
      "Total Ash: 10%",
      "Acid Insoluble Ash: 1.5%",
      "Sulphur Dioxide: Not added / within EU permitted limits"
    ],
    contaminantLimits: [
      "Aflatoxin B1: ≤ 5 ug/kg",
      "Total Aflatoxins: ≤ 10 ug/kg",
      "Lead (Pb): ≤ 3.0 mg/kg",
      "Cadmium (Cd): ≤ 0.2 mg/kg",
      "Mercury (Hg): ≤ 0.1 mg/kg",
      "Pesticide Residues: Compliant with EU MRL regulations"
    ],
    additivesTreatment: [
      "No artificial coloring",
      "No preservatives",
      "Non-GMO",
      "Not irradiated (unless requested by buyer)"
    ],
    packaging: [
      "25kg food-grade polypropylene bags with inner polyethylene liner",
      "Kraft paper bags with moisture barrier (optional)",
      "Clearly labeled with batch number, production date, and net weight"
    ],
    storageShelfLife: [
      "Store in a cool, dry, and well-ventilated warehouse",
      "Relative humidity below 65%",
      "Protect from direct sunlight and pests",
      "Shelf Life: Up to 24 months under recommended storage conditions"
    ]
  },
  "dried-ginger": {
    label: "Dried Split Ginger",
    heading: "DRIED SPLIT GINGER",
    title: "Dried Split Ginger (Zingiber officinale)",
    image: driedGingerImage,
    intro: [
      "Dried Split Ginger refers to ginger rhizomes (Zingiber officinale) that have been harvested, cleaned, split into halves, and sun-dried to reduce moisture content.",
      "This preservation method enhances shelf life and maintains pungency, making it a preferred form for export, storage, and industrial processing.",
      "Dried Split Ginger is widely used across the food, pharmaceutical, and cosmetic industries due to its strong flavor, medicinal properties, and economic value.",
      "Unlike fresh ginger, dried split ginger has an extended shelf life without refrigeration and often has more concentrated essential oils and gingerol content.",
      "Its lighter weight and reduced moisture make it easier to transport in bulk and more cost-effective for large-scale processing."
    ],
    applications: {
      "Food Industry": [
        "Spice Production: Used in powdered ginger products, spice blends, and condiments.",
        "Tea and Beverages: A key ingredient in ginger tea, herbal infusions, and ginger-flavored drinks.",
        "Flavoring Agent: Enhances the taste of soups, sauces, and baked goods."
      ],
      "Pharmaceutical Industry": [
        "Digestive Health: Used in supplements and herbal remedies for nausea, bloating, and indigestion.",
        "Anti-Inflammatory Uses: Extracts are used in pain relief and arthritis treatment.",
        "Immune Boosting: Popular in cold and flu medications due to its antimicrobial properties."
      ],
      "Cosmetic and Personal Care Industry": [
        "Skincare: Found in anti-aging creams and acne treatments due to antioxidant properties.",
        "Hair Care: Used in shampoos and conditioners to promote scalp health and reduce dandruff."
      ],
      "Industrial and Other Uses": [
        "Essential Oil Extraction: Used in perfumes, aromatherapy, and medicinal balms.",
        "Preservative: Acts as a natural preservative in some food and medicinal formulations."
      ]
    },
    physicalSpecifications: [
      "Form: Whole fingers / Split / Sliced",
      "Color: Light brown to yellowish",
      "Odor: Characteristic strong aromatic smell",
      "Taste: Pungent, spicy",
      "Moisture Content: ≤ 10%",
      "Foreign Matter: ≤ 0.5%",
      "Admixture: ≤ 0.5%",
      "Broken Pieces: ≤ 5% (depending on grade)",
      "Size: 3–8 cm (whole fingers, depending on grade)"
    ],
    chemicalSpecifications: [
      "Volatile Oil Content: 1.5% – 3% (min)",
      "Total Ash: ≤ 8%",
      "Acid Insoluble Ash: ≤ 2%"
    ],
    packaging: [
      "25kg / 50kg PP bags",
      "Jute bags",
      "Vacuum-packed (upon request)",
      "Private labeling available"
    ],
    shelfLife: "24 months under cool, dry storage conditions"
  },
  "soya-beans": {
    label: "Soya Beans",
    heading: "SOYA BEANS",
    title: "Glycine max",
    image: soyaBeansImage,
    intro: [
      "Soya bean (also known as soybean), scientifically known as Glycine max, is a remarkable legume with a rich history and diverse uses.",
      "Originating in East Asia, this crop has become a global agricultural powerhouse due to its nutritional profile and industrial applications.",
      "Known for high protein content, soya bean is essential in products such as tofu, soy milk, and soy flour, and is also widely used in animal feed.",
      "Its versatility extends to industrial applications such as biodiesel production and adhesive manufacturing."
    ],
    productSpecifications: [
      "Product Name: Soybean",
      "Botanical Name: Glycine max"
    ],
    physicalSpecifications: [
      "Color: Natural Yellow",
      "Moisture Content: Max 12–13%",
      "Foreign Matter: Max 1–2%",
      "Broken/Split Seeds: Max 3–5%",
      "Damaged Seeds: Max 2–3%",
      "Admixture: Max 1%",
      "Immature Seeds: Max 2%",
      "Insect Infestation: Nil",
      "Odor: Fresh, Natural",
      "Live Weevils: Nil"
    ],
    chemicalSpecifications: [
      "Protein: 35–40% Min",
      "Oil Content: 18–20%",
      "Free Fatty Acid: Max 2%",
      "Aflatoxin: ≤ 3–10 ppb"
    ],
    packaging: [
      "50kg PP Bags",
      "25kg PP Bags",
      "Bulk in Container (Jumbo bags available on request)"
    ],
    shelfLifeTable: [
      "Proper dry storage (≤13% moisture): 12 months",
      "Controlled temperature storage: Up to 18 months",
      "High humidity exposure: Significantly reduced shelf life"
    ]
  },
  "processed-cashew-nuts-w240-w320": {
    label: "Processed Cashew Nuts W240 and W320",
    heading: "PROCESSED CASHEW NUTS",
    title: "W240 and W320",
    heroImage: cashewW320Image,
    image: cashewW240Image,
    intro: [
      "Scientifically, cashew nuts are an excellent source of nutrition. Cashew apples contain high Vitamin C and cashew nuts contain calcium, iron, and vitamin B1.",
      "Studies suggest moderate, regular consumption of cashew nuts can support heart health and improve cholesterol balance.",
      "Cashew nuts are rich in nutrients with high oil and protein content, making them widely used in food and beverage production."
    ],
    useCases: [
      "Roasted snack cashew products (salted, honey-coated, and flavored variants).",
      "Ingredient for ice cream, cakes, sweets, and confectionery toppings.",
      "Ground into fine powder to improve flavor and aroma in multiple food products."
    ],
    qualityClaim: [
      "Khadesh Global Cashew Nuts W240 and W320 meet required standards for superior quality in extra class.",
      "Products are white-ish in color and supplied as whole kernels with minimal breakage."
    ],
    specs: [
      "Texture: Crispy",
      "Size: 240 kernels per pound (W240)",
      "Size: 320 kernels per pound (W320)",
      "Moisture: 5% max",
      "Broken: 5% max",
      "Spotted: 1% max",
      "Scrapes: 5% max",
      "Insects: No"
    ],
    packaging: [
      "Standard export-safe packaging with strong handling control.",
      "1kg / 5kg / 10kg per carton, or based on buyer request."
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
                  <h3>Top Exporting & Importing Countries of Shea Butter</h3>
                  {article.markets.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ListBlock items={article.productionRanks} />
                  <p>
                    Shea butter produced in Nigeria is known for good quality and high volume, especially during the
                    peak period of June to November.
                  </p>
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
                  <h3>How To Safely Source Your Produce</h3>
                  <ListBlock items={article.sourcingTips} />
                </section>

                <section className={styles.section}>
                  <h3>International Price of Shea Butter Per Metric Ton</h3>
                  <p>{article.pricingNote}</p>
                  <p>
                    Final pricing depends on grade, quantity, season, logistics, freight, import duties, and buyer-seller
                    relationship.
                  </p>
                </section>

                <section className={styles.section}>
                  <h3>How To Pay For Your Produce</h3>
                  <ListBlock items={article.paymentMethods} />
                </section>

                <section className={styles.section}>
                  <h3>Shipping & Delivery Terms</h3>
                  <ListBlock items={article.shippingNotes} />
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
                  <h3>Use Cases in the Food & Beverage Industry</h3>
                  <ListBlock items={article.useCases} />
                </section>

                <section className={styles.section}>
                  <h3>Khadesh Global Cashew Nuts W240 and W320</h3>
                  {article.qualityClaim.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>

                <section className={styles.section}>
                  <h3>Specification in Features</h3>
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
                  <h3>Top Uses and Benefits of Dried Hibiscus Flower</h3>
                  {article.usesAndBenefits.map((group) => (
                    <div key={group.title}>
                      <h3>{group.title}</h3>
                      <ListBlock items={group.points} />
                    </div>
                  ))}
                </section>

                <section className={styles.section}>
                  <h3>Superior Quality and Competitive Pricing</h3>
                  <ListBlock items={article.qualityAndPricing} />
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
                  <h3>Contaminant Limits (EU Compliant)</h3>
                  <ListBlock items={article.contaminantLimits} />
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

              <h3>Place Your {article.label} Order</h3>
              <p>
                Click the button below and tell us about your {article.label} needs. We will help you export based on
                mutually agreed terms.
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
