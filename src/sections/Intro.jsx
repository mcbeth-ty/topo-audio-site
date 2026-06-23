import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";

import FadeIn from "../components/FadeIn";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

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
            <LightboxImage
            src="/diagrams/intro-diagram.webp"
            alt="Conceptual relationship between harmony, perception, and emotional topology"
            className="intro-diagram"
            />
          </FadeIn>
        </SectionGrid>
      </PageContainer>
      <NextSectionLink href="#problem" label="PROBLEM" />
    </section>
  );
}

export default Intro;