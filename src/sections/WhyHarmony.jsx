import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import AudioExample from "../components/AudioExample";

function WhyHarmony() {
  return (
    <section id="why-harmony">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="why-copy body-copy">
            <SectionTitle>why harmony?</SectionTitle>

            <p>
              Musical affect emerges from many interacting layers. Timbre,
              instrumentation, rhythm, performance, lyrics, memory, and cultural
              context all shape how music is experienced.
            </p>

            <p>
              Topo.audio begins with a more constrained question:
            </p>

            <blockquote className="pull-quote">
              what perceptual organization can be recovered from harmony itself?
            </blockquote>

            <p>
              Harmony is not chosen because it is the only source of musical
              feeling. It is chosen because it is both experientially powerful
              and structurally describable. Harmonic events can be generated in
              large numbers, altered parametrically, and linked to complete
              metadata while timbre, production, and expressive performance
              remain controlled.
            </p>

            <p>
              This reduction is a starting laboratory rather than a final
              boundary. By first recovering structure in a domain that can be
              systematically described, the project creates a foundation for
              later movement toward longer phrases, melodic-harmonic gestures,
              richer sound, and larger musical forms.
            </p>
          </FadeIn>

          <FadeIn className="why-audio">
            <AudioExample
              src="/audio/with-texture.mp3"
              label="HARMONIC EVENT WITH TEXTURE / EXPRESSION"
            />

            <AudioExample
              src="/audio/without-texture.mp3"
              label="HARMONIC EVENT WITHOUT TEXTURE / EXPRESSION"
            />

            <p className="why-caption">
              Intro bars of Halo Reborn by composer Martin O'Donnell -

              texture and expression add something to a harmonic event, but
              something remains without it
            </p>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#methodology" label="METHODOLOGY" />
      </PageContainer>
    </section>
  );
}

export default WhyHarmony;