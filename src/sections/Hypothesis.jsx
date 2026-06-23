import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function Hypothesis() {
  return (
    <section id="hypothesis">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="hypothesis-title">
            <SectionTitle>hypothesis</SectionTitle>
          </FadeIn>

          <FadeIn className="hypothesis-figure">
            <img
              src="/diagrams/hypothesis-diagram.webp"
              alt="Layered topology diagram representing the hypothesis"
              className="hypothesis-diagram"
            />
          </FadeIn>

          <FadeIn className="hypothesis-copy body-copy">
            <p>
              Rather than asking listeners to describe emotions directly,
              topo.audio investigates whether affective relationships can be
              uncovered through spatial organization and perceptual comparison.
              If listeners consistently organize harmonic experiences in
              similar ways, those patterns may reveal latent structures that
              are difficult to access through language alone.
            </p>

            <p className="hypothesis-list">
              <strong>H1:</strong> Collective spatial articulations of harmonic
              stimuli contain stable structures.
              <br />
              <br />
              <strong>H2:</strong> These structures can be computationally
              reconstructed into a topology.
              <br />
              <br />
              <strong>H3:</strong> Regions of the topology correspond to
              measurable harmonic / affective characteristics.
            </p>

            <h3>connecting harmonic &amp; emotion data</h3>

            <p>
              The top layer [1] represents harmonic data, captured as short
              musical samples that isolate harmonic events.
            </p>

            <p>
              The middle layer [2] represents human perception—listeners
              spatially articulate and organize these samples according to how
              they feel.
            </p>

            <p>
              The bottom layer [3] represents the landscape of affect itself:
              rich, multidimensional, and difficult to describe directly.
            </p>

            <p>
            Topo.audio explores whether the middle layer can reveal a
            navigable relationship between harmonic structure and affective
            experience.
            </p>

            <p>
            The connections running between layers represent the musical
            structures associated with different regions of the topology.
            </p>

            <p>
            By uncovering these relationships, we can begin to navigate the
            landscape through both listening and harmonic analysis in
            parallel.
            </p>

          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#why-harmony" label="SCOPE" />
      </PageContainer>
    </section>
  );
}

export default Hypothesis;