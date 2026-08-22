import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" />
      <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-8">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
