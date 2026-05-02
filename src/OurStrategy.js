import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './OurStrategy.module.css'; // Ensure the correct path

// Main Commodities Component
const OurStrategy = () => {
  return (
    <div className={styles.OurStrategySection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.OurStrategyContentContainer}>
        <h2 className={styles.OurStrategyTitle}>
        </h2>
        <div className={styles.OurStrategyWriteUp}>
          <h2>Our Strategy</h2>
          <p>
            Khadesh Global connects agricultural commodity supply from Nigeria to global markets through a structured and
            reliable supply chain. Our strategy focuses on building strong relationships with smallholder farmers,
            processors, and buyers to ensure consistent supply and efficient delivery.
          </p>

          <h3>Supply Chain Integration</h3>
          <p>
            We manage the full agricultural supply chain—from sourcing directly from smallholder farmers and aggregating
            produce to logistics and delivery—connecting farming communities in Nigeria with international markets.
          </p>

          <h3>Quality & Efficiency</h3>
          <p>
            We are committed to delivering high-quality agricultural commodities through careful sourcing, proper handling,
            and efficient operations. Our focus is to provide consistent supply, competitive pricing, and dependable
            service.
          </p>

          <h3>Logistics & Delivery</h3>
          <p>
            We transport goods by road, air, and sea, ensuring fast and reliable delivery from farm to destination. We
            deliver directly to warehouses, processing facilities, or end buyers based on client requirements.
          </p>

          <h3>Market Access in Africa</h3>
          <p>
            We provide access to agricultural commodities sourced from smallholder farmers across Nigeria and Africa,
            supported by strong local networks and market knowledge.
          </p>

          <h3>Transparency & Tracking</h3>
          <p>
            We maintain transparency across our operations, with clear communication and tracking throughout the supply
            chain—from farm sourcing to final delivery.
          </p>

          <h3>Reliable Supply Chain</h3>
          <p>
            We connect smallholder farmers, processors, and buyers to ensure a steady flow of agricultural commodities
            while reducing supply disruptions and improving efficiency.
          </p>
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
      <img src="/strategy.ico" alt="agricultural supply chain Nigeria farm to export system" className="hero-image" />
      <div className="hero-overlay">
        <h2>Our Strategy</h2>
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



export default OurStrategy;
