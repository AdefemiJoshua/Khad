import React from "react";

export default function FloatingContactCTA() {
  return (
    <div className="floating-cta" aria-label="Quick contact actions">
      <a href="mailto:khadeshglobalintegratedservice@gmail.com" className="floating-cta-main">
        Contact Us
      </a>
      <div className="floating-cta-actions">
        <a href="https://wa.me/+2348069081589" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href="mailto:khadeshglobalintegratedservice@gmail.com">Email</a>
      </div>
    </div>
  );
}
