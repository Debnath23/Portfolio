import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
