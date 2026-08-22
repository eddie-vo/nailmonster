import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PriceList } from "@/components/PriceList";

export const metadata: Metadata = { title: "Manicure/Pedicure" };

export default function ManicurePage() {
  return (
    <>
      <PageHero title="Manicure / Pedicure" />
      <section className="mx-auto max-w-[860px] px-5 py-16 lg:px-8">
        <PriceList
          title="Manicure"
          items={[
            {
              name: "Classic Manicure",
              price: "$30",
              note: "Manicure + polish + hand mask",
            },
            {
              name: "Dazzle Dry Manicure",
              price: "$38",
              note: "Dazzle Dry polish + hand mask",
            },
            {
              name: "Classic Pedicure",
              price: "$40",
              note: "Pedicure + polish + foot mask",
            },
            {
              name: "Dazzle Dry Pedicure",
              price: "$48",
              note: "Dazzle Dry polish + foot mask",
            },
            { name: "Luxury Hand Spa", price: "$68" },
            { name: "Luxury Spa Pedicure", price: "$68 up" },
          ]}
        />

        <PriceList
          title="Organic Gel Single Color Manicure"
          items={[
            { name: "D-Gel", price: "$58" },
            { name: "Gentle Pink Gel / Vetro Gel / Cat Eye Gel", price: "$68" },
            { name: "Mao Gel", price: "$78" },
            { name: "Organic Gel Single Color Pedicure", price: "+$10" },
            { name: "Single Color French", price: "+$10" },
            { name: "Single Color Gradient", price: "+$20" },
            { name: "Nail Arts", price: "$88 up" },
          ]}
        />

        <PriceList
          title="Additional Services"
          subtitle="Gel single color"
          items={[
            { name: "3–5 Colors", price: "+$10" },
            { name: "5–10 Colors", price: "+$20" },
            { name: "Nail Design", price: "$10 / each" },
            { name: "Structure Gel", price: "+$20" },
            { name: "Extra Length", price: "+$40" },
            { name: "Half Tips Extension", price: "$68", note: "Each $8" },
            { name: "Full Tips Extension", price: "$48", note: "Each $5" },
            { name: "Gel Extension", price: "$100", note: "Each $12" },
            { name: "Hard Gel Refill", price: "$40 up" },
            { name: "Single Color Gel Removal", price: "$10" },
            { name: "Extension / Design Nail Removal", price: "$25" },
            { name: "Fix Nail", price: "$5 up / each" },
            { name: "Additional Time Massage", price: "$10 / 10 minutes" },
            {
              name: "Swarovski, Azorite, Moissanite Diamond",
              price: "Large $20 / Small $15 for two / Mini $10 for four",
            },
          ]}
        />

        <PriceList
          title="Pedicure"
          items={[
            {
              name: "Classic Pedicure Care",
              price: "$40",
              note: "Trim, shape, cuticles cleaned, buffed, foot mask, massage with lotion 3 minutes, hot towel and finish with regular polish of your choice.",
            },
            {
              name: "Sunkist Green Tea Pedicure Care",
              price: "$68",
              note: "Start with classic pedicure, soak with Dead Sea salt and scrub, callus treatment, foot and leg mask, hot towel, massage with lotion 10 minutes, finish with regular polish of your choice.",
            },
            {
              name: "Heavenly Pedicure Care",
              price: "$98",
              note: "Start with classic pedicure, soak with Dead Sea salt and scrub, callus treatment, foot and leg mask, hot towel, hot stone massage with lotion 20 minutes, finish with regular polish of your choice. Scents: grapefruit; orange & mango.",
            },
            {
              name: "Luxury Nail Monster Pedicure Care",
              price: "$128",
              note: "Start with classic pedicure, soak with Dead Sea salt and scrub, callus treatment, foot and leg mask, hot towel, hot stone and essential oil massage with lotion 30 minutes, finish with regular polish of your choice. Scents: honey milk; lavender essential oil; L’Occitane almond essential oil.",
            },
          ]}
        />
      </section>
    </>
  );
}
