import { FaXTwitter } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site, socials } from "@/data/site";

const stats = [
  { value: "01", label: "Years of Experience" },
  { value: "03", label: "Completed Projects" },
  { value: "—", label: "Core Technologies" },
];

const iconMap = {
  linkedin: LuLinkedin,
  github: LuGithub,
  x: FaXTwitter,
  mail: LuMail,
};

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-24 md:py-32 min-[1200px]:flex min-[1200px]:min-h-svh min-[1200px]:items-center"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_394px] lg:gap-20">
          <div>
            <SectionHeading
              title="About Me"
              headingClassName="text-extrabold md:text-4xl text-2xl mb-1"
              intro={`Hi, I'm ${site.name} • UI Engineer & Frontend Developer passionate about building interfaces that feel fast, look sharp, and work for everyone.`}
              introWidth="max-w-[500px]"
              introGap="mt-5"
            />

            <Reveal delay={0.1}>
              <dl className="mt-10 grid max-w-[600px] grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="font-display text-[clamp(2.5rem,4.2vw,3.75rem)] leading-none font-bold text-accent">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-lg leading-[1.3] font-semibold text-foreground">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 grid max-w-[420px] grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-foreground">Call Today :</p>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="mt-1 block text-lg font-light text-accent transition-colors hover:text-foreground"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-foreground">Email :</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-flex text-lg font-light text-accent transition-colors hover:text-foreground"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-5">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      className="text-[30px] text-foreground transition-colors hover:text-accent"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  );
                })}
              </div>

              <a href="#contact" className="btn btn-outline mt-10">
                Let&apos;s Talk
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="hidden lg:block" y={0}>
            <Image
              id="about-portrait"
              src="/images/portrait.png"
              alt="Abstract monogram artwork standing in for a portrait of Mohtisham Khan"
              width={394}
              height={503}
              className="aspect-[394/503] w-full rounded-[20px] object-cover min-[1200px]:opacity-0"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
