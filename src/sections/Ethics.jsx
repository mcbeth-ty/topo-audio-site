import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function Ethics() {
  return (
    <section id="ethics">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="ethics-copy body-copy">
            <SectionTitle>
              ethics and
              <br />
              responsible
              <br />
              development
            </SectionTitle>

            <p>
              Topo.audio investigates the relationship between harmony and
              affect, a subject that inevitably raises questions about the
              responsible use of emotionally informed technologies.
            </p>

            <p>
              The project recognizes that sufficiently detailed models of musical
              affect could eventually contribute to systems capable of producing
              highly compelling emotional experiences. Such possibilities are
              not inherently undesirable and may lead to valuable creative,
              educational, and therapeutic applications. At the same time, they
              also raise questions concerning persuasion, manipulation, and the
              responsible development of emotionally aware generative systems.
            </p>

            <p>
              The project also recognizes that perceptual datasets may
              themselves become valuable research assets. Listener responses
              represent human experiences contributed by participants and should
              be handled transparently and responsibly. 
            </p>  
            <p className="body-highlight">
              Topo.audio therefore
              emphasizes informed participation, careful stewardship of
              perceptual data, and open discussion surrounding the implications
              of affective modeling technologies.
            </p>
            

            <p>
              Ultimately, the objective of topo.audio is not to optimize
              emotional influence, but to better understand the perceptual
              structures through which musical experiences are organized.
            </p>
          </FadeIn>

          <FadeIn className="ethics-figure">
            <div className="ethics-placeholder">
              responsible development diagram
            </div>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#about" label="ABOUT" />
      </PageContainer>
    </section>
  );
}

export default Ethics;