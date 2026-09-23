// src/sections/Analysis.jsx

import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function Analysis() {
  return (
    <section id="analysis">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="analysis-copy body-copy">
            <SectionTitle>analysis</SectionTitle>

            <p className="research-lead">Once a topology has been constructed, analysis asks what information the representation carries, how stable it is, where it fails, and how it relates to musical structure.</p>

            <p>At the perceptual level, analysis concerns neighborhoods, distances, boundaries, possible dimensions, trajectories, and patterns of agreement or difference within and across listeners. Stability under repetition, resampling, and alternative model choices is examined before visual regions or dimensions are interpreted.</p>

            <p>At the musical and acoustic levels, the same relationships can be compared with descriptors attached to the stimuli. Representational similarity analysis and related model-comparison approaches allow candidate explanations to be tested against the relational structure. Correlated descriptors are treated cautiously so that one underlying source of variation is not presented as several independent explanations.</p>

            <p className="body-highlight">Individual representations can then be compared with one another. Recurring organization may support a shared structure; stable differences may indicate listener-specific weighting, subgroups, or multiple related topologies. Either outcome is informative.</p>

            <p>The same framework can support prospective tests. A relationship identified in existing data can define a new stimulus query, prediction, or musical selection, and new listener judgments can test whether that relationship generalizes beyond the observations from which it was discovered.</p>

            <blockquote className="pull-quote">A MAP BECOMES INTERPRETABLE ONLY AFTER THE RELATIONSHIPS BENEATH IT HAVE SHOWN SUFFICIENT STABILITY.</blockquote>
          </FadeIn>

          <FadeIn className="analysis-figure">
            <figure>
              <LightboxImage
                src="/diagrams/topo-ex-2.webp"
                alt="Topology Explorer analysis interface"
                className="analysis-image"
              />

              <figcaption className="figure-caption">
                <span className="figure-index">[1]</span>
                <span>
                  The analyses shown here are driven by perceptual relationships
                  rather than harmonic categories. Degree transitions appear as
                  one of several descriptors attached to each sample, allowing
                  perceptual structures to be related back to their underlying
                  harmonic content.
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#harmonic-sequence-generator" label="INTERACTIVE PROTOTYPES" />
      </PageContainer>
    </section>
  );
}

export default Analysis;