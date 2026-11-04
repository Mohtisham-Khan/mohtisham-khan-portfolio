export type Service = {
  number: string;
  title: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    number: "1",
    title: "UI Engineering",
    bullets: [
      "Pixel-accurate interface implementation from Figma designs",
      "Accessible, semantic markup and full keyboard support",
      "Reusable component APIs with thoughtful states and edge cases",
      "Responsive layouts that hold up from 320px to 4K",
    ],
  },
  {
    number: "2",
    title: "Frontend Development",
    bullets: [
      "Next.js and React application development",
      "TypeScript with clean, maintainable architecture",
      "REST / API integration and data-rich UI",
      "SEO-friendly rendering and fast page performance",
    ],
  },
  {
    number: "3",
    title: "Design Systems",
    bullets: [
      "Design tokens for color, typography, and spacing",
      "Documented component libraries in Figma and code",
      "Consistent patterns for forms, tables, and navigation",
      "Versioning and adoption guidance for growing teams",
    ],
  },
  {
    number: "4",
    title: "Performance & Accessibility",
    bullets: [
      "Core Web Vitals optimization (LCP, CLS, INP)",
      "WCAG 2.2-minded contrast, focus, and semantics",
      "Bundle analysis and render-path audits",
      "Lighthouse and real-user measurement workflows",
    ],
  },
];
