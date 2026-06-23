import { sections } from "../data/sections";
import useActiveSection from "../hooks/useActiveSection";
import { Link, useLocation } from "react-router-dom";
import SiteMenu from "./SiteMenu";

function Sidebar() {
  const location = useLocation();

  const pageLabel = {
    "/brief": "BRIEF",
    "/about": "ABOUT",
    "/bibliography": "BIBLIOGRAPHY",
    "/methodology": "METHODOLOGY",
    "/research-log": "RESEARCH LOG",
    "/tools": "TOOLS",
  }[location.pathname] || "";
  
  const activeSection = useActiveSection();

  const darkSections = [
    "harmonic-sequence-generator",
    "audio-canvas",
    "topology-explorer",
  ];

  const isDarkSection = darkSections.includes(activeSection);

  return (
    <aside className={`sidebar ${isDarkSection ? "sidebar--dark" : ""}`}>
      <SiteMenu />  
      <nav className="sidebar__nav">
        {sections.map((section, index) => {
          if (section.heading) {
            return (
              <div key={`${section.label}-${index}`} className="sidebar-heading">
                <span className="sidebar-marker sidebar-marker--none" />
                <span>{section.label}</span>
              </div>
            );
          }

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={[
                "sidebar-item",
                activeSection === section.id ? "active" : "",
                section.sub ? "sub" : "",
                section.spaced ? "spaced" : "",
                section.tone || "",
              ].join(" ")}
            >
              <span
                className={`sidebar-marker sidebar-marker--${
                  section.marker || "dot"
                }`}
              />
              <span className="sidebar-link">{section.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
