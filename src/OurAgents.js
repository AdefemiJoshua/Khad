import React from "react";
import { Link } from "react-router-dom"; // Make sure this line is included
import styles from "./OurAgents.module.css"; // Ensure correct path for CSS file

// Main Commodities Component
const OurAgents = () => {
  return (
    <div className={styles.OurAgentsSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.OurAgentsContentContainer}>
        <h2 className={styles.OurAgentsTitle}>
          Agents
        </h2>
        
        <div className={styles.OurAgentsWriteUp}>
          <h3>Become an Agent / Partner</h3>
          <p>
            Khadesh Global works with agents and partners to expand the sourcing and supply of agricultural commodities
            across Nigeria and international markets. We are looking to collaborate with experienced individuals and
            organizations who can connect us with buyers, suppliers, or business opportunities within our commodity value
            chain.
          </p>

          <h3>Who Is an Agent?</h3>
          <p>
            An agent acts as a business connector—introducing buyers, suppliers, or trade opportunities to Khadesh Global
            and supporting deal facilitation within their network.
          </p>

          <h3>Who Can Apply</h3>
          <ul>
            <li>Commodity traders and brokers</li>
            <li>Agribusiness professionals</li>
            <li>Export consultants</li>
            <li>Individuals or companies with strong business networks</li>
            <li>Industry professionals with access to buyers or suppliers</li>
          </ul>

          <h3>What You Do</h3>
          <ul>
            <li>Introduce qualified buyers or suppliers</li>
            <li>Support communication and deal coordination</li>
            <li>Help identify new business opportunities</li>
            <li>Build and maintain strong trade relationships</li>
          </ul>

          <h3>Benefits of Becoming an Agent</h3>
          <ul>
            <li>Commission-based earnings on successful transactions</li>
            <li>Opportunity to work within international commodity trade</li>
            <li>Access to our product portfolio and supply network</li>
            <li>Long-term business partnership opportunities</li>
          </ul>

          <h3>Why Partner With Khadesh Global</h3>
          <ul>
            <li>Reliable supply of agricultural commodities from Nigeria</li>
            <li>Professional and transparent business approach</li>
            <li>Strong focus on timely delivery and quality</li>
            <li>Growing presence in global markets</li>
          </ul>

          <h3>Get Started</h3>
          <p>
            Interested in becoming an agent or partner? Send your details, experience, and network information to our
            email to begin the onboarding process.
          </p>
          <p>
            <a href="mailto:khadeshglobalintegratedservice@gmail.com">
              khadeshglobalintegratedservice@gmail.com
            </a>
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
        src="/ship2.ico"
        alt="commodity trading agents Nigeria business network"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h2>Our Agents</h2>
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

export default OurAgents;
