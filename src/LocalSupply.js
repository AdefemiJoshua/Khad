import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './LocalSupply.module.css'; // Ensure the correct path

// Main Commodities Component
const LocalSupply = () => {
  return (
    <div className={styles.LocalSupplySection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.LocalSupplyContentContainer}>
     
        <div className={styles.LocalSupplyWriteUp}>
          <h2>Local Supply</h2>
          <p>
            Khadesh Global supports the local supply and distribution of agricultural commodities within Nigeria by
            connecting farmers, aggregators, and local buyers through an efficient and structured trade network.
          </p>
          <p>
            We facilitate the movement of agricultural products from producing communities to local markets, processors,
            and bulk buyers, ensuring fair access, consistent supply, and reduced market inefficiencies.
          </p>

          <h3>Our Role in Local Trade</h3>
          <p>We strengthen local agricultural trade by:</p>
          <ul>
            <li>Sourcing directly from smallholder farmers</li>
            <li>Aggregating commodities for local buyers and processors</li>
            <li>Supporting efficient distribution across key markets in Nigeria</li>
            <li>Improving access to reliable and quality farm produce</li>
          </ul>

          <h3>Quality & Reliability</h3>
          <p>
            All locally supplied commodities are handled with proper sorting, grading, and quality checks to ensure they
            meet buyer expectations and market standards.
          </p>

          <h3>Who We Serve Locally</h3>
          <ul>
            <li>Local food processors</li>
            <li>Wholesalers and distributors</li>
            <li>Market traders and aggregators</li>
            <li>Institutional buyers</li>
            <li>Hospitality and food service businesses</li>
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
      <img src="/LocalSupply.ico" alt="local agricultural supply Nigeria market distribution" className="hero-image" />
      <div className="hero-overlay">
      <h2>Local Supply</h2>
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



export default LocalSupply;
