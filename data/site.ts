export const site = {
  name: "Mohtisham Khan",
  monogram: "MK",
  role: "UI Engineer & Frontend Developer",
  tagline:
    "I turn product ideas and designs into clear, accessible interfaces • crafted with care for detail, motion, and performance.",
  email: "Mohtishamkhan86@gmail.com",
  phoneDisplay: "+92 316 283 2377",
  phoneHref: "+923162832377",
  linkedin: "https://www.linkedin.com/in/mohtisham-khan-a82b2b3ab/",
  location: "Pakistan · Available remotely",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
] as const;

export const socials = [
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" as const },
  { label: "GitHub (placeholder)", href: "#", icon: "github" as const },
  { label: "X (placeholder)", href: "#", icon: "x" as const },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" as const },
];
