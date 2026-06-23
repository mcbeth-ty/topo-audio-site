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
              Topology Explorer is the analysis environment of topo.audio. Its role is to
              aggregate perceptual data collected through Audio Canvas and
              synthesize it into navigable topologies. By filtering and combining
              different participants, methodologies, and stimulus datasets, the software
              allows topologies to be constructed from many possible perspectives.
            </p>

            <p>
              The current version focuses on exploratory analysis and early topology
              construction. It provides tools for inspecting trajectories, identifying
              regions, latent axes, and clusters, and tracing perceptual structures back to the
              harmonic samples and metadata that generated them. Development is
              ongoing, with future versions expanding toward higher-dimensional
              topology construction, cross-method synthesis, and interactive models
              that can be explored directly through listening.
            </p>

            <p>
              This demo includes approximately fifty sample sets generated using the
              Line_v1 methodology. At this scale, the interface already begins to reveal
              recurring structures and regions of agreement. As the dataset grows to
              hundreds or thousands of observations, more sophisticated forms of
              analysis—including dynamic clustering, topology comparison, and
              cross-scale synthesis—become increasingly meaningful.
            </p>

          </FadeIn>

          <FadeIn className="prototype-embed">
            <div className="prototype-placeholder prototype-placeholder--desktop">
              <span>embedded topology explorer demo</span>
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