import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Reservation" };

export default function ReservationPage() {
  return (
    <>
      <PageHero title="Reservation" />
      <section className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="text-sm leading-7 font-light text-muted">
          <p className="mb-5">Dear valued Nail Monster Customers,</p>
          <p className="mb-5">
            Nail Monster will be changing our “Cancelation/Reschedule Policy”.
            Beginning October 1st, customers will be required to notify the nail
            technician a minimum of 24 hours prior to their scheduled
            appointment if they will not be able to make it or need to
            reschedule. We are making these changes to better support other
            customers who are looking to be serviced and protect our salon as
            they do depend on you arriving on time to your appointment.
          </p>
          <p className="mb-4 font-medium text-ink uppercase tracking-[0.08em]">
            Our Policy
          </p>
          <p className="mb-5">
            We require a minimum of TWENTY FOUR HOURS notice prior to canceling
            or rescheduling your appointment.
          </p>
          <p className="mb-5">
            Please understand that when you forget or cancel your appointment
            without giving enough notice, we miss the opportunity to fill that
            appointment time for our nail technician. Late notice cancellations
            and no-shows will be charged the full amount of the reservation fee.
          </p>
          <p className="mb-5">
            A valid credit or debit card is needed to reserve your appointment.
            A charge will only be applied in the event of a no-show, late
            cancellation and tardiness.
          </p>
          <p className="mb-8">
            Warm regards,
            <br />
            Nail Monster Management
          </p>
          <p className="mb-5">
            To schedule an appointment, complete the request form. A deposit of
            $30 per individual is required. After submitting, please call{" "}
            <a href={site.phoneHref} className="text-navy">
              {site.phoneDisplay}
            </a>{" "}
            to specify your desired time and style preferences and complete the
            deposit.
          </p>
          <p>Walk-ins are welcomed.</p>
        </div>
        <div>
          <h2 className="page-title mb-6 text-xl">Request an appointment</h2>
          <ContactForm submitLabel="Request Reservation" extraFields />
        </div>
      </section>
    </>
  );
}
