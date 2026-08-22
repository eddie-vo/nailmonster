import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PriceList } from "@/components/PriceList";

export const metadata: Metadata = { title: "Eyelash / Wax" };

export default function EyelashWaxPage() {
  return (
    <>
      <PageHero title="Eyelash / Wax" />
      <section className="mx-auto max-w-[860px] px-5 py-16 lg:px-8">
        <PriceList
          title="Eyelash 美睫"
          items={[
            { name: "Mink Nature", price: "$128", note: "貂绒单根自然款" },
            { name: "Mink Hybrid", price: "$148", note: "貂绒单根浓密款" },
            { name: "YY-Style", price: "$158", note: "貂绒YY 款" },
            { name: "Mink Clover", price: "$158", note: "貂绒三叶草款" },
            { name: "Miss Eye Dor Nature", price: "$168", note: "自然款" },
            { name: "Miss Eye Dor Hybrid", price: "$188", note: "浓密款" },
            { name: "Mink Customize Style", price: "$168+", note: "私人订制款式" },
            { name: "Sunflower Style", price: "$168+", note: "太阳花款式" },
            { name: "Anime Style", price: "$168+", note: "漫画款式" },
            { name: "Fox Style", price: "$168+", note: "狐系款式" },
            { name: "Thai Style", price: "$168+", note: "泰式款式" },
            { name: "Lower Lash", price: "$58", note: "下睫毛" },
            { name: "Eyelash Removal", price: "$15", note: "卸睫毛" },
          ]}
        />
        <PriceList
          title="Waxing 拔毛"
          items={[
            { name: "Back Waxing", price: "$48" },
            { name: "Bikini Waxing", price: "$88" },
            { name: "Brazilian Bikini", price: "$68" },
            { name: "Underarm Waxing", price: "$28" },
            { name: "Leg Waxing", price: "$48" },
            { name: "Arm Waxing", price: "$38" },
            { name: "Chin Waxing", price: "$8" },
            { name: "Eyebrow Waxing", price: "$15" },
          ]}
        />
      </section>
    </>
  );
}
