import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import NextSectionLink from "../components/NextSectionLink";

function HarmonyGenerator() {
  return (
    <section id="harmonic-sequence-generator" className="prototype-section">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="prototype-header">
            <img
              src="/diagrams/tools-1.svg"
              alt=""
              className="prototype-tools-icon"
            />              
            <div className="prototype-kicker">interactive prototype / 01</div>
            <h1>harmonic sequence generator</h1>
          </FadeIn>

          <FadeIn className="prototype-copy body-copy">
            <p>
              Below is a demo of the Harmonic Sequence Generator, the tool used to
              create musical stimuli for perceptual trials in Audio Canvas. The generator
              produces collections of short harmonic samples together with their
              underlying harmonic metadata.
            </p>

            <p>
              Use the controls in the left sidebar to shape the generated dataset.
              Parameters such as scale-degree distributions, inversions, chord types,
              register, and harmonic event count can be weighted to produce different
              kinds of musical material. The default settings provide a loose
              approximation of common Western tonal practice.
            </p>

            <p>
              Press Generate to create a new sample set. Each sample is presented
              alongside an audio preview and a description of its harmonic structure.
              Every sample’s properties remain fully described and can later be related
              back to perceptual structures that emerge within the topology.
            </p>

          </FadeIn>

          <FadeIn className="prototype-embed">
            <div className="prototype-placeholder prototype-placeholder--desktop">
              <span>embedded harmonic sequence generator</span>
            </div>

            <div className="prototype-mobile-fallback">
              <p>
                This interactive prototype is designed for larger screens.
                Please view on Desktop.
              </p>

            
            </div>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#audio-canvas" label="AUDIO CANVAS" />
      </PageContainer>
    </section>
  );
}

export default HarmonyGenerator;