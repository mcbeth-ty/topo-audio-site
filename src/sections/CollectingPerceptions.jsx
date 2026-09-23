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

            <p className="research-lead">The central experimental challenge is turning subjective musical experience into data without fixing its meaning too early.</p>

            <p>Audio Canvas is the listening environment of topo.audio. Its prototypes span different levels of constraint. Free arrangement allows listeners to organize sounds through proximity and grouping. Directional interfaces allow a heard change to be expressed as movement. Line and labelled-vector interfaces can test whether selected descriptors such as stability, brightness, arrival, tension, or valence help explain part of an emerging organization.</p>

            <p>These interfaces are not treated as equivalent versions of one final method. Some support discovery; others test explicit interpretations. Comparing methods can reveal which structures persist and which depend strongly on wording, interface, or task.</p>

            <p>Repeated judgments make it possible to estimate within-listener stability and to identify trials, stimuli, or task formulations that do not support reliable interpretation. Randomization, counterbalancing, breaks, and session design are adjusted to the demands of each study rather than fixed across the entire platform.</p>

            <p className="body-highlight">Audio Canvas is therefore an evolving family of perceptual instruments. Existing interfaces demonstrate possible ways of collecting relational judgments; they are not themselves evidence that a stable topology has been established.</p>
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