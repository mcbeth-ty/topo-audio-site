import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import NextSectionLink from "../components/NextSectionLink";
import ProjectVisual from "../components/ProjectVisual";
import { projectSections } from "../data/projectSections";

const navigation = projectSections.map(({ id, title }) => ({
  id,
  label: title,
  tone: "primary",
}));

export default function ProjectPage() {
  return (
    <>
      <Sidebar items={navigation} className="sidebar--project" />
      <main className="project-page">
        {projectSections.map((section, index) => {
          const next = projectSections[index + 1];
          return (
            <section
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-title`}
              className="project-section"
            >
              <PageContainer>
                <SectionGrid>
                  <FadeIn className="project-heading">
                    <p className="project-eyebrow">{section.number}</p>
                    <div id={`${section.id}-title`}>
                      <SectionTitle as={index === 0 ? "h1" : "h2"}>
                        {section.title}
                      </SectionTitle>
                    </div>
                    <p className="project-lead">{section.lead}</p>
                  </FadeIn>
                  <FadeIn className="project-content">
                    <div className="body-copy project-copy">
                      {section.blocks.map((block) => <p key={block.text}>{block.text}</p>)}
                    </div>
                  </FadeIn>
                  <FadeIn className="project-conclusion">
                    <p className="pull-quote">{section.statement}</p>
                  </FadeIn>
                  <div className="project-visual-field">
                    <ProjectVisual index={index} />
                  </div>
                  {section.links.length > 0 && (
                    <div className="project-links">
                      {section.links.map((link) => <Link key={link.to} to={link.to}>{link.label}<span aria-hidden="true"> ↗</span></Link>)}
                    </div>
                  )}
                </SectionGrid>
                {next && <NextSectionLink href={`#${next.id}`} label={next.title} />}
              </PageContainer>
            </section>
          );
        })}
      </main>
      <Footer project />
    </>
  );
}
