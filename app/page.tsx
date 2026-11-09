import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import PortraitJourney from "@/components/sections/PortraitJourney";
import Insights from "@/components/sections/Insights";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <PortraitJourney>
        <Hero />
        <Services />
        <About />
      </PortraitJourney>
      <Projects />
      <Faq />
      <Insights />
      <Contact />
    </>
  );
}
