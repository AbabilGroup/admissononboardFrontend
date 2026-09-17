import React from "react";
import Image from "next/image";
import Link from "next/link";

// Place your image at: /public/whyadmission.png

const reasons = [
  {
    number: "01",
    title: "Clear Costs, Honest Advice",
    description:
      "See your onboarding fee and service charges upfront, with full clarity before your study abroad journey begins.",
  },
  {
    number: "02",
    title: "Complete A-Z Support",
    description:
      "From admission counselling to visa filing, we guide you through every stage, including interview prep and scholarship applications.",
  },
  {
    number: "03",
    title: "Fast, Stress-free Visa Filing",
    description:
      "Hand over your documents after consultation and let our team manage rapid visa processing on your behalf.",
  },
];

const stats = [
  { value: "100+", label: "University Partners" },
  { value: "15+", label: "Years Of Experience" },
  { value: "5,000+", label: "Students Placed" },
];

export default function WhyChose() {
  return (
    <section className="w-full bg-[#FFFEFA]">
      <div className="mx-auto container px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: heading + cards */}
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
              Why partner with{" "}
              <span className="text-[#E0483E]">Admission OnBoard</span>?
            </h2>

            <div className="mt-10 flex flex-col gap-5">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B1B1B] text-xs font-semibold text-white">
                      {reason.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#6B6B6B] sm:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-start justify-start gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-[#E0483E] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
              >
                Explore Programmes
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#E0483E] bg-white px-7 py-3.5 text-sm font-semibold text-[#E0483E] transition-colors hover:border-[#E0483E]"
              >
                Speak To An Advisor
              </Link>
            </div>
          </div>

          {/* Right: image with stats overlay */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/whyadmission.png"
                alt="Admission OnBoard consultant guiding students"
                width={640}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="mx-4 -mt-14 grid grid-cols-3 gap-4 rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur sm:mx-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-semibold text-[#1B1B1B] sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-[#6B6B6B] sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
