import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";

import FadeIn from "../components/FadeIn";

function Intro() {
  return (
    <section id="intro">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="intro-copy">
            <SectionTitle>
              emotional
              <br />
              topology
              <br />
              in harmony
            </SectionTitle>

            <p className="intro-subtitle">
              exploring whether collective spatial organization of harmony
              can reveal the hidden structure of emotion in music
            </p>
          </FadeIn>

          <FadeIn className="intro-figure">
            <div className="placeholder-figure">
              intro diagram
            </div>
          </FadeIn>
        </SectionGrid>
      </PageContainer>
    </section>
  );
}

export default Intro;