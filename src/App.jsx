import Intro from "./sections/Intro";
import Problem from "./sections/Problem";
import Hypothesis from "./sections/Hypothesis";
import WhyHarmony from "./sections/WhyHarmony";
import Methodology from "./sections/Methodology";
import Scales from "./sections/Scales";
import CollectingPerceptions from "./sections/CollectingPerceptions";
import CreatingStimuli from "./sections/CreatingStimuli";
import ConstructingTopologies from "./sections/ConstructingTopologies";
import Analysis from "./sections/Analysis";
import HarmonyGenerator from "./sections/HarmonyGenerator";
import AudioCanvas from "./sections/AudioCanvas";
import TopologyExplorer from "./sections/TopologyExplorer";
import ResearchProgress from "./sections/ResearchProgress";
import Ethics from "./sections/Ethics";
import About from "./sections/About";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />

      <main>
        <Intro />
        <Problem />
        <Hypothesis />
        <WhyHarmony />
        <Methodology />
        <Scales />
        <CollectingPerceptions />
        <CreatingStimuli />
        <ConstructingTopologies />
        <Analysis />
        <HarmonyGenerator />
        <AudioCanvas />
        <TopologyExplorer />
        <ResearchProgress />
        <Ethics />
        <About />
      </main>
    </>
  );
}

export default App;