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

            <p>
              Music exists across many scales. A single harmonic change can produce
              a brief sense of arrival, resistance, brightening, instability, or
              release. Longer sequences can create nostalgia, anticipation,
              serenity, transformation, or experiences that cannot be located in
              any isolated event.
            </p>

            <p>
              Topo.audio begins with short harmonic samples because they can be
              generated systematically, compared repeatedly, and connected to
              precise structural descriptions. These small events provide
              high-resolution observations of local perceptual movement.
            </p>

            <p>
              The objective, however, is not to reduce musical experience to
              fragments. Longer phrases and melodic-harmonic gestures may possess
              topologies of their own.
            </p>

            <p>
              The central question is how the spaces relate: which local structures
              persist, which are reweighted by context, which are deformed, and
              which new qualities emerge only at larger scales.
            </p>

            <p>
              The long-term aim is therefore not one map but a family of related
              landscapes operating at different resolutions. Short-scale topologies
              may reveal the perceptual movements from which larger forms are
              assembled, while larger-scale topologies may show how those movements
              become musical trajectories and wholes.
            </p>

            <blockquote className="pull-quote">
              The question is not which scale is correct, but what each scale makes
              visible.
            </blockquote>

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