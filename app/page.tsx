import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import FlipCard from "@/components/sections/FlipCard";
import Hero from "@/components/sections/Hero";
import Insights from "@/components/sections/Insights";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <FlipCard />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Faq />
      <Insights />
      <Contact />
    </>
  );
}
