"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Place your image at: /public/destination.jfif

export default function CountryHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = [
    "Discover Your Ideal.",
    "Study Destination.",
    "Built Around You.",
  ];

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "5,000+", label: "Students Placed" },
    { value: "100+", label: "University Partners" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFEFA] px-5 py-10 text-[#1B1B1B] md:px-14">
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-120px)] items-center">
        <div className="relative w-full">
          <div
            className={`absolute right-0 top-1/2 hidden h-[72vh] w-[67%] -translate-y-1/2 overflow-hidden rounded-[2rem] shadow-xl transition-all duration-[1200ms] ease-out lg:block ${
              mounted
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-24 scale-95 opacity-0"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src="/desination.png"
                alt="Students exploring study abroad opportunities"
                fill
                sizes="67vw"
                className="object-cover"
                priority
              />
            </div>

            {/* <div className="absolute bottom-0 right-0 max-w-sm rounded-[2rem] border border-white/20 bg-white/40 p-6 backdrop-blur-xl">
              <h3 className="mt-3 text-3xl font-semibold uppercase leading-none tracking-[-0.05em] text-[#E0483E]">
                students first, guidance smarter
              </h3>
            </div> */}

            <Link
              href="/contact"
              aria-label="Schedule a free consultation"
              className="absolute right-8 top-8 grid h-16 w-16 place-items-center rounded-full border border-white/70 bg-[#1B1B1B]/60 text-3xl text-white backdrop-blur-xl transition-colors hover:bg-[#E0483E] hover:border-[#E0483E]"
            >
              ↗
            </Link>
          </div>

          {/* Left content */}
          <div className="relative z-20 max-w-5xl">
            <div className="space-y-1">
              {title.map((line, index) => (
                <div key={line} className="overflow-hidden pb-1">
                  <h1
                    className={`text-3xl font-semibold leading-[1] tracking-[-0.01em] transition-all duration-700 ease-out md:text-5xl ${
                      index === 1 ? "text-[#E0483E]" : "text-[#1B1B1B]"
                    } ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <p
              className={`mt-8 max-w-xl text-base leading-8 text-[#000000] bg-white/50 transition-all duration-700 ease-out md:text-lg ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "420ms" }}
            >
              We connect ambitious students with leading universities abroad,
              guiding you from your first enquiry through to the day you land on
              campus, wherever in the world that may be.
            </p>

            <div
              className={`mt-10 flex items-center gap-5 transition-all duration-700 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "540ms" }}
            >
              <Link
                href="/our-story"
                className="grid h-16 w-16 place-items-center rounded-full border border-[#E0483E] text-3xl text-[#E0483E] transition-all duration-500 hover:scale-110 hover:bg-[#E0483E] hover:text-white md:h-20 md:w-20 md:text-4xl"
              >
                ↗
              </Link>

              <div>
                <h4 className="text-base font-semibold uppercase tracking-wide text-[#1B1B1B] md:text-lg">
                  Read our story
                </h4>
                <p className="mt-1 text-sm text-[#9A9A9A]">
                  Built on trust, students, and progress
                </p>
              </div>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-[1.4rem] border border-[#ECECEC] bg-white p-5 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#E0483E]/40 hover:shadow-md ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${660 + index * 120}ms` }}
                >
                  <h3 className="text-2xl font-black text-[#E0483E]">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile image (shown below content on small screens) */}
          <div className="relative z-20 h-[340px] overflow-hidden rounded-2xl shadow-xl lg:hidden">
            <Image
              src="/desination.png"
              alt="Students exploring study abroad opportunities"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
