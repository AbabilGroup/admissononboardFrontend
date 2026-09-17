import React from "react";
import Image from "next/image";

// Place your image at: /public/mission-students.jpg

const pillars = [
  {
    title: "Free For Every Student",
    description:
      "From your first question to the day you enrol, our guidance never comes with a price tag.",
  },
  {
    title: "Honest, Unbiased Advice",
    description:
      "We recommend what actually fits you, not just the universities we happen to partner with.",
  },
  {
    title: "Local Care, Global Reach",
    description:
      "Counsellors across South Asia, the Middle East and Europe, backed by one coordinated team.",
  },
  {
    title: "Decades Of Trust",
    description:
      "Years of experience placing students into the universities they once thought were out of reach.",
  },
];

export default function OurMission() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
              Our Mission
            </h2>

            <blockquote className="mt-6 border-l-4 border-[#E0483E] pl-5 text-base italic leading-relaxed text-[#3B3B3B] sm:text-lg">
              To close the distance between ambitious students and the world's
              leading universities, so quality education is never out of reach.
            </blockquote>

            <p className="mt-5 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Our students come from every corner of the world, South Asia, the
              Middle East, Africa and Europe alike. Every recommendation we make
              is honest and never limited to a fixed list of partners, and our
              support stays completely free from your first message to the day
              you enrol.
            </p>
          </div>

          {/* Right: image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/mission-students.png"
              alt="Diverse group of students on campus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* What we stand for */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold tracking-tight text-[#1B1B1B] sm:text-3xl">
            What We Stand For
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border-t-4 border-[#E0483E] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h4 className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
