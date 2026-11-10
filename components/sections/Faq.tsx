import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 py-0 md:py-[120px]">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[440px_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-[100px] lg:self-start">
            <SectionHeading
              title="Frequently Asked Questions"
              headingClassName="text-2xl md:text-4xl font-medium"
              intro="Here are answers to some of the most common questions about working with me."
              introWidth="max-w-[440px]"
            />

          </div>

          <Reveal delay={0.1}>
            <Accordion
              variant="faq"
              items={faqs.map((faq, index) => ({
                id: String(index),
                title: faq.question,
                body: faq.answer,
              }))}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
