import { Link, useLocation } from "react-router-dom";

import { siteLinks } from "../data/siteLinks";

function SiteMenu() {
  const location = useLocation();

  const pageLabel =
    {
      "/research": "01 / FRAMEWORK",
      "/project": "01",
      "/musical-affect": "02",
      "/about": "ABOUT",
      "/cv": "CV",
      "/bibliography": "BIBLIOGRAPHY",
      "/methodology": "METHODOLOGY",
      "/research-log": "RESEARCH LOG",
      "/tools": "TOOLS",
    }[location.pathname] || "";

  return (
    <div className="sidebar__brand-group">
      <Link to="/" className="sidebar__brand" onClick={event => {
        if (window.matchMedia("(hover: none)").matches) {
          event.preventDefault();
          event.currentTarget.focus();
        }
      }}>
        TOPO.AUDIO
        {pageLabel && <> / <span>{pageLabel}</span></>}
      </Link>

      <nav className="sidebar__site-menu">
        {siteLinks.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
      </nav>
    </div>
  );
}

export default SiteMenu;