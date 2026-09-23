import { sections } from "../data/sections";
import useActiveSection from "../hooks/useActiveSection";
import SiteMenu from "./SiteMenu";

function Sidebar({ items = sections, className = "" }) {
  const activeSection = useActiveSection();

  const darkSections = [
    "harmonic-sequence-generator",
    "audio-canvas",
    "topology-explorer",
  ];

  const isDarkSection = darkSections.includes(activeSection);

  return (
    <aside className={`sidebar ${className} ${isDarkSection ? "sidebar--dark" : ""}`}>
      <SiteMenu />  
      <nav className="sidebar__nav">
        {items.map((section, index) => {
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
