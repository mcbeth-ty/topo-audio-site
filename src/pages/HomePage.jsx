import { Link } from "react-router-dom";
import SiteMenu from "../components/SiteMenu";
import { siteLinks } from "../data/siteLinks";

function HomePage() {
  return (
    <>
      <SiteMenu />

      <main className="simple-page">
        <div className="simple-page__inner">
          <h1>TOPO.AUDIO</h1>
          <p>Research into musical experience, relational representation, and computational exploration.</p>

          <nav className="simple-page__nav">
            {siteLinks.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          </nav>
        </div>
      </main>
    </>
  );
}

export default HomePage;