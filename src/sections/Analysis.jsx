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

            <p>
              Once a topology has been constructed, it can be examined from
              several directions.
            </p>

            <p>
              At the perceptual level, analysis concerns the shape of the
              landscape itself: neighborhoods, clusters, boundaries, continuities,
              trajectories, latent dimensions, and areas of agreement or
              disagreement among listeners.
            </p>

            <p>
              At the musical level, these structures are traced back to the sounds
              and metadata from which they emerged. A region may contain recurring
              interval structures, voice-leading patterns, degrees of tonal
              stability, registers, inversions, or transition types. A trajectory
              may correspond to systematic changes in arrival, tension, brightness,
              common tones, or expectation.
            </p>

            <blockquote className="pull-quote">
              The topology therefore operates as an intermediary representation
              between measured experience and harmonic structure.
            </blockquote>

            <p>
              Rather than testing one chord against one emotion label, the project
              asks how musical properties organize relationships across an entire
              landscape.
            </p>

            <p>
              As datasets expand, the Topology Explorer can also compare topologies
              with one another—across participants, experiments, methods, and
              musical scales—to identify structures that recur, deform, or
              disappear.
            </p>

            <p className="body-highlight">
              The objective is to identify stable relationships between harmonic
              structure and affective organization, gradually revealing aspects of
              musical experience that are difficult to observe through listening or
              language alone.
            </p>
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