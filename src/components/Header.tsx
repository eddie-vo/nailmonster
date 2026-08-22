"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, type NavItem, type NavLink } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavItemActive(pathname: string, item: NavItem) {
  if (item.type === "link") {
    return !item.external && isActive(pathname, item.href);
  }

  if (item.href && isActive(pathname, item.href)) {
    return true;
  }

  return item.items.some((child) => isActive(pathname, child.href));
}

function NavAnchor({
  link,
  className,
  onNavigate,
}: {
  link: NavLink;
  className: string;
  onNavigate?: () => void;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className} onClick={onNavigate}>
      {link.label}
    </Link>
  );
}

function Caret({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
      className={`h-2 w-2 fill-current transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M0 0l5 6 5-6z" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (active: boolean) =>
    `inline-flex items-center gap-1 px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-white/70 ${
      active ? "text-white" : "text-white/90"
    }`;

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
            if (item.type === "link") {
              return (
                <NavAnchor
                  key={item.label}
                  link={item}
                  className={linkClass(isNavItemActive(pathname, item))}
                />
              );
            }

            const active = isNavItemActive(pathname, item);

            return (
              <div key={item.label} className="group relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`${linkClass(active)} after:absolute after:bottom-1 after:left-2.5 after:h-px after:w-0 after:bg-white after:transition-all group-hover:after:w-[calc(100%-1.25rem)]`}
                  >
                    {item.label}
                    <Caret />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={linkClass(active)}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <Caret />
                  </button>
                )}

                <div className="invisible absolute top-full left-0 min-w-[200px] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <ul className="border border-black/5 bg-white py-2 shadow-lg">
                    {item.items.map((child) => (
                      <li key={child.href}>
                        <NavAnchor
                          link={child}
                          className={`block px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-black transition-colors hover:bg-black/5 hover:text-navy ${
                            isActive(pathname, child.href) ? "text-navy" : ""
                          }`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
            {nav.map((item) => {
              if (item.type === "link") {
                return (
                  <NavAnchor
                    key={item.label}
                    link={item}
                    onNavigate={() => setOpen(false)}
                    className="border-b border-white/15 py-4 text-sm font-medium uppercase tracking-[0.16em]"
                  />
                );
              }

              const isExpanded = expanded === item.label;

              return (
                <div key={item.label} className="border-b border-white/15">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-sm font-medium uppercase tracking-[0.16em]"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpanded((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  >
                    <span>{item.label}</span>
                    <Caret open={isExpanded} />
                  </button>
                  {isExpanded ? (
                    <ul className="pb-3 pl-4">
                      {item.items.map((child) => (
                        <li key={child.href}>
                          <NavAnchor
                            link={child}
                            onNavigate={() => setOpen(false)}
                            className="block py-2 text-sm text-white/80 uppercase tracking-[0.14em]"
                          />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
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
