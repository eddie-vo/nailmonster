import Image from "next/image";
import { galleryImages, site } from "@/lib/site";
import type { InstagramPost } from "@/lib/instagram";

export function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  const items =
    posts.length > 0
      ? posts.map((post) => ({
          key: post.id,
          href: post.permalink,
          src: post.imageUrl,
          alt: post.caption || "Nail Monster Instagram post",
          remote: true,
        }))
      : galleryImages.slice(0, 6).map((src, index) => ({
          key: src,
          href: site.instagram,
          src,
          alt: `Instagram nail art ${index + 1}`,
          remote: false,
        }));

  return (
    <section className="bg-blush py-16">
      <div className="mx-auto max-w-[1100px] px-5 text-center lg:px-8">
        <Image
          src="/images/instagram.webp"
          alt=""
          width={72}
          height={72}
          className="mx-auto mb-4 rounded-full"
        />
        <h2 className="mb-2 text-xl font-medium">{site.instagramHandle}</h2>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-6 font-light text-muted">
          Contact: {site.phoneDisplay} · Specializing in Korean and Japanese Gel
          and Nail Arts · Mon–Sat 10:30–7:30 / Sun 10:30–6:30 · Nail / Eyelash /
          Wax / Facial
        </p>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden"
            >
              {item.remote ? (
                // Instagram CDN hosts change; skip the optimizer for remote posts.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              )}
            </a>
          ))}
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block border-b border-black pb-1 text-[12px] font-medium uppercase tracking-[0.16em]"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
