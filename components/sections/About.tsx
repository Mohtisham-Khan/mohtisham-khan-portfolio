import { FaXTwitter } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site, socials } from "@/data/site";

const stats = [
  { value: "—", label: "Years of Experience" },
  { value: "—", label: "Completed Projects" },
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
    <section id="about" className="scroll-mt-28 py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_394px] lg:gap-20">
          <div>
            <SectionHeading
              title="About Me"
              intro={`Hi, I'm ${site.name} • UI Engineer & Frontend Developer passionate about building interfaces that feel fast, look sharp, and work for everyone.`}
              introWidth="max-w-[520px]"
            />

            <Reveal delay={0.1}>
              <dl className="mt-12 grid max-w-[600px] grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="font-display text-[clamp(2.5rem,4.2vw,3.75rem)] leading-none font-bold text-foreground">
                        {stat.value}
                      </span>
                      <span className="mt-3 block text-[15px] leading-snug font-semibold md:text-lg">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 grid max-w-[420px] grid-cols-2 gap-6">
                <div>
                  <p className="text-base font-light">Call Today :</p>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="mt-1 block text-base font-semibold underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-base font-light">Email :</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block text-base font-semibold break-words underline underline-offset-4 transition-colors hover:text-accent"
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
              className="aspect-[394/503] w-full rounded-[20px] object-cover lg:opacity-0"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
