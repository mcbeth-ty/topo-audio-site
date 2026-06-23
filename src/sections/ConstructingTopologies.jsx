// src/sections/ConstructingTopologies.jsx

import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function ConstructingTopologies() {
  return (
    <section id="constructing-topologies">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="process-steps process-steps--topology">
            <img
              src="/diagrams/process-steps-3-4.svg"
              alt="Process diagram highlighting topology construction and analysis"
            />
          </FadeIn>

          <FadeIn className="topology-copy body-copy">
            <SectionTitle>
              constructing
              <br />
              topologies
            </SectionTitle>

            <p>
              The objective of topo.audio is not to collect isolated perceptual
              measurements, but to synthesize them into larger perceptual
              structures.
            </p>

            <p>
              Every listening trial contributes information about relationships
              between harmonic samples. Spatial placements, vectors,
              trajectories, similarities, and other articulations collectively
              form a network of perceptual observations that can be examined
              computationally.
            </p>

            <p>
              Methods such as multidimensional scaling, clustering, and graph
              analysis can then be used to infer latent structures from these
              relationships.
            </p>

            <p>
              Rather than producing a single fixed topology, the system can
              construct different models from different combinations of
              participants, sample sets, methodologies, and scales.
            </p>

            <p>
              A topology built from one participant may reveal different
              structures than a topology built from many participants. Likewise,
              different methodologies may capture different aspects of harmonic
              affect.
            </p>

            <p>
              While some experiments may employ emotional labels or perceptual
              dimensions to organize responses, these are treated as
              observations rather than ground truth.
            </p>

            <p>
              As topologies emerge, labels may be refined, transformed, or
              replaced by structures revealed directly through the data.
            </p>

            <p>
              The project also assumes that perceptual structure exists across
              multiple scales. Short harmonic events, longer phrases, and larger
              musical passages may each produce their own topologies.
            </p>

            <p>
              Different methodologies may likewise produce different but related
              views of the same landscape. The long-term goal is not to force all
              data into a single representation, but to construct meaningful
              models from available observations and explore the relationships
              between them.
            </p>

            <p className="body-highlight">
              As these structures grow, regions, boundaries, trajectories, and
              clusters become available for analysis.
            </p>
          </FadeIn>

          <FadeIn className="topology-figure">
            <figure>
              <img
                src="/diagrams/topo-ex.webp"
                alt="Topo Analysis Pipeline interface"
                className="topology-image"
              />

              <figcaption className="figure-caption">
                <span className="figure-index">[1]</span>
                <span>
                  The Topo Analysis Pipeline, early version. This software is
                  being developed as a topology generation and analysis tool,
                  connecting perceptual observations with their underlying
                  harmonic data.
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#analysis" label="ANALYSIS" />
      </PageContainer>
    </section>
  );
}

export default ConstructingTopologies;