import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

const description =
  "I turn product ideas and designs into clear, accessible interfaces • crafted with care for detail, motion, and performance";

const titleClass =
  "block text-white uppercase text-[clamp(4rem,14vw,6rem)] md:text-[clamp(3rem,6.8vw,7rem)]";
const titleStyle = {
  fontFamily: "var(--font-antonio), 'Antonio Placeholder', Arial Narrow, sans-serif",
  fontWeight: 700,
  lineHeight: "0.9",
  letterSpacing: "-0.04em",
} as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#202020]"
    >
      <Container
        maxWidth="none"
        className="flex min-h-svh flex-col justify-center py-32 md:py-40 lg:py-0"
      >
        <h1 className="sr-only">
          {site.name} — {site.role}
        </h1>

        {/* Parent: 2 children, gap on md+ sized to the card so the card sits in
            clear space between them. Keep the clamp in sync with CARD.width
            in components/sections/FlipCard.tsx. */}
        <div
          aria-hidden="true"
          className="relative flex flex-col items-center gap-10 text-center md:flex-row md:gap-[calc(clamp(200px,24vw,340px)_+_1.5rem)] md:text-left"
        >
          {/* Child 1: name + Frontend */}
          <div className="flex flex-col items-center md:flex-1 md:items-end">
            <Reveal delay={0.05}>
              <p className="mb-3 font-display text-[24px] leading-[1.3] font-normal tracking-tight text-white uppercase md:text-[28px]">
                {site.name}
              </p>
              <span className={titleClass} style={titleStyle}>
                Frontend
              </span>
            </Reveal>
          </div>

          {/* Child 2: UI Engineer + description */}
          <div className="flex flex-col items-center gap-4 md:flex-1 md:items-start md:pt-37">
            <Reveal delay={0.15}>
              <span className={titleClass} style={titleStyle}>
               Engineer
              </span>
            </Reveal>
            <Reveal delay={0.3} className="max-w-[340px] md:max-w-md">
              <p className="text-base font-light text-white/70 md:text-lg">
                {description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-10 left-1/2 hidden h-5 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-accent hover:text-accent md:flex"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-3 w-3 animate-bounce"
          >
            <path d="M8 3v10" />
            <path d="m4 9 4 4 4-4" />
          </svg>
        </a>
      </Container>
    </section>
  );
}
