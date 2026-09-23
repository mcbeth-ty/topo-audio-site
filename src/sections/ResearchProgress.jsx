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
            <h3>current status</h3>

            <ul className="research-checklist">

            <li>Parametric harmonic stimulus generation with linked audio, MIDI, and metadata</li>

            <li>Multiple Audio Canvas perceptual-interface prototypes</li>

            <li>Topology Explorer analysis and auditioning environment</li>

            <li>Initial exploratory multidimensional-scaling, clustering, and representational-analysis workflows</li>

            <li>End-to-end movement from generated material to listener input and computational representation</li>

            </ul>

            <h3>current research priorities</h3>

            <ul className="research-progress-list">

            <li>Systematic participant studies and within-listener reliability</li>

            <li>Cross-method and individual-differences analysis</li>

            <li>Relationships between perceptual organization and musical, acoustic, and experiential descriptors</li>

            <li>Comparison across musical materials and temporal scales</li>

            <li>Prospective topology-guided stimulus selection and musical operation</li>

            </ul>

            <p className="body-highlight">The software pipeline is operational; the central empirical claims remain to be established through systematic listener research.</p>
          </FadeIn>

          <FadeIn className="research-future body-copy">
            <h3>future directions</h3>

            <p className="research-lead">Topo.audio is intended as an extensible research framework rather than a fixed experiment or a universal model of musical experience.</p>

            <p>The immediate scientific priority is to establish reliable and interpretable relational organization in controlled musical domains. From that foundation, the framework can compare different listeners, task formulations, harmonic vocabularies, acoustic realizations, and temporal scales.</p>

            <p>Future work could investigate richer harmonic languages, alternative tuning systems, different registers and timbres, melodic-harmonic gestures, longer phrases, or different listener populations. It could also ask whether representations remain stable when context changes, whether multiple tasks recover related organization, and whether individual topologies can be meaningfully compared without erasing their differences.</p>

            <p className="body-highlight">Expansion is not assumed to preserve the same structure. A topology recovered in one domain does not automatically generalize to another; each extension creates a new empirical question about what persists, what changes, and what must be represented differently.</p>

            <p>More broadly, topo.audio asks whether musical experience can be studied as a family of relational landscapes: structures that can be measured empirically, compared computationally, heard directly, and used creatively.</p>
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