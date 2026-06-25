import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section id="about">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="about-title">
            <SectionTitle>about</SectionTitle>
          </FadeIn>

          <FadeIn className="about-image-wrap">
            <img
              src="/images/tyler-mcbeth-1.webp"
              alt="Portrait of Tyler McBeth"
              className="about-image"
            />
          </FadeIn>

          <FadeIn className="about-copy body-copy">
            <p>
              I’m Tyler McBeth, an independent designer, composer, and
              researcher based in Tokyo, Japan.
            </p>

            <p>
              My background spans architecture, computational design, and music
              composition. I received a Bachelor of Science in Architecture from
              Texas Tech University and a Master of Engineering in Architecture
              from the University of Tokyo, where my work focused heavily on
              computation, methods, parametric systems, and the representation of
              complex relationships through geometry and data.
            </p>

            <p>
              Alongside my work in design and computation, I remain an active
              composer, contributing music to film and independent projects while
              maintaining an ongoing interest in how harmony gives rise to
              emotional experience.
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
              investigation. It serves simultaneously as a research proposal, an
              open laboratory, and a growing collection of ideas, methodologies,
              and tools surrounding the study of harmonic affect.
            </p>
          </FadeIn>

          <FadeIn className="about-meta">
            <h3>TYLER MCBETH</h3>

            <p>
              Composer<br />
              Designer <br />
              
              <br />
              Japan
            </p>

            <p>
              B.S. Architecture —<br />
              Texas Tech University
              <br />
              M.Eng. Architecture —<br />
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
          </FadeIn>
        </SectionGrid>
      </PageContainer>
    </section>
  );
}

export default About;