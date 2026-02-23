import React from "react";
import { trackEvent } from "../utils/analytics";

const BOT_GREETING = {
  from: "bot",
  text: "Hi, I am Khadesh Assistant. I can help with products, supply, pricing process, or project support before you contact us.",
};

const QUICK_OPTIONS = [
  "What products do you offer?",
  "How do I start a supply request?",
  "Do you handle project management?",
  "I need to contact your team",
];
const CONTACT_EMAIL = "khadeshglobalintegratedservice@gmail.com";
const WHATSAPP_LINK = "https://wa.me/+2348069081589";

function getBotReply(inputText) {
  const text = inputText.toLowerCase();

  if (text.includes("product") || text.includes("commodit")) {
    return "We provide agricultural commodities. You can review full categories on the Commodities page, and I can connect you to the team for specific demand.";
  }

  if (text.includes("supply") || text.includes("request") || text.includes("order")) {
    return "To begin a supply request, share the commodity, expected quantity, destination, and timeline. I can route you to Contact Us with these details.";
  }

  if (text.includes("project") || text.includes("management")) {
    return "Yes. We support project management with structured planning, risk control, and execution tracking.";
  }

  if (text.includes("price") || text.includes("quote") || text.includes("cost")) {
    return "Pricing depends on commodity type, quality, volume, and destination. The team can provide a formal quote once requirements are submitted.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("whatsapp")) {
    return "Great. Use the contact buttons below to reach our team directly on WhatsApp or email.";
  }

  return "Thanks. I can help with products, supply requests, project services, and next steps before you contact our team.";
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([BOT_GREETING]);

  const sendMessage = (text) => {
    if (!text.trim()) {
      return;
    }

    const userMessage = { from: "user", text: text.trim() };
    const reply = { from: "bot", text: getBotReply(text) };

    setMessages((prev) => [...prev, userMessage, reply]);
    trackEvent("chatbot_message", { prompt: text.trim().slice(0, 120) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput("");
  };

  return (
    <div className={`chatbot-widget ${isOpen ? "open" : ""}`}>
      {isOpen ? (
        <section className="chatbot-panel" aria-label="Khadesh assistant">
          <header className="chatbot-header">
            <h3>Khadesh Assistant</h3>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
              Close
            </button>
          </header>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`chat-row ${message.from}`}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="chatbot-options">
            {QUICK_OPTIONS.map((option) => (
              <button key={option} type="button" onClick={() => sendMessage(option)}>
                {option}
              </button>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              aria-label="Chat message"
            />
            <button type="submit">Send</button>
          </form>

          <div className="chatbot-contact-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("chatbot_contact_whatsapp")}
            >
              WhatsApp Team
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => trackEvent("chatbot_contact_email")}
            >
              Email Team
            </a>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => {
          setIsOpen((prev) => !prev);
          trackEvent("chatbot_toggle", { open: !isOpen });
        }}
        aria-label="Open chat assistant"
      >
        Chat with us
      </button>
    </div>
  );
}
