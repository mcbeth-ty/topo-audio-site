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
              <li>Parametric harmonic stimulus generation</li>
              <li>Multiple Audio Canvas perceptual methodologies</li>
              <li>Linked audio, MIDI, trial, and harmonic metadata</li>
              <li>Topology Explorer analysis environment</li>
              <li>Initial multidimensional scaling and clustering studies</li>
            </ul>

            <h3>In Progress</h3>

            <ul className="research-progress-list">
              <li>Systematic participant studies</li>
              <li>Cross-method and individual-differences analysis</li>
              <li>Multi-scale perceptual models</li>
              <li>Topology-guided stimulus generation and composition</li>
            </ul>
          </FadeIn>

          <FadeIn className="research-future body-copy">
            <h3>future directions</h3>

            <p>
              The immediate research objective is to determine which perceptual
              structures remain reliable across repeated trials, participants,
              methods, and harmonic datasets.
            </p>

            <p>
              As the evidence base grows, the project can move from exploratory
              maps toward stronger comparisons: individual versus collective
              spaces, expert versus non-expert listeners, different cultural and
              musical backgrounds, free versus dimension-guided tasks, and short
              versus longer musical scales.
            </p>

            <p>
              The musical vocabulary can expand in parallel. Richer harmonic
              languages, alternative tuning systems, melodic-harmonic gestures,
              longer phrases, and eventually timbral and formal dimensions can
              test which structures persist beyond the project's initial
              laboratory conditions.
            </p>

            <p>
              More broadly, topo.audio asks whether musical experience can be
              studied as a family of relational landscapes: structures that can
              be measured empirically, compared computationally, heard directly,
              and used creatively.
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