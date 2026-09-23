import FadeIn from "../components/FadeIn";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import SectionTitle from "../components/SectionTitle";
import NextSectionLink from "../components/NextSectionLink";
import LightboxImage from "../components/LightboxImage";


function Ethics() {
  return (
    <section id="ethics">
      <PageContainer>
        <SectionGrid>
          <FadeIn className="ethics-copy body-copy">
            <SectionTitle>
              ethics and
              <br />
              responsible
              <br />
              development
            </SectionTitle>

            <p className="research-lead">Topo.audio studies subjective musical experience, which makes the conditions under which listener data are collected, interpreted, and reused part of the research itself.</p>

            <p>Listener responses are contributions of human experience rather than neutral raw material. Participant studies therefore require informed consent, transparent descriptions of data use, appropriate protection of identifiers, and careful decisions about what should be retained, shared, or made public.</p>

            <p>Repeated listener-level structures and associated background information may themselves become distinctive. Public release and future reuse therefore require attention to re-identification risk, data minimization, access control, and the distinction between consent to participate and consent for broader reuse.</p>

            <p className="body-highlight">Interpretation requires similar restraint. A recurring group structure should not be presented as a universal organization of musical experience, and differences between listeners or groups should not automatically be treated as noise or deficiency. Cultural exposure, musical training, personal history, task framing, stimulus design, and experimental context may all shape the structures that emerge.</p>

            <p>Topo.audio also distinguishes analytical and creative augmentation from systems designed to optimize emotional influence. Its purpose is to make relationships in musical experience more observable and explorable while keeping human judgment central to interpretation and musical use.</p>

            <blockquote className="pull-quote">UNCERTAINTY, INDIVIDUAL VARIATION, AND LIMITS OF GENERALIZATION ARE PROPERTIES TO BE REPRESENTED RATHER THAN HIDDEN.</blockquote>
          </FadeIn>

          <FadeIn className="ethics-image-wrap">
            <LightboxImage
              src="/diagrams/ethics.png"
              alt="Ethics and responsible development diagram"
              className="ethics-image"
            />
          </FadeIn>
        </SectionGrid>

        <NextSectionLink href="#about" label="ABOUT" />
      </PageContainer>
    </section>
  );
}

export default Ethics;