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
                spatial articulation of harmonic experience.
                </span>{" "}
              Rather than asking listeners to describe
              emotions through language, participants interact with short
              harmonic samples and express perceived relationships between them
              spatially. Depending on the method, this may involve placing
              samples, organizing them, drawing vectors, or articulating
              movement between affective states.
            </p>

            <p>
              The underlying hypothesis is that these spatial judgments may
              reveal structures that are difficult to access through language
              alone. While listeners often struggle to precisely describe musical
              feelings, they may be far more consistent in expressing how
              experiences relate to one another. {" "}
              <span className="body-highlight">
                Across many participants and many trials, these articulations form a collective perceptual
              landscape. 
              </span>{" "}
              Computational techniques such as multidimensional
              scaling (MDS) and related methods can then be used to infer
              higher-dimensional structures from the relationships expressed
              within the data.
            </p>

            <p>
              The resulting perceptual structures can be connected directly back
              to musical features, as every stimulus is generated with known
              harmonic properties. This allows the project to investigate which
              aspects of harmonic structure are associated with particular
              regions, clusters, trajectories, and boundaries within the topology.
            </p>

            <p>
              The process is iterative. As topological structures begin to
              emerge, they can inform the design of new stimuli, new tests, and
              new analytical methods. The goal is not simply to collect
              responses, but to gradually refine a navigable model of harmonic
              affect through an ongoing dialogue between perception,
              computation, and musical structure.
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
              from
              <br />
              perception
              <br />
              to topology
            </SectionTitle>

            <p>
              Every listener interaction contributes a small piece of
              information about how a harmonic sample is perceived.
            </p>

            <p>
              Some methods capture direct observations about a stimulus itself.
              Others capture relationships between stimuli: similarity,
              contrast, movement, clustering, or relative position. Individually,
              these observations are simple. Collectively, they form a network
              of perceptual relationships.
            </p>

            <p>
                <blockquote className="pull-quote">
                    The central assumption of topo.audio is that this network contains
                    more information than any individual judgment alone.
                </blockquote>
            </p>

            <p>
              As perceptual data accumulates, computational techniques can be
              used to reconstruct the latent structure implied by these
              relationships. Methods such as multidimensional scaling (MDS) infer
              spatial arrangements from perceived similarities, allowing
              higher-dimensional structures to emerge from many local
              observations.
            </p>

            <p>
              Importantly, these dimensions are not predefined. Rather than
              deciding in advance which emotional dimensions matter, the project
              seeks to discover structure directly from listener responses. The
              resulting topology is therefore not a map of musical features, nor
              a map of language. It is a map of perceived relationships between
              harmonic experiences.
            </p>

            <p>
            Topologies may be constructed from the responses of a single listener
            or from the aggregated responses of many listeners. Individual
            topologies are expected to capture finer-grained perceptual structure,
            while collective topologies may reveal broader patterns that remain
            stable across many people. Rather than treating one as inherently more
            correct than the other, topo.audio views them as complementary scales
            of observation.
            </p>

            <p>
            One long-term objective is to understand how these scales relate to one
            another: whether collective structures emerge from stable overlaps
            between individual topologies, and how perceptual landscapes vary
            across listeners, cultures, and musical backgrounds.
            </p>

            <p>
            Because every stimulus is accompanied by detailed harmonic metadata,
            the resulting topology can then be examined from the opposite
            direction. Regions, clusters, boundaries, and trajectories may be
            related back to harmonic properties such as interval content,
            voice-leading behavior, scale degrees, register, inversion patterns,
            and other structural characteristics.
            </p>

            <p>
            In this way, the project moves in both directions simultaneously.
            Perception informs the topology, while harmonic analysis helps explain
            the structures that emerge within it.
            </p>

            <p>
                <span className="body-highlight">
                    The long-term objective is a navigable affective landscape of
                    harmony—one that can be explored through listening, analyzed through
                    computation, and ultimately used as a new way of understanding and
                    creating music.
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