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
              instrumentation, performance, lyrics, personal memories, and
              cultural context all contribute to how music is experienced.
            </p>

            <p>
              Topo.audio therefore begins with a more constrained question:
              <blockquote className="pull-quote">
                What emotional structure exists within harmony itself?
              </blockquote>
            </p>

            <p>
              By focusing on harmonic relationships—pitch events stripped of
              lyrics, instrumentation, and expressive performance—we can
              investigate a layer of music that remains present regardless of
              how it is performed.
            </p>

            <p>
              Harmony is not chosen because it is the only source of musical
              emotion. It is chosen because it is one of the most structurally
              describable components of music.
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
              something remains even without it
            </p>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#methodology" label="METHODOLOGY" />
      </PageContainer>
    </section>
  );
}

export default WhyHarmony;