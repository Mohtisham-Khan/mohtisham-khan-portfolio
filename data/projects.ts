export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  href: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "verdo-landing-page",
    title: "Verdo • Social Media Agency",
    category: "Web Design",
    description:
      "A conversion-focused landing page for a social media marketing agency • bold hero, service storytelling, pricing, and case-study sections built to ship.",
    cover: "/images/verdo-cover-mockup.png",
    href: "https://verdo-landing-page.netlify.app/",
    placeholder: false,
  },
  {
    slug: "lumine-studio",
    title: "Lumine Studio • Interior Design",
    category: "Web Design",
    description:
      "An editorial portfolio for a London–Milan interior design studio • image-led project showcases, a calm typographic system, and a clear enquiry path for residential and commercial clients.",
    cover: "/images/lumine-studio-cover.png",
    href: "https://lumine-studios.netlify.app/",
    placeholder: false,
  },
  {
    slug: "lexshore-legal-ai",
    title: "Lexshore • Legal AI Platform",
    category: "Frontend Development",
    description:
      "A trust-first marketing site for an AI legal & compliance platform • dense product storytelling split into problem, solution, impact, industries, and security, with a clear book-a-call path.",
    cover: "/images/lexshore-cover.png",
    href: "https://lexshore.vercel.app/",
    placeholder: false,
  },
  {
    slug: "orbit-design-system",
    title: "Orbit Design System",
    category: "Design Systems",
    description:
      "A token-driven component library concept • buttons, forms, and layout primitives documented for consistent product UI.",
    cover: "/images/project-3.png",
    href: "",
    placeholder: true,
  },
  {
    slug: "solar-energy-karachi",
    title: "Solar Energy • Karachi Solar Installer",
    category: "Web Design",
    description:
      "A conversion-focused local business site for a Karachi solar installer • free quote flow, service breakdowns, project gallery, bilingual FAQ, and WhatsApp-first contact.",
    cover: "/images/solar-energy-cover.png",
    href: "https://solar-energy-website-rouge.vercel.app/",
    placeholder: false,
  },
];
