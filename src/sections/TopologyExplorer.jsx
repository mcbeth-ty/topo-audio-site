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
            <p className="research-lead">Topology Explorer connects listener observations, relational models, sound, and musical description within one analysis and auditioning environment.</p>

            <p>The platform can filter participants, tasks, datasets, and sessions; inspect repeated observations; construct listener-level relational structures; compare dimensional summaries; identify clusters or latent patterns; and trace any region back to the sounds and descriptors associated with it.</p>

            <p>Its importance is not only visual. Direct auditioning allows an apparent computational pattern to be checked against the sounds it claims to organize. Different participant configurations, methods, and musical scales can be compared without separating the representation from the observations that produced it.</p>

            <p className="body-highlight">The scientific representation is not identical to the interface. A plotted configuration may simplify higher-dimensional relationships, and a cluster may change under resampling or alternative parameters. Topology Explorer therefore aims to expose distortion, stability, uncertainty, and source observations rather than presenting every projection as a discovered musical geography.</p>

            <p>The current demo uses a small provisional dataset intended to demonstrate the analysis environment rather than establish substantive perceptual findings. As validated relationships emerge, the same environment can support prospective queries, musical selections, and new listener tests.</p>
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