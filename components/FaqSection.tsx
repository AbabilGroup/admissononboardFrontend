"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

// Left-side photo in
const FAQ_IMAGE = "/faq.png";

type Faq = {
  question: string;
  answer: ReactNode;
  color: string;
  icon: ReactNode;
};

const faqs: Faq[] = [
  {
    question: "Where should I begin my study abroad journey?",
    answer:
      "Start with a free consultation. We'll review your academic background, budget, and goals, then map out the countries and programs that genuinely fit before you spend a single dollar on applications.",
    color: "#22A55B",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.5 6.5-2 5-5 2 2-5 5-2Z" />
    ),
  },
  {
    question: "Which countries can you help me apply to?",
    answer:
      "We work across the UK, Canada, Australia, New Zealand, the USA, and a growing list of European destinations including Malta, Hungary, and Cyprus, matching you to universities with strong placement records.",
    color: "#2F6FE4",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-2.9a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8ZM12 4a13.6 13.6 0 0 1 1.9 4h-3.8A13.6 13.6 0 0 1 12 4ZM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3Zm.8 2H8a15.7 15.7 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16ZM8 8H5.1a8 8 0 0 1 4.3-3.6A15.7 15.7 0 0 0 8 8Zm4 12a13.6 13.6 0 0 1-1.9-4h3.8A13.6 13.6 0 0 1 12 20Zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4Zm.3 5.6A15.7 15.7 0 0 0 16 16h2.9a8 8 0 0 1-4.3 3.6Zm1.7-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4Z" />
    ),
  },
  {
    question: "Is an English proficiency test like IELTS mandatory?",
    answer:
      "It depends on the university and your prior education. Many institutions accept alternatives like PTE or Duolingo, and some waive it entirely for applicants with an English-medium academic background.",
    color: "#F0642E",
    icon: (
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 12v2h8v-2H8Zm0 4v2h6v-2H8Z" />
    ),
  },
  {
    question: "How much time does the whole application process take?",
    answer:
      "On average, six to twelve weeks from document submission to offer letter, though timelines shift depending on the country, intake season, and how quickly required documents are ready.",
    color: "#8B5CF6",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.6l3.7 2.2-1 1.7L11 12.7V7h2Z" />
    ),
  },
  {
    question: "What paperwork is required for my application?",
    answer:
      "Typically academic transcripts, a valid passport, financial statements, a statement of purpose, and letters of recommendation. We give you a checklist tailored to your specific university before you start.",
    color: "#22A55B",
    icon: (
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM10.6 17.4l5.6-5.6-1.4-1.4-4.2 4.2-1.8-1.8-1.4 1.4 3.2 3.2Z" />
    ),
  },
  {
    question: "Will you assist me with the visa process?",
    answer:
      "Yes, end to end. From compiling financial documents to preparing you for the visa interview, our team stays with you until your visa is approved and your travel is confirmed.",
    color: "#2F6FE4",
    icon: (
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    ),
  },
  {
    question: "How much should I budget for studying overseas?",
    answer:
      "Costs vary widely by country and course, but we provide a transparent breakdown covering tuition, living expenses, and our service fees upfront, so there are no surprises later.",
    color: "#F08A24",
    icon: (
      <path d="M12 2C7 2 3 3.8 3 6s4 4 9 4 9-1.8 9-4-4-4-9-4ZM3 9v3c0 2.2 4 4 9 4s9-1.8 9-4V9c0 2.2-4 4-9 4s-9-1.8-9-4Zm0 6v3c0 2.2 4 4 9 4s9-1.8 9-4v-3c0 2.2-4 4-9 4s-9-1.8-9-4Z" />
    ),
  },
  {
    question: "Do you help with housing and settling in after arrival?",
    answer:
      "Absolutely. We connect you with verified accommodation options before departure and offer post-arrival support so your first weeks abroad feel manageable, not overwhelming.",
    color: "#8B5CF6",
    icon: <path d="M12 3 2 11h3v9h5v-6h4v6h5v-9h3L12 3Z" />,
  },
];

