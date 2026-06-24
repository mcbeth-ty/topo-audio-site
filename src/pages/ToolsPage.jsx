import SiteMenu from "../components/SiteMenu";
import UnderConstruction from "../components/UnderConstruction";

function ToolsPage() {
  return (
    <>
      <SiteMenu />
      <UnderConstruction
        title="TOOLS"
        description="This section will provide access to the interactive tools developed for topo.audio, including the Harmonic Sequence Generator, Audio Canvas, and Topology Explorer."
      />
    </>
  );
}

export default ToolsPage;