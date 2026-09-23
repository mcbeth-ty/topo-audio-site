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
            <p className="research-lead">I’m Tyler McBeth, an independent designer, composer, and researcher based in Japan.</p>

            <p>My background spans architecture, computational design, and music. I studied architecture at Texas Tech University and the University of Tokyo, then worked professionally in architectural design while developing computational and parametric workflows for representing complex systems.</p>

            <p>In parallel, I have continued to work as a composer across film and independent music. Topo.audio emerged from the overlap between these practices: spatial and relational thinking from architecture, computational methods from design research, and a composer's interest in the difficult-to-describe structure of musical experience.</p>

            <p className="body-highlight">The project is currently being developed independently as an open research platform. This website documents the evolving questions, literature, methodology, experiments, software instruments, and compositional applications as they develop.</p>
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