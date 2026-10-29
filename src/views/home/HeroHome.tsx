import Image from "next/image";
import Link from "next/link";

const headline = ["Turn your overseas", "education vision into"];

export default function HeroHome() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F8FE]">
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
          from { stroke-dashoffset: 220; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="relative flex flex-col lg:block lg:aspect-3/1 lg:min-h-[560px] lg:w-full">
        {/* Background image (below text on mobile, full-bleed behind text on desktop) */}
        <div className="relative order-2 h-72 sm:h-96 lg:absolute lg:inset-0 lg:h-full">
          <Image
            src="/Hero.png"
            alt="Student ready to study abroad with Admission OnBoard"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] animate-[heroImageIn_1.2s_ease-out_both] motion-reduce:animate-none lg:object-center"
          />
        </div>

        {/* Text sits on the empty sky area on the left of the image */}
        <div className="relative z-10 order-1 px-6 pt-14 pb-8 sm:px-10 lg:flex lg:h-full lg:w-[46%] lg:items-center lg:py-0 lg:pb-[2%] lg:pl-[5%] lg:pr-0">
          <div>
            <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-[#0F1B3D] sm:text-5xl lg:text-[clamp(2rem,3vw,4rem)]">
              {headline.map((line, i) => (
                <span
                  key={line}
                  className="block animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {line}
                </span>
              ))}
              <span
                className="block animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
                style={{ animationDelay: "240ms" }}
              >
                <span className="relative inline-block text-[#3DB94A]">
                  reality
                  {/* Hand-drawn underline that draws itself in */}
                  <svg
                    aria-hidden
                    viewBox="0 0 200 20"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-[95%]"
                  >
                    <path
                      d="M4 12 C 50 4, 120 4, 196 9 M30 16 C 80 10, 130 11, 170 14"
                      fill="none"
                      stroke="#3DB94A"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="220"
                      className="animate-[heroUnderline_0.9s_cubic-bezier(0.65,0,0.35,1)_both] motion-reduce:animate-none"
                      style={{ animationDelay: "900ms" }}
                    />
                  </svg>
                </span>{" "}
                with
              </span>
              <span
                className="mt-1 block animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both] text-[#1366E0] motion-reduce:animate-none"
                style={{ animationDelay: "360ms" }}
              >
                Admission OnBoard
              </span>
            </h1>

            <p
              className="mt-5 max-w-xl text-base text-[#3B4660] animate-[heroFadeUp_0.8s_ease-out_both] motion-reduce:animate-none sm:text-lg lg:mt-[1.5vw] lg:text-[clamp(1rem,1.2vw,1.4rem)]"
              style={{ animationDelay: "450ms" }}
            >
              Guided by specialists, connected to leading universities, and
              supported at every step of the journey.
            </p>

            <div
              className="animate-[heroFadeUp_0.8s_ease-out_both] motion-reduce:animate-none"
              style={{ animationDelay: "600ms" }}
            >
              <Link
                href="/contact"
                className="group mt-8 lg:mt-[2vw] inline-flex items-center gap-2 rounded-full bg-[#1366E0] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1366E0]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F55BE] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1366E0] focus-visible:ring-offset-2"
              >
                Schedule A Free Consultation
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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

            {/* Experience badge */}
            <div
              className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-md shadow-[#1366E0]/10 backdrop-blur-sm animate-[heroFadeUp_0.8s_ease-out_both] motion-reduce:animate-none lg:mt-[1.8vw]"
              style={{ animationDelay: "750ms" }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1366E0] text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-2xl font-bold text-[#0F1B3D]">10+ Years</span>
                <span className="block text-sm font-medium text-[#3B4660]">Experience</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
