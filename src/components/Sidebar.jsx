import { sections } from "../data/sections";
import useActiveSection from "../hooks/useActiveSection";

function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        TOPO.AUDIO / <span>BRIEF</span>
      </div>

      <nav className="sidebar__nav">
        {sections.map((section) => (
            <a
            key={section.id}
            href={`#${section.id}`}
            className={
                activeSection === section.id
                ? "sidebar-link active"
                : "sidebar-link"
            }
            >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;