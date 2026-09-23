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

            <p className="research-lead">Musical experience emerges from many interacting layers. Timbre, instrumentation, rhythm, melody, performance, production, memory, and cultural context all shape what is heard and felt.</p>

            <p className="body-highlight">Topo.audio begins with a more constrained question: what perceptual organization can be recovered from harmony itself?</p>

            <p>Harmony is not chosen because it is the only source of musical feeling. It is chosen because it is both experientially consequential and structurally describable. Harmonic events can be generated systematically, altered parametrically, and linked to detailed metadata while selected aspects of timbre, production, and expressive performance are held comparatively stable.</p>

            <p>Short sonorities, directed transitions, and brief sequences provide useful laboratory units because they can be repeated, compared across many examples, and related to known properties such as interval content, common tones, voice leading, register, inversion, tonal position, and acoustic characteristics. Different studies can constrain this broader domain differently depending on the question being asked.</p>

            <p>This reduction is a starting laboratory rather than a final boundary. By first recovering structure in domains that can be systematically described, the project creates a foundation for later work with richer harmonic languages, tuning systems, melodic-harmonic gestures, longer phrases, timbral variation, and larger musical forms.</p>
          </FadeIn>

          <FadeIn className="why-audio">
            <AudioExample
              src="/audio/with-texture.mp3"
              label="ORIGINAL MUSICAL CONTEXT"
            />

            <AudioExample
              src="/audio/without-texture.mp3"
              label="SIMPLIFIED HARMONIC REALIZATION"
            />

            <p className="why-caption">Intro bars of Halo Reborn by composer Martin O'Donnell — the original passage and a simplified realization of its harmonic material illustrate what changes, and what remains, when orchestration and performance context are reduced.</p>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#methodology" label="METHODOLOGY" />
      </PageContainer>
    </section>
  );
}

export default WhyHarmony;