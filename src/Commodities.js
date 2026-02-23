import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './Commodities.module.css'; // Ensure correct path for CSS file
import sesameSeedsImage from "./assets/commodities/SESAME.png";
import driedHibiscusImage from "./assets/commodities/driedhibiscusflower.png";
import driedGingerImage from "./assets/commodities/driedginger.png";
import sheaButterImage from "./assets/commodities/Sheabutter.png";
import soyaBeansImage from "./assets/commodities/soyabeans.png";
import processedCashewW320Image from "./assets/commodities/W320.png";

const commodityCards = [
  {
    title: "Sesame Seeds",
    image: sesameSeedsImage,
    alt: "Sesame seeds",
    slug: "sesame-seeds",
  },
  {
    title: "Dried Hibiscus Flower",
    image: driedHibiscusImage,
    alt: "Dried hibiscus flower",
    slug: "dried-hibiscus-flower",
  },
  {
    title: "Dried Ginger",
    image: driedGingerImage,
    alt: "Dried ginger",
    slug: "dried-ginger",
  },
  {
    title: "Shea Butter",
    image: sheaButterImage,
    alt: "Shea butter",
    slug: "shea-butter",
  },
  {
    title: "Soya Beans",
    image: soyaBeansImage,
    alt: "Soya beans",
    slug: "soya-beans",
  },
  {
    title: "Processed Cashew Nuts W240 and W320",
    image: processedCashewW320Image,
    alt: "Processed cashew nuts W240 and W320",
    slug: "processed-cashew-nuts-w240-w320",
    variants: ["W240", "W320"],
  },
];

// Main Commodities Component
const Commodities = () => {
  return (
    <div className={styles.commoditiesSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.commoditiesContentContainer}>

        {/* Agricultural Commodities Section */}
        <div id="agriculturalCommoditiesSection" className={styles.agriculturalCommoditiesSection}>
          <h2 className={styles.agriculturalCommoditiesTitle}>Agricultural Commodities</h2>
          <p className={styles.agriculturalCommoditiesIntro}>
          We carefully choose our agricultural commodities from the best and most respected suppliers across the globe to fulfil the constantly changing demands of the global market. We guarantee that each product we sell satisfies the highest requirements by collaborating with reliable suppliers who place a premium on sustainability and quality. This pledge upholds our commitment to sustainable practices and ensures high quality. It also helps us build enduring connections with producers that share our principles of ethical sourcing and environmental responsibility. Delivering quality from farm to market, our strategic approach positions us as a dependable partner in the global agricultural commodities market.
</p>
          <div className={styles.commodityCards}>
            {commodityCards.map((commodity) => (
              <div key={commodity.slug} className={styles.commodityCard}>
                <img
                  src={commodity.image}
                  alt={commodity.alt}
                  className={styles.commodityImage}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.cardOverlay}>
                  <Link to={`/commodities/${commodity.slug}`} className={styles.overlayTitle}>
                    {commodity.title.toUpperCase()}
                  </Link>
                  {commodity.variants && (
                    <div className={styles.overlayVariants}>
                      {commodity.variants.map((variant) => (
                        <span key={variant} className={styles.overlayVariantTag}>
                          {variant}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link to={`/commodities/${commodity.slug}`} className={styles.overlayAction}>
                    BUY {commodity.title.toUpperCase()} &gt;&gt;
                  </Link>
                  <Link to={`/commodities/${commodity.slug}`} className={styles.overlayActionSecondary}>
                    READ ARTICLE ON {commodity.title.toUpperCase()}
                  </Link>
                </div>
              </div>
            ))}
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
        In order to successfully assist in achieving supply and demand equilibrium, Khadesh Global Integrated Services Limited offers a strategic platform for integrated global sourcing, risk management, and value-added supply solutions for agricultural commodities.


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
        { name: "Our Vision", path: "/our-vision" },
        { name: "Our Mission", path: "/our-mission" },
        { name: "Our Partners", path: "/our-partners" },
        { name: "Our Commitment", path: "/our-commitment" },
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
                window.scrollTo(0, 0);
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
    { name: "Contact Us", path: "/contact-us" },
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
