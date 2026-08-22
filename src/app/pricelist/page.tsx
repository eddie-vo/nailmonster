import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Price List" };

export default function PriceListPage() {
  return (
    <>
      <PageHero title="Price List" />
      <section className="mx-auto max-w-[1100px] px-5 py-12 lg:px-8">
        <p className="mb-8 text-center text-sm font-light text-muted">
          Full menu below. You can also browse{" "}
          <Link href="/manicure-pedicure" className="text-navy underline">
            nail services
          </Link>
          ,{" "}
          <Link href="/eyelash-wax" className="text-navy underline">
            eyelash / wax
          </Link>
          , and{" "}
          <Link href="/facial-spa" className="text-navy underline">
            KLAPP facial
          </Link>
          .
        </p>
        <div className="relative overflow-hidden border border-line bg-white">
          <Image
            src="/images/menu.jpg"
            alt="Nail Monster price menu"
            width={2560}
            height={1656}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>
    </>
  );
}
