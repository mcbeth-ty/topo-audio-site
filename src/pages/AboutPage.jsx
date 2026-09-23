import SiteMenu from "../components/SiteMenu";

function AboutPage() {
  return (
    <>
      <SiteMenu />

      <main className="simple-page about-page">
        <div className="simple-page__inner about-page__inner">
          <header className="about-page-header">
            <p className="eyebrow">PROFILE</p>
            <h1>ABOUT</h1>
          </header>

          <section className="about-page-content">
            <div className="about-page-image-wrap">
              <img
                src="/images/tyler-mcbeth-1.webp"
                alt="Portrait of Tyler McBeth"
                className="about-page-image"
              />
            </div>

            <div className="about-page-copy">
              <p>
                I’m Tyler McBeth, an independent designer, composer, and researcher
                based in Japan.
              </p>

              <p>
                My background spans architecture, computational design, and music
                composition. I hold a Bachelor of Science in Architecture from
                Texas Tech University and a Master of Engineering in Architecture
                from the University of Tokyo. My design work has focused on
                parametric systems, computation, spatial organization, and the
                representation of complex relationships through geometry and data.
              </p>

              <p>
                Alongside this work, I remain an active composer for film and
                independent music projects, with a long-standing interest in how
                harmonic structure gives rise to felt movement and emotional
                experience.
              </p>

              <p>
                Topo.audio emerged from the intersection of those practices. It
                treats musical perception as an architectural problem—not because
                experience is literally a building, but because relationships,
                neighborhoods, trajectories, scales, boundaries, and transformations
                can provide a powerful way to investigate its organization.
              </p>

              <p>
                The project combines music cognition, perceptual experimentation,
                harmonic analysis, computational modeling, interface design, and
                composition. This website serves as a research brief, an open
                laboratory, and a growing record of the tools and ideas through
                which the project is being developed.
              </p>
            </div>

            <aside className="about-page-meta">
              <h2>TYLER MCBETH</h2>

              <p>
                Composer
                <br />
                Designer
                <br />
                Researcher
                <br />
                Japan
              </p>

              <p>
                B.S. Architecture —
                <br />
                Texas Tech University
                <br />
                M.Eng. Architecture —
                <br />
                The University of Tokyo
              </p>

              <p>
                Architecture
                <br />
                Computation
                <br />
                Music
                <br />
                Perception
              </p>

              <p>
                <a
                  className="about-page-meta-link"
                  href="https://www.imdb.com/name/nm17710082/?_ssoLoop=1&newac=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IMDB
                </a>
              </p>

              {/* <p>
                IMDB
                <br />
                GitHub
                <br />
                CV
                <br />
                Contact
              </p> */}
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}

export default AboutPage;