import { Link, useLocation } from "react-router-dom";

function SiteMenu() {
  const location = useLocation();

  const pageLabel =
    {
      "/research": "RESEARCH",
      "/project": "PROJECT",
      "/about": "ABOUT",
      "/cv": "CV",
      "/bibliography": "BIBLIOGRAPHY",
      "/methodology": "METHODOLOGY",
      "/research-log": "RESEARCH LOG",
      "/tools": "TOOLS",
    }[location.pathname] || "";

  return (
    <div className="sidebar__brand-group">
      <Link to="/research" className="sidebar__brand">
        TOPO.AUDIO
        {pageLabel && <> / <span>{pageLabel}</span></>}
      </Link>

      <nav className="sidebar__site-menu">
        <Link to="/project">/PROJECT</Link>
        <Link to="/research">/RESEARCH</Link>
        <Link to="/about">/ABOUT</Link>
        <Link to="/cv">/CV</Link>
        <Link to="/bibliography">/BIBLIOGRAPHY</Link>
        <Link to="/tools">/TOOLS</Link>
      </nav>
    </div>
  );
}

export default SiteMenu;