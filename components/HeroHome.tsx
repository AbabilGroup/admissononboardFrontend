import Image from "next/image";
import Link from "next/link";

const headline = ["Turn your overseas education", "vision into reality with"];

export default function HeroHome() {
  return (
    <section className="w-full overflow-hidden bg-[#FFFEFA]">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroImageIn {
          from { opacity: 0; transform: translateX(40px) scale(0.94); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes heroUnderline {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes heroGlow {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="mx-auto flex container flex-col items-center gap-12 px-6 py-20 md:flex-row md:gap-10 md:py-18">
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-5xl">
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
              className="relative inline-block animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both] text-[#E0483E] motion-reduce:animate-none"
              style={{ animationDelay: "240ms" }}
            >
              Admission OnBoard
              {/* Underline that draws itself in */}
              {/* <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[5px] w-full origin-left rounded-full bg-[#E0483E]/25 animate-[heroUnderline_0.9s_cubic-bezier(0.65,0,0.35,1)_both] motion-reduce:animate-none"
                style={{ animationDelay: "900ms" }}
              /> */}
            </span>
          </h1>

          <p
            className="mt-6 max-w-md text-base text-[#6B6B6B] animate-[heroFadeUp_0.8s_ease-out_both] motion-reduce:animate-none sm:text-lg"
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
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-[#1B1B1B] bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B1B1B] hover:text-white hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483E] focus-visible:ring-offset-2"
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
        </div>

        {/* Right: image */}
        <div className="relative w-full md:w-1/2">
          {/* Soft glow behind the image */}
          <div
            aria-hidden
            className="absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-[#E0483E]/10 blur-3xl animate-[heroGlow_1.2s_ease-out_both] motion-reduce:animate-none"
            style={{ animationDelay: "200ms" }}
          />
          <Image
            src="/hero.jpeg"
            alt="Graduate celebrating academic success"
            width={580}
            height={580}
            className="relative mx-auto h-auto w-full max-w-[520px] object-contain animate-[heroImageIn_1s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
            style={{ animationDelay: "300ms" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
