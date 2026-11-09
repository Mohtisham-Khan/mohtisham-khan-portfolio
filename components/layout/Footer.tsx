import { FaXTwitter } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Container from "@/components/ui/Container";
import { site, socials } from "@/data/site";

const iconMap = {
  linkedin: LuLinkedin,
  github: LuGithub,
  x: FaXTwitter,
  mail: LuMail,
};

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <Container className="pt-[60px] pb-12">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10 md:text-left">
          <div className="text-center md:text-left">
            <p className="text-sm font-light">Email :</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-lg font-semibold leading-[1.3] underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              {site.email}
            </a>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-light">Call Today :</p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-1 inline-block text-lg font-semibold leading-[1.3] underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-light">Social :</p>
            <div className="mt-2 flex justify-center gap-3.5 md:justify-start">
              {socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    className="text-2xl transition-all hover:-translate-y-0.5 hover:opacity-70"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-accent-foreground/25" />

        <div className="flex flex-col items-center gap-4 text-sm font-light md:flex-row md:justify-between">
          <p>
            © Copyright {year}. All Rights Reserved by{" "}
            <span className="font-semibold">{site.name}</span>
          </p>
          <p className="flex items-center gap-2.5">
            Designed &amp; built by
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full bg-accent-foreground font-display text-sm font-bold text-accent"
            >
              {site.monogram}
            </span>
            <span className="font-semibold">{site.name}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
