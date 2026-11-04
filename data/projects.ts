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
    slug: "aurora-analytics-dashboard",
    title: "Aurora Analytics Dashboard",
    category: "UI Engineering",
    description:
      "A data-dense analytics dashboard concept focused on clear hierarchy, scannable charts, and a calm visual system.",
    cover: "/images/project-1.png",
    href: "https://example.com",
    placeholder: true,
  },
  {
    slug: "nimbus-storefront",
    title: "Nimbus Storefront",
    category: "Frontend Development",
    description:
      "An e-commerce front-end concept exploring fast product discovery, accessible filters, and a friction-free checkout flow.",
    cover: "/images/nimbus-storefront-cover.png",
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
    href: "https://example.com",
    placeholder: true,
  },
  {
    slug: "pulse-habit-tracker",
    title: "Pulse Habit Tracker",
    category: "UI / UX Design",
    description:
      "A mobile-first habit tracking concept with gentle motion, clear progress states, and an inclusive color palette.",
    cover: "/images/solar-energy-cover.png",
    href: "https://solar-energy-website-rouge.vercel.app/",
    placeholder: false,
  },
];
