import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import type { Post } from "@/data/posts";

export default function PostCard({
  post,
  index = 0,
}: {
  post: Post;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-5">
        <div className="relative aspect-[540/320] overflow-hidden rounded-[20px] bg-surface">
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="(min-width: 768px) 540px, calc(100vw - 40px)"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex items-center gap-4 text-sm font-light">
          <span className="text-accent">{post.tag}</span>
          <span className="text-muted">{post.dateLabel}</span>
        </div>

        <h3 className="h-3 transition-colors group-hover:text-accent">
          {post.title}
        </h3>

        <p className="text-sm leading-relaxed font-light mt-6">{post.excerpt}</p>
      </Link>
    </Reveal>
  );
}
