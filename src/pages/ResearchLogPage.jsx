import SiteMenu from "../components/SiteMenu";
import UnderConstruction from "../components/UnderConstruction";

function ResearchLogPage() {
  return (
    <>
      <SiteMenu />
      <UnderConstruction
        title="RESEARCH LOG"
        description="This section will document the ongoing development of topo.audio, including literature reviews, methodological decisions, experiments, and project milestones."
      />
    </>
  );
}

export default ResearchLogPage;