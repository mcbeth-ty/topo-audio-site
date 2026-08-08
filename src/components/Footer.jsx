// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          topo.audio
          <br />
          Version 0.3 · Research in Progress
          <br />
          Last updated: August 2026
        </p>

        <p>
          An ongoing investigation into the topology of harmonic affect.
        </p>

        <nav className="footer-nav">
          <a href="#intro">Brief</a>
          <span>·</span>

          <a href="/methodology">Methodology</a>
          <span>·</span>

          <a href="/research">Research Log</a>
          <span>·</span>

          <a href="#about">About</a>
          <span>·</span>

          <a href="/bibliography">Bibliography</a>
          <span>·</span>

          <a href="#about">Contact</a>
        </nav>

        <p>© 2026 Tyler McBeth</p>
      </div>
    </footer>
  );
}