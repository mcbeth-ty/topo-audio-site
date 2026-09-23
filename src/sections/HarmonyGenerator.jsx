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
            <p className="research-lead">The Harmonic Sequence Generator creates and documents controlled musical material while keeping every sound linked to its structural description.</p>

            <p>The current prototype can vary scale, chord type, inversion, register, voicing, duration, and sequence structure while exporting audio, MIDI, and metadata. Different studies can constrain this broader environment to the domain required by their research question.</p>

            <p>Calculated musical and acoustic descriptors support inspection, sampling, and later interpretation. The same records remain available when material is auditioned, judged by listeners, represented computationally, or selected again for a new experiment or musical operation.</p>

            <p className="body-highlight">The interface shown here is a development prototype. Its available controls demonstrate the larger stimulus-generation environment and should not be read as the fixed design of every topo.audio study.</p>
          </FadeIn>

          <FadeIn className="prototype-embed">
            <div className="prototype-iframe-wrap prototype-iframe-wrap--desktop">
              <iframe
                src="https://harmonic-sequence-demo.streamlit.app/?embed=true"
                title="Harmonic Sequence Generator Demo"
                className="prototype-iframe"
                loading="lazy"
              />

              <div className="prototype-launch-footer">
                <span>Live prototype hosted on Streamlit Cloud.</span>
                <span>
                  If the app is asleep,{" "}
                  <a
                    href="https://harmonic-sequence-demo.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    open in new tab
                  </a>
                  and refresh. The app should reload in about 15-20 seconds.
                </span>
              </div>
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