import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fadeUp =
  "animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none";

export default function HeroHome() {
  return (
    // Pulled up under the sticky header (80px mobile / 96px desktop) so the navbar floats over the image
    <section className="relative -mt-20 w-full overflow-hidden bg-[#F5F8FD] lg:-mt-24">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroImageIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroUnderline {
          from { stroke-dashoffset: 420; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Desktop height follows the image's 16:9 ratio, so text and image keep the same proportions at every width */}
      <div className="relative flex flex-col lg:aspect-[1672/941] lg:flex-row lg:items-center">
        {/* Background image (below text on mobile, full-bleed behind text on desktop) */}
        <div className="relative order-2 h-80 sm:h-[28rem] lg:absolute lg:inset-0 lg:h-full">
          <Image
            src="/Hero.png"
            alt="Student ready to study abroad with Admission OnBoard"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] animate-[heroImageIn_1.2s_ease-out_both] motion-reduce:animate-none lg:object-center"
          />
        </div>

        {/* Desktop: everything is sized in vw (via --s) and inset 5.4vw, so the text keeps the design's proportions to the full-bleed image at every width */}
        <div className="relative z-10 order-1 w-full px-4 pt-32 pb-8 lg:px-[5.4vw] lg:pt-[4.5vw] lg:pb-[1vw]">
          <div className="mx-auto w-full sm:max-w-[40rem] md:max-w-3xl lg:max-w-none lg:[--s:1vw]">
            <span
              className={`inline-flex items-center gap-3 rounded-full bg-[#E8F0FD] px-5 py-2.5 text-base font-semibold text-[#0A3FB8] lg:h-[calc(var(--s)*3.2)] lg:gap-[calc(var(--s)*1.1)] lg:px-[calc(var(--s)*1.6)] lg:py-0 lg:text-[max(0.875rem,calc(var(--s)*1.37))] ${fadeUp}`}>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-7 shrink-0 lg:h-[calc(var(--s)*1.9)] lg:w-[calc(var(--s)*2.3)]">
                <path
                  d="M12 4 2 9l10 5 10-5-10-5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 11.2v4.3c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.3M22 9v5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              Study Abroad
            </span>

            <h1 className="mt-6 text-[2.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#0B1533] sm:text-5xl lg:mt-[calc(var(--s)*2.6)] lg:text-[calc(var(--s)*3.9)] lg:leading-[1.16]">
              <span
                className={`lg:block lg:whitespace-nowrap ${fadeUp}`}
                style={{ animationDelay: "120ms" }}>
                The fastest and easiest way{" "}
              </span>
              <span
                className={`lg:block lg:whitespace-nowrap ${fadeUp}`}
                style={{ animationDelay: "240ms" }}>
                to successfully{" "}
                <span className="relative inline-block whitespace-nowrap text-[#0A4FE0]">
                  study abroad
                  {/* Hand-drawn underline that draws itself in */}
                  <svg
                    aria-hidden
                    viewBox="0 0 400 24"
                    preserveAspectRatio="none"
                    className="absolute -bottom-[0.32em] left-[0.05em] h-[0.3em] w-[98%]">
                    <path
                      d="M6 18 C 90 8, 200 6, 394 10 M150 12 c 4 -4, 10 -2, 8 6"
                      fill="none"
                      stroke="#0A4FE0"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="420"
                      className="animate-[heroUnderline_0.9s_cubic-bezier(0.65,0,0.35,1)_both] motion-reduce:animate-none"
                      style={{ animationDelay: "900ms" }}
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p
              className={`mt-8 max-w-[26em] text-lg leading-[1.55] text-[#4A5268] lg:mt-[calc(var(--s)*3)] lg:text-[max(1rem,calc(var(--s)*1.5))] ${fadeUp}`}
              style={{ animationDelay: "450ms" }}>
              Find the right university, get expert guidance, and turn your
              global education goals into reality.
            </p>

            <div
              className={`mt-8 flex flex-col gap-4 sm:flex-row lg:mt-[calc(var(--s)*4)] lg:gap-[calc(var(--s)*1.45)] ${fadeUp}`}
              style={{ animationDelay: "650ms" }}>
              <Link
                href="/auth/register"
                className="group inline-flex h-14 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#0A4FE0] px-8 text-lg font-semibold text-white shadow-lg shadow-[#0A4FE0]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#083FB5] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4FE0] focus-visible:ring-offset-2 lg:h-[max(2.75rem,calc(var(--s)*3.6))] lg:gap-[calc(var(--s)*1)] lg:px-[calc(var(--s)*2.4)] lg:text-[max(0.9375rem,calc(var(--s)*1.24))]">
                Register as a Student
                <ArrowIcon />
              </Link>
              <Link
                href="/recruitment-partner"
                className="group inline-flex h-14 items-center justify-center gap-3 whitespace-nowrap rounded-full border-[1.5px] border-[#0B1533] bg-white/70 px-8 text-lg font-semibold text-[#0B1533] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A4FE0] hover:bg-white hover:text-[#0A4FE0] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4FE0] focus-visible:ring-offset-2 lg:h-[max(2.75rem,calc(var(--s)*3.6))] lg:gap-[calc(var(--s)*1)] lg:px-[calc(var(--s)*2.4)] lg:text-[max(0.9375rem,calc(var(--s)*1.24))]">
                Join as a Recruitment Partner
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
