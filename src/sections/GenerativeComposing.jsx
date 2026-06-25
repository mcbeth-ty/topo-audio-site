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
              One long-term ambition of topo.audio is to transform topologies of
              harmonic affect into navigable compositional spaces.
            </p>

            <p>
              Rather than composing exclusively through symbolic systems such as
              chord labels, scale degrees, or functional harmony, it may become
              possible to explore musical affect directly through perceptual
              landscapes.
            </p>

            <p>
              A topology can be understood as a map whose regions, boundaries,
              trajectories, and neighborhoods correspond to different kinds of
              musical experience. Listening within these landscapes may reveal
              areas associated with particular qualities of affect, as well as
              pathways that connect them.
            </p>

            <blockquote className="pull-quote"   >
              Composition could therefore become, in part, an act of
              navigating and shaping movement through these perceptual terrains.  
            </blockquote>  

            <p>
              Importantly, the objective is not to identify a single harmonic
              recipe for a feeling. The same affective region may contain many
              distinct harmonic realizations that nevertheless share common
              perceptual characteristics. This raises the possibility of generating 
              harmonic structures directly from regions of the topology, producing 
              multiple musical solutions that preserve aspects of an intended emotional experience.
            </p>

            <p>
              Such systems could provide new forms of creative augmentation. A
              composer might search for alternative harmonic pathways that inhabit a
              similar affective space, explore transitions between emotional regions, or
              investigate perceptual territories that are difficult to describe through
              conventional music theory. In this sense, the topology becomes not only an
              analytical representation of harmonic affect, but also a medium for
              listening, exploration, and composition.
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