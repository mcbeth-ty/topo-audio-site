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
            <p className="research-lead">Audio Canvas records how listeners externalize relationships among musical experiences.</p>

            <p>Current prototypes include free arrangement, line-based judgments, and vector interfaces. Depending on the task, listeners may organize samples through proximity, express a perceived direction and extent of change, or respond along selected experiential dimensions.</p>

            <p>The interfaces are treated as perceptual instruments rather than interchangeable skins. Unlabelled tasks can support discovery, while labelled dimensions can test candidate interpretations. Comparing methods can reveal which structures persist and which depend strongly on task framing.</p>

            <p>The platform records the response together with the underlying stimulus and relevant trial information so that repeatability, task effects, fatigue, and carry-over can be examined rather than inferred from a final visualization alone.</p>

            <p className="body-highlight">The live demo invites exploration of the interaction design. Its responses and provisional outputs are illustrative and are not presented as validated research findings.</p>
          </FadeIn>

          <FadeIn className="prototype-embed">
            <div className="prototype-iframe-wrap prototype-iframe-wrap--audio-canvas">
              <iframe
                src="/audio-canvas-demo/index.html"
                title="Audio Canvas Demo"
                className="prototype-iframe prototype-iframe--audio-canvas"
                loading="lazy"
              />
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