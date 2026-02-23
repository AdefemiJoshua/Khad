import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sustainability.module.css";

export default function QualityAssuranceCompliance() {
  return (
    <div className={styles.SustainabilitySection}>
      <section className="hero-section">
        <div className="hero-image-container">
          <img src="/sustainability.ico" alt="Quality Assurance and Compliance" className="hero-image" />
          <div className="hero-overlay">
            <h2>Quality Assurance & Compliance</h2>
          </div>
        </div>
      </section>

      <div className={styles.SustainabilityContentContainer}>
        <div className={styles.SustainabilityWriteUp}>
          <h2>QUALITY ASSURANCE & COMPLIANCE</h2>
          <p>
            Khadesh Global supplies agricultural commodities in compliance with European Union food safety regulations,
            including EU General Food Law (Regulation EC 178/2002) and international standards.
          </p>
          <p>Full laboratory analysis and traceability documentation are available upon request.</p>

          <h3>HACCP-Based Quality Management System</h3>
          <p>
            Khadesh Global operates under a Hazard Analysis and Critical Control Points (HACCP) based food safety
            management system in accordance with Regulation (EC) No 852/2004 on hygiene of foodstuffs, Codex
            Alimentarius HACCP Guidelines, and EU General Food Law (EC 178/2002).
          </p>
          <p>
            Our HACCP certification confirms that operations systematically identify, evaluate, and control food safety
            hazards across sourcing, processing, storage, and export.
          </p>

          <h3>Critical Control Measures</h3>
          <p>To ensure EU compliance, we implement:</p>
          <ul>
            <li>Mycotoxin (Aflatoxin) monitoring and control</li>
            <li>Pesticide residue screening in line with EU MRL standards</li>
            <li>Microbiological testing (Salmonella, E. coli, Total Plate Count)</li>
            <li>Heavy metal analysis</li>
            <li>Moisture content monitoring to prevent mold development</li>
          </ul>
          <p>All testing can be conducted through accredited third-party laboratories upon buyer request.</p>

          <h3>Traceability System</h3>
          <p>Each shipment is traceable by:</p>
          <ul>
            <li>Batch Number</li>
            <li>Production Date</li>
            <li>Supplier Code</li>
            <li>Container Number</li>
            <li>Export Documentation Reference</li>
          </ul>
          <p>
            This ensures full compliance with EU traceability requirements under Regulation (EC) 178/2002.
          </p>

          <h3>Export Documentation & Compliance Support</h3>
          <p>We provide the following documentation:</p>
          <ul>
            <li>Phytosanitary Certificate</li>
            <li>Certificate of Origin</li>
            <li>Commercial Invoice & Packing List</li>
            <li>Fumigation Certificate</li>
            <li>Third-Party Inspection Certificate (SGS/Bureau Veritas upon request)</li>
            <li>Laboratory Analysis Reports</li>
          </ul>

          <p>
            Khadesh Global is committed to supplying safe, compliant, and high-quality agricultural commodities that
            meet European Union food safety standards. Continuous monitoring, documentation, and improvement are
            integral to our export operations.
          </p>
        </div>
      </div>

      <section className="additional-sections">
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

        <div className="commodities-services">
          <h3>Our Commodities & Services</h3>
          <ul>
            {[
              { name: "Agricultural Commodities", link: "/commodities#agriculturalCommoditiesSection" },
              { name: "Local Supply", link: "/local-supply#services-section" },
            ].map((service) => (
              <li key={service.name}>
                <Link to={service.link} onClick={() => window.scrollTo(0, 0)}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="support">
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
