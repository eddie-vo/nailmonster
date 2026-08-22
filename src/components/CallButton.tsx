"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function CallButton({
  className = "",
  invertHover = false,
}: {
  className?: string;
  invertHover?: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={site.phoneHref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`inline-flex items-center justify-center border px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors ${
        invertHover
          ? "border-navy bg-navy text-white hover:bg-transparent hover:text-black"
          : "border-black bg-transparent text-black hover:border-muted hover:text-muted"
      } ${className}`}
    >
      {hover ? site.phoneDisplay : "Call For Appointment"}
    </a>
  );
}
