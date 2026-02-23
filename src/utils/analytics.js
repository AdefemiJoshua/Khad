export function trackEvent(eventName, payload = {}) {
  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  if (typeof window !== "undefined") {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(eventPayload);
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  }
}

function getAnalyticsData(target) {
  const action = target.closest("a, button");
  if (!action) {
    return null;
  }

  const label = (action.textContent || "").trim().slice(0, 120);
  const href = action.getAttribute("href") || "";

  if (href.startsWith("mailto:")) {
    return { event: "contact_email_click", label, href };
  }

  if (href.includes("wa.me")) {
    return { event: "social_whatsapp_click", label, href };
  }

  if (href.includes("instagram.com")) {
    return { event: "social_instagram_click", label, href };
  }

  if (href.includes("facebook.com")) {
    return { event: "social_facebook_click", label, href };
  }

  if (action.classList.contains("btn-details")) {
    return { event: "commodity_cta_click", label };
  }

  if (action.closest(".mobile-quick-nav")) {
    return { event: "mobile_quick_nav_click", label };
  }

  if (action.matches("a")) {
    return { event: "link_click", label, href };
  }

  if (action.matches("button")) {
    return { event: "button_click", label };
  }

  return null;
}

export function initAutoTracking() {
  if (typeof window === "undefined" || window.__khadeshTrackingInit) {
    return;
  }

  const handler = (event) => {
    const data = getAnalyticsData(event.target);
    if (data) {
      trackEvent(data.event, data);
    }
  };

  document.addEventListener("click", handler, true);
  window.__khadeshTrackingInit = true;
}
