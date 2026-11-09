import Link from "next/link";
import Container from "@/components/ui/Container";
import PostCard from "@/components/ui/PostCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-28 py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Design Insights & Ideas"
          headingClassName="text-2xl md:text-4xl font-medium"
          intro="From frontend craft to design systems • short, practical articles about building for the web with care."
        />

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link href="/blog" className="btn btn-cta w-full md:w-auto">
            Browse All Insights
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
