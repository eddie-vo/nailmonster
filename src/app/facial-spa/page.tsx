import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PriceList } from "@/components/PriceList";

export const metadata: Metadata = { title: "Facial Spa" };

export default function FacialSpaPage() {
  return (
    <>
      <PageHero title="Facial Spa" />
      <section className="mx-auto max-w-[860px] px-5 py-16 lg:px-8">
        <PriceList
          title="KLAPP Basic Facial Spa"
          subtitle="Basic care for the skin"
          items={[
            {
              name: "KLAPP Moisturizer Booster",
              price: "$148",
              note: "Suitable for dry, tight, and aging skin. Powerful hydration treatment that can gently soothe tired skin. Contains unique ingredients such as aloe vera and vitamins to strengthen skin, protect skin from damage, form a protective layer of sebum film on the skin, deeply moisturize and energize skin, and even out the skin complexion.",
            },
            {
              name: "KLAPP 02 C Pure Bright Whitening",
              price: "$168",
              note: "Suitable for those with dark spots, dull skin, discoloration, and poor circulation. This treatment can increase skin oxygen content, improve dullness, brighten skin tone, inhibit melanin production, fade spots, and resist oxidation.",
            },
            {
              name: "KLAPP Beta Glucan Sensitive Repair",
              price: "$188",
              note: "Suitable for sensitive and skin suffering from allergic reactions. This beta glucan treatment can enhance skin defense, block allergens, promote wound healing, eliminate inflammation and quickly reduce redness. This treatment can activate langerhans cells to calm and reduce redness, resulting in enhanced repair.",
            },
            {
              name: "KLAPP PSC Acne Brighten Treatment",
              price: "$168",
              note: "Contains sebum conditioner ASEBIOL BT2 and salicylic acid, which can regulate sebum secretion and dredge sebaceous gland ducts, reducing acne formation. This biosulfur and allantoin treatment can sterilize and add anti-inflammatory effects to relieve skin discomfort and promote wound healing.",
            },
            {
              name: "KLAPP Anti-age Tighten Skin Care",
              price: "$218",
              note: "Suitable for aging, sagging, and inelastic skin. This treatment deeply penetrates the skin to adjust the balance of functional cells, promote metabolism, enhance skin repair and anti-aging defense mechanisms, and improve skin elasticity.",
            },
          ]}
        />
        <PriceList
          title="KLAPP Luxury Facial Spa"
          subtitle="Luxurious advanced treatments"
          items={[
            {
              name: "KLAPP Supreme Caviar Anti-Aging",
              price: "$328",
              note: "High-concentration deep-sea caviar extract increases energy supply for aging cells, stimulates regeneration and repairs damaged cell membranes, promotes hyaluronic acid synthesis, improves sensitivity and enhances anti-aging properties. Efficacy: increase cell energy, activate skin repair, balance water loss, reduce fine lines, lift skin, and reshape firm facial contours.",
            },
            {
              name: "KLAPP Brightening Enzyme Therapy",
              price: "$388",
              note: "Relieves pigment metabolism disorders caused by internal and external factors, with vitamin C concentrate and warm hydrolysis to decompose and inhibit melanin precipitation, provide anti-oxidation properties, stimulate collagen production to tighten skin structure, restore skin brightness and clarity, refine pores, and fade dark spots.",
            },
          ]}
        />
      </section>
    </>
  );
}
