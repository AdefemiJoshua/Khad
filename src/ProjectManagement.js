import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './ProjectManagement.module.css'; // Ensure the correct path


// Company Overview Component
const CompanyOverview = () => (
  <section className="company-overview">
    <h2>Project Management Consulting for Agribusiness, Manufacturers & Public Sector</h2>
    <p>
      Khadesh Global provides project management consulting services for agribusinesses, manufacturers, government
      ministries, agencies, and NGOs. We support the planning, coordination, and execution of projects across
      agriculture, manufacturing, infrastructure, and other key sectors in Nigeria and beyond.
    </p>
    <p>
      Our approach focuses on delivering efficient, well-coordinated, and results-driven projects that meet client
      objectives.
    </p>

    <h3>Core Project Management Services</h3>
    <ul>
      <li>Project Planning & Execution – Defined scope, timelines, and structured delivery</li>
      <li>Agribusiness & Industrial Projects – Farm sourcing, processing, and production coordination</li>
      <li>Logistics & Supply Chain Management – Efficient movement of goods, materials, and resources</li>
      <li>Regulatory Compliance – Alignment with government and industry standards</li>
      <li>Cost & Budget Management – Effective cost control and financial planning</li>
      <li>Risk Management – Identification and mitigation of operational risks</li>
      <li>Stakeholder Coordination – Managing communication across partners, agencies, and teams</li>
      <li>Monitoring & Reporting – Performance tracking and project evaluation</li>
    </ul>

    <h3>Who We Work With</h3>
    <ul>
      <li>Agribusiness companies</li>
      <li>Manufacturers and processing companies</li>
      <li>Government ministries and agencies</li>
      <li>NGOs and development organizations</li>
      <li>Private sector investors and partners</li>
    </ul>

    <h3>Why Khadesh Global</h3>
    <ul>
      <li>Strong experience across agriculture, manufacturing, and infrastructure projects</li>
      <li>Practical, results-driven project execution</li>
      <li>Deep understanding of Nigerian operating environment</li>
      <li>Reliable coordination across multiple stakeholders</li>
    </ul>
  </section>
);


const ProjectManagement = () => {
  return (
    <div className={styles.whoWeAreSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <CompanyOverview /> {/* Add the CompanyOverview here */}
      <div className={styles.whoWeAreContentContainer}>
        <div className={styles.whoWeAreWriteUp}>
          {/* Existing content here... */}
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
      <img src="/map.ico" alt="project management consulting Nigeria agribusiness planning" className="hero-image" />
      <div className="hero-overlay">
        <h2>Project Management</h2>
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


export default ProjectManagement;
