import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactUs.module.css";
import { trackEvent } from "./utils/analytics";

const EMAIL = "khadeshglobalintegratedservice@gmail.com";
const LAST_SUBMIT_KEY = "khadesh_contact_last_submit";

const initialForm = {
  fullName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  website: "",
};

function validateForm(form) {
  const errors = {};

  if (form.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (form.subject.trim().length < 4) {
    errors.subject = "Please enter a short subject.";
  }

  if (form.message.trim().length < 20) {
    errors.message = "Please include at least 20 characters in your message.";
  }

  return errors;
}

function inCooldownWindow() {
  const value = window.localStorage.getItem(LAST_SUBMIT_KEY);
  if (!value) {
    return false;
  }
  const diffMs = Date.now() - Number(value);
  return diffMs < 60000;
}

const ContactUs = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => !isSubmitting, [isSubmitting]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (form.website.trim()) {
      setStatus({ type: "success", message: "Thank you. Your message has been received." });
      return;
    }

    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: "Please correct the highlighted fields." });
      return;
    }

    if (inCooldownWindow()) {
      setStatus({
        type: "error",
        message: "Please wait one minute before sending another message.",
      });
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`[Website] ${form.subject.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.fullName.trim()}`,
        `Email: ${form.email.trim()}`,
        `Company: ${form.company.trim() || "Not provided"}`,
        "",
        form.message.trim(),
      ].join("\n")
    );

    window.localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
    trackEvent("contact_form_submit", {
      subject: form.subject.trim(),
      company: form.company.trim() || "none",
    });

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setStatus({
      type: "success",
      message: "Your email client has been opened. We will respond as soon as possible.",
    });
    setForm(initialForm);
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className={styles.ContactUsSection}>
      <HeroSection />
      <div className={styles.ContactUsContentContainer}>
        <h2 className={styles.ContactUsTitle}>Talk to our team</h2>
        <div className={styles.ContactUsWriteUp}>
          <p>
            We are available Monday to Saturday to support supplier requests, customer
            inquiries, and partnership discussions.
          </p>
          <p>
            For urgent requests, email us directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            {errors.fullName ? <span className={styles.fieldError}>{errors.fullName}</span> : null}

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            {errors.email ? <span className={styles.fieldError}>{errors.email}</span> : null}

            <label htmlFor="company">Company (Optional)</label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              autoComplete="organization"
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              required
            />
            {errors.subject ? <span className={styles.fieldError}>{errors.subject}</span> : null}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
            {errors.message ? <span className={styles.fieldError}>{errors.message}</span> : null}

            <div className={styles.honeypotField} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button type="submit" disabled={!canSubmit} className={styles.submitButton}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status.message ? (
              <p
                role="status"
                className={status.type === "error" ? styles.statusError : styles.statusSuccess}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
      <AdditionalSections />
    </div>
  );
};

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-image-container">
      <img src="/contactus.ico" alt="Contact Khadesh Global team" className="hero-image" />
    </div>
  </section>
);

const AdditionalSections = () => (
  <section className="additional-sections">
    <WhatWeDo />
    <QuickLinks />
    <CommoditiesAndServices />
    <Support />
    <SocialMedia />
  </section>
);

function WhatWeDo() {
  return (
    <section className="what-we-do">
      <div className="content">
        <h2>What We Do</h2>
        <p>
          Khadesh Global provides integrated global sourcing, risk management, and
          value-added supply solutions for agricultural commodities.
        </p>
        <p>
          <strong>Address:</strong> 21 Ndjamena Crescent, Wuse 2, Abuja.
        </p>
      </div>
      <div className="image-container">
        <img src="map.png" alt="Khadesh Global office location map" className="what-we-do-image" />
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
    { name: "Agricultural Commodities", link: "/commodities#agriculturalCommoditiesSection" },
{ name: "Local Supply", link: "/local-supply#services-section" },
  ];

  return (
    <div className="commodities-services">
      <h3>Our Commodities and Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.name}>
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

const Support = () => (
  <div className="support">
    <h3>Support</h3>
    <ul>
      <li>
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          Support Team
        </Link>
      </li>
    </ul>
  </div>
);

const SocialMedia = () => (
  <div className="social-media">
    <h3>Get Social With Us</h3>
    <div className="social-icons">
      {[
        { platform: "whatsapp", link: "https://wa.me/+2348069081589" },
        { platform: "instagram", link: "https://instagram.com/khadeshglobal" },
        { platform: "facebook", link: "https://www.facebook.com/khadeshglobal" },
        { platform: "email", link: `mailto:${EMAIL}` },
      ].map(({ platform, link }) => (
        <a key={platform} href={link} target="_blank" rel="noopener noreferrer" aria-label={platform}>
          <img src={`/images/${platform}-logo.png`} alt={`${platform} logo`} className="social-icon" />
        </a>
      ))}
    </div>
  </div>
);

export default ContactUs;
