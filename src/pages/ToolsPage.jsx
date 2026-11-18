import { useSyncExternalStore } from "react";
import SiteMenu from "../components/SiteMenu";

const desktopQuery = "(min-width: 1281px)";
const subscribeDesktop = callback => {
  const query = window.matchMedia(desktopQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

function DesktopAtlas({ children }) {
  const desktop = useSyncExternalStore(subscribeDesktop,
    () => window.matchMedia(desktopQuery).matches, () => false);
  return desktop ? children : (
    <div className="prototype-mobile-fallback">
      <p>This interactive prototype is designed for larger screens. Please view on Desktop.</p>
    </div>
  );
}

function ToolFrame({ children }) {
  return (
    <div className="tool-embed-frame">
      {children}
      <svg className="tool-embed-frame__overlay" aria-hidden="true" focusable="false">
        <rect className="tool-embed-frame__mask" width="100%" height="100%" />
        <rect className="tool-embed-frame__line" width="100%" height="100%" />
      </svg>
    </div>
  );
}

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
              Interactive instruments for generating harmonic material,
              collecting perceptual judgments, and constructing perceptual
              topologies.
            </p>
          </header>

          <div className="tools-page__layout">
            <nav className="tools-page__nav" aria-label="Tools navigation">
              <a href="#tool-affective-atlas">
                <span>01</span>
                AFFECTIVE ATLAS
              </a>
              <a href="#tool-harmonic-generator">
                <span>02</span>
                HARMONIC SEQUENCE GENERATOR
              </a>
              <a href="#tool-audio-canvas">
                <span>03</span>
                AUDIO CANVAS
              </a>
              <a href="#tool-topology-explorer">
                <span>04</span>
                TOPOLOGY EXPLORER
              </a>
            </nav>

            <div className="tools-page__content">
              <section className="tools-page__tool tools-page__tool--atlas" id="tool-affective-atlas">
                <div className="tools-page__tool-header">
                  <div className="tools-page__tool-index">01</div>
                  <div>
                    <h2>Affective Atlas</h2>
                    <p>
                      Affective Atlas explores relationships between musical sounds
                      and the emotions they evoke. Listening judgments become
                      interactive spatial models organized by perceived relationships
                      rather than conventional musical categories. Navigate these
                      sound landscapes, discover gradual paths between experiences,
                      and experiment with relational arrangement and harmonic generation.
                    </p>
                  </div>
                </div>
                <DesktopAtlas>
                <div className="prototype-iframe-wrap prototype-iframe-wrap--atlas">
                  <ToolFrame>
                  <iframe
                    src="https://affective-atlas.streamlit.app/?embed=true"
                    title="Affective Atlas interactive demo"
                    className="prototype-iframe prototype-iframe--atlas"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                  </ToolFrame>
                  <div className="prototype-launch-footer">
                    <span>Scroll inside the demo to explore Models, Arrange, and Generator.</span>
                    <a href="https://affective-atlas.streamlit.app/" target="_blank" rel="noopener noreferrer">
                      Open in new tab ↗
                    </a>
                  </div>
                </div>
                </DesktopAtlas>
              </section>
              <section className="tools-page__tool" id="tool-harmonic-generator">
                <div className="tools-page__tool-header">
                  <div className="tools-page__tool-index">02</div>
                  <div>
                    <h2>HARMONIC SEQUENCE GENERATOR</h2>
                    <p>
                      Generates controlled harmonic stimuli with linked audio,
                      MIDI, and structural metadata for perceptual studies.
                    </p>
                  </div>
                </div>

                <div className="prototype-iframe-wrap prototype-iframe-wrap--desktop">
                  <ToolFrame>
                  <iframe
                    src="https://harmonic-sequence-demo.streamlit.app/?embed=true"
                    title="Harmonic Sequence Generator Demo"
                    className="prototype-iframe"
                    loading="lazy"
                  />
                  </ToolFrame>

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
                  <div className="tools-page__tool-index">03</div>
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
                  <ToolFrame>
                  <iframe
                    src="/audio-canvas-demo/index.html"
                    title="Audio Canvas Demo"
                    className="prototype-iframe prototype-iframe--audio-canvas"
                    loading="lazy"
                  />
                  </ToolFrame>
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
                  <div className="tools-page__tool-index">04</div>
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
                  <ToolFrame>
                  <iframe
                    src="https://topo-explorer.streamlit.app/?embed=true"
                    title="Topology Explorer Demo"
                    className="prototype-iframe"
                    loading="lazy"
                  />
                  </ToolFrame>

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