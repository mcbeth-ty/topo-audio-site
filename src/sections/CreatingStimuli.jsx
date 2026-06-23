import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function CreatingStimuli() {
  return (
    <section id="creating-stimuli">
      <PageContainer>
        <SectionGrid>

          <FadeIn className="process-steps process-steps--stimuli">
            <img
              src="/diagrams/process-steps-1.svg"
              alt="Process diagram highlighting stimuli creation"
            />
          </FadeIn>

          <FadeIn className="stimuli-copy body-copy">
            <SectionTitle>
              creating
              <br />
              the stimuli
            </SectionTitle>

            <h3>how do we transform feeling into data?</h3>

            <p>
              To uncover relationships between harmony and affect, the project
              requires a large and diverse collection of musical samples.
            </p>

    
            <blockquote className="pull-quote">
              This introduces a practical challenge. Music exists at many scales—
              from a single harmonic change to an entire symphony—and emotional
              experiences often become more complex as musical context grows.
            </blockquote>

            <p>
              Topo.audio therefore begins with the smallest meaningful units of
              harmonic experience. Early experiments focus on short harmonic events,
              sometimes as little as a single chord change. These samples are long
              enough to evoke perceptual responses, while remaining simple enough to
              compare across thousands of trials.
            </p>

            <p>
              This reduction serves two purposes. First, it allows large amounts of
              perceptual data to be collected efficiently. Second, it provides a
              controlled environment for investigating affective structure before
              introducing the additional complexity of longer musical contexts.
            </p>

            <p>
              Rather than relying on existing music, harmonic samples are generated
              computationally. This makes it possible to explore a far broader range
              of harmonic possibilities than would be practical through manual
              composition alone, while maintaining complete knowledge of the musical
              structure behind every sample.
            </p>

            <p>
              The generation process is informed by established principles of music
              theory, including tonal centers, scales, intervals, and chord
              structures. The goal is not to reproduce existing music, but to
              produce stimuli that remain recognizable as musical while
              systematically exploring harmonic space.
            </p>

            <p className="body-highlight">
              As every generated sample carries its own structural metadata, the
              project can directly relate perceptual responses to harmonic features
              without requiring a separate music-information-retrieval pipeline.
            </p>

            <p>
              As the topology develops, increasingly complex stimuli can be
              introduced. Relationships discovered at one scale may then inform
              investigations at larger scales, allowing the project to gradually
              move from isolated harmonic events toward richer forms of musical
              experience.
            </p>
          </FadeIn>

          <FadeIn className="stimuli-figure">
            <figure>
              <img
                src="/diagrams/harm-gen.webp"
                alt="Harmonic Sequence Generator interface"
                className="stimuli-image"
              />

              <figcaption className="figure-caption">
                <strong>[1]</strong> The Harmonic Sequence Generator v1. This is the
                primary stimulus creation tool used throughout topo.audio. It produces
                large datasets of short harmonic samples for perceptual listening and
                mapping experiments.

                <br /><br />

                Generation parameters can be adjusted to control properties such as
                sequence length, harmonic event count, scale degree distribution,
                chord types, inversions, register, and other structural
                characteristics. The objective is to produce musically meaningful
                diversity while avoiding both excessive repetition and complete
                randomness.

                <br /><br />

                The main interface provides a visual overview of the generated samples
                and their harmonic makeup. Each sample can be auditioned directly and
                is rendered using simple sine waves to minimize the influence of
                timbre, texture, and performance.

                <br /><br />

                All generated samples are accompanied by detailed harmonic metadata.
                Audio files, MIDI files, and metadata exports remain linked
                throughout the research pipeline, allowing perceptual observations to
                be connected directly to the harmonic structures that produced them.

                <br /><br />

                The generator is designed as an evolving research instrument. Future
                iterations will expand the harmonic vocabulary and introduce
                additional controls for modal color, interval behavior, chord
                extensions, and other structural features as new findings emerge from
                the topology.
              </figcaption>
            </figure>
          </FadeIn>

        </SectionGrid>

        <NextSectionLink
          href="#constructing-topologies"
          label="CONSTRUCTING / ANALYZING TOPOLOGY"
        />
      </PageContainer>
    </section>
  );
}

export default CreatingStimuli;