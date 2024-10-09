import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './ProjectManagement.module.css'; // Ensure the correct path


// Company Overview Component
const CompanyOverview = () => (
  <section className="company-overview">
    <h2>Project Management Consulting Services</h2>
    
    
    
    
    <ul> {/* Use <ul> for lists */}
    
    <p>
   At Khadesh Global Integrated Services Limited, we are committed to delivering exceptional Project management services across a variety of sectors. Our approach is built on a comprehensive framework that ensures every phase of a project is handled with precision and professionalism. With the use of Project Management Tools, from planning to execution, our focus is on achieving optimal results that align with our clients’ objectives. 
    </p>

    <p>
    <li>
      </li>
      <li>
        <strong>Project Planning and Strategy:</strong> Developing a comprehensive project plan, including scope, goals, deliverables, timelines, and resources.
      </li>
      <li>
        <strong>Project Execution and Implementation:</strong> Overseeing project execution, coordinating tasks, managing teams, and ensuring adherence to project plans.
      </li>
      <li>
        <strong>Risk Management:</strong> Identifying potential risks, developing mitigation strategies, and implementing risk management plans throughout the project lifecycle.
      </li>
      <li>
        <strong>Quality Management:</strong> Ensuring that project deliverables meet quality standards through regular reviews, audits, and process improvements.
      </li>
      <li>
        <strong>Stakeholder Management:</strong> Engaging with stakeholders, managing expectations, and maintaining effective communication to keep everyone informed and aligned.
      </li>
      <li>
        <strong>Cost Management and Budgeting:</strong> Creating and managing project budgets, tracking expenses, and ensuring projects stay within financial constraints.
      </li>
      <li>
        <strong>Project Scheduling:</strong> Developing detailed schedules, setting timelines, and using project management tools to monitor progress.
      </li>
      <li>
        <strong>Change Management:</strong> Managing changes to project scope, timelines, or resources while minimizing disruption to project objectives.
      </li>
      <li>
        <strong>Performance Measurement and Reporting:</strong> Tracking project performance using KPIs, generating reports, and providing insights to ensure project objectives are met.
      </li>
      <li>
        <strong>Resource Management:</strong> Optimizing the allocation and use of human, financial, and material resources to ensure efficiency and productivity.
      </li>
      <li>
        <strong>Project Closeout and Evaluation:</strong> Ensuring all project activities are completed, deliverables are handed over, and lessons learned are documented for future projects.
      </li>
      </p>
    </ul>
    <p>
      These services can be tailored to suit various industries and project types, providing clients with guidance, expertise, and tools to ensure project success.
    </p>
    <ul> {/* Use <ul> for lists */}
      
    <p>
    <strong>PROJECT MANAGEMENT CONSULTING IN EXPORT</strong>
      <li>
        <strong>Export Project Planning:</strong> Assisting businesses in developing export strategies, identifying target markets, setting objectives, and creating action plans to enter new markets efficiently.
      </li>
      <li>
        <strong>Logistics and Supply Chain Management:</strong> Managing the complexities of international shipping, customs regulations, and supply chain coordination, ensuring smooth and timely delivery of export goods.
      </li>
      <li>
        <strong>Risk Management:</strong> Identifying and mitigating risks related to currency fluctuations, political instability, regulatory changes, and other factors that can impact export operations.
      </li>
      <li>
        <strong>Regulatory Compliance:</strong> Ensuring adherence to export regulations, trade laws, and international standards, reducing the risk of legal issues or delays.
      </li>
      <li>
        <strong>Cost Management and Budgeting:</strong> Managing the costs associated with exporting, such as transportation, tariffs, taxes, and insurance, to maintain profitability.
      </li>
      <li>
        <strong>Quality Assurance:</strong> Maintaining product quality throughout the export process, ensuring that goods meet the quality standards of the destination market.
      </li>
      <li>
        <strong>Stakeholder Management:</strong> Engaging with various stakeholders, such as suppliers, freight forwarders, customs officials, and clients, to ensure effective communication and collaboration.
      </li>
      <li>
        <strong>Documentation and Process Management:</strong> Handling the extensive paperwork and documentation required for export transactions, such as invoices, packing lists, bills of lading, and certificates of origin.
      </li>
      <li>
        <strong>Market Entry and Expansion Projects:</strong> Assisting in market research, identifying potential partners or distributors, and developing strategies for expanding into new regions.
      </li>
      </p>
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
      <img src="/map.ico" alt="Agricultural Commodities" className="hero-image" />
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


export default ProjectManagement;