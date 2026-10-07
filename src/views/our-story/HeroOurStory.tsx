import React from "react";
import Image from "next/image";
import Link from "next/link";

// Place your background image at: /public/herostory.png

export default function HeroOurStory() {
  return (
    <section className="relative container mx-auto overflow-hidden py-10">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
        <Image
          src="/herostory.png"
          alt="Students studying together outdoors at sunset"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2417]/80 via-[#0F2417]/35 to-transparent" />

        <div className="relative z-10 flex h-full items-center px-6 sm:px-10 md:px-16">
          <div className="max-w-md">
            <h1 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              Making World-Class Education Within Reach
            </h1>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white/90 sm:text-base">
              From picking the perfect course to sailing through your visa, we
              walk beside you at every single step of the way.
            </p>

            <Link
              href="#about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] shadow-md transition-transform hover:scale-105"
            >
              Learn More
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
    </section>
  );
}
