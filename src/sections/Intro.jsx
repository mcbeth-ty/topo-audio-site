import { Link } from "react-router-dom";
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
            <p className="project-eyebrow">Research Framework</p>
            <SectionTitle>
              Topologies
              <br />
              of Harmonic
              <br />
              Experience
            </SectionTitle>

            <p className="intro-subtitle">Investigating whether relationships in how listeners experience music can be measured, represented computationally, and used as material for musical navigation and composition.</p>
            <p className="research-context-note">
              This page documents the research framework developed for <em>Topologies of Harmonic Experience</em>,
              the first of two related projects within topo.audio. It focuses on perceived relationships
              among harmonic changes and their potential use in computational musical systems.
              A second research direction, <em>Relational Structures of Musical Affect</em>, applies related
              methods to perceived musical emotion, emotional differentiation, and navigable listening environments.
            </p>
            <div className="project-links"><Link to="/project">← Project 01</Link></div>
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