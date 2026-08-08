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

            <p>
              One long-term ambition of topo.audio is to turn perceptual
              topologies into compositional spaces that can be heard and
              navigated.
            </p>

            <p>
              Instead of searching only through chord symbols, scale degrees, or
              functional categories, a composer could search through measured
              relationships: neighborhoods with similar perceptual character,
              trajectories associated with particular kinds of movement, or
              boundaries where musical experience changes sharply.
            </p>

            <blockquote className="pull-quote">
              Composition becomes, in part, the design of paths through a
              perceptual landscape.
            </blockquote>

            <p>
              Because every region remains linked to harmonic metadata, the
              system can work in both directions. Existing music can be located
              and analyzed within a topology, while selected regions or
              trajectories can be used to retrieve or generate candidate harmonic
              structures.
            </p>

            <p>
              This is not intended as automatic emotion generation. A perceptual
              region is not a formula for producing a guaranteed feeling, and
              many harmonically distinct events may occupy similar neighborhoods.
              The value lies precisely in that multiplicity: the topology can
              expose alternative musical realizations that preserve aspects of a
              perceptual relationship without prescribing a single solution.
            </p>

            <p>
              In this sense, topological composition is conceived as a form of
              creative augmentation. The system proposes possibilities and makes
              hidden relationships explorable; the composer remains responsible
              for listening, selection, context, form, and meaning.
            </p>
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