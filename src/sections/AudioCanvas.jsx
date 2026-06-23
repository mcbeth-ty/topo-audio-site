import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import NextSectionLink from "../components/NextSectionLink";

function AudioCanvas() {
  return (
    <section id="audio-canvas" className="prototype-section">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="prototype-header">
            <img
              src="/diagrams/tools-2.svg"
              alt=""
              className="prototype-tools-icon"
            />            
            <div className="prototype-kicker">interactive prototype / 02</div>
            <h1>audio canvas</h1>
          </FadeIn>

          <FadeIn className="prototype-copy body-copy">
            <p>
              Audio Canvas is the primary perceptual mapping tool
              used in topo.audio. This version uses the Vector_v1 methodology, where
              harmonic samples are articulated as directional movements within a
              space defined by stability and brightness.
            </p>

            <p>
              Click a vector to hear its associated sample. Drag vectors to reposition
              them according to how they feel relative to one another. Direction
              represents the perceived character of the movement, while length
              represents its intensity. As vectors are adjusted, a helper in the lower-right
              corner provides a textual interpretation of the current placement.
            </p>

            <p>
              There are no correct answers. The objective is simply to organize the
              samples into a perceptual landscape that feels internally consistent.
              These spatial relationships become the foundation from which topological
              models are constructed.
            </p>

          </FadeIn>

          <FadeIn className="prototype-embed">
            <div className="prototype-placeholder prototype-placeholder--desktop">
              <span>embedded audio canvas demo</span>
            </div>

            <div className="prototype-mobile-fallback">
              <p>
                This interactive prototype is designed for larger screens.
                Please view on Desktop.
              </p>

            
            </div>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#topology-explorer" label="TOPOLOGY EXPLORER" />
      </PageContainer>
    </section>
  );
}

export default AudioCanvas;