"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-[0_5px_10px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="/" className="relative block h-10 w-[148px] shrink-0">
          <Image
            src="/images/logo.png"
            alt="Nail Monster"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center xl:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-white/70 ${
                  active ? "text-white" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden border border-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-navy sm:inline-flex"
          >
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-white transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 h-[1.5px] w-full bg-white transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-white transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-navy xl:hidden">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/15 py-4 text-sm font-medium uppercase tracking-[0.16em]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-6 border border-white px-4 py-3 text-center text-xs uppercase tracking-[0.16em]"
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
