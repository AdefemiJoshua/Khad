import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './Commodities.module.css'; // Ensure correct path for CSS file

// Main Commodities Component
const Commodities = () => {
  return (
    <div className={styles.commoditiesSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.commoditiesContentContainer}>

        {/* Agricultural Commodities Section */}
        <div className={styles.agriculturalCommoditiesSection}>
          <h2 className={styles.agriculturalCommoditiesTitle}>Agricultural Commodities</h2>
          <p className={styles.agriculturalCommoditiesIntro}>
          We carefully choose our agricultural commodities from the best and most respected suppliers across the globe to fulfil the constantly changing demands of the global market. We guarantee that each product we sell satisfies the highest requirements by collaborating with reliable suppliers who place a premium on sustainability and quality. This pledge upholds our commitment to sustainable practices and ensures high quality. It also helps us build enduring connections with producers that share our principles of ethical sourcing and environmental responsibility. Delivering quality from farm to market, our strategic approach positions us as a dependable partner in the global agricultural commodities market.
</p>
          <div className={styles.commodityCards}>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/rawcashewnuts.png" alt="rawcashewnuts" className={styles.commodityImage} />              <h3 className={styles.commodityCardTitle}>Raw Cashew Nuts</h3>
              <p>Raw cashew nuts are a versatile, nutritious ingredient used in various food products. They provide rich flavor, crunch, and essential nutrients, making them popular in both snacks and recipes, and an important part of the global food industry.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/driedhibiscusflower.png" alt="driedhibiscusflower" className={styles.commodityImage} />              <h3 className={styles.commodityCardTitle}>Dried Hibiscus Flower </h3>
              <p>Dried hibiscus flowers are a versatile ingredient used in a variety of products, known for their tart flavor and vibrant color. Rich in antioxidants and nutrients, they are popular in teas, beverages, and health products. Their unique taste and health benefits make dried hibiscus flowers a key ingredient in the global food and wellness industries.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/driedbaobabfruits.png" alt="driedbaobabfruits " className={styles.commodityImage} />              <h3 className={styles.commodityCardTitle}>Dried Baobab Fruits</h3>
              <p>Dried baobab fruits are a nutrient-rich ingredient used in various products, valued for their tangy flavor and high vitamin C content. They are commonly found in health foods, drinks, and supplements. Their unique taste and impressive nutritional benefits make dried baobab fruits a key component in the global wellness and food industries.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/driedginger.png" alt="driedginger" className={styles.commodityImage} />
              <h3 className={styles.commodityCardTitle}>Dried Ginger</h3>
              <p>Dried ginger is a versatile spice made from the rhizome of the ginger plant, known for its strong flavor and health benefits. Rich in antioxidants and anti-inflammatory properties, it is commonly used in cooking, baking, and beverages, enhancing a variety of dishes. Its culinary and medicinal applications make dried ginger a valuable ingredient in the global food and wellness markets.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/Sheabutter.png" alt="Sheabutter" className={styles.commodityImage} />
              <h3 className={styles.commodityCardTitle}>Shea Butter</h3>
              <p>Shea butter is a natural fat derived from the nuts of the shea tree, renowned for its moisturizing and nourishing properties. Used extensively in cosmetics and skincare products, it contains vitamins A, E, and F, offering anti-inflammatory and healing benefits. Its effectiveness and versatility have made shea butter a popular ingredient in the global beauty and wellness industries.</p>
            </div>
            <div className={styles.commodityCard}>
              <img src="/images/commodities/soyabeans.png" alt="soya beans" className={styles.commodityImage} />
              <h3 className={styles.commodityCardTitle}>Soya Beans</h3>
              <p>Soybeans are nutritious legumes high in protein, commonly used in food products like tofu, soy milk, and edamame. They are also important in animal feed and industrial applications. Rich in essential amino acids, vitamins, and minerals, soybeans offer potential health benefits, making them a vital ingredient in the food industry and global agriculture.</p>
              </div>
              </div>
              </div>

              {/* Solid Minerals  Section */}
            
              <div id="SolidMineralsSection" className={styles.agriculturalCommoditiesSection}>
  <h2 className={styles.agriculturalCommoditiesTitle}>Solid Minerals</h2>
  <p className={styles.agriculturalCommoditiesIntro}>
  Our ability to satisfy the expanding demands of the global market is made possible by the ethical procurement of solid minerals. We prioritize sustainable practices and ensure that our sourcing processes align with global standards for environmental stewardship and social responsibility.
  </p>

          <div className={styles.commodityCards}>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/lithium.png" alt="Lithium" className={styles.commodityImage} />              
            <h3 className={styles.commodityCardTitle}>Lithium</h3>
              <p>Lithium is a lightweight metal crucial for rechargeable batteries in electronics, electric vehicles, and renewable energy storage. It is also used in pharmaceuticals for treating mood disorders. Key sources of lithium include the minerals Spodumene, Kunzite, and Lepidolite. Due to its high electrochemical potential, lithium is essential for clean energy technologies, making it significant in both the tech and healthcare industries.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/lead.png" alt="Lead" className={styles.commodityImage} />              
            <h3 className={styles.commodityCardTitle}>Lead </h3>
              <p>Lead is a heavy metal primarily used in lead-acid batteries, radiation shielding, and construction materials. While it is valuable for various industrial applications, lead is also toxic and poses significant health risks, leading to regulations that limit its use. Its essential properties in certain industries require careful handling and management due to safety concerns.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/zinc.png" alt="Zinc" className={styles.commodityImage} />              
            <h3 className={styles.commodityCardTitle}>Zinc</h3>
              <p>Zinc is a versatile metal primarily used for galvanizing steel to prevent corrosion and is also essential in batteries, alloys, and nutritional supplements. It supports immune function and overall health, making it important in construction, manufacturing, and healthcare industries.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/copperore.png" alt="Copper Ore" className={styles.commodityImage} />
              <h3 className={styles.commodityCardTitle}>Copper Ore</h3>
              <p>Copper ore is a valuable resource used to produce copper metal, essential for electrical wiring, plumbing, and industrial applications. It is also used in making alloys like brass and bronze. Known for its conductivity and corrosion resistance, copper is vital for renewable energy technologies, such as solar panels and electric vehicles, making its mining and processing important to the global economy.</p>
            </div>
            <div className={styles.commodityCard}>
            <img src="/images/commodities/Fluoride.png" alt="Fluoride" className={styles.commodityImage} />
              <h3 className={styles.commodityCardTitle}>Fluoride</h3>
              <p>Fluoride is a mineral that strengthens tooth enamel and prevents cavities, making it essential in dental care products like toothpaste. It's also added to public water supplies to reduce tooth decay. Beyond dental health, fluoride is used in industries like aluminum and glass production. However, excessive intake can cause dental fluorosis, leading to white spots on teeth.</p>
            </div>
          </div>
        </div>
      </div>
      <AdditionalSections /> {/* Ensure this component is defined */}
    </div>
  );
};


