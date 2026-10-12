import Image from "next/image";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { InstagramFeed } from "@/components/InstagramFeed";
import { site } from "@/lib/site";

const services = [
  {
    href: "/manicure-pedicure",
    title: "Manicure / Pedicure",
    image: "/images/nails-hands.jpg",
  },
  {
    href: "/eyelash-wax",
    title: "Eyelash / Wax",
    image: "/images/cta-1.jpg",
  },
  {
    href: "/facial-spa",
    title: "Klapp Facial",
    image: "/images/cta-2.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[88vh] max-w-[1440px] items-center lg:grid-cols-[49%_51%]">
          <div className="relative z-10 px-5 py-16 sm:px-8 lg:py-20 lg:pr-24 lg:pl-12">
            <h1 className="sr-only">Nail Monster</h1>
            <Image
              src="/images/nail.png"
              alt=""
              width={628}
              height={235}
              priority
              className="mb-2 h-auto w-[52%] max-w-[300px] mix-blend-multiply"
            />
            <Image
              src="/images/monster.png"
              alt=""
              width={1272}
              height={247}
              priority
              className="mb-5 h-auto w-full max-w-[590px] mix-blend-multiply"
            />
            <CallButton invertHover className="mb-12 w-full sm:w-auto" />
            <div className="grid grid-cols-[40%_60%] items-center sm:grid-cols-[44%_56%]">
              <div className="flex items-center gap-2.5 pr-3">
                <span className="text-[10px] font-bold uppercase sm:text-[14px]">
                  Follow Us
                </span>
                <span className="h-px flex-1 bg-black" />
              </div>
              <div className="flex items-center gap-4 pl-3">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[#B4B4B4]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="transition-colors hover:text-[#B4B4B4]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 0 0-1.56 19.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v7A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[260px] self-stretch lg:min-h-full">
            <Image
              src="/images/hero.jpg"
              alt="Japanese nail art at Nail Monster"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 51vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-[linear-gradient(87deg,#ffffff_1%,rgba(255,255,255,0.23)_53%)]" />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-[760px] bg-white px-8 py-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:-mt-16">
        <p className="mb-3 text-[12px] font-light uppercase tracking-[0.22em]">
          About Nail Monster
        </p>
        <h2 className="page-title mb-6 text-[26px] leading-tight md:text-[34px]">
          For beautiful nails and a friendly smile
        </h2>
        <p className="mb-5 text-sm leading-7 font-light text-muted">
          Nail Monster is an upscale nail salon in Brookline, specialize in
          modern Japanese nail arts, manicure and pedicure service, beauty
          treatment, eyelash and wax.
        </p>
        <p className="mb-8 text-sm leading-7 font-light text-muted">
          Our mission is to redefine nail spa industry, delivering a high level
          of service with high-quality, non-toxic, natural and organic products
          and skills. We aim to build an environment embodied with funny,
          innovation, relaxing, professionalism, and above all total sanitation.
        </p>
        <CallButton />
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden bg-blush lg:min-h-[420px]">
            <Image
              src="/images/nail-arts.jpg"
              alt="Lavender gel manicure with gem accent"
              fill
              className="object-contain p-6"
            />
          </div>
          <div>
            <p className="script mb-2 text-[28px] text-navy">trending</p>
            <h2 className="page-title mb-6 text-[40px] leading-none md:text-[55px]">
              Nail Arts
            </h2>
            <p className="mb-8 max-w-md text-sm leading-7 font-light text-muted">
              Our Manicurists are specialized in designs of nails, and we carry
              tip extensions, French, Color gradient, Chrome powder, Blooming
              Nail Design, Luxury Accessary Design and Hand-painted design.
            </p>
            <Link
              href="/gallery"
              className="inline-block border-b border-black pb-1 text-[12px] font-medium uppercase tracking-[0.16em] hover:border-muted hover:text-muted"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1 lg:text-right">
            <p className="script mb-2 text-[28px] text-navy">trending</p>
            <h2 className="page-title mb-6 text-[36px] leading-none md:text-[52px]">
              KLAPP Facial SPA
            </h2>
            <p className="mb-8 text-sm leading-7 font-light text-muted lg:ml-auto lg:max-w-md">
              Klapp skin care is a pioneer in the world of beauty and stands for
              innovative cosmetic treatments ahead of their time. Years of
              experience in professional Skin Care including: Moisturizer
              Booster, C Pure Whitening, Beta Glucan Sensitive Calming, PSC Acne
              Treatment, Supreme Caviar Anti-Aging and Brightening Enzyme
              Therapy.
            </p>
            <Link
              href="/facial-spa"
              className="inline-block border-b border-black pb-1 text-[12px] font-medium uppercase tracking-[0.16em] hover:border-muted hover:text-muted"
            >
              View Treatments
            </Link>
          </div>
          <div className="relative order-1 min-h-[360px] overflow-hidden lg:order-2 lg:min-h-[420px]">
            <Image
              src="/images/facial.jpg"
              alt="KLAPP facial spa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-4 px-5 pb-20 md:grid-cols-3 lg:px-8">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group relative min-h-[375px] overflow-hidden"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#5A6C70]/50 transition-colors duration-500 group-hover:bg-[#5A6C70]/80" />
            <div className="relative flex h-full min-h-[375px] items-end p-10">
              <h3 className="page-title text-[22px] text-white">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </section>

      <InstagramFeed />
    </>
  );
}
