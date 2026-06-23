import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function Problem() {
  return (
    <section id="problem">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="problem-copy">
            <SectionTitle>
              a structure
              <br />
              we cannot
              <br />
              yet see
            </SectionTitle>

            <div className="problem-text body-copy">
            <p>
                Music has a remarkable ability to affect emotion. Across cultures and
                throughout history, humans have developed sophisticated ways of shaping
                emotional experience through sound.
            </p>

            <blockquote className="pull-quote">
            Over centuries, we formalized many aspects of music into systems of
            harmony, melody, rhythm, and form. These systems help us describe
            musical structure, but they do not fully explain why music feels the
            way it does.
            </blockquote>

            <p>
                Research in music cognition has revealed important mechanisms linking
                musical structure and emotion. Expectation, prediction, tension, surprise,
                fulfillment, and familiarity all appear to contribute to affective
                experience. At the same time, composers and listeners consistently navigate
                emotional experiences that exceed simple descriptions such as "happy" or
                "sad". This suggests that there may be a richer structure connecting
                musical events and emotional responses—one that remains difficult to
                observe directly. If such a structure exists, it may be too complex to
                understand through isolated musical features or verbal descriptions alone.
                The central question of topo.audio is whether that structure can be made
                visible.
            </p>

            <h3>the language problem</h3>

            <p>
                A second challenge arises when attempting to describe emotional experience
                itself. Most research relies on verbal labels, dimensional ratings, or
                predefined categories such as valence-arousal or GEMS. These approaches are
                useful, but they necessarily compress rich experiences into limited
                descriptive frameworks. There are countless ways music can evoke sadness,
                longing, wonder, nostalgia, unease, or transcendence. Listeners often
                recognize meaningful differences between these experiences even when
                language struggles to distinguish them. As a result, language may be better
                viewed as an interpretation of affective experience than a direct
                representation of its underlying structure.
            </p>
            </div>
          </FadeIn>

          <FadeIn className="problem-figure">
            <img
              src="/diagrams/hidden-structure.webp"
              alt="Abstract representation of hidden emotional structure"
              className="problem-diagram"
            />
          </FadeIn>
        </SectionGrid>
      </PageContainer>
      <NextSectionLink href="#hypothesis" label="HYPOTHESIS" />
    </section>
  );
}

export default Problem;