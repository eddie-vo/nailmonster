export const site = {
  name: "Nail Monster",
  tagline: "For beautiful nails and a friendly smile",
  phoneDisplay: "857-340-8898",
  phoneAlt: "857-326-8888",
  phoneHref: "tel:8573408898",
  email: "nailmonster2022@gmail.com",
  wechat: "nailmonster2022",
  address: "327 Harvard St, Brookline, MA 02446",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=327+Harvard+St+Brookline+MA+02446",
  instagram: "https://www.instagram.com/nailmonsterboston/",
  instagramHandle: "nailmonsterboston",
  facebook: "https://www.facebook.com/profile.php?id=100091497747918",
  giftCardUrl:
    "https://www.fresha.com/a/nail-monster-brookline-327-harvard-street-td3pja5r/gift-cards?pId=764868",
  hours: [
    { days: "Monday – Saturday", time: "10:30am – 7:30pm" },
    { days: "Sunday", time: "10:30am – 6:30pm" },
  ],
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem =
  | ({ type: "link" } & NavLink)
  | {
      type: "dropdown";
      label: string;
      href?: string;
      items: NavLink[];
    };

export const nav: NavItem[] = [
  {
    type: "dropdown",
    label: "Price List",
    href: "/pricelist",
    items: [
      { label: "Nail Services", href: "/pricelist" },
      { label: "Facial Spa", href: "/facial-spa" },
      { label: "Eyelash/ Wax", href: "/eyelash-wax" },
    ],
  },
  {
    type: "link",
    label: "Gift Card",
    href: site.giftCardUrl,
    external: true,
  },
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "FAQs", href: "/faqs" },
      { label: "About Us", href: "/about-us" },
    ],
  },
  { type: "link", label: "Gallery", href: "/gallery" },
  { type: "link", label: "Reservation", href: "/reservation" },
  { type: "link", label: "News", href: "/news" },
  { type: "link", label: "Contact", href: "/contact" },
];

export function flattenNav(items: NavItem[] = nav): NavLink[] {
  const links = items.flatMap((item) => {
    if (item.type === "link") {
      return [{ label: item.label, href: item.href, external: item.external }];
    }

    const parent = item.href
      ? [{ label: item.label, href: item.href }]
      : [];
    return [...parent, ...item.items];
  });

  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

export const galleryImages = Array.from({ length: 114 }, (_, i) => {
  const n = String(i + 1).padStart(3, "0");
  return `/images/gallery/${n}.jpg`;
});
