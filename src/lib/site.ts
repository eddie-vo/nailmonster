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
  hours: [
    { days: "Monday – Saturday", time: "10:30am – 7:30pm" },
    { days: "Sunday", time: "10:30am – 6:30pm" },
  ],
};

export const nav = [
  { href: "/pricelist", label: "Price List" },
  { href: "/manicure-pedicure", label: "Nail Services" },
  { href: "/facial-spa", label: "Facial Spa" },
  { href: "/eyelash-wax", label: "Eyelash / Wax" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about-us", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservation", label: "Reservation" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const galleryImages = Array.from({ length: 36 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/gallery/${n}.jpg`;
});
