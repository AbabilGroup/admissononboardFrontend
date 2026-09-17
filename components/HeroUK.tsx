import Image from "next/image";
import Link from "next/link";

// Place your background image at: /public/uk-hero.avif

const stats = [
  { value: "150+", label: "Universities" },
  { value: "GBP 12K to 25K", label: "Annual Tuition Fees" },
  { value: "2 years", label: "Post Study Work" },
];

export default function HeroUK() {
  return (
    <section className="relative container mx-auto py-10">
      <div className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
          <Image
            src="/uk-hero.avif"
            alt="Tower Bridge, United Kingdom"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          {/* Gradient overlay fading from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e62d3f] via-[#e62d3f]/50 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-center px-6 pb-16 sm:px-10 md:px-16">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              United Kingdom
            </h1>

            <p className="mt-4 max-w-md text-sm font-semibold leading-relaxed text-white/90 sm:text-base">
              Study in the United Kingdom with Admission OnBoard. Get expert
              guidance on admissions, scholarships, and visa support for a
              smooth study abroad journey.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] shadow-md transition-transform hover:scale-105"
            >
              Free Expert Consultation
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

        {/* Stat bar overlapping the bottom edge of the image, hanging outside it */}
        <div className="absolute inset-x-4 bottom-0 z-10 translate-y-1/2 rounded-2xl bg-white/70 px-6 py-5 shadow-lg backdrop-blur-md sm:inset-x-10">
          <div className="grid grid-cols-1 divide-y divide-[#1B1B1B]/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 py-3 first:pt-0 sm:px-6 sm:py-0 sm:first:pl-0"
              >
                <span className="text-lg font-bold text-[#1B1B1B] sm:text-xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-[#6B6B6B] sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
