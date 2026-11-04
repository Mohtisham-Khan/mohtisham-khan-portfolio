import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PostCard from "@/components/ui/PostCard";
import Reveal from "@/components/ui/Reveal";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles by Mohtisham Khan on frontend engineering, design systems, and building for the web.",
};

export default function BlogIndexPage() {
  return (
    <div className="pt-36 md:pt-44">
      <Container>
        <Reveal>
          <h1 className="h-display">Insights</h1>
          <p className="lead mt-20 max-w-[500px]">
            Practical notes on frontend craft, design systems, and performance
            - written to be useful, not just published.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8 pb-4">
          <Link href="/" className="nav-link">
            ← Back to portfolio
          </Link>
        </div>
      </Container>
    </div>
  );
}
