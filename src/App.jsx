import { Routes, Route } from "react-router-dom";

import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import AboutPage from "./pages/AboutPage";
import BibliographyPage from "./pages/BibliographyPage";
import MethodologyPage from "./pages/MethodologyPage";
import ResearchLogPage from "./pages/ResearchLogPage";
import ToolsPage from "./pages/ToolsPage";
import CVPage from "./pages/CVPage";
import AcrossTheValleyPage from "./pages/AcrossTheValleyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/bibliography" element={<BibliographyPage />} />
      <Route path="/methodology" element={<MethodologyPage />} />
      <Route path="/research-log" element={<ResearchLogPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/across-the-valley" element={<AcrossTheValleyPage />} />
    </Routes>
  );
}

export default App;
