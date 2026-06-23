import { Link, useLocation } from "react-router-dom";

function SiteMenu() {
  const location = useLocation();

  const pageLabel =
    {
      "/brief": "BRIEF",
      "/about": "ABOUT",
      "/bibliography": "BIBLIOGRAPHY",
      "/methodology": "METHODOLOGY",
      "/research-log": "RESEARCH LOG",
      "/tools": "TOOLS",
    }[location.pathname] || "";

  return (
    <div className="sidebar__brand-group">
      <Link to="/brief" className="sidebar__brand">
        TOPO.AUDIO
        {pageLabel && <> / <span>{pageLabel}</span></>}
      </Link>

      <nav className="sidebar__site-menu">
        <Link to="/brief">/BRIEF</Link>
        <Link to="/about">/ABOUT</Link>
        <Link to="/bibliography">/BIBLIOGRAPHY</Link>
        <Link to="/methodology">/METHODOLOGY</Link>
        <Link to="/research-log">/RESEARCH LOG</Link>
        <Link to="/tools">/TOOLS</Link>
      </nav>
    </div>
  );
}

export default SiteMenu;