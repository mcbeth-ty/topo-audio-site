import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function Methodology() {
  return (
    <section id="methodology">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="methodology-copy body-copy">
            <SectionTitle>
              research
              <br />
              methodology
            </SectionTitle>

            <p className="research-lead">The central methodology of topo.audio is the construction and comparison of musical-perceptual topologies from relational listening data.</p>

            <p>Participants encounter controlled musical samples and express how those experiences relate through placement, grouping, comparison, vectors, trajectories, pairwise judgments, or other relational articulations. Different tasks are treated as perceptual instruments with different assumptions rather than interchangeable routes to a single ground truth.</p>

            <p>The accumulated observations are converted into relational structures such as dissimilarity matrices, graphs, or higher-dimensional configurations. Multidimensional scaling can provide a spatial summary when it preserves the measured relationships adequately; clustering, representational similarity analysis, individual-differences methods, and other models can examine complementary aspects of the same data.</p>

            <p className="body-highlight">Reliability precedes interpretation. Repeated observations are used to determine whether an individual listener's organization is stable enough to analyze. Group summaries are constructed only after listener-level structure has been examined, so disagreement is not automatically averaged away.</p>

            <p>Because every stimulus remains connected to its sound and musical description, perceptual relationships can be compared with harmonic, acoustic, and experiential descriptors without allowing those descriptors to determine the representation in advance. The process is iterative: observations inform representations; representations expose new questions; and new listening tests whether apparent relationships survive.</p>
          </FadeIn>

          <FadeIn className="methodology-concept">
            <LightboxImage
              src="/diagrams/methodology-concept.png"
              alt="Overview of the topo.audio methodology process"
              className="methodology-concept-diagram"
            />
          </FadeIn>

          <FadeIn className="methodology-framework">
            <LightboxImage
              src="/diagrams/methodology-diagram.webp"
              alt="Topo.audio research framework"
              className="methodology-framework-diagram"
            />
          </FadeIn>

          <FadeIn className="methodology-right body-copy">
            <SectionTitle>
              constructing
              <br />
              perceptual
              <br />
              topologies
            </SectionTitle>

            <p className="research-lead">Every listener interaction contributes a partial observation about how musical experiences are organized.</p>

            <p>Some observations concern proximity or similarity. Others concern grouping, direction, magnitude, contrast, or transformation. Each response is only a partial observation; accumulated across repeated judgments, these observations form the relational structure shown in the diagram, from which neighborhoods, boundaries, continuities, latent dimensions, and possible trajectories can be reconstructed.</p>

            <p>Topo.audio does not assume that there will be one definitive topology. A single listener may produce a reliable personal organization. Some relationships may recur across listeners, while others may depend on musical background, cultural exposure, task, context, stimulus realization, or the scale of the material being judged.</p>

            <p className="body-highlight">Different combinations of listeners, methods, and musical datasets can therefore produce a family of related representations. Their agreements and disagreements are part of the result rather than errors to be removed automatically.</p>

            <p>Every point or relationship remains attached to sound and metadata. Regions can therefore be auditioned and examined through interval content, voice leading, register, acoustic properties, tonal context, or other descriptors. Perception contributes organization to the representation; musical analysis helps characterize what that organization contains.</p>

            <blockquote className="pull-quote">REPEATABILITY IS ESTABLISHED WITHIN LISTENERS BEFORE COLLECTIVE STRUCTURE IS INTERPRETED.</blockquote>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#scales" label="SCALES" />
      </PageContainer>
    </section>
  );
}

export default Methodology;