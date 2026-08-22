import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" />
      <section className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="page-title mb-6 text-xl">Contact</h2>
          <ul className="space-y-3 text-sm leading-7">
            <li>
              <a href={site.phoneHref} className="hover:text-navy">
                {site.phoneDisplay}
              </a>{" "}
              <span className="text-muted">({site.phoneAlt})</span>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-navy">
                {site.email}
              </a>
            </li>
            <li>WeChat: {site.wechat}</li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-navy"
              >
                {site.address}
              </a>
            </li>
          </ul>

          <h2 className="page-title mt-10 mb-4 text-xl">Opening Hours</h2>
          <ul className="space-y-2 text-sm text-muted">
            {site.hours.map((row) => (
              <li key={row.days}>
                {row.days} {row.time}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
