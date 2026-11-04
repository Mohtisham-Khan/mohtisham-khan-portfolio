export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What do you work on?",
    answer: "Interface engineering and frontend development: marketing sites, dashboards, design systems, and product UI built with React and Next.js.",
  },
  {
    question: "What's your stack?",
    answer: "TypeScript, React, Next.js, and modern CSS - usually Tailwind. I pick tools per project and keep dependencies lean so the codebase stays easy to maintain.",
  },
  {
    question: "Are you available for new projects?",
    answer: "Yes - I'm open to freelance projects and full-time roles. The fastest way to reach me is the form below or my email directly.",
  },
  {
    question: "How do you approach accessibility?",
    answer: "Semantic HTML first, keyboard support, visible focus states, sufficient contrast, and testing with screen readers where it matters. Accessibility is part of the build, not a pass at the end.",
  },
  {
    question: "Can you work with an existing design?",
    answer: "Absolutely. I implement designs pixel-accurately and flag edge cases early - responsive behavior, loading and empty states, and error paths - before they become surprises.",
  },
  {
    question: "How do we get started?",
    answer: "Send a short note about your project through the form. I'll reply with a few questions, a rough scope, and clear next steps.",
  },
];
