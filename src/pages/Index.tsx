import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <ExperienceHighlights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
