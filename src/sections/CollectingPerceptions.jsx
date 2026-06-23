import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function CollectingPerceptions() {
  return (
    <section id="collecting-perceptions">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="process-steps process-steps--collecting">
            <img
              src="/diagrams/process-steps-2.svg"
              alt="Process diagram highlighting collecting perceptions"
            />
          </FadeIn>

          <FadeIn className="collecting-copy body-copy">
            <SectionTitle>
              collecting
              <br />
              perceptions
            </SectionTitle>

            <p>
              The central challenge of topo.audio is transforming subjective
              musical experience into data without immediately reducing it to
              language.
            </p>

            <p>
              To address this, the project uses a collection of spatial
              listening tools collectively referred to as Audio Canvas. 
              
               <blockquote className="pull-quote"   >
                Rather than asking participants to describe emotions directly, these
              tools ask listeners to articulate how harmonic experiences relate
              to one another through spatial judgments.
              </blockquote>
              
            </p>

            <p>
              Each method captures a different aspect of perception. Some focus
              on similarity and organization, while others capture movement,
              direction, intensity, or transitions between affective states. {" "}
              <span className="body-highlight">
              Together, they provide multiple perspectives on the same
              underlying perceptual landscape.
                </span>
            </p>

            <p>
              The simplest methods involve placing or arranging samples within a
              shared space. More advanced methods ask participants to draw
              relationships between samples. In the 2-Point Line method,
              listeners represent a harmonic event as a trajectory between two
              perceived states. In the Vector method, listeners articulate
              perceived movement along chosen perceptual dimensions such as
              brightness, stability, tension, or other qualities under
              investigation.
            </p>

            <p>
              Importantly, these methods are not intended to define emotion in
              advance. The purpose is to collect relational information that can
              later be examined collectively. A listener may struggle to explain
              a feeling verbally, yet still reliably express how one harmonic
              experience differs from another.
            </p>

            <p>
                <span className="body-highlight">   
              Audio Canvas should therefore be understood not as a single
              experiment, but as a growing family of perceptual instruments
              designed to reveal different aspects of harmonic affect. Each
              method contributes a unique perspective, while the topology
              emerges from their collective observations.
                </span>
            </p>
          </FadeIn>

          <FadeIn className="collecting-figures">
            <figure>
              <img
                src="/diagrams/line-v1.webp"
                alt="Audio Canvas line_v1 methodology"
                className="collecting-image"
              />
              <figcaption className="figure-caption">
                <span className="figure-index">[1]</span>
                <span>
                  Audio Canvas line_v1 methodology. Listeners map the relative
                  trajectories of samples on axes indicating stability &amp;
                  brightness.
                </span>
              </figcaption>
            </figure>

            <figure>
              <img
                src="/diagrams/vector-v1.webp"
                alt="Audio Canvas vector_v1 methodology"
                className="collecting-image"
              />
              <figcaption className="figure-caption">
                <span className="figure-index">[2]</span>
                <span>
                  Audio Canvas vector_v1 methodology. Listeners draw the
                  relative direction of the perceived movement.
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#creating-stimuli" label="CREATING STIMULI" />
      </PageContainer>
    </section>
  );
}

export default CollectingPerceptions;