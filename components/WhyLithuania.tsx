import type { ReactNode } from "react";

type Reason = {
  title: string;
  description: string;
  icon: ReactNode;
  /** Highlighted intro card, shown without a number */
  featured?: boolean;
};

const reasons: Reason[] = [
  {
    featured: true,
    title: "Explore 28 Universities & Colleges",
    description:
      "International students can choose from 15 universities and 13 colleges, with a wide range of English-taught programmes across Business, IT, Engineering, Health Sciences, and more.",
    icon: (
      <path d="M12 2 2 7v2h20V7L12 2ZM4 11v7H3v2h18v-2h-1v-7h-2v7h-3v-7h-2v7h-2v-7H9v7H6v-7H4Z" />
    ),
  },
  {
    title: "Affordable, High-Quality EU Education",
    description:
      "Lithuania offers fully European Union-accredited degrees with tuition fees significantly lower than in Western Europe. Annual tuition starts from €1,300–€4,000 for Bachelor’s degrees and €2,300–€6,500 for Master’s degrees (specialised fields like Medicine and Dentistry run higher).",
    icon: (
      <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm0 8L4 8l8-4 8 4-8 4Zm-6 2v4c0 1.66 2.69 3 6 3s6-1.34 6-3v-4l-6 3-6-3Z" />
    ),
  },
  {
    title: "Expanding English-Taught Programmes",
    description:
      "Higher education institutions across Lithuania offer over 500 fully English-taught Bachelor’s, Master’s, and Doctorate programmes, with specialised strengths in Information Technology, Business Administration, Engineering, and Life Sciences.",
    icon: (
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5a.5.5 0 0 0 0 1H20v3H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
    ),
  },
  {
    title: "Accessible Cost of Living",
    description:
      "Student life remains highly affordable compared to most Western EU countries. On average, international students spend between €500 and €800 per month, which covers dormitory or apartment accommodation, groceries, local transport, and utilities.",
    icon: <path d="M12 3 2 11h3v9h5v-6h4v6h5v-9h3L12 3Z" />,
  },
  {
    title: "Strategic Schengen Area Location",
    description:
      "As part of the Schengen Area, holding a Lithuanian Temporary Residence Permit (TRP) or National Visa gives international students visa-free travel across 29 European member states during academic breaks and weekends.",
    icon: (
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    ),
  },
  {
    title: "Flexible Academic Pathways",
    description:
      "Selected higher education institutions offer varied entry options, including foundation years, pathway diplomas, and preparatory courses, providing structured entry into full degree programmes for students who need academic or language bridging.",
    icon: (
      <path d="M12 2 3 7l9 5 7-3.89V16h2V7L12 2Zm-7 8.27V15c0 2.76 3.58 5 8 5s8-2.24 8-5v-4.73l-8 4.45-8-4.45Z" />
    ),
  },
  {
    title: "Post-Study Work Permit",
    description:
      "International graduates from non-EU countries are legally eligible to extend their temporary residence permit for up to 12 months after graduation to seek employment or launch a business in Lithuania.",
    icon: (
      <path d="M9 2h6a2 2 0 0 1 2 2v2h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h4V4a2 2 0 0 1 2-2Zm0 4h6V4H9v2Z" />
    ),
  },
];

// Number every card except the featured one (1, 2, 3 ...)
const numberedReasons = reasons.map((reason, i) => ({
  ...reason,
  number: reasons.slice(0, i + 1).filter((r) => !r.featured).length,
}));

const backupCountries = [
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Finland",
  "Greece",
  "Lithuania",
  "Hungary",
  "Romania",
  "Malta",
  "Cyprus",
];
const studyLevels = ["Diploma", "Bachelor's Degree", "Master's Degree", "PhD"];
const applyWindows = [
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "6 months or later",
];
const consultationModes = ["In-person", "Online Video Call", "Phone Call"];

const inputClass =
  "w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-[#1B1B1B] placeholder:text-[#9A9A9A] outline-none transition-colors focus:border-[#E0483E]";

export default function WhyLithuania() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr] md:gap-10">
          {/* Left: reasons timeline */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
              Why Study in <span className="text-[#E0483E]">Lithuania</span>?
            </h2>

            <div className="relative mt-10">
              <div className="absolute bottom-2 left-6 top-2 w-px bg-[#ECECEC]" />

              <div className="flex flex-col gap-6">
                {numberedReasons.map((reason) => {
                  return (
                    <div key={reason.title} className="relative flex gap-5">
                      <div
                        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md ${
                          reason.featured ? "bg-[#E0483E]" : "bg-[#1B1B1B]"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                          aria-hidden
                        >
                          {reason.icon}
                        </svg>
                        {!reason.featured && (
                          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E0483E] text-[10px] font-bold text-white ring-2 ring-[#FFFEFA]">
                            {reason.number}
                          </span>
                        )}
                      </div>

                      <div
                        className={`flex-1 rounded-2xl border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
                          reason.featured
                            ? "border-[#E0483E]/25 bg-[#E0483E]/5"
                            : "border-[#ECECEC] bg-white"
                        }`}
                      >
                        <h3 className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
                          {reason.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: consultation form */}
          <div className="h-fit rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm sm:p-8 md:sticky md:top-28">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E0483E]/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#E0483E">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm2.07-7.75-.9.92C13.45 10.9 13 11.5 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2 2 2 0 0 0-2 2H8a4 4 0 0 1 4-4 4 4 0 0 1 4 4c0 .8-.32 1.53-.93 2.09Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
                  Have more questions?
                </h3>
                <p className="mt-1 text-xs text-[#6B6B6B] sm:text-sm">
                  Book a free session with our expert counsellors and get
                  clarity on studying in Lithuania.
                </p>
              </div>
            </div>

            <form className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full name *"
                required
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Mobile No. *"
                required
                className={inputClass}
              />

              <input
                type="text"
                value="Lithuania"
                readOnly
                className={`${inputClass} cursor-not-allowed bg-[#F5F5F3] text-[#6B6B6B]`}
              />

              <select defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a backup country
                </option>
                {backupCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select desired study level *
                </option>
                {studyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Have you taken IELTS, PTE, or another English test?"
                className={inputClass}
              />

              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  When are you looking to apply? *
                </option>
                {applyWindows.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>

              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Choose a consultation mode *
                </option>
                {consultationModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[#1B1B1B] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#E0483E]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
