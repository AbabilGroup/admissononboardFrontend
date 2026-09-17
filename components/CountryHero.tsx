import Image from "next/image";
import Link from "next/link";

// Place your image at: /public/country-hero-graduate.png

export default function CountryHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFEFA]">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "#F4A5A5" }}
      />

      <div className="relative mx-auto container flex flex-col items-center gap-12 px-6 py-20 md:flex-row md:gap-8 md:py-24">
        {/* Left: copy */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-[#1B1B1B]">Discover Your Ideal</span>
            <br />
            <span className="text-[#E0483E]">Study Destination</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-[#6B6B6B] sm:text-lg">
            Uncover education opportunities across leading countries worldwide.
            From Canada to South Korea, we&apos;ll help you find the destination
            that truly fits you.
          </p>

          <Link
            href="/consultation"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#1B1B1B] bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
          >
            Schedule A Free Consultation
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

        {/* Right: image */}
        <div className="relative w-full md:w-1/2">
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="absolute inset-0 rounded-full" />
            <Image
              src="/heroadmission.png"
              alt="Graduate celebrating their study abroad success"
              fill
              sizes="(max-width: 768px) 80vw, 420px"
              className="relative rounded-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
