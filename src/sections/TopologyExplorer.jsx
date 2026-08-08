import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import NextSectionLink from "../components/NextSectionLink";

function TopologyExplorer() {
  return (
    <section id="topology-explorer" className="prototype-section">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="prototype-header">
            <img
              src="/diagrams/tools-3.svg"
              alt=""
              className="prototype-tools-icon"
            />
            <div className="prototype-kicker">interactive prototype / 03</div>
            <h1>topology explorer</h1>
          </FadeIn>

          <FadeIn className="prototype-copy body-copy">
            <p>
              Topology Explorer is the central analysis environment of topo.audio.
              It brings together perceptual observations, listener configurations,
              stimulus datasets, and harmonic metadata so that topologies can be
              constructed and investigated fluidly rather than through disconnected
              analysis steps.
            </p>

            <p>
              The interface can filter and combine participants, methods, and
              datasets; inspect individual observations; generate distance
              structures and embeddings; identify clusters and latent axes; and
              trace any region back to the sounds and harmonic parameters
              associated with it.
            </p>

            <p>
              Its importance is not only visual. By keeping listening, spatial
              structure, and harmonic data in one environment, Topology Explorer
              supports an iterative scale of research that is difficult to achieve
              through static figures alone. A pattern can be heard, filtered,
              tested against another participant configuration, and used to define
              a new stimulus query without leaving the same pipeline.
            </p>

            <p>
              This demo includes approximately 28 observations generated using the
              Vector_v2 methodology. At this scale, the interface already begins to
              reveal some recurring structures and regions of agreement, but
              because this topology is so small, meaningful groupings are limited.
              As the dataset grows to hundreds or thousands of observations, more
              sophisticated forms of analysis—including dynamic clustering,
              topology comparison, and cross-scale synthesis—become increasingly
              meaningful.
            </p>

          </FadeIn>

          <FadeIn className="prototype-embed">
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

        <NextSectionLink href="#research-progress" label="RESEARCH PROGRESS" />
      </PageContainer>
    </section>
  );
}

export default TopologyExplorer;