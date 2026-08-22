import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "FAQs" };

const faqs = [
  {
    q: "1. What is your cancellation policy?",
    a: "We understand that plans can change, but to stay on schedule and respect everyone’s time, we have a strict 24-hour cancellation policy. If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance. If you cancel or miss your appointment with less than 24 hours’ notice, your deposit will be forfeited. Deposits are non-refundable under these circumstances. We appreciate your understanding and cooperation.",
  },
  {
    q: "2. Running late?",
    a: "We get it—life happens! If you’re running late, please give us a call. We can hold your appointment for up to 10 minutes past your scheduled time, but after that, we may need to adjust or cancel your service depending on availability.",
  },
  {
    q: "3. Do you have parking on site?",
    a: "We do not have a private parking lot, but metered street parking is available nearby. There’s a parking lot behind our store on Babcock Street. Another parking lot is available behind the Japanese supermarket Maruichi, directly across from us. Please make sure to check the posted signs for parking regulations.",
  },
  {
    q: "4. What if my gels chip?",
    a: "We offer a 7-day guarantee for all gel services. If your gel manicure chips or lifts within 7 days due to external reasons, we are happy to fix the affected nails free of charge. Fixes must use the same color as your original appointment.",
  },
  {
    q: "5. How do you sterilize your tools?",
    a: "Your safety is our priority. All reusable tools (cuticle pushers, clippers, etc.) are cleaned with hospital-grade disinfectant, then sterilized in a medical-grade autoclave and sealed in individual pouches. These are opened in front of you at the beginning of your service. Single-use items (nail files, buffers, pumice stones, toe separators) are disposed of after each client.",
  },
  {
    q: "6. Do you take walk-ins?",
    a: "Yes, walk-ins are always welcome! However, availability is not guaranteed. We strongly recommend booking in advance to ensure your preferred time and technician.",
  },
  {
    q: "7. What forms of payment do you accept? Can I tip on my card?",
    a: "We accept cash, all major credit and debit cards, and Apple Pay. Yes, you may add gratuity to your credit or debit card at checkout.",
  },
  {
    q: "8. Do you charge for gel removal?",
    a: "Free if the gel was done at our salon and you’re getting a new gel service. $10 if switching to regular polish, or if gel was done elsewhere. $25 for structure gel, extensions, dipping powder, acrylic, or detailed nail art removal. Please let us know at the time of booking if removal is needed, so we can allocate enough time.",
  },
  {
    q: "9. Do you offer non-toxic nail polishes?",
    a: "Yes! We carry non-toxic and kid-safe options including Dazzle Dry and other gentle polish brands that are quick-drying, long-lasting, and free from harmful chemicals.",
  },
  {
    q: "10. What is structure gel? Do you offer it?",
    a: "Yes, we do offer structure gel (also known as builder gel). It’s a thicker, strengthening gel that reinforces your natural nails while remaining lightweight and flexible. Structure gel is great for clients with weak, peeling, or brittle nails, those trying to grow out their natural nails, and as a lighter, more natural alternative to extensions. Structure gel can be worn alone, under gel color, or with nail art. Please mention it when booking, as it requires extra time.",
  },
  {
    q: "11. Do you offer designs or custom nail art?",
    a: "Absolutely! We offer everything from minimalist styles to intricate hand-painted designs. You’re welcome to bring reference photos, and we’ll do our best to match the look. For detailed or complex art, please book in advance and let us know your design preference.",
  },
  {
    q: "12. Do you offer nail extensions?",
    a: "Yes, we offer gel extensions using structure gel and tips. They are strong, natural-looking, and a great alternative to acrylics. Pricing may vary depending on the length and complexity. Please request extensions when booking to allow extra time.",
  },
  {
    q: "13. Can I bring my own polish or design ideas?",
    a: "Yes! You’re welcome to bring your own polish or inspiration. We’ll do our best to accommodate, but please note that we cannot guarantee durability when using third-party products.",
  },
  {
    q: "14. What if I’m not satisfied with my nails?",
    a: "We want you to love your nails! If anything feels off, please let us know before you leave the salon, and we’ll make it right on the spot. If issues arise within 3 days of your visit, reach out and we’ll do our best to fix it.",
  },
  {
    q: "15. Do you offer group bookings or private parties?",
    a: "Yes! We welcome group bookings for birthdays, bridal showers, or special occasions. Please contact us in advance to arrange timing, team availability, and any special requests for your party.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero title="FAQs" />
      <section className="mx-auto max-w-[860px] px-5 py-16 lg:px-8">
        <div className="divide-y divide-line">
          {faqs.map((faq) => (
            <article key={faq.q} className="py-7">
              <h2 className="mb-3 text-[15px] font-medium uppercase tracking-[0.06em]">
                {faq.q}
              </h2>
              <p className="text-sm leading-7 font-light text-muted">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
