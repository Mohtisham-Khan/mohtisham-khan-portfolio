export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  cover: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "designing-for-performance",
    title: "Designing for Performance: Fast by Default",
    tag: "Engineering",
    date: "2026-09-14",
    dateLabel: "Sep 14, 2026",
    excerpt:
      "Performance is a design decision, not a cleanup task. A practical look at making speed the default from the first commit.",
    cover: "/images/blog-1.png",
    body: [
      {
        type: "p",
        text: "Most performance problems are not discovered in a Lighthouse report. They are decided much earlier - in the moment someone chooses a hero video over an image, a client-side fetch over server-rendered HTML, or another 200 kB dependency for a function that ten lines of code could do.",
      },
      {
        type: "p",
        text: "Treating performance as a design decision means asking the speed question while the design is still on the canvas: what does the user need first, and what is the cheapest way to give it to them?",
      },
      { type: "h2", text: "Measure before you optimize" },
      {
        type: "p",
        text: "Numbers beat intuition. Before touching anything, capture the three Core Web Vitals - LCP, CLS, and INP - on a mid-range phone with CPU throttling. The gap between that environment and your M-series laptop is where most complaints live.",
      },
      { type: "h2", text: "Ship less JavaScript" },
      {
        type: "p",
        text: "Every component you import is a component the browser must parse, compile, and execute. Server components, route-level code splitting, and lazy loading below the fold are not advanced techniques - they are the baseline.",
      },
      {
        type: "ul",
        items: [
          "Prefer server rendering for anything that does not need interactivity",
          "Keep above-the-fold content out of lazy-loaded chunks",
          "Audit dependencies the way you audit credentials",
        ],
      },
      { type: "h2", text: "Make performance visible" },
      {
        type: "p",
        text: "A budget that nobody sees is a budget nobody keeps. Put the numbers in CI, put a speed index on the design QA checklist, and treat a regression like a failing test - because in the user's experience, it is one.",
      },
      {
        type: "p",
        text: "Fast by default is not a sprint or a rewrite. It is a series of small, boring decisions made consistently - and compounded over the life of a product.",
      },
    ],
  },
  {
    slug: "design-tokens-in-practice",
    title: "Design Tokens in Practice",
    tag: "Design Systems",
    date: "2026-08-02",
    dateLabel: "Aug 2, 2026",
    excerpt:
      "How a small set of tokens - color, type, spacing, radius - can keep a product visually consistent without slowing anyone down.",
    cover: "/images/blog-2.png",
    body: [
      {
        type: "p",
        text: "Design tokens are the smallest useful unit of a design system: named values that replace hard-coded hex codes, pixel sizes, and one-off decisions. Their power is not in the technology - it is in giving every repeated choice a single source of truth.",
      },
      { type: "h2", text: "Start smaller than you think" },
      {
        type: "p",
        text: "A practical first set is tiny: one ink color, one accent, a muted gray, a border line, two font families, four type sizes, a spacing scale, and two radii. That set already covers most of a marketing site and the shell of a product UI.",
      },
      {
        type: "ul",
        items: [
          "Color: ink, accent, muted, line, surface",
          "Type: display and body families with fixed steps",
          "Space: a 4px or 8px scale used everywhere",
          "Radius: pill and card - almost nothing else is needed",
        ],
      },
      { type: "h2", text: "Name by role, not by value" },
      {
        type: "p",
        text: "Call it accent, not blue. Call it muted, not gray-400. Role-based names survive redesigns; value-based names turn every visual tweak into a repository-wide rename. When the brand shifts from indigo to teal, only the token's value should change.",
      },
      { type: "h2", text: "Keep one pipeline" },
      {
        type: "p",
        text: "Tokens should flow from design tool to code without a manual sync - a shared JSON file, a Figma variables library, or a small transform script. Two sources of truth is one more than a system can afford.",
      },
      {
        type: "p",
        text: "The goal is not a perfect taxonomy. The goal is that the next component anyone builds looks like it belongs - without anyone having a meeting about it.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