const advisors = [
  { initials: "SA", color: "#22A55B" },
  { initials: "TH", color: "#2F6FE4" },
  { initials: "NJ", color: "#F08A24" },
  { initials: "AS", color: "#8B5CF6" },
];

function AdvisorCard() {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-[#2F6FE4]/10 backdrop-blur-xl">
      <div className="flex -space-x-2">
        {advisors.map((a) => (
          <span
            key={a.initials}
            className="grid h-9 w-9 place-items-center rounded-full text-[11px] font-bold text-white ring-2 ring-white"
            style={{ backgroundColor: a.color }}
          >
            {a.initials}
          </span>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-bold text-[#1B1B1B]">
        Still have questions?
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
        Our education experts are here to help you at every step of your
        journey.
      </p>
      <Link
        href="/contact"
        className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#E0483E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E0483E]/30 transition-all hover:-translate-y-0.5 hover:bg-[#C93C33]"
      >
        Speak to an advisor
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14m0 0-6-6m6 6-6 6"
          />
        </svg>
      </Link>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#FFFEFA]">
      <div className="mx-auto container px-4 py-16 sm:px-6 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E0483E]">
            <span className="h-px w-10 bg-[#E0483E]/40" />
            FAQ
            <span className="h-px w-10 bg-[#E0483E]/40" />
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#13213C] sm:text-4xl lg:text-5xl">
            Answers to your common{" "}
            <span className="text-[#E0483E]">questions</span>
          </h2>
          <p className="mt-3 text-sm text-[#5A6478] sm:text-base">
            Have doubts? We&apos;ve got answers. Browse what students ask us
            most before studying overseas.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          {/* Left: photo with floating bubble + advisor card */}
          <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-[#2F6FE4]/10 ring-1 ring-black/5 sm:h-[28rem] lg:h-auto lg:min-h-[600px]">
            <Image
              src={FAQ_IMAGE}
              alt="Smiling student holding books, ready to study abroad"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[22%_center]"
            />

            {/* <span className="absolute right-5 top-5 rotate-6 rounded-2xl bg-white px-4 py-2.5 text-sm font-extrabold leading-tight text-[#13213C] shadow-lg">
              Got
              <br />
              questions<span className="text-[#E0483E]">?</span>
            </span> */}

            {/* <div className="absolute inset-x-5 bottom-5 hidden lg:block">
              <AdvisorCard />
            </div> */}
          </div>

          {/* Right: questions */}
          <ul className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              const id = `faq-${index}`;
              return (
                <li
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border border-white bg-white/90 shadow-sm backdrop-blur-md transition-shadow ${
                    open ? "shadow-lg shadow-black/5" : "hover:shadow-md"
                  }`}
                  style={{ borderLeft: `4px solid ${faq.color}` }}
                >
                  <button
                    type="button"
                    id={`${id}-button`}
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                      style={{
                        backgroundColor: `${faq.color}1A`,
                        color: faq.color,
                      }}
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        fillRule="evenodd"
                        aria-hidden
                      >
                        {faq.icon}
                      </svg>
                    </span>
                    <span className="flex-1 text-sm font-semibold text-[#13213C] sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        open
                          ? "rotate-45 border-transparent text-white"
                          : "border-[#E2E8F0] text-[#13213C]"
                      }`}
                      style={open ? { backgroundColor: faq.color } : undefined}
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden
                      >
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth open/close */}
                  <div
                    id={`${id}-panel`}
                    role="region"
                    aria-labelledby={`${id}-button`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 pl-[4.5rem] pr-6 text-sm leading-relaxed text-[#5A6478] sm:px-5 sm:pl-[4.75rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Advisor card (mobile & tablet) */}
          <div className="lg:hidden">
            <AdvisorCard />
          </div>
        </div>
      </div>
    </section>
  );
}
