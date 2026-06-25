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
                I’m Tyler McBeth, an independent designer, composer, and
                researcher based in Tokyo, Japan.
              </p>

              <p>
                My background spans architecture, computational design, and music
                composition. I received a Bachelor of Science in Architecture
                from Texas Tech University and a Master of Engineering in
                Architecture from the University of Tokyo, where my work focused
                heavily on computation, methods, parametric systems, and the
                representation of complex relationships through geometry and
                data.
              </p>

              <p>
                Alongside my work in design and computation, I remain an active
                composer, contributing music to film and independent projects
                while maintaining an ongoing interest in how harmony gives rise
                to emotional experience.
              </p>

              <p>
                Topo.audio emerged from this intersection. It combines my
                interests in music, perception, computation, and spatial thinking
                in an attempt to investigate whether harmonic affect possesses
                latent organization that can be observed, modeled, and ultimately
                explored in new ways.
              </p>

              <p>
                This website documents the ongoing development of that
                investigation. It serves simultaneously as a research proposal,
                an open laboratory, and a growing collection of ideas,
                methodologies, and tools surrounding the study of harmonic
                affect.
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