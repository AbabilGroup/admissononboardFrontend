import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: copy */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            About <span className="text-[#E0483E]">Us</span>
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
            <p>
              Admission OnBoard started with one simple idea: make studying
              abroad genuinely easy, not overwhelming.
            </p>
            <p>
              We connect students with top universities, cut through the
              confusion around admissions and visas, and bring every part of the
              journey under one roof.
            </p>
            <p>
              Today we're more than a consultancy, we're the bridge between
              ambition and opportunity, one student at a time.
            </p>
          </div>

          <Link
            href="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E0483E] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            Join Our Team
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

        {/* Right: image, distinct shape */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-4 -z-10 opacity-40 blur-2xl"
            style={{ background: "#F4A5A5" }}
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-lg">
            <Image
              src="/about.png"
              alt="Admission OnBoard team at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
