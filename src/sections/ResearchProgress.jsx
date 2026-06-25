import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function ResearchProgress() {
  return (
    <section id="research-progress">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="research-title-block">
            <SectionTitle>research progress</SectionTitle>
          </FadeIn>

          <FadeIn className="research-status body-copy">
            <h3>Current Status</h3>

            <ul className="research-checklist">
              <li>Harmonic stimulus generation</li>
              <li>Perceptual mapping interfaces</li>
              <li>Data archival and metadata systems</li>
              <li>Early topology analysis tools</li>
            </ul>

            <h3>In Progress</h3>

            <ul className="research-progress-list">
              <li>Topology construction</li>
              <li>Cross-method synthesis</li>
              <li>Multi-scale perceptual models</li>
            </ul>
          </FadeIn>

          <FadeIn className="research-future body-copy">
            <h3>future directions</h3>

            <p>
              The immediate objective of topo.audio is to investigate whether
              stable topological structures of harmonic affect can be
              constructed from listener perceptions. If such structures emerge,
              they may open several avenues for future research.
            </p>

            <p>
              As datasets grow, topologies can be constructed from different
              participants, cultures, methodologies, and timescales. Comparing
              these landscapes may reveal which aspects of harmonic affect are
              broadly shared and which are shaped by personal history, cultural
              exposure, or musical background.
            </p>

            <p>
              Future development also includes expanding the range of perceptual
              methodologies and musical materials. Longer phrases, richer
              harmonic vocabularies, alternative tuning systems, and additional
              forms of articulation may reveal structures that remain
              inaccessible through short harmonic samples alone.
            </p>

            <p>
              More broadly, topo.audio asks whether complex emotional
              experiences possess latent perceptual organization that can be
              represented, explored, and studied as navigable structures.
            </p>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink
          href="#generative-composing"
          label="TOPOLOGICAL COMPOSING"
        />
      </PageContainer>
    </section>
  );
}

export default ResearchProgress;