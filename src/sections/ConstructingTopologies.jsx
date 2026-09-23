// src/sections/ConstructingTopologies.jsx

import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

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

            <p className="research-lead">Topo.audio is not intended to accumulate disconnected ratings. Its purpose is to synthesize perceptual observations into larger relational structures.</p>

            <p>Placements, similarities, vectors, trajectories, and contextual comparisons can be converted into listener-level dissimilarity structures, graphs, or other representational models. Multidimensional scaling may provide an interpretable spatial summary; clustering can reveal candidate regions and connectivity; individual-differences methods can distinguish recurring organization from participant-specific weighting; nonlinear methods may be useful where local continuity is poorly preserved by a flat projection.</p>

            <p className="body-highlight">The representation is not assumed to be literally two-dimensional. Dimensionality and distortion must be evaluated, and a visually useful projection can remain only one view of a richer relational structure.</p>

            <p>Different combinations of people, methods, stimuli, and scales may generate different topologies. A topology built from one participant is not simply an inferior version of a group average, and a collective space is not assumed to erase meaningful variation. The project asks how these configurations overlap, diverge, and transform one another.</p>

            <p>Emotion labels and explicit perceptual dimensions may help interpret the resulting structures, but they do not define them in advance. The relational organization emerges first; candidate musical and experiential descriptions are then tested against it.</p>
          </FadeIn>

          <FadeIn className="topology-figure">
            <figure>
              <LightboxImage
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


      </PageContainer>
    </section>
  );
}

export default ConstructingTopologies;