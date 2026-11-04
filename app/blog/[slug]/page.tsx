import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-36 md:pt-44">
      <Container>
        <Reveal>
          <div className="flex items-center gap-4 text-sm font-light">
            <span className="text-accent">{post.tag}</span>
            <span className="text-muted">
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
          </div>

          <h1 className="h-2 mt-5 max-w-[900px]">{post.title}</h1>
          <p className="lead mt-5 max-w-[700px]">{post.excerpt}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="relative aspect-[540/320] overflow-hidden rounded-[20px] bg-surface md:aspect-[1200/520]">
            <Image
              src={post.cover}
              alt=""
              fill
              sizes="(min-width: 1200px) 1120px, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-12 max-w-[720px] pb-4">
          <div className="space-y-6">
            {post.body.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="h-3 pt-4">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "ul") {
                return (
                  <ul
                    key={index}
                    className="list-disc space-y-2 pl-5 marker:text-accent"
                  >
                    {block.items.map((item) => (
                      <li key={item} className="lead">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={index} className="lead">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link href="/blog" className="nav-link">
              ← All insights
            </Link>
          </div>
        </Reveal>
      </Container>
    </article>
  );
}
