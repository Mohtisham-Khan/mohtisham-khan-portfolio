import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Featured Projects"
          intro="A selection of concept projects where I explore interface engineering, design systems, and product thinking end to end."
        />

        <div className="mt-16 flex flex-col gap-10 md:gap-[120px]">
          {projects.map((project) => (
            <Reveal
              key={project.slug}
              className="md:sticky md:top-20"
              y={24}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}${project.placeholder ? " (placeholder link)" : ""}`}
                className="group relative block aspect-square overflow-hidden rounded-[20px] md:aspect-[1120/747]"
              >
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

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
                  <span className="inline-flex rounded-full bg-accent-2 px-4 py-1.5 text-sm font-light text-white">
                    {project.category}
                  </span>

                  <h3 className="h-2 text-white">{project.title}</h3>

                  <p className="max-w-[600px] pt-16 text-sm leading-relaxed font-light text-white">
                    {project.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cta w-full md:w-auto"
            aria-label="Browse all projects (placeholder link)"
          >
            Browse All Projects
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
