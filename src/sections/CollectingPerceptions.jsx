import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

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
              The central experimental challenge is turning subjective musical
              experience into data without immediately reducing it to fixed
              language. Topo.audio addresses this through a growing family of
              listening instruments called Audio Canvas.
            </p>

            <blockquote className="pull-quote">
              Rather than asking only what emotion a sample represents, these
              interfaces ask listeners to articulate how harmonic experiences
              relate.
            </blockquote>

            <p>
              Different tools capture different aspects of the landscape. Spatial
              arrangement measures proximity and grouping. Pairwise or adaptive
              comparisons improve local resolution. Line and vector methods
              represent perceived direction, magnitude, arrival, destabilization,
              brightness, valence, tension, or other candidate qualities.
            </p>

            <p>
              These methods do not all serve the same purpose. Some are designed
              for discovery; others test explicit hypotheses. Their overlap allows
              the project to ask whether a structure survives changes in wording,
              interface, and task.
            </p>

            <p>
              <span className="body-highlight">
                Audio Canvas is therefore not one experiment. It is an evolving set
                of perceptual instruments through which multiple views of harmonic
                experience can be collected and compared.
              </span>
            </p>
          </FadeIn>

          <FadeIn className="collecting-figures">
            <figure>
              <LightboxImage
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
              <LightboxImage
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