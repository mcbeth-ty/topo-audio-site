import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";

function Hypothesis() {
  return (
    <section id="hypothesis">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="hypothesis-title">
            <SectionTitle>hypothesis</SectionTitle>
          </FadeIn>

          <FadeIn className="hypothesis-figure">
            <LightboxImage
              src="/diagrams/hypothesis-diagram.webp"
              alt="Layered topology diagram representing the hypothesis"
              className="hypothesis-diagram"
            />
          </FadeIn>

          <FadeIn className="hypothesis-copy body-copy">
            <p className="research-lead">Harmonic experience contains relational structure that can be measured, represented, and tested without assuming that the same structure is shared by every listener.</p>

            <p>Rather than defining musical experience through predetermined labels alone, topo.audio investigates whether relationships among experiences can be reconstructed from listener judgments. The first requirement is reliability: a listener-derived structure must show sufficient repeatability before its regions, dimensions, or trajectories are interpreted. Shared organization can then be examined across listeners without assuming that individual differences are simply noise.</p>

            <h3>connecting musical structure &amp; experience</h3>

            <p>The diagram shows the basic research loop. Musical material provides a controlled structural layer; listener judgments provide observations of experienced relationships; and those observations are used to construct a perceptual topology. Because every observation remains linked to the sound and musical data from which it emerged, relationships discovered perceptually can be examined through their musical properties—and, eventually, used to retrieve or generate material for further listening.</p>

            <blockquote className="pull-quote">THE AIM IS NOT ONE UNIVERSAL MAP, BUT RELATIONSHIPS STABLE ENOUGH TO BE MEASURED, COMPARED, AND USED.</blockquote>
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#why-harmony" label="SCOPE" />
      </PageContainer>
    </section>
  );
}

export default Hypothesis;