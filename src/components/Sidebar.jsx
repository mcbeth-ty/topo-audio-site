import { sections } from "../data/sections";
import useActiveSection from "../hooks/useActiveSection";

function Sidebar() {
  const activeSection = useActiveSection();

  const darkSections = [
    "harmonic-sequence-generator",
    "audio-canvas",
    "topology-explorer",
  ];

  const isDarkSection = darkSections.includes(activeSection);

  return (
    <aside className={`sidebar ${isDarkSection ? "sidebar--dark" : ""}`}>
      <a href="#intro" className="sidebar__brand">
        TOPO.AUDIO / <span>BRIEF</span>
      </a>

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
