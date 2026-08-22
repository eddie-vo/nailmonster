import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "News" };

const posts = [
  {
    src: "/images/news/holiday.jpeg",
    alt: "Nail Monster holiday hours notice",
  },
  {
    src: "/images/news/hours.jpeg",
    alt: "Nail Monster hours update",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero title="News" />
      <section className="mx-auto grid max-w-[1100px] gap-8 px-5 py-16 md:grid-cols-2 lg:px-8">
        {posts.map((post) => (
          <article key={post.src} className="overflow-hidden border border-line">
            <Image
              src={post.src}
              alt={post.alt}
              width={1200}
              height={1600}
              className="h-auto w-full"
            />
          </article>
        ))}
      </section>
    </>
  );
}
