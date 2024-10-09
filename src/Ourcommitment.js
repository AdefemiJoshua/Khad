import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './Ourcommitment.module.css'; // Ensure the correct path

// Main Commodities Component
const Ourcommitment = () => {
  return (
    <div className={styles.OurcommitmentSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.OurcommitmentContentContainer}>
     
        <div className={styles.OurcommitmentWriteUp}>
          <p>
          At Khadesh Global Integrated Services Limited, we prioritize our customers' specifications by ensuring that all our products come with a comprehensive Certificate of Analysis from the Nigeria Agricultural Quarantine Services (NAQS). This commitment reflects our dedication to quality and compliance in the agricultural export sector.           </p>

          <p>
          The Certificate of Analysis serves as a crucial document that verifies the quality and safety of agricultural products. NAQS, as the designated competent authority under the International Plant Protection Convention (IPPC), plays a vital role in enforcing the Sanitary and Phytosanitary (SPS) measures that are essential for international trade. By adhering to these measures, we guarantee that our products are not only safe for consumption but also meet the stringent standards set by international regulatory bodies.</p>
<p>
  By working closely with NAQS and aligning our practices with international standards, we contribute to enhancing Nigeria’s reputation as a reliable source of agricultural goods, ultimately supporting the growth and sustainability of the sector.
</p>
<p>
At Khadesh Global Integrated Services Limited, we prioritize our clients' requirements by ensuring that all our solid mineral products come with comprehensive certifications, including detailed analysis reports. This commitment underscores our dedication to quality assurance and compliance within the solid minerals sector.
</p>
<p>
The Certificate of Analysis serves as a critical document that verifies the quality, composition, and safety of our minerals. We collaborate with reputable laboratories and regulatory authorities to ensure that our products meet both national and international standards. This includes adhering to the guidelines set by agencies like the Nigerian Geological Survey Agency (NGSA) and the Standards Organization of Nigeria (SON), which are responsible for ensuring the integrity and compliance of minerals used in global trade.
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
      <img src="/Ourcommitment.ico" alt="Agricultural Commodities" className="hero-image" />
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
        In order to successfully assist in achieving supply and demand equilibrium, Khadesh Global Integrated Services Limited offers a strategic platform for integrated global sourcing, risk management, and value-added supply solutions for solid mineral resources and agricultural commodities.


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
        { name: "Our vision", path: "/our-vision" },
        { name: "Our mission", path: "/our-mission" },
        { name: "Our Partners", path: "/our-partners" },
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
      name: 'Solid Mineral Resources',
      link: '/commodities#SolidMineralsSection',
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
                if (service.name === 'Solid Mineral Resources') {
                  setTimeout(() => {
                    const section = document.getElementById("SolidMineralsSection");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 0);
                } else {
                  window.scrollTo(0, 0);
                }
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
    { name: "Contact Us", path: "/Contact-Us" },
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



export default Ourcommitment;