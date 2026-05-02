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
            Khadesh Global is committed to promoting sustainable agriculture in Nigeria through responsible sourcing from
            smallholder farmers. We focus on protecting the environment, improving farmer livelihoods, and meeting
            international food safety and sustainability expectations.
          </p>
          <p>
            Our operations align with responsible sourcing principles required by global buyers, including European and
            international markets.
          </p>

          <h3>Responsible Sourcing from Farmers</h3>
          <p>We source directly from trusted smallholder farmers and local aggregators to ensure:</p>
          <ul>
            <li>Ethical sourcing practices</li>
            <li>No child labor</li>
            <li>Fair compensation within local farming communities</li>
            <li>Transparent and traceable supply chains</li>
            <li>Compliance with international human rights and due diligence standards</li>
          </ul>
          <p>
            We regularly assess our supplier network to maintain quality, safety, and ethical compliance.
          </p>

          <h3>Environmental Responsibility</h3>
          <p>Khadesh Global promotes environmentally conscious practices including:</p>
          <ul>
            <li>Reduced post-harvest losses through proper drying and storage</li>
            <li>Moisture control to prevent mold and aflatoxin contamination</li>
            <li>Reduced chemical usage in line with international residue standards</li>
            <li>Promotion of good agricultural practices (GAP)</li>
            <li>Responsible waste handling during processing and sorting</li>
          </ul>
          <p>We believe environmentally responsible handling protects quality and reduces contamination risks.</p>

          <h3>Traceability & Compliance</h3>
          <p>
            We ensure transparency across the supply chain from farm to export through traceability systems that support
            food safety and accountability.
          </p>
          <p>Our operations align with key international frameworks such as:</p>
          <ul>
            <li>EU General Food Law</li>
            <li>EU Maximum Residue Level (MRL) regulations</li>
            <li>Global food safety and sustainability expectations</li>
          </ul>

          <h3>Community Impact</h3>
          <p>As a Nigerian agricultural export company, we support:</p>
          <ul>
            <li>Smallholder farmer livelihoods</li>
            <li>Women participation in agriculture</li>
            <li>Local employment in processing and logistics</li>
            <li>Training on post-harvest handling and quality improvement</li>
          </ul>
          <p>
            We believe sustainable trade must create shared value across all stakeholders.
          </p>

          <h3>Continuous Improvement</h3>
          <p>We are committed to:</p>
          <ul>
            <li>Strengthening traceability systems</li>
            <li>Food safety monitoring systems</li>
            <li>Farmer training and capacity building</li>
            <li>Long-term sustainability partnerships</li>
          </ul>
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
        src="/sustainability.ico"
        alt="sustainable agriculture Nigeria smallholder farming practices"
        className="hero-image"
      />
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
