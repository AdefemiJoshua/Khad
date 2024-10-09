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
          <p>
          Being a worldwide business, Khadesh Global Integrated Services Limited is committed to serving individuals and enterprises in remote areas of the globe by offering a wide range of basic goods.
</p>
          <p>
            <br />
            Khadesh Global Integrated Services Limited is constantly looking to establish productive, well-structured business relationships with seasoned counterparties that follow professional guidelines and are well-connected.  Currently, Khadesh Global Integrated Services Limited is looking to employ international commercial agents that meet the necessary qualifications.
</p>
          <p>
          Your network will likely include a significant number of customers and/or producers, and as our introducing agent, you will work with Khadesh Global Integrated Services Limited. You will exhibit a commendable level of experience and understanding in our relevant commodities portfolio(s). This can be a highly lucrative and gratifying opportunity, as you will receive payment directly on the turnover sold. Qualified agents working on our behalf will be able to secure and generate successful trade leads with national, regional, and other independent counter-parties.          </p>
          <p>
            <br />
            We are willing to collaborate with agents in each of our business areas. Depending on the real value and potential that our agents provide, we provide a respectable compensation. Successful agents of Khadesh Global Integrated Services Limited will also profit from our unwavering professionalism, business ethics, and timeliness.
</p>
          <p>
            <br />
            We are excited about the prospect of working with you and appreciate your interest in becoming our agent.
</p>
          <p>
            <br />
            Kindly reach out to us directly by emailing us all of your information.
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
        alt="Agricultural Commodities"
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
        { name: "Our commitment", path: "/our-commitment" },
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

export default OurAgents;
