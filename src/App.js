import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import ProjectManagement from "./ProjectManagement";
import OurAgents from "./OurAgents";
import Commodities from "./Commodities";
import Strategy from "./OurStrategy";
import Sustainability from "./Sustainability";
import ContactUs from "./ContactUs";
import OurValueProposition from"./OurValueProposition";
import OurPartners from"./OurPartners";
import Aboutus from "./Aboutus";
import Ourmission from "./Ourmission";
import Ourvision from "./Ourvision";
import Ourcommitment from "./Ourcommitment";
import LocalSupply from "./LocalSupply";


// Main App Component
const App = () => (
  <Router>
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  </Router>
);

// Header Component
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="logo-container">
        {/* Hamburger Menu for mobile */}
        <div className="hamburger" onClick={toggleDropdown}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <img src="/lion.ico" alt="Khadesh Global Logo" className="logo" />
        <div className="logo-text"></div>
      </div>
      <Navigation isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
    </header>
  );
};

const Navigation = ({ isDropdownOpen, toggleDropdown }) => {
  return (
    <nav className={`nav ${isDropdownOpen ? "active" : ""}`}>
      <ul className="nav-list">
        {[
          "Home",
          "Project Management",
          "Commodities",
          "Our Agents",
          "Our Strategy",
          "Sustainability",
          "About us",
          "Contact Us",
        ].map((item, index) => (
          <li key={`${index}-${item}`}>
            <NavLink
              to={`/${item.toLowerCase().replace(/\s+/g, "-") === "home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={toggleDropdown} // Close dropdown on link click
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Main Content Component
const MainContent = () => (
  <main className="main-content">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <CompanyOverview />
            <AgriculturalCommodities />
            <AdditionalSections />
          </>
        }
      />
      <Route path="/Project-Management" element={<ProjectManagement />} />
      <Route path="/commodities" element={<Commodities />} />
      <Route path="/Our-Agents" element={<OurAgents />} />
      <Route path="/our-strategy" element={<Strategy />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="Our-Value-Proposition" element={<OurValueProposition />} />
      <Route path="Our-Partners" element={<OurPartners />} />
      <Route path="About-us" element={<Aboutus />} />
      <Route path="Our-mission" element={<Ourmission />} />
      <Route path="Our-vision" element={<Ourvision />} />
      <Route path="Our-commitment" element={< Ourcommitment  />} />
      <Route path="Local-Supply" element={<  LocalSupply  />} />
    </Routes>
  </main>
);

// Hero Section Component with Image Slider
const HeroSection = () => {
  // List of images for the slider
  const images = [
    { src: "/Grain.ico", alt: "Agricultural Commodities ", caption: "Agricultural Commodities" },
    { src: "/Grain1.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
    { src: "/Grain2.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
    { src: "/Grain3.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
    { src: "/Grain4.ico", alt: "Solid Minerals", caption: "Solid Minerals" },
    { src: "/Grain5.ico", alt: "Solid Minerals", caption: "Solid Minerals" },
    { src: "/Grain6.ico", alt: "Solid Minerals", caption: "Solid Minerals" },
    { src: "/Grain7.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
    { src: "/Grain8.ico", alt: "Solid Minerals", caption: "Solid Minerals" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img
          src={images[currentSlide].src}
          alt={images[currentSlide].alt}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h2>{images[currentSlide].caption}</h2>
        </div>
      </div>
      <div className="slider-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

// Company Overview Component
const CompanyOverview = () => (
  <section className="company-overview">
    <h2>Value Based Agricultural Commodity Trading Company</h2>
    <p>
    Khadesh Global Integrated Services Limited's strategy involves combining strong risk management systems with distinctive global capabilities to maximise value and efficiency throughout the global supply chain for solid minerals and agricultural commodities.
    </p>
    <p>
    During the busiest time of year, we usually purchase agricultural commodities from the main low-cost producing nations; we then consolidate and export the goods straight to customers all over the world. Delivering commodities to developed economies, emerging markets, and frontier economies worldwide, our cooperation with numerous producers, partners, and clients spans boundaries.
    </p>
    <p>
    Khadesh Global Integrated Services Limited is a well-known trading company for agricultural commodities. It uses a full logistics interface to source and buy agricultural commodities at competitive prices, transport them to the port of loading, load, unload, break bulk, and ship inland. It also ensures that the products are delivered to end users, distributors, and stockists in the Middle East, Asia, Europe, Africa, and other regions without incident.
    </p>
  </section>
);

// Commodity details
const commodityDetails = {
  "Raw Cashew Nut": {
    overview:
      "Raw cashew nuts are seeds that require processing to remove their toxic shell before consumption, valued for their nutrition and industrial uses.",
    details:
      "Khadesh Global Integrated Services Limited sources high-quality Cashew nuts from various regions, ensuring the best practices in production and trade.",
  },
  "Dried Hibiscus Flower": {
    overview:
      "Dried hibiscus flowers, rich in antioxidants and vitamin C, are commonly used to make teas, beverages, and natural remedies, known for their tart flavor and potential health benefits like reducing blood pressure and promoting digestion.",
    details:
      "We ensure efficient sourcing and supply chain management for Dried hibiscus flowers to meet global demands.",
  },
  "Dried Baobab Fruit": {
    overview:
      "Dried baobab fruit, known for its citrus-like flavor, is a nutrient-dense superfood rich in vitamin C, fiber, and antioxidants. The powder made from the fruit pulp is often added to smoothies, snacks, and health supplements.",
    details:
      "Khadesh Global Integrated Services Limited provides a wide range of Dried baobab fruit, sourced sustainably from reputable producers.",
  },
  "Click For More of our Products": {
    link: "/commodities#.HeroSection", // Add the route to the products page here
  },
};


// Agricultural Commodities Section Component
const AgriculturalCommodities = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const commodities = Object.keys(commodityDetails);

  const handleLearnMoreClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="commodities-section">
      <h2 className="commodities-title">Agricultural Commodities </h2>
      
      <p className="commodities-intro">
      Situated and crafted to satisfy the demands of the worldwide market, our agricultural commodities are acquired from top growers, guaranteeing sustainability and quality.
      </p>
      <div className="commodities-grid">
        {commodities.map((commodity, index) => (
          <CommodityItem
            key={index}
            title={commodity}
            details={commodityDetails[commodity]}
            isExpanded={expandedIndex === index}
            onLearnMoreClick={() => handleLearnMoreClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

// Commodity Item Component
const CommodityItem = ({ title, details, isExpanded, onLearnMoreClick }) => (
  <div className="commodity-item">
    <h3>{title}</h3>
    <p>{details.overview}</p>
    <div className="commodity-hover">
      {title === "Click For More of our Products" ? (
        <Link to={details.link}>
          <button className="btn-details">View More Products</button>
        </Link>
      ) : (
        <button className="btn-details" onClick={onLearnMoreClick}>
          {isExpanded ? "Show Less" : "Learn More"}
        </button>
      )}
    </div>
    {isExpanded && title !== "Click For More of our Products" && (
      <div className="additional-info">
        <p>{details.details}</p>
      </div>
    )}
  </div>
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


// Footer Component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Khadesh Global. All rights reserved.</p>
  </footer>
);

export default App;
