import SiteMenu from "../components/SiteMenu";

function ToolsPage() {
  return (
    <>
      <SiteMenu />

      <main className="tools-page">
        <div className="tools-page__inner">
          <header className="tools-page__header">
            <p className="tools-page__eyebrow">INTERACTIVE RESEARCH ENVIRONMENT</p>
            <h1>TOOLS</h1>
            <p className="tools-page__intro">
              Three linked instruments for generating harmonic material,
              collecting perceptual judgments, and constructing perceptual
              topologies.
            </p>
          </header>

          <div className="tools-page__layout">
            <nav className="tools-page__nav" aria-label="Tools navigation">
              <a href="#tool-harmonic-generator">
                <span>01</span>
                HARMONIC SEQUENCE GENERATOR
              </a>
              <a href="#tool-audio-canvas">
                <span>02</span>
                AUDIO CANVAS
              </a>
              <a href="#tool-topology-explorer">
                <span>03</span>
                TOPOLOGY EXPLORER
              </a>
            </nav>

            <div className="tools-page__content">
              <section className="tools-page__tool" id="tool-harmonic-generator">
                <div className="tools-page__tool-header">
                  <div className="tools-page__tool-index">01</div>
                  <div>
                    <h2>HARMONIC SEQUENCE GENERATOR</h2>
                    <p>
                      Generates controlled harmonic stimuli with linked audio,
                      MIDI, and structural metadata for perceptual studies.
                    </p>
                  </div>
                </div>

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
                      </a>{" "}
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
              </section>

              <section className="tools-page__tool" id="tool-audio-canvas">
                <div className="tools-page__tool-header">
                  <div className="tools-page__tool-index">02</div>
                  <div>
                    <h2>AUDIO CANVAS</h2>
                    <p>
                      Collects spatial and vector-based perceptual judgments by
                      asking listeners to articulate how harmonic experiences
                      relate.
                    </p>
                  </div>
                </div>

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
              </section>

              <section className="tools-page__tool" id="tool-topology-explorer">
                <div className="tools-page__tool-header">
                  <div className="tools-page__tool-index">03</div>
                  <div>
                    <h2>TOPOLOGY EXPLORER</h2>
                    <p>
                      Brings perceptual observations and harmonic metadata into
                      one analysis environment for filtering, embedding,
                      clustering, comparison, and listening.
                    </p>
                  </div>
                </div>

                <div className="prototype-iframe-wrap prototype-iframe-wrap--desktop">
                  <iframe
                    src="https://topo-explorer.streamlit.app/?embed=true"
                    title="Topology Explorer Demo"
                    className="prototype-iframe"
                    loading="lazy"
                  />

                  <div className="prototype-launch-footer">
                    <span>Live prototype hosted on Streamlit Cloud.</span>
                    <span>
                      If the app is asleep,{" "}
                      <a
                        href="https://topo-explorer.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        open in new tab
                      </a>{" "}
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
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ToolsPage;