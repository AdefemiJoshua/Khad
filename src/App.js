import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import ProjectManagement from "./ProjectManagement";
import OurAgents from "./OurAgents";
import Commodities from "./Commodities";
import CommodityArticlePage from "./CommodityArticlePage";
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
import QualityAssuranceCompliance from "./QualityAssuranceCompliance";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSpyNav from "./components/SectionSpyNav";
import MobileQuickNav from "./components/MobileQuickNav";
import SeoMeta from "./components/SeoMeta";
import PageIntro from "./components/PageIntro";
import QuotePanel from "./components/QuotePanel";
import FloatingContactCTA from "./components/FloatingContactCTA";
import ChatbotWidget from "./components/ChatbotWidget";
import NotFound from "./NotFound";
import { initAutoTracking, trackEvent } from "./utils/analytics";


// Main App Component
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("khadesh_theme");
    if (storedTheme) {
      setIsDarkTheme(storedTheme === "dark");
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkTheme(prefersDark);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
    window.localStorage.setItem("khadesh_theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header isDarkTheme={isDarkTheme} onToggleTheme={() => setIsDarkTheme((prev) => !prev)} />
        <ScrollManager />
        <ImageEnhancer />
        <MainContent />
        <Footer />
        <MobileQuickNav />
        <ChatbotWidget />
        <FloatingContactCTA />
      </div>
    </Router>
  );
};

// Header Component
// Header and navigation moved to `src/components/Header.js`

// Main Content Component
const getPageTheme = (pathname) => {
  const normalizedPath = pathname.toLowerCase();

  if (normalizedPath === "/") {
    return "home";
  }
  if (normalizedPath.includes("project-management")) {
    return "project";
  }
  if (normalizedPath.includes("commodities")) {
    return "commodities";
  }
  if (normalizedPath.includes("sustainability")) {
    return "sustainability";
  }
  if (normalizedPath.includes("quality-assurance-compliance")) {
    return "sustainability";
  }
  if (normalizedPath.includes("contact-us")) {
    return "contact";
  }
  if (normalizedPath.includes("about-us")) {
    return "about";
  }
  if (normalizedPath.includes("our-vision")) {
    return "about";
  }
  if (normalizedPath.includes("our-mission")) {
    return "about";
  }
  if (normalizedPath.includes("our-commitment")) {
    return "about";
  }
  if (normalizedPath.includes("our-value-proposition")) {
    return "about";
  }
  if (normalizedPath.includes("our-partners")) {
    return "about";
  }
  if (normalizedPath.includes("our-agents")) {
    return "about";
  }
  if (normalizedPath.includes("local-supply")) {
    return "supply";
  }

  return "general";
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = hash.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [pathname, hash]);

  return null;
};

const ImageEnhancer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const images = Array.from(document.querySelectorAll("main img"));
    const listeners = [];

    images.forEach((image) => {
      if (!image.classList.contains("hero-image")) {
        image.setAttribute("loading", "lazy");
      }
      image.setAttribute("decoding", "async");

      if (!image.complete) {
        image.classList.add("img-loading");
        const clearLoading = () => image.classList.remove("img-loading");
        image.addEventListener("load", clearLoading, { once: true });
        image.addEventListener("error", clearLoading, { once: true });
        listeners.push({ image, clearLoading });
      }
    });

    return () => {
      listeners.forEach(({ image, clearLoading }) => {
        image.removeEventListener("load", clearLoading);
        image.removeEventListener("error", clearLoading);
      });
    };
  }, [pathname]);

  return null;
};

