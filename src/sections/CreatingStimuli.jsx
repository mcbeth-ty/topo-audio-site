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

            <h3>how do we connect experience with musical structure?</h3>

            <p className="research-lead">A listener-derived representation can be interpreted only if every sound remains connected to a documented musical event.</p>

            <p>The Harmonic Sequence Generator creates controlled sonorities, transitions, and sequences while preserving the structural description of every sample. Depending on the study, parameters may include chord or pitch-class content, tonal position, inversion, voicing, register, common tones, voice leading, duration, sequence structure, and calculated acoustic properties.</p>

            <p>Rather than relying primarily on finished recordings, computational generation makes it possible to vary selected musical properties while standardizing unrelated aspects of presentation. Audio, MIDI or symbolic representations, and metadata remain linked throughout listening, analysis, and later musical operation.</p>

            <p>Individual studies use principled subsets of the larger candidate space rather than attempting exhaustive coverage. Sampling can be guided by structural coverage, redundancy, discriminability, theoretical contrasts, and the specific questions being tested.</p>

            <p className="body-highlight">The generator is not only a stimulus factory. As relationships emerge, their musical characteristics can define new contrasts, target unexplored regions, or produce candidate material for subsequent listening and composition.</p>
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