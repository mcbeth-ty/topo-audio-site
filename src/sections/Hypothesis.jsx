import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function Hypothesis() {
  return (
    <section id="hypothesis">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="hypothesis-title">
            <SectionTitle>hypothesis</SectionTitle>
          </FadeIn>

          <FadeIn className="hypothesis-figure">
            <LightboxImage
              src="/diagrams/hypothesis-diagram.webp"
              alt="Layered topology diagram representing the hypothesis"
              className="hypothesis-diagram"
            />
          </FadeIn>

          <FadeIn className="hypothesis-copy body-copy">
            <p>
              Rather than asking listeners to define musical emotions directly,
              topo.audio investigates whether the relational organization of harmonic
              experience can be reconstructed from spatial and comparative judgments.
              Prior research has already shown that perceptual judgments can reveal tonal,
              timbral, and emotional spaces. Topo.audio builds from that foundation by
              treating topology construction as an ongoing musical research process:
              multiple participant configurations, musical scales, perceptual methods, and
              harmonic datasets can each produce different but related views of the same
              underlying landscape.
            </p>

            <p className="hypothesis-list">
              <strong>H1:</strong> Listener articulations contain reliable relational
              structure at individual and collective levels.
              <br />
              <br />
              <h3>connecting harmonic &amp; emotion data</h3>

              <p>
                The upper layer represents musical structure: short harmonic events
                generated with known intervals, scale degrees, voicings, inversions,
                registers, common tones, and transition properties.
              </p>

              <p>
                The middle layer represents measured perception. Listeners organize,
                compare, and articulate these events according to felt similarity,
                movement, character, or change.
              </p>

              <p>
                The lower layer represents the latent organization inferred from those
                relations: not a predefined map of emotion words, but a perceptual
                landscape constructed from how harmonic experiences relate.
              </p>

              <p>
                The connections between layers are bidirectional. Listener judgments
                reveal the topology; harmonic metadata helps explain its regions and
                paths. Once a stable region or trajectory is identified, the system can
                return the musical structures associated with it, allowing analysis and
                composition to move through the same space in parallel.
                whether the middle layer can reveal a navigable relationship between harmonic structure and affective experience.
              </p>


            </p>

            <p>
              The connections running between layers represent the musical
              structures associated with different regions of the topology.
            </p>

            <p>
              By uncovering these relationships, we can begin to navigate the
              landscape through both listening and harmonic analysis in
              parallel.
            </p>

          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#why-harmony" label="SCOPE" />
      </PageContainer>
    </section>
  );
}

export default Hypothesis;