const MainContent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    initAutoTracking();
  }, []);

  useEffect(() => {
    trackEvent("page_view", { path: pathname });
  }, [pathname]);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll(
        ".reveal-on-scroll, .commodity-item, .what-we-do, .quick-links, .commodities-services, .support, .social-media, [class*='commodityCard']:not([class*='commodityCards']), [class*='ContentContainer']"
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((target) => {
      target.classList.add("reveal-ready");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <main id="main-content" className="main-content" data-page={getPageTheme(pathname)}>
      <SeoMeta pathname={pathname} />
      <PageIntro pathname={pathname} />
      <div className="section-divider" aria-hidden="true" />
      <div className="route-transition" key={pathname}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CompanyOverview />
                <TestimonialsSection />
                <AgriculturalCommodities />
                <AdditionalSections />
              </>
            }
          />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/commodities/:slug" element={<CommodityArticlePage />} />
          <Route path="/our-agents" element={<OurAgents />} />
          <Route path="/our-strategy" element={<Strategy />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/quality-assurance-compliance" element={<QualityAssuranceCompliance />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-value-proposition" element={<OurValueProposition />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/our-mission" element={<Ourmission />} />
          <Route path="/our-vision" element={<Ourvision />} />
          <Route path="/our-commitment" element={<Ourcommitment />} />
          <Route path="/local-supply" element={<LocalSupply />} />
          <Route path="/Project-Management" element={<Navigate replace to="/project-management" />} />
          <Route path="/Our-Agents" element={<Navigate replace to="/our-agents" />} />
          <Route path="/About-us" element={<Navigate replace to="/about-us" />} />
          <Route path="/Our-mission" element={<Navigate replace to="/our-mission" />} />
          <Route path="/Our-vision" element={<Navigate replace to="/our-vision" />} />
          <Route path="/Our-commitment" element={<Navigate replace to="/our-commitment" />} />
          <Route path="/Our-Value-Proposition" element={<Navigate replace to="/our-value-proposition" />} />
          <Route path="/Our-Partners" element={<Navigate replace to="/our-partners" />} />
          <Route path="/Local-Supply" element={<Navigate replace to="/local-supply" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <QuotePanel pathname={pathname} />
      <div className="section-divider alt" aria-hidden="true" />
      <SectionSpyNav pathname={pathname} />
    </main>
  );
};

// Hero Section Component with Image Slider
const HeroSection = () => {
  // List of images for the slider
  const images = [
    { src: "/Grain.ico", alt: "Agricultural Commodities ", caption: "Agricultural Commodities" },
    { src: "/Grain1.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
    { src: "/Grain2.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
    { src: "/Grain3.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
    { src: "/Grain7.ico", alt: "Agricultural Commodities", caption: "Agricultural Commodities" },
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
            type="button"
            aria-label={`Go to slide ${index + 1}`}
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
    Khadesh Global Integrated Services Limited's strategy involves combining strong risk management systems with distinctive global capabilities to maximise value and efficiency throughout the global supply chain for agricultural commodities.
    </p>
    <p>
    During the busiest time of year, we usually purchase agricultural commodities from the main low-cost producing nations; we then consolidate and export the goods straight to customers all over the world. Delivering commodities to developed economies, emerging markets, and frontier economies worldwide, our cooperation with numerous producers, partners, and clients spans boundaries.
    </p>
    <p>
    Khadesh Global Integrated Services Limited is a well-known trading company for agricultural commodities. It uses a full logistics interface to source and buy agricultural commodities at competitive prices, transport them to the port of loading, load, unload, break bulk, and ship inland. It also ensures that the products are delivered to end users, distributors, and stockists in the Middle East, Asia, Europe, Africa, and other regions without incident.
    </p>
  </section>
);

const testimonials = [
  {
    quote:
      "Khadesh Global delivered exactly what we needed on schedule, with quality checks clearly documented from source to delivery.",
    name: "Procurement Manager",
    company: "Food Processing Firm",
  },
  {
    quote:
      "Their communication was fast, transparent, and practical. We had clear timelines and no surprises throughout the transaction.",
    name: "Operations Lead",
    company: "Regional Distribution Company",
  },
  {
    quote:
      "From sourcing to export coordination, the team handled the process professionally and helped us reduce operational friction.",
    name: "Supply Chain Director",
    company: "Agri-Trade Partner",
  },
];

const TestimonialsSection = () => (
  <section className="testimonials-section reveal-on-scroll" aria-labelledby="testimonials-title">
    <h2 id="testimonials-title">Testimonials</h2>
    <p className="testimonials-intro">
      Feedback from clients and partners who rely on Khadesh Global for dependable agricultural commodity delivery.
    </p>
    <div className="testimonials-grid">
      {testimonials.map((item, index) => (
        <article key={`${item.name}-${index}`} className="testimonial-card">
          <p className="testimonial-quote">"{item.quote}"</p>
          <p className="testimonial-author">{item.name}</p>
          <p className="testimonial-company">{item.company}</p>
        </article>
      ))}
    </div>
  </section>
);

// Commodity details
const commodityDetails = {
  "Sesame Seeds": {
    overview:
      "Sesame seeds are nutrient-dense seeds from Sesamum indicum, widely used in baking, oils, and health-focused diets.",
    link: "/commodities/sesame-seeds",
  },
  "Dried Hibiscus Flower": {
    overview:
      "Dried hibiscus flowers, rich in antioxidants and vitamin C, are commonly used to make teas, beverages, and natural remedies, known for their tart flavor and potential health benefits like reducing blood pressure and promoting digestion.",
    link: "/commodities/dried-hibiscus-flower",
  },
  "Click For More of our Products": {
    link: "/commodities#agriculturalCommoditiesSection",
  },
};


// Agricultural Commodities Section Component
const AgriculturalCommodities = () => {
  const commodities = Object.keys(commodityDetails);

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
          />
        ))}
      </div>
    </section>
  );
};

// Commodity Item Component
const CommodityItem = ({ title, details }) => (
  title === "Click For More of our Products" ? (
    <Link to={details.link} className="commodity-item commodity-item-compact commodity-item-cta">
      <h3>{title}</h3>
    </Link>
  ) : (
    <div className="commodity-item">
      <h3>{title}</h3>
      {details.overview ? <p>{details.overview}</p> : null}
      <div className="commodity-hover">
        <Link to={details.link} className="btn-details btn-link">
          Learn More
        </Link>
      </div>
    </div>
  )
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


// Footer moved to `src/components/Footer.js`
export default App;
