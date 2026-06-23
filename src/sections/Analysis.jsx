// src/sections/Analysis.jsx

import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";

function Analysis() {
  return (
    <section id="analysis">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="analysis-copy body-copy">
            <SectionTitle>analysis</SectionTitle>

            <p>
              Once topological models have been constructed, they can be explored
              from multiple directions.
            </p>

            <p>
              At the perceptual level, the project investigates the structure of
              the landscape itself. Regions, clusters, boundaries, trajectories,
              and areas of agreement or disagreement may reveal recurring
              patterns in how harmonic experiences are organized.
            </p>

            <p>
              At the musical level, these structures can be connected back to the
              harmonic samples from which they emerged. Because every stimulus is
              accompanied by detailed metadata, topological regions can be
              examined in terms of interval content, scale degrees,
              voice-leading behavior, register, inversion patterns, and other
              harmonic characteristics.
            </p>

            <blockquote className="pull-quote">
              The topology functions as an intermediary between perception and
              musical structure.
            </blockquote>

            <p>
              Rather than asking whether a particular chord progression evokes a
              specific emotion, the project investigates how harmonic features
              contribute to broader perceptual relationships across the
              landscape.
            </p>

            <p>
              As the research expands across methodologies and scales, analysis
              can also focus on the relationships between topologies themselves.
              Recurring structures, trajectories, and perceptual objects may
              reveal connections that persist across different participants,
              methods, and musical contexts.
            </p>

            <p className="body-highlight">
              The long-term objective is to identify stable relationships between
              harmonic structure and affective organization, gradually revealing
              aspects of musical experience that are difficult to observe through
              listening or language alone.
            </p>
          </FadeIn>

          <FadeIn className="analysis-figure">
            <figure>
              <img
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