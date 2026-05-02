import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './Aboutus.module.css'; // Ensure the correct path

// Main Commodities Component
const Aboutus = () => {
  return (
    <div className={styles.AboutusSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.AboutusContentContainer}>
     
        <div className={styles.AboutusWriteUp}>
          <h2>About Us</h2>
          <p>
            Khadesh Global is an agricultural export company in Nigeria, specializing in sourcing and supplying high-quality
            agricultural commodities to global markets. We export products such as ginger, hibiscus flowers, and sesame
            seeds, connecting international buyers to reliable supply from Nigeria.
          </p>
          <p>
            As a trusted agricultural export company in Nigeria, we manage the full supply chain—from sourcing and
            aggregation to quality control, logistics, and international delivery—ensuring efficient and dependable export
            operations.
          </p>
          <p>
            Our approach is built on consistency, transparency, and long-term partnerships, making it easier for importers,
            distributors, and manufacturers to source directly from Nigeria with confidence.
          </p>

          <h3>Agricultural Commodities</h3>
          <p>
            We supply high-quality agricultural commodities from Nigeria, including ginger, hibiscus flowers, sesame seeds,
            and other export-ready products, sourced directly from trusted Nigerian farmers and aggregators to meet
            international market standards. We ensure consistent quality, proper handling, and reliable supply for importers,
            distributors, and manufacturers across global markets.
          </p>

          <h3>What We Do</h3>
          <p>
            Khadesh Global connects global buyers to reliable agricultural commodity supply from Nigeria. We specialize in
            sourcing, aggregating, and exporting products such as ginger, hibiscus flowers, sesame seeds, soybeans, and
            cashew nuts from trusted farmers across Nigeria.
          </p>
          <p>
            We help balance supply and demand by providing a structured platform that supports efficient sourcing, quality
            control, risk management, and international delivery of agricultural commodities. Our focus is to deliver
            consistent quality, dependable supply chains, and value-added export solutions for importers, distributors, and
            manufacturers worldwide.
          </p>

          <h3>Contact</h3>
          <p>
            For enquiries, partnerships, or business opportunities:
            <br />
            <a href="mailto:khadeshglobalintegratedservice@gmail.com">khadeshglobalintegratedservice@gmail.com</a>
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
      <img
        src="/Aboutus.ico"
        alt="agricultural export company Nigeria sourcing from smallholder farmers"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h2>About Us</h2>
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



export default Aboutus;
