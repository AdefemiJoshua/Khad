import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function SectionSpyNav({ pathname }) {
  const [sections, setSections] = React.useState([]);
  const [activeId, setActiveId] = React.useState("");

  React.useEffect(() => {
    const headings = Array.from(document.querySelectorAll("main h2"))
      .filter((node) => Boolean(node.textContent && node.textContent.trim()))
      .slice(0, 8);

    const prepared = headings.map((node, index) => {
      const generatedId = toSlug(node.textContent || `section-${index + 1}`);
      const id = node.id || `${generatedId}-${index + 1}`;
      if (!node.id) {
        node.id = id;
      }
      return { id, label: node.textContent.trim() };
    });

    setSections(prepared);
    setActiveId(prepared[0]?.id || "");

    if (!prepared.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    prepared.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  if (sections.length < 2) {
    return null;
  }

  return (
    <Box className="section-spy-nav" aria-label="Page sections">
      <Typography variant="caption" className="section-spy-label">
        On this page
      </Typography>
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => scrollToSection(section.id)}
          className={`section-spy-item ${activeId === section.id ? "active" : ""}`}
          aria-current={activeId === section.id ? "true" : undefined}
        >
          {section.label}
        </button>
      ))}
    </Box>
  );
}
