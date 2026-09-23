import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function GenerativeComposing() {
  return (
    <section id="generative-composing">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="applications-copy body-copy">
            <SectionTitle>
              topological
              <br />
              composition
            </SectionTitle>

            <p className="research-lead">One long-term ambition of topo.audio is to turn validated perceptual relationships into compositional spaces that can be heard and navigated.</p>

            <p>Instead of searching only through chord symbols, scale degrees, or functional categories, a composer could search through measured relationships: nearby alternatives, trajectories associated with particular kinds of movement, or boundaries where the organization changes sharply.</p>

            <p>Because every region remains linked to sound and musical metadata, the system can move in both directions. Existing material can be examined within a topology, while selected relationships can be used to retrieve or generate candidate musical structures for audition.</p>

            <p>This is not intended as automatic emotion generation. A perceptual region is not a formula for producing a guaranteed feeling, and many musically distinct events may occupy related neighborhoods. The value lies in making those alternatives available for listening and judgment.</p>

            <p>Topological composition is therefore conceived as creative augmentation. The system proposes connections, alternatives, and paths; the composer remains responsible for listening, selection, context, form, and meaning.</p>

            <blockquote className="pull-quote">COMPOSITION BECOMES, IN PART, THE DESIGN AND AUDITIONING OF PATHS THROUGH A PERCEPTUAL LANDSCAPE.</blockquote>
          </FadeIn>

          <FadeIn className="generative-image-wrap">
            <LightboxImage
              src="/diagrams/generative.png"
              alt="generative applications diagram"
              className="generative-image"
            />
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#ethics" label="ETHICS" />
      </PageContainer>
    </section>
  );
}

export default GenerativeComposing;