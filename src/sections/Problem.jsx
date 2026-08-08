import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function Problem() {
  return (
    <section id="problem">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="problem-copy">
            <SectionTitle>
              a structure
              <br />
              we cannot
              <br />
              yet see
            </SectionTitle>

            <div className="problem-text body-copy">
              <p>
                Music has a remarkable ability to shape emotion. Across cultures and
                throughout history, people have developed sophisticated ways of creating
                tension, release, intimacy, wonder, unease, power, and transformation
                through sound.
              </p>

              <blockquote className="pull-quote">
                Over centuries, many aspects of music were formalized into systems of
                harmony, melody, rhythm, and form. These systems describe musical
                organization with extraordinary precision, but they do not fully explain
                why structures feel the way they do—or why formally different passages can
                inhabit similar regions of experience.
              </blockquote>

              <p>
                Music-cognition research has revealed important mechanisms connecting
                structure and affect. Expectation, prediction, tonal hierarchy, tension,
                surprise, familiarity, gesture, and performance all contribute. Other
                studies have shown that listeners’ relational judgments can recover latent
                tonal and emotional spaces. Yet these traditions are rarely assembled into
                a single, navigable framework that connects measured perception directly
                back to the musical structures from which it emerged.
              </p>

              <p>
                Topo.audio begins from the possibility that musical experience has a
                relational architecture: neighborhoods, directions, continuities,
                separations, and trajectories that cannot be observed from isolated
                features or verbal descriptions alone. Its central question is how that
                architecture can be reconstructed, compared, and made musically usable.
              </p>

              <h3>the language problem</h3>

              <p>
                A second challenge appears when emotional experience must be described.
                Most studies rely on verbal labels, rating scales, or predefined dimensions
                such as valence and arousal. These approaches are valuable, but they
                necessarily decide in advance which distinctions a listener is able to
                express. Musical experience often exceeds those categories. Two passages
                may both feel sad yet differ profoundly in motion, weight, openness,
                instability, distance, or direction. Listeners can recognize such
                differences even when language cannot name them precisely.
              </p>

              <p>
                Topo.audio therefore treats language as one interpretive layer rather than
                the ground truth of experience. The project asks whether listeners may
                communicate more of what they hear by articulating relationships—similarity,
                contrast, movement, clustering, and relative position—before those
                relationships are translated into words.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="problem-figure">
            <LightboxImage
              src="/diagrams/hidden-structure.webp"
              alt="Abstract representation of hidden emotional structure"
              className="problem-diagram"
            />
          </FadeIn>
        </SectionGrid>
      </PageContainer>
      <NextSectionLink href="#hypothesis" label="HYPOTHESIS" />
    </section>
  );
}

export default Problem;