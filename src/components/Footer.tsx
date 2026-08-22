import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="relative mb-5 h-12 w-[180px]">
            <Image
              src="/images/logo.png"
              alt="Nail Monster"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/80">
            Upscale Japanese and Korean nail arts, manicure, pedicure, eyelash,
            wax, and KLAPP facial spa in Brookline.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em]">
            Opening Hours
          </h3>
          <ul className="space-y-2 text-sm text-white/85">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-6 md:block">
                <span className="block">{row.days}</span>
                <span className="text-white/70">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em]">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phoneDisplay}
              </a>
              <span className="text-white/55"> ({site.phoneAlt})</span>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>WeChat: {site.wechat}</li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {site.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 text-[11px] uppercase tracking-[0.14em] text-white/60 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Nail Monster</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {nav.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
