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
              This prototype creates the musical samples used in topo.audio
              listening studies. Use the controls to shape the harmonic dataset,
              then press “generate” to audition a collection of events with linked
              structural descriptions.
            </p>

            <p>
              The interface is designed to balance controlled variation with
              musical coherence. Instead of generating either repeated textbook
              progressions or unrestricted randomness, it allows distributions of
              scale degrees, chord types, inversions, registers, and event counts
              to be weighted parametrically.
            </p>

            <p>
              Every exported sample remains connected to its audio, MIDI, and
              metadata. This linkage is essential: it allows regions discovered
              through perception to be queried later for the harmonic structures
              they contain.
            </p>

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