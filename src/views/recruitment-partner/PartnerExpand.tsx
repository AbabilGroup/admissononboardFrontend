import Image from "next/image";
import Link from "next/link";

// Place your image at: /public/partner-handshake.jpg

export default function PartnerExpand() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
            Grow Alongside Top-Tier Universities
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
            <p>
              At Admission OnBoard, we link your business to internationally
              recognized universities so you can widen your reach and help more
              students succeed. Reliable partnerships and a smooth process mean
              your students get a real shot at top academic institutions
              worldwide.
            </p>
            <p>
              Whether you run an agency or an education consultancy, we give you
              the support and resources to scale. Come on board and become part
              of a global network built on trust, growth, and genuine
              opportunity.
            </p>
          </div>

          <Link
            href="/auth/register?tab=partner"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E0483E] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            Partner With Us
          </Link>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          <Image
            src="/partner-handshake.png"
            alt="Partners shaking hands"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
