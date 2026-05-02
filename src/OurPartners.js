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
              Khadesh Global works with trusted partners who share our values of integrity, transparency, and long-term
              growth in agricultural commodity trade and project management.
            </p>
            <p>
              We build strong relationships with suppliers, buyers, logistics providers, and industry professionals who
              support the efficient movement of agricultural commodities from Nigeria to global markets.
            </p>

            <h3>Partnership Focus</h3>
            <p>We welcome partnerships across the agricultural value chain, including:</p>
            <ul>
              <li>Commodity sourcing and supply partners</li>
              <li>Logistics and shipping companies</li>
              <li>Storage and warehousing operators</li>
              <li>Processing and aggregation partners</li>
              <li>Trade and distribution partners</li>
            </ul>

            <h3>Our Approach</h3>
            <p>
              Our focus is on building reliable and sustainable supply chain networks that support long-term business
              growth rather than short-term transactions.
            </p>
            <p>We are committed to long-term collaboration built on:</p>
            <ul>
              <li>Trust and transparency</li>
              <li>Consistent supply and demand alignment</li>
              <li>Efficient logistics and operations</li>
              <li>Sustainable growth across the value chain</li>
            </ul>

            <h3>Join Us</h3>
            <p>
              We are open to working with qualified partners across global commodity markets. To explore partnership
              opportunities, kindly send your company details and profile to our official email.
            </p>
            <p>
              <a href="mailto:khadeshglobalintegratedservice@gmail.com">
                khadeshglobalintegratedservice@gmail.com
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
      <img src="/partners.ico" alt="commodity trading partners Nigeria supply chain" className="hero-image" />
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
