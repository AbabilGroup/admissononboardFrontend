"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Where should I begin my study abroad journey?",
    answer:
      "Start with a free consultation. We'll review your academic background, budget, and goals, then map out the countries and programs that genuinely fit before you spend a single dollar on applications.",
  },
  {
    question: "Which countries can you help me apply to?",
    answer:
      "We work across the UK, Canada, Australia, New Zealand, the USA, and a growing list of European destinations including Malta, Hungary, and Cyprus, matching you to universities with strong placement records.",
  },
  {
    question: "Is an English proficiency test like IELTS mandatory?",
    answer:
      "It depends on the university and your prior education. Many institutions accept alternatives like PTE or Duolingo, and some waive it entirely for applicants with an English-medium academic background.",
  },
  {
    question: "How much time does the whole application process take?",
    answer:
      "On average, six to twelve weeks from document submission to offer letter, though timelines shift depending on the country, intake season, and how quickly required documents are ready.",
  },
  {
    question: "What paperwork is required for my application?",
    answer:
      "Typically academic transcripts, a valid passport, financial statements, a statement of purpose, and letters of recommendation. We give you a checklist tailored to your specific university before you start.",
  },
  {
    question: "Will you assist me with the visa process?",
    answer:
      "Yes, end to end. From compiling financial documents to preparing you for the visa interview, our team stays with you until your visa is approved and your travel is confirmed.",
  },
  {
    question: "How much should I budget for studying overseas?",
    answer:
      "Costs vary widely by country and course, but we provide a transparent breakdown covering tuition, living expenses, and our service fees upfront, so there are no surprises later.",
  },
  {
    question: "Do you help with housing and settling in after arrival?",
    answer:
      "Absolutely. We connect you with verified accommodation options before departure and offer post-arrival support so your first weeks abroad feel manageable, not overwhelming.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            Answers To Your Common{" "}
            <span className="text-[#E0483E]">Questions</span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-[#6B6B6B] sm:text-base">
            Have doubts? We&apos;ve got answers. Browse what students ask us
            most before studying overseas.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  isOpen
                    ? "border-[#E0483E]/40 shadow-md"
                    : "border-[#ECECEC] shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`text-sm font-semibold sm:text-base ${
                      isOpen ? "text-[#E0483E]" : "text-[#1B1B1B]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#E0483E] text-white"
                        : "bg-[#F5F5F5] text-[#1B1B1B]"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
