import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './Sustainability.module.css'; // Ensure the correct path

// Main Commodities Component
const Sustainability = () => {
  return (
    <div className={styles.SustainabilitySection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.SustainabilityContentContainer}>
        <div className={styles.SustainabilityWriteUp}>
          <h2>SUSTAINABILITY & RESPONSIBLE SOURCING</h2>
          <h3>Our Commitment to Sustainable Agriculture</h3>
          <p>
            Khadesh Global is committed to promoting sustainable agricultural practices that protect the environment,
            support farming communities, and meet the growing expectations of European and international buyers.
          </p>
          <p>
            We align our operations with responsible sourcing principles and evolving EU sustainability standards.
          </p>

          <h3>Responsible Sourcing</h3>
          <p>We work directly with trusted farmers and aggregators to ensure:</p>
          <ul>
            <li>Ethical sourcing practices</li>
            <li>No child labor</li>
            <li>Fair compensation within local supply chains</li>
            <li>Transparent supplier relationships</li>
            <li>Compliance with EU human rights due diligence expectations</li>
          </ul>
          <p>
            Supplier assessments are conducted periodically to ensure adherence to food safety and ethical standards.
          </p>

          <h3>Environmental Responsibility</h3>
          <p>Khadesh Global promotes environmentally conscious practices including:</p>
          <ul>
            <li>Reduced post-harvest losses through proper drying and storage</li>
            <li>Moisture control to prevent mold and aflatoxin contamination</li>
            <li>Minimal chemical usage and adherence to EU MRL requirements</li>
            <li>Encouragement of good agricultural practices (GAP)</li>
            <li>Responsible waste management during cleaning and sorting</li>
          </ul>
          <p>
            We continuously work with our partners to reduce environmental impact throughout the supply chain.
          </p>

          <h3>Compliance with EU Sustainability Regulations</h3>
          <p>We monitor and align with relevant EU frameworks including:</p>
          <ul>
            <li>EU General Food Law (EC 178/2002)</li>
            <li>EU Maximum Residue Levels Regulation (EC 396/2005)</li>
            <li>EU Corporate Sustainability Due Diligence expectations</li>
          </ul>
          <p>
            Traceability systems are implemented to ensure transparency from farm to export shipment.
          </p>

          <h3>Community Impact</h3>
          <p>As a Nigeria-based agricultural exporter, Khadesh Global supports:</p>
          <ul>
            <li>Rural farmer livelihoods</li>
            <li>Women participation in agricultural value chains</li>
            <li>Local employment in processing and logistics</li>
            <li>Capacity building on post-harvest handling</li>
          </ul>
          <p>
            We believe sustainable trade should create shared value across the supply chain.
          </p>

          <h3>Continuous Improvement</h3>
          <p>We are committed to:</p>
          <ul>
            <li>Strengthening traceability systems</li>
            <li>Enhancing food safety monitoring</li>
            <li>Expanding sustainability training programs for suppliers</li>
            <li>Pursuing internationally recognized food safety and sustainability certifications</li>
          </ul>

          <p>
            Khadesh Global is dedicated to supplying high-quality agricultural commodities that meet international food
            safety standards while promoting environmental stewardship and responsible trade practices. Sustainability
            is integrated into our sourcing, processing, and export operations.
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
      <img src="/sustainability.ico" alt="Agricultural Commodities" className="hero-image" />
      <div className="hero-overlay">
        <h2>Sustainability</h2>
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



export default Sustainability;
