
import Image from "next/image";
import Link from "next/link";

// Place your image at: /public/services-consultant.png

export default function HeroServices() {
  return (
    <section className="w-full bg-[#FFFEFA]">
      <div className="mx-auto container flex flex-col items-center gap-12 px-6 py-20 md:flex-row md:gap-10 md:py-24">
        {/* Left: copy */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-6xl">
            Discover <span className="text-[#E0483E]">what we offer</span>,
            how it works, and how it changes your journey
          </h1>

          <p className="mt-6 max-w-md text-base text-[#6B6B6B] sm:text-lg">
            From personalized counselling to visa support, we cover every
            part of your study abroad experience, start to finish.
          </p>

          <Link
            href="/consultation"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#1B1B1B] bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
          >
            Schedule A Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
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

        {/* Right: image, basic */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/heroservice.png"
              alt="Study abroad consultant explaining services"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}