// Hero Section Component
const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-image-container">
      <img src="/Ship.ico" alt="Agricultural Commodities" className="hero-image" />
      <div className="hero-overlay">
        <h2>Commodities</h2>
      </div>
    </div>
  </section>
);

// Additional Sections Component
const AdditionalSections = () => (
  <section className="additional-sections">
    <WhatWeDo />
    <QuickLinks />
    <CommoditiesAndServices />
    <Support />
    <SocialMedia />
  </section>
);

// What We Do Component
function WhatWeDo() {
  return (
    <section className="what-we-do">
      <div className="content">
        <h2>What We Do</h2>
        <p>
        In order to successfully assist in achieving supply and demand equilibrium, Khadesh Global Integrated Services Limited offers a strategic platform for integrated global sourcing, risk management, and value-added supply solutions for solid mineral resources and agricultural commodities.


        </p>
        
        <p>
           <br />
        <strong>Address:</strong> 21 Ndjamena Crescent Wuse 2 Abuja.
        </p>
      </div>
      <div className="image-container">
        <img src="map.png" alt="Khadesh Global Services" className="what-we-do-image" />
      </div>
    </section>
  );
}



const QuickLinks = () => (
  <div className="quick-links">
    <h3>Quick Links</h3>
    <ul>
      {[
        { name: "Our vision", path: "/our-vision" },
        { name: "Our mission", path: "/our-mission" },
        { name: "Our Partners", path: "/our-partners" },
        { name: "Our commitment", path: "/our-commitment" },
        { name: "Our Value Proposition", path: "/our-value-proposition" },
      ].map(({ name, path }) => (
        <li key={name}>
          <Link to={path} onClick={() => window.scrollTo(0, 0)}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const CommoditiesAndServices = () => {
  const services = [
    {
      name: 'Agricultural Commodities',
      link: '/commodities#agriculturalCommoditiesSection', 
    },
    {
      name: 'Solid Mineral Resources',
      link: '/commodities#SolidMineralsSection',
    },
    {
      name: 'Local Supply',
      link: '/local-supply#services-section', 
    },
  ];

  return (
    <div className="commodities-services">
      <h3>Our Commodities & Services</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <Link 
              to={service.link} 
              onClick={() => {
                if (service.name === 'Solid Mineral Resources') {
                  setTimeout(() => {
                    const section = document.getElementById("SolidMineralsSection");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 0);
                } else {
                  window.scrollTo(0, 0);
                }
              }} 
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};



// Support Component
const Support = () => (
  <div className="support">
    <h3>Support</h3>
    <ul>
  {[
    { name: "Contact Us", path: "/Contact-Us" },
    // Add other links here as needed
  ].map(({ name, path }) => (
    <li key={name}>
      <Link to={path} onClick={() => window.scrollTo(0, 0)}>
        {name}
      </Link>
    </li>
  ))}
</ul>
</div>
);

// Social Media Component
const SocialMedia = () => (
  <div className="social-media">
    <h3>Get Social With Us</h3>
    <div className="social-icons">
      {[
        { platform: "whatsapp", link: "https://wa.me/+2348069081589" },
        { platform: "instagram", link: "https://instagram.com/khadeshglobal" },
        { platform: "facebook", link: "https://www.facebook.com/khadeshglobal" }, // Added Facebook
        { platform: "email", link: "mailto:khadeshglobalintegratedservice@gmail.com" }, // Added Email
      ].map(({ platform, link }) => (
        <a
          key={platform}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform}
        >
          <img
            src={`/images/${platform}-logo.png`}
            alt={`${platform} logo`}
            className="social-icon"
          />
        </a>
      ))}
    </div>
  </div>
);



export default Commodities;