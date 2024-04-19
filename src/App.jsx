import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectSection,
  ContactSection,
} from "./components";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/experience" element={<ExperienceSection />} />
        <Route path="/project" element={<ProjectSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </>
  );
}
