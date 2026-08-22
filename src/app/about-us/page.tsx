import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About Us" };

const sections = [
  {
    title: "Clean & Sanitation",
    items: [
      "Hospital grade sanitation methods and sterilizing all metal tools",
      "All pedicure services are done with single use tools, such as the buffer, files and pumice stone.",
      "Installation of the ventilation station for the store and unique vacuum machine for each table.",
    ],
  },
  {
    title: "Our Team",
    items: [
      "Professional skills are the basic requirement of our store",
      "More creative and fashion insight",
      "More thoughtful service",
    ],
  },
  {
    title: "Mission",
    items: [
      "Delivery happiness and confidence through nails of art",
      "Everyone is unique and should be loved",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />
      <section className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          {sections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="page-title mb-4 text-[22px]">{section.title}</h2>
              <ul className="space-y-3 text-sm leading-7 font-light text-muted">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-navy" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/images/about.jpg"
            alt="Salon interior and nail work"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
