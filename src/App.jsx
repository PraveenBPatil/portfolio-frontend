import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import GlassSkills from "./components/GlassSkills";
import TechMarquee from "./components/TechMarquee";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ScrollReveal from "./components/ScrollReveal";
import LoadingScreen from "./components/LoadingScreen";
import SocialSidebar from "./components/SocialSidebar";
import BackToTop from "./components/BackToTop";
import ResumeSection from "./components/ResumeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SectionDivider from "./components/SectionDivider";
import StickySection from "./components/StickySection";
import MouseFollower from "./components/MouseFollower";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#0a0a0a] to-black">

      {/* GLOBAL floating components */}
      <LoadingScreen />
      <MouseFollower />
      <SocialSidebar />

      <Navbar />

      {/* HERO */}
      <ScrollReveal delay={0.1}>
        <HeroSection />
      </ScrollReveal>
      <SectionDivider />

      {/* ABOUT */}
      <ScrollReveal delay={0.15}>
        <AboutSection />
      </ScrollReveal>
      <SectionDivider />

      {/* JOURNEY (No animation wrapper) */}
      <StickySection />
      <SectionDivider />

      {/* SKILLS */}
      <ScrollReveal delay={0.28}>
        <SkillsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <GlassSkills />
      </ScrollReveal>
      <SectionDivider />

      {/* TECHNOLOGIES */}
      <ScrollReveal delay={0.33}>
        <TechMarquee />
      </ScrollReveal>
      <SectionDivider />

      {/* RESUME */}
      <ScrollReveal delay={0.35}>
        <ResumeSection />
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal delay={0.38}>
        <TestimonialsSection />
      </ScrollReveal>
      <SectionDivider />

      {/* PROJECTS */}
      <ScrollReveal delay={0.4}>
        <ProjectsSection />
      </ScrollReveal>

      {/* CONTACT */}
      <ScrollReveal delay={0.45}>
        <ContactSection />
      </ScrollReveal>

      <BackToTop />

      {/* FOOTER */}
      <ScrollReveal delay={0.5}>
        <FooterSection />
      </ScrollReveal>

    </div>
  );
}
