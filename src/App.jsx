import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BriefPage from "./pages/BriefPage";
import AboutPage from "./pages/AboutPage";
import BibliographyPage from "./pages/BibliographyPage";
import MethodologyPage from "./pages/MethodologyPage";
import ResearchLogPage from "./pages/ResearchLogPage";
import ToolsPage from "./pages/ToolsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/brief" element={<BriefPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/bibliography" element={<BibliographyPage />} />
      <Route path="/methodology" element={<MethodologyPage />} />
      <Route path="/research-log" element={<ResearchLogPage />} />
      <Route path="/tools" element={<ToolsPage />} />
    </Routes>
  );
}

export default App;