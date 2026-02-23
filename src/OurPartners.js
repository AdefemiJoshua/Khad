import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './OurPartners.module.css'; // Ensure the correct path

// Main Commodities Component
const OurPartners = () => {
    return (
      <div className={styles.OurPartnersSection}>
        <HeroSection /> {/* Include the HeroSection */}
        <div className={styles.OurPartnersContentContainer}>
          <h2 className={styles.OurPartnersTitle}>Our Partners</h2>
          
          <div className={styles.OurPartnersWriteUp}>
            <p>
            We want to build a solid working relationship with prospective partners who share our commitment to integrity and enthusiasm for our present business plans and who can assist us in modifying them to meet the dynamic and ever-shifting demands of the global market and regulatory landscapes.
</p>
            <p>
            Privately held Khadesh Global Integrated Services Limited is a global supplier and trader of physical commodities. We are driven by strong entrepreneurial acumen. In contrast to short-term speculative value, Khadesh Global Integrated Services Limited is equally focused on long-term, sentient, and sustainable growth.
</p>
            <p>
              <strong>Partnership in Physical Commodities Trading</strong>
            </p>
            <p>
            In order to bring essential commodities to the global market, Khadesh Global Integrated Services Limited is pursuing a long-term strategy of development, acquisition, operation, expansion, and optimisation of advanced streams and channels. These include industrial processing, bulk commodity storage and terminals, pipeline throughput, trans-loading, transshipment, and multi-modal transportation of agricultural commodities This is exactly in line with our objective of producing optimal value for varied commodity portfolios throughout the supply chain.
</p>
            <p>
            You may email us directly with your complete details and credentials, to learn more about possible cooperation opportunities with Khadesh Global Integrated Services Limited.
</p>
            <p>
              <a href="mailto:khadeshglobalintegratedservice@gmail.com">
                khadeshglobalintegratedintegratedservice@gmail.com
              </a>
            </p>
            
           
  
            {/* Images in a straight line */}
            <div className={styles.imagesContainer}>
            <div className={styles.logoContainer}>
              <img src="/nepc.png" alt="Logo" className={styles.logo} />
              <p>NEPC</p>
            </div>
              <div className={styles.mapContainer}>
                <img src="/thirza.png" alt="Map" className={styles.map} />
                <p>Thirza Zavatakim</p>
              </div>
              <div className={styles.mapContainer}>
                <img src="/tridge.png" alt="Map" className={styles.map} />
                <p>TRIDGE</p>
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
      <img src="/partners.ico" alt="Agricultural Commodities" className="hero-image" />
      <div className="hero-overlay">
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



export default OurPartners;