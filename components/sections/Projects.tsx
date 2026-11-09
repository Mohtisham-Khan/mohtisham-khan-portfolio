import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const cardClass =
  "group relative block aspect-square overflow-hidden rounded-[20px] md:aspect-[1120/747]";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-24 md:py-[120px]">
      <Container>
        <SectionHeading
          title="Featured Projects"
          headingClassName="text-extrabold md:text-4xl text-2xl md:mb-5"
          intro="A selection of recent work spanning landing pages, product marketing, and design systems * each built end to end with clarity, performance, and conversion in mind."
        />

        <div className="mt-10 flex flex-col gap-10 md:gap-[120px]">
          {projects.map((project) => {
            const content = (
              <>
                <Image
                  src={project.cover}
                  alt=""
                  fill
                  sizes="(min-width: 1200px) 1120px, calc(100vw - 40px)"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(12,12,13,0.45)] to-[rgba(12,12,13,0.8)] opacity-60"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
                  <span className="inline-flex rounded-full bg-accent-2 px-4 py-1.5 text-sm leading-[21px] font-light text-white">
                    {project.category}
                    {project.placeholder ? " · Concept" : ""}
                  </span>

                  <h3 className="text-2xl md:text-5xl font-bold text-white">{project.title}</h3>

                  <p className="max-w-[600px] md:text-base font-light text-foreground">
                    {project.description}
                  </p>
                </div>
              </>
            );

            return (
              <Reveal key={project.slug} y={24}>
                {project.placeholder ? (
                  <div
                    className={`${cardClass} cursor-default`}
                    aria-label={`${project.title} — concept project, case study coming soon`}
                  >
                    {content}
                  </div>
                ) : (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.title}
                    className={cardClass}
                  >
                    {content}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a href="#contact" className="btn btn-cta w-full md:w-auto">
            Start a Project
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
