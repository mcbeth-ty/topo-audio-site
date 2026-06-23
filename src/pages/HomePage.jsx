import { Link } from "react-router-dom";
import SiteMenu from "../components/SiteMenu";

function HomePage() {
  return (
    <>
      <SiteMenu />

      <main className="simple-page">
        <div className="simple-page__inner">
          <h1>TOPO.AUDIO</h1>

          <nav className="simple-page__nav">
            <Link to="/brief">/BRIEF</Link>
            <Link to="/about">/ABOUT</Link>
            <Link to="/bibliography">/BIBLIOGRAPHY</Link>
            <Link to="/methodology">/METHODOLOGY</Link>
            <Link to="/research-log">/RESEARCH LOG</Link>
            <Link to="/tools">/TOOLS</Link>
          </nav>
        </div>
      </main>
    </>
  );
}

export default HomePage;