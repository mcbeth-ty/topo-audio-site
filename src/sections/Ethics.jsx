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

            <p>
              Topo.audio studies affective musical experience, which makes the
              conditions under which perceptual data is collected and used part
              of the research itself.
            </p>

            <p>
              Listener responses are contributions of human experience rather
              than neutral raw material. Participant studies therefore require
              informed consent, transparent descriptions of data use, appropriate
              anonymization, and careful decisions about what should be retained,
              shared, or made public.
            </p>

            <p>
              Interpretation requires similar caution. A collective topology
              should not be presented as a universal map of human emotion, and
              differences between listeners or groups should not automatically be
              treated as noise or deficiency. Cultural exposure, musical training,
              personal history, task framing, and experimental context may all
              shape the structures that emerge.
            </p>

            <p className="body-highlight">
              Topo.audio therefore treats uncertainty, individual variation, and
              the limits of generalization as properties to be represented rather
              than hidden.
            </p>

            <p>
              The project also distinguishes analytical and creative augmentation
              from systems designed to optimize emotional influence. Its aim is to
              make relationships in musical perception more observable and
              explorable, while keeping human judgment central to both
              interpretation and composition.
            </p>
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