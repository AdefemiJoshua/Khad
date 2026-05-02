import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sustainability.module.css";

export default function QualityAssuranceCompliance() {
  return (
    <div className={styles.SustainabilitySection}>
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src="/sustainability.ico"
            alt="agricultural export compliance Nigeria laboratory testing"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h2>Quality Assurance & Compliance</h2>
          </div>
        </div>
      </section>

      <div className={styles.SustainabilityContentContainer}>
        <div className={styles.SustainabilityWriteUp}>
          <h2>QUALITY ASSURANCE & COMPLIANCE</h2>
          <p>
            At Khadesh Global, we supply agricultural commodities from Nigeria that are carefully sourced, processed, and
            exported in compliance with international food safety and quality standards.
          </p>
          <p>
            We ensure every shipment meets strict quality requirements through structured monitoring, testing, and
            documentation across the entire supply chain.
          </p>

          <h3>Quality Management System (HACCP-Based)</h3>
          <p>
            We operate a HACCP-based food safety system aligned with Codex Alimentarius guidelines and international
            hygiene standards. This ensures food safety risks are properly identified and controlled from sourcing to
            export.
          </p>

          <h3>Quality Control & Testing</h3>
          <p>To ensure compliance with global standards, we conduct strict quality checks, including:</p>
          <ul>
            <li>Aflatoxin (mycotoxin) monitoring</li>
            <li>Pesticide residue screening (EU MRL compliant)</li>
            <li>Microbiological testing (Salmonella, E. coli, Total Plate Count)</li>
            <li>Heavy metal analysis</li>
            <li>Moisture control to prevent spoilage</li>
          </ul>
          <p>Third-party laboratory testing is available upon buyer request.</p>

          <h3>Traceability System</h3>
          <p>Every shipment is fully traceable from farm to export through:</p>
          <ul>
            <li>Batch numbers</li>
            <li>Supplier codes (smallholder farmers)</li>
            <li>Production and processing records</li>
            <li>Container tracking details</li>
            <li>Export documentation references</li>
          </ul>
          <p>This ensures full transparency and accountability across the supply chain.</p>

          <h3>Export Documentation</h3>
          <p>We provide complete export compliance documentation, including:</p>
          <ul>
            <li>Phytosanitary Certificate</li>
            <li>Certificate of Origin</li>
            <li>Commercial Invoice & Packing List</li>
            <li>Fumigation Certificate</li>
            <li>Third-party inspection reports (SGS / Bureau Veritas upon request)</li>
            <li>Laboratory analysis reports</li>
          </ul>

          <p>
            Khadesh Global is committed to delivering safe, compliant, and high-quality agricultural commodities from
            Nigeria to global markets. We maintain strict quality control, transparent sourcing, and continuous
            improvement across our operations.
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
