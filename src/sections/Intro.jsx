import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";

function Intro() {
  return (
    <section id="intro">
      <PageContainer>
        <SectionGrid>
          <div className="intro-copy">

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
          </div>

          <div className="intro-figure">
            <div className="placeholder-figure">
              intro diagram
            </div>
          </div>
        </SectionGrid>
      </PageContainer>
    </section>
  );
}

export default Intro;