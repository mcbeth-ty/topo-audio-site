import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function Methodology() {
  return (
    <section id="methodology">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="methodology-copy body-copy">
            <SectionTitle>
              research
              <br />
              methodology
            </SectionTitle>

            <p>
              The central methodology of topo.audio is the{" "}
              <span className="body-highlight">
                construction of musical-perceptual topologies from relational listening data.
              </span>{" "}
              Participants encounter short harmonic samples and express how those
              experiences relate through placement, grouping, comparison, vectors,
              trajectories, or other spatial articulations.
            </p>

            <p>
              The approach does not assume that spatial judgment is entirely free
              of language or task influence. Instead, multiple methods are treated
              as complementary instruments. Unconstrained arrangements can reveal
              emergent organization, while explicit dimensions such as arrival,
              stability, brightness, tension, or valence can be tested as possible
              explanations of that organization.
            </p>

            <p>
              The accumulated relations are converted into dissimilarity structures
              and explored through multidimensional scaling, clustering, graph
              models, representational similarity analysis, individual-differences
              methods, and, where justified, manifold or topological analysis.
              Because each stimulus remains connected to its harmonic description,
              perceptual regions can be queried in musical terms.
            </p>

            <p>
              The process is iterative: topologies inform new stimuli and
              experiments; new data refine or divide the topology; composition
              probes its musical consequences; and unexpected results generate new
              questions.
            </p>
          </FadeIn>

          <FadeIn className="methodology-concept">
            <LightboxImage
              src="/diagrams/methodology-concept.png"
              alt="Overview of the topo.audio methodology process"
              className="methodology-concept-diagram"
            />
          </FadeIn>

          <FadeIn className="methodology-framework">
            <LightboxImage
              src="/diagrams/methodology-diagram.webp"
              alt="Topo.audio research framework"
              className="methodology-framework-diagram"
            />
          </FadeIn>

          <FadeIn className="methodology-right body-copy">
            <SectionTitle>
              constructing
              <br />
              perceptual
              <br />
              topologies
            </SectionTitle>

            <p>
              Every listener interaction contributes a small observation about
              musical experience. Some trials describe a stimulus directly. Others
              describe relations between stimuli: resemblance, contrast, direction,
              grouping, intensity, or transformation.
            </p>

            <blockquote className="pull-quote">
              Individually, these observations are partial. Collectively, they form
              a network whose structure may contain more information than any single
              rating.
            </blockquote>

            <p>
              Computational methods can reconstruct the latent organization implied
              by that network without requiring the dimensions of the final space
              to be fixed in advance.
            </p>

            <p>
              Topo.audio does not assume that there will be one definitive
              topology. A single listener may produce a detailed personal
              landscape. Aggregated data may reveal stable overlaps shared by many
              listeners. Subgroups based on musical background, cultural exposure,
              task, or stimulus type may produce related but differently weighted
              spaces.
            </p>

            <p>
              The objective is therefore to construct and compare a family of
              topologies: individual and collective, local and large-scale, free and
              dimension-guided. Their agreements and disagreements are part of the
              result.
            </p>

            <p>
              Every point remains attached to harmonic data, allowing the topology
              to be read from the opposite direction. Regions, boundaries, and
              trajectories can be examined through interval content, tonal function,
              common-tone retention, voice leading, register, inversion, expectancy,
              and other structural properties.
            </p>

            <p>
              <span className="body-highlight">
                Perception constructs the landscape. Musical analysis and direct
                listening explain and activate it.
              </span>
            </p>

          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#scales" label="SCALES" />
      </PageContainer>
    </section>
  );
}

export default Methodology;