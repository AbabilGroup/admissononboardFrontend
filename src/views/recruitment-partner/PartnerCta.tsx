import Image from "next/image";
import Link from "next/link";

export default function PartnerCta() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 pt-24 pb-16 sm:pt-32">
      <div className="mx-auto container">
        <div className="relative">
          {/* Inner wrapper: No left padding so image touches the edge */}
          <div className="relative overflow-hidden rounded-3xl bg-[#161616] py-12 pr-8 sm:py-16 sm:pr-12">
            {/* Decorative Background SVGs */}
            <div className="pointer-events-none absolute inset-0">
              <svg
                className="absolute -left-10 top-0 h-full w-1/2 opacity-15"
                viewBox="0 0 300 300"
                fill="none"
              >
                <path
                  d="M40 40C90 0 220 10 260 70 300 130 260 220 190 260 120 300 20 280 0 210 -20 140 -10 80 40 40Z"
                  fill="#E0483E"
                />
              </svg>
              <svg
                className="absolute -right-6 -top-6 h-28 w-28 opacity-20 sm:h-40 sm:w-40"
                viewBox="0 0 200 200"
                fill="none"
              >
                <path
                  d="M30 60C60 10 150 0 180 50 210 100 170 170 110 180 50 190 0 150 10 100 15 80 20 70 30 60Z"
                  fill="#E0483E"
                />
              </svg>
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-end md:text-right md:pl-56 lg:pl-72">
              <div className="flex flex-col items-center md:items-end">
                <h2 className="text-3xl font-semibold leading-snug text-white sm:text-4xl">
                  Ready to Expand?
                </h2>
                <p className="mt-4 max-w-md text-sm text-white/70 sm:text-base">
                  Become one of hundreds of partners already working alongside
                  Admission OnBoard to help students take their next big step.
                </p>

                <Link
                  href="/auth/register?tab=partner"
                  className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#E0483E] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
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

          {/* Image Container: Made slightly wider so the image fills more space */}
          <div className="absolute bottom-0 left-0 h-[80%] w-[35%] sm:h-[85%] sm:w-[40%] md:h-[90%] md:w-[35%]">
            <Image
              src="/partnership.png"
              alt="Partner ready to help students grow"
              fill
              sizes="(max-width: 640px) 35vw, (max-width: 768px) 40vw, 35vw"
              // CHANGED: object-center instead of object-left
              // This crops the right side of the image instead of leaving empty space on the right
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
