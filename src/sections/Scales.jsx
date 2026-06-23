import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function Scales() {
  return (
    <section id="scales">
      <PageContainer>
        <SectionGrid>

          <FadeIn className="scales-copy body-copy">
            <SectionTitle>
              from
              <br />
              moments
              <br />
              to landscapes
            </SectionTitle>

            <p>
            Music exists across many scales. A single harmonic change may evoke a
            brief sensation of tension, release, brightening, or darkening, while longer
            sequences can produce experiences such as nostalgia, anticipation,
            serenity, or transcendence. These larger responses emerge through the
            interaction of many smaller perceptual events unfolding over time.
            </p>

            <p>
            For practical reasons, topo.audio initially focuses on short harmonic
            samples. Shorter stimuli are easier to generate in large numbers, easier
            for listeners to compare, and more likely to produce perceptual
            judgements that can be articulated consistently. This provides a tractable
            starting point for investigating the structure of harmonic affect.
            </p>

            <p>
            However, the objective is not to reduce musical emotion to only brief
            experiences. Longer phrases can also be mapped directly, and they may
            reveal rich emotional landscapes that cannot be captured by short
            samples alone. 
            <blockquote className="pull-quote">
            The question is not which scale is correct, but what each
            scale allows us to observe.
            </blockquote>
            </p>

            <p>
            A topology constructed from longer phrases may reveal where particular
            emotional experiences occur, but the complexity of those regions can
            make them difficult to interpret. Shorter-scale topologies may provide
            another perspective entirely: they may expose recurring perceptual
            movements and relationships that underlie more complex experiences.
            Two long musical passages may differ substantially in their harmonic
            details, yet occupy similar regions because they share common
            perceptual trajectories.
            </p>

            <p>
            The long-term objective is therefore not a single topology, but a family of
            related topologies operating at different resolutions. Structures identified
            at one scale may help interpret structures observed at another. In this
            sense, short-scale and long-scale topologies are not competitors but
            complementary views of the same affective landscape.
            </p>

            <p>
                <span className="body-highlight">
                The goal is not only to locate emotions in musical space, but to
                understand the perceptual pathways that organize that space.
                </span>
            </p>

          </FadeIn>

          <FadeIn className="scales-figure">
            <img
              src="/diagrams/scales-diagram.webp"
              alt="Short and long scale topologies"
              className="scales-diagram"
            />
          </FadeIn>

        </SectionGrid>

        <NextSectionLink
          href="#collecting-perceptions"
          label="COLLECTING PERCEPTIONS"
        />
      </PageContainer>
    </section>
  );
}

export default Scales;