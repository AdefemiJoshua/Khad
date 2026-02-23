import React from "react";
import { Link } from "react-router-dom"; // Make sure this line is included
import styles from "./OurValueProposition.module.css"; // Ensure correct path for CSS file

// Main Commodities Component
const OurValueProposition = () => {
  return (
    <div className={styles.OurValuePropositionSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.OurValuePropositionContainer}>
        <h2 className={styles.OurValuePropositionTitle}>
        Enhancing Profitability for Our Customers
        </h2>
        
        <div className={styles.OurValuePropositionWriteUp}>
          <p>
          Through secure commodity access, strong risk management, and customised logistics systems that meet high customer satisfaction standards, we hope to help our clients achieve business growth by saving millions of dollars in expenses through superior operations.          
</p>
          <p>
            <br />
            Khadesh Global Integrated Services Limited enables customers to go beyond functional excellence and incorporate supply chain integration, collaboration, and optimisation. It is based on a foundation of execution excellence in areas like strategic sourcing, distribution, labour and resource management, and transportation.   
</p>
          <p>
          Our customers will achieve new heights of profitability and a competitive edge with our exceptional supply logistics solutions by:          
</p>
          <p>
            <li>
            Drastically cutting expenses through increased productivity, fewer stockpiles, and cheaper transportation 
            </li>
             </p>
          <p>
          <li>
          Accelerated supply chain speed   
          </li>
        </p>
          <p>
          <li>
          Kindly reach out to us directly by emailing us all of your information.
</li>
</p>
<p>
            <a href="mailto:khadeshglobalintegratedservice@gmail.com">
              khadeshglobalintegratedservice@gmail.com
            </a>
          </p>
          <p>
          <li>
          Increased revenue and market share achieved through logistics that are customer-focused and challenging for rivals to match. 
</li>
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
        src="/valueproposition.ico"
        alt="Agricultural Commodities"
        className="hero-image"
      />
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
        { name: "Our Partners", path: "/our-partners" },
        { name: "Our Commitment", path: "/our-commitment" },
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

export default OurValueProposition;
