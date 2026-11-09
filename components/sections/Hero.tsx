import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import { PortraitCard } from "@/components/sections/PortraitJourney";

const description =
  "I turn product ideas and designs into clear, accessible interfaces • crafted with care for detail, motion, and performance";

const headline =
  "font-display text-[clamp(100px,8.34vw,120px)] leading-[1.1] font-bold tracking-[-0.03em] text-white uppercase";
const headlineStack =
  "font-display text-[clamp(3.25rem,15vw,5.5rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white uppercase";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#202020] min-[1200px]:bg-transparent"
    >
      <Container
        maxWidth="none"
        className="relative flex min-h-svh flex-col justify-center px-5 py-32 md:px-10 min-[1200px]:h-svh min-[1200px]:px-0 min-[1200px]:py-0"
      >
        <h1 className="sr-only">
          {site.name} — {site.role}
        </h1>

        {/* Desktop: Portavia's three-column hero — name + FRONTEND, the pinned
            portrait card, then DEVELOPER + intro. */}
        <div className="mx-auto hidden w-full max-w-[1200px] grid-cols-[1fr_340px_1fr] gap-[15px] min-[1200px]:grid">
          <div className="flex -translate-y-[23px] self-center justify-end">
            <div className="text-left">
              <span className="block font-display text-[32px] leading-[1.3] font-normal text-white uppercase">
                {site.name}
              </span>
              <span className={`mt-[4px] md:ml-12 block ${headline}`}>UI</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Only rendered in place when the pinned card is unavailable
                (prefers-reduced-motion). */}
            <div className="hero-inline-card hidden">
              <PortraitCard />
            </div>
          </div>

          <div className="translate-y-[46px] self-center text-left">
            <span className={`block ${headline}`}>Engineer</span>
            <p className="mt-[11px] max-w-[348px] text-right text-[18px] leading-[1.5] font-light text-white">
              {description}
            </p>
          </div>
        </div>

        {/* Below 1200: the card sits in the text flow between the two words,
            exactly like Portavia's stacked layout. */}
        <div className="mx-auto flex w-full max-w-[520px] flex-col items-center gap-4 text-center min-[1200px]:hidden">
          <span className="font-display text-[24px] leading-[1.3] font-normal text-white uppercase md:text-[28px]">
            {site.name}
          </span>
          <span className={headlineStack}>Frontend</span>
          <div className="my-6">
            <PortraitCard />
          </div>
          <span className={headlineStack}>Developer</span>
          <p className="max-w-[420px] text-base leading-[1.5] font-light text-white md:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
