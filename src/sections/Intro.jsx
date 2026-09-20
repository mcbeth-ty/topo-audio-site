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
              topologies
              <br />
              of harmonic
              <br />
              experience
            </SectionTitle>

            <p className="intro-subtitle">
              investigating whether relationships in how listeners experience
              music can be measured, represented computationally, and used as
              material for musical navigation and composition.
            </p>
          </FadeIn>

          <FadeIn className="intro-figure">
            <LightboxImage
              src="/diagrams/intro-diagram.webp"
              alt="Conceptual relationship between harmony, listener experience, and computational representation"
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