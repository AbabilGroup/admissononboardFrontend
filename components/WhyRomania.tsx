const reasons = [
  {
    title: "Explore 50+ Universities & Colleges",
    description:
      "Non-EU students can choose from 50+ Romanian universities and higher-education institutions offering Bachelor’s, Master’s and PhD programmes.",
    icon: (
      <path d="M12 2 2 7v2h20V7L12 2ZM4 11v7H3v2h18v-2h-1v-7h-2v7h-3v-7h-2v7h-2v-7H9v7H6v-7H4Z" />
    ),
  },
  {
    title: "Affordable Tuition and Low Cost of Living",
    description:
      "Compared to Western Europe or North America, Romania offers significantly lower academic and living costs. Tuition fees for international students generally range from €2,000 to €7,000 per year (depending on the programme), and monthly living expenses, including housing, food, and transit, typically run between €300 and €700.",
    icon: (
      <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm0 8L4 8l8-4 8 4-8 4Zm-6 2v4c0 1.66 2.69 3 6 3s6-1.34 6-3v-4l-6 3-6-3Z" />
    ),
  },
  {
    title: "EU-Recognized Qualifications",
    description:
      "As an EU member country adhering to the Bologna Process, degrees awarded by accredited Romanian universities are automatically recognized across the European Union, EEA, and beyond. This makes it easier for graduates to pursue further education or seek employment anywhere in Europe.",
    icon: (
      <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1.5 14-4-4 1.4-1.4 2.6 2.6 5.6-5.6L17.5 9l-7 7Z" />
    ),
  },
  {
    title: "Multilingual Programmes (No Language Barrier)",
    description:
      "You don't need to speak fluent Romanian to study there. Universities offer a wide array of Bachelor's and Master's programmes taught entirely in English, French, and German, particularly in sought-after fields like medicine, dentistry, engineering, and IT.",
    icon: (
      <path d="m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04ZM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12Zm-2.62 7 1.62-4.33L19.12 17h-3.24Z" />
    ),
  },
  {
    title: "Strong Focus on Medicine, Tech, and STEM",
    description:
      "Romania is well known for its rigorous medical and pharmaceutical programmes. Cities like Bucharest, Cluj-Napoca, and Iași have also become major European tech hubs, offering engineering and computer science students modern research environments and access to growing tech industries.",
    icon: <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3Z" />,
  },
  {
    title: "Work and Mobility Opportunities in Europe",
    description:
      "International student visas allow part-time work (up to 20 hours per week during the semester) to help cover living expenses. Romania’s inclusion in the Schengen Area also lets students with a valid residence permit travel freely across Schengen member states during holidays and breaks.",
    icon: (
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    ),
  },
  {
    title: "Permanent Residence (PR) Pathway",
    description:
      "Non-EU students can apply for long-term residence after generally 5 years of legal residence in Romania, with study periods counted at 50% toward this period. Applicants must also meet requirements for income, accommodation, health insurance, Romanian language, and legal status. Applications are submitted to the General Inspectorate for Immigration (IGI).",
    icon: <path d="M12 3 2 11h3v9h5v-6h4v6h5v-9h3L12 3Z" />,
  },
];

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

export default function WhyRomania() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr] md:gap-10">
          {/* Left: reasons timeline */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
              Why <span className="text-[#E0483E]">Romania</span>?
            </h2>

            <div className="relative mt-10">
              <div className="absolute bottom-2 left-6 top-2 w-px bg-[#ECECEC]" />

              <ol className="flex flex-col gap-6">
                {reasons.map((reason, i) => (
                  <li key={reason.title} className="relative flex gap-5">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1B1B1B] shadow-md">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                        aria-hidden
                      >
                        {reason.icon}
                      </svg>
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E0483E] text-[10px] font-bold text-white ring-2 ring-[#FFFEFA]">
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
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: consultation form (stays in view while scrolling on desktop) */}
          <div className="h-fit rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm sm:p-8 md:sticky md:top-28">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E0483E]/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#E0483E"
                  aria-hidden
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm2.07-7.75-.9.92C13.45 10.9 13 11.5 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2 2 2 0 0 0-2 2H8a4 4 0 0 1 4-4 4 4 0 0 1 4 4c0 .8-.32 1.53-.93 2.09Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
                  Have more questions?
                </h3>
                <p className="mt-1 text-xs text-[#6B6B6B] sm:text-sm">
                  Book a free session with our expert counsellors and get
                  clarity on studying in Romania.
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
                value="Romania"
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
