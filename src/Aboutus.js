import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import styles from './Aboutus.module.css'; // Ensure the correct path

// Main Commodities Component
const Aboutus = () => {
  return (
    <div className={styles.AboutusSection}>
      <HeroSection /> {/* Include the HeroSection */}
      <div className={styles.AboutusContentContainer}>
     
        <div className={styles.AboutusWriteUp}>
          <p>
Welcome to Khadesh Global Integrated Services Limited, a Nigerian and dynamic company established in 2022, dedicated to providing comprehensive solutions and services in various sectors. With a strong commitment to excellence, innovation, and customer satisfaction, we have established ourselves as a trusted partner for businesses seeking top quality support in today's competitive market.
           </p>

          <p>
          At Khadesh Global Integrated Services Limited, we believe in the power of integration. We bring together a diverse range of services and expertise to deliver tailored solutions that meet the unique needs of our clients. Our company operates across multiple sectors, including import/export of agricultural commodities, project management consulting and finance enabling us to provide comprehensive support throughout the entire business lifecycle.</p>
        <p>
            We are delighted to introduce Khadesh Global Integrated Services Limited, a dynamic and forward-thinking company dedicated to providing comprehensive solutions and services across various sectors. As a trusted partner, we aim to empower businesses and organizations by offering innovative and tailored support to help them thrive in today's competitive landscape. 
         </p>
          <p>
          In West Africa, we are well represented in The Fedral Republic of Nigeria         
           </p>
          <p>
         For any enquiry Please contact us At 
           </p>
           <a href="mailto:khadeshglobalintegratedservice@gmail.com">
              khadeshglobalintegratedservice@gmail.com
             </a> 
             <p>   
             We would love to answer your enquires! and We will get back to you promptly.
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
      <img src="/Aboutus.ico" alt="Agricultural Commodities" className="hero-image" />
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



export default Aboutus;