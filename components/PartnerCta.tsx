import Image from "next/image";
import Link from "next/link";

export default function PartnerCta() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-16">
      <div className="mx-auto container">
        <div className="relative pt-16 sm:pt-20">
          <div className="relative flex items-center justify-end overflow-hidden rounded-3xl bg-[#161616] py-10 pl-8 pr-8 sm:py-14 sm:pl-12 sm:pr-12">
            <svg
              className="pointer-events-none absolute -left-10 top-0 h-full w-1/2 opacity-15"
              viewBox="0 0 300 300"
              fill="none"
            >
              <path
                d="M40 40C90 0 220 10 260 70 300 130 260 220 190 260 120 300 20 280 0 210 -20 140 -10 80 40 40Z"
                fill="#E0483E"
              />
            </svg>
            <svg
              className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 opacity-20 sm:h-40 sm:w-40"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M30 60C60 10 150 0 180 50 210 100 170 170 110 180 50 190 0 150 10 100 15 80 20 70 30 60Z"
                fill="#E0483E"
              />
            </svg>

            <div className="relative z-10 max-w-5xl flex text-right sm:pl-56 md:pl-64">
              <div className="flex flex-col items-end justify-end">
                <h2 className="text-2xl font-semibold leading-snug text-white sm:text-4xl">
                  Ready to Expand?
                </h2>
                <p className="mt-3 text-sm text-white/70 sm:text-base">
                  Become one of hundreds of partners already working alongside
                  Admission OnBoard to help students take their next big step.
                </p>

                <Link
                  href="/auth/register?tab=partner"
                  className="mt-7 w-fit inline-flex items-end justify-end gap-2 rounded-full bg-[#E0483E] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
                >
                  Register as a Partner
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute left-6 top-0 h-40 w-32 sm:left-10 sm:h-56 sm:w-44 md:h-64 md:w-52">
            <Image
              src="/counselor.png"
              alt="Partner ready to help students grow"
              fill
              sizes="220px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
