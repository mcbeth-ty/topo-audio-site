import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

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
              To connect perception with harmony, topo.audio requires a large and
              diverse vocabulary of musical events whose structures are completely
              known.
            </p>

            <p>
              The project begins with small harmonic units—often a sonority,
              transition, or brief sequence. These are long enough to produce
              meaningful felt responses while remaining controlled enough to
              compare across many trials.
            </p>

            <p>
              Rather than relying primarily on existing recordings, stimuli are
              generated computationally. This makes it possible to vary chord type,
              scale degree, inversion, register, voicing, common tones, duration,
              sequence length, and other properties parametrically while holding
              unrelated acoustic variables stable.
            </p>

            <p>
              The generation process is informed by established principles of music
              theory, including tonal centers, scales, intervals, and chord
              structures. The goal is not to reproduce existing music, but to
              produce stimuli that remain recognizable as musical while
              systematically exploring harmonic space.
            </p>

            <p className="body-highlight">
              Every generated sample carries linked audio, MIDI or symbolic
              information, and harmonic metadata. Perceptual observations can
              therefore be connected directly to musical structure without first
              inferring that structure from a finished recording.
            </p>

            <p>
              The generator is not only a stimulus factory. It is one end of a
              research loop. As regions and trajectories emerge in the topology,
              their harmonic characteristics can be used to target unexplored
              areas, create controlled contrasts, and generate new musical
              candidates for testing and composition.
            </p>
          </FadeIn>

          <FadeIn className="stimuli-figure">
            <figure>
              <LightboxImage
                src="/diagrams/harm-gen.webp"
                alt="Harmonic Sequence Generator interface"
                className="stimuli-image"
              />

              <figcaption className="figure-caption">
                <strong>[1]</strong> The Harmonic Sequence Generator v1, used to
                create short harmonic stimuli for topo.audio listening studies.
                Generation parameters control properties such as scale degree,
                chord type, inversion, register, and sequence length. Each sample
                can be auditioned directly and remains linked to its audio, MIDI,
                and detailed harmonic metadata throughout the research pipeline.
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