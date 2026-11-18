import Sidebar from "../components/Sidebar";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";

export default function MusicalAffectPage() {
  return (
    <>
      <Sidebar items={[]} className="sidebar--project" />
      <main className="project-page">
        <section id="musical-affect" className="project-section">
          <PageContainer>
            <SectionGrid>
              <FadeIn className="project-heading">
                <p className="project-eyebrow">PROJECT 02</p>
                <SectionTitle>02 / Relational Structures of Musical Affect</SectionTitle>
                <p className="project-lead">Perceived musical emotion, emotional differentiation, and navigable listening.</p>
              </FadeIn>
            </SectionGrid>
          </PageContainer>
        </section>
      </main>
    </>
  );
}
