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

            <p>
              Topo.audio is not intended to accumulate disconnected ratings. Its
              purpose is to synthesize perceptual observations into larger
              relational structures.
            </p>

            <p>
              Placements, similarities, vectors, trajectories, and contextual
              comparisons are converted into individual and collective
              representational models. Multidimensional scaling may produce
              interpretable maps; clustering and graphs can reveal regions and
              connectivity; individual-differences methods can distinguish shared
              structure from participant-specific weighting; nonlinear methods may
              reveal local continuity that a flat projection cannot preserve.
            </p>

            <p>
              Different combinations of people, methods, stimuli, and scales can
              generate different topologies. A topology built from one participant
              is not simply an inferior version of a group average, and a collective
              space is not assumed to erase meaningful variation. The project asks
              how these configurations overlap, diverge, and transform one another.
            </p>

            <p className="body-highlight">
              Emotion labels and explicit perceptual dimensions may help interpret
              the resulting structures, but they do not define them in advance.
              The objective is to allow the relational organization to emerge
              first, then test which musical and affective descriptions explain it.
            </p>
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