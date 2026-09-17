import React from "react";

const reasons = [
  {
    title: "Affordable EU Education",
    description:
      "Greece offers fully EU-recognized degrees at tuition fees well below the UK, Australia, or the US.",
    icon: (
      <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm0 8L4 8l8-4 8 4-8 4Zm-6 2v4c0 1.66 2.69 3 6 3s6-1.34 6-3v-4l-6 3-6-3Z" />
    ),
  },
  {
    title: "Growing English-Taught Programs",
    description:
      "More universities now offer full degree programs in English, alongside strong exchange and Erasmus-linked courses.",
    icon: (
      <path d="M9 2h6a2 2 0 0 1 2 2v2h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h4V4a2 2 0 0 1 2-2Zm0 4h6V4H9v2Z" />
    ),
  },
  {
    title: "History, Culture, and Real-World Study",
    description:
      "A living classroom for archaeology, history, and tourism studies, set among some of the world's most iconic ancient sites.",
    icon: (
      <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.19 11.44 6.46 11.7a1.5 1.5 0 0 0 2.08 0c.27-.26 6.46-6.45 6.46-11.7C19.5 5.36 16.14 2 12 2Zm0 10.5A3 3 0 1 1 12 6.5a3 3 0 0 1 0 6Z" />
    ),
  },
  {
    title: "Safe, Welcoming Mediterranean Lifestyle",
    description:
      "Warm weather, a relaxed pace of life, and a genuinely friendly culture that makes settling in abroad feel easier.",
    icon: (
      <path d="M9 2v2H7v2H5v2H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-2V6h-2V4h-2V2H9Zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    ),
  },
  {
    title: "Flexible Education Pathways",
    description:
      "Foundation, diploma-to-degree, and vocational routes designed for students from every academic background.",
    icon: (
      <path d="M12 2 3 7l9 5 7-3.89V16h2V7L12 2Zm-7 8.27V15c0 2.76 3.58 5 8 5s8-2.24 8-5v-4.73l-8 4.45-8-4.45Z" />
    ),
  },
];

const backupCountries = ["Cyprus", "Malta", "Hungary", "Romania"];
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

export default function WhyGreece() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr] md:gap-10">
          {/* Left: reasons timeline */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
              Why <span className="text-[#E0483E]">Greece</span>?
            </h2>

            <div className="relative mt-10">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-[#ECECEC]" />

              <div className="flex flex-col gap-6">
                {reasons.map((reason, i) => (
                  <div key={reason.title} className="relative flex gap-5">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1B1B1B] shadow-md">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        {reason.icon}
                      </svg>
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E0483E] text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>

                    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                      <h3 className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: consultation form */}
          <div className="h-fit rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm sm:p-8">
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
                  clarity on studying in Greece.
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
                value="Greece"
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
