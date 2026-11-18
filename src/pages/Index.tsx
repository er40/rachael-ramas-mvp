import Navigation from "@/components/Navigation";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import ReflectionsSection from "@/components/ReflectionsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <IntroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="books">
        <ComingSoonSection />
      </div>
      <div id="reflections">
        <ReflectionsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
