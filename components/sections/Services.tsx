import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 py-24 md:py-32 min-[1200px]:flex min-[1200px]:min-h-svh min-[1200px]:items-center"
    >
      <Container>
        <div className="max-w-[600px]">
          <SectionHeading
            title="What I Can Do For You"
            headingClassName="text-extrabold md:text-4xl text-2xl"
            intro="I turn product ideas and designs into clear, accessible interfaces crafted with care for detail, motion, and performance."
          />

          <Reveal delay={0.1} className="mt-12">
            <Accordion
              variant="services"
              items={services.map((service) => ({
                id: service.number,
                number: service.number,
                title: service.title,
                bullets: service.bullets,
              }))}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
