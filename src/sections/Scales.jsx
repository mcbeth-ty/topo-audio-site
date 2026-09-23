import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function Scales() {
  return (
    <section id="scales">
      <PageContainer>
        <SectionGrid>

          <FadeIn className="scales-copy body-copy">
            <SectionTitle>
              from
              <br />
              moments
              <br />
              to landscapes
            </SectionTitle>

            <p className="research-lead">Music exists across many scales. A single harmonic change can produce a brief sense of arrival, resistance, brightening, instability, or release. Longer sequences can create qualities that cannot be located in any isolated event.</p>

            <p>Topo.audio begins with short harmonic samples because they can be generated systematically, compared repeatedly, and connected to precise structural descriptions. These small events provide controlled observations of local perceptual movement.</p>

            <p>The objective, however, is not to reduce musical experience to fragments. Longer phrases and melodic-harmonic gestures may possess relational organizations of their own. A representation measured at one scale can be compared with independently measured organization at another to ask what persists, what is reweighted by context, what deforms, and what emerges only at larger scales.</p>

            <p>The long-term aim is therefore not one map but a family of related landscapes operating at different resolutions. Short-scale topologies may reveal local perceptual relationships, while larger-scale topologies may show how those relationships participate in musical trajectories and wholes.</p>

            <blockquote className="pull-quote">THE QUESTION IS NOT WHICH SCALE IS CORRECT, BUT WHAT EACH SCALE MAKES VISIBLE.</blockquote>
          </FadeIn>

          <FadeIn className="scales-figure">
            <LightboxImage
              src="/diagrams/scales-diagram.webp"
              alt="Short and long scale topologies"
              className="scales-diagram"
            />
          </FadeIn>

        </SectionGrid>

        <NextSectionLink
          href="#collecting-perceptions"
          label="COLLECTING PERCEPTIONS"
        />
      </PageContainer>
    </section>
  );
}

export default Scales;