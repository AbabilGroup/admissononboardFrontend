const inputClass =
  "w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-[#1B1B1B] placeholder:text-[#9A9A9A] outline-none transition-colors focus:border-[#E0483E]";

const labelClass = "text-sm font-semibold text-[#1B1B1B]";

const countryCodes = [
  { code: "+880", flag: "🇧🇩", label: "Bangladesh" },
  { code: "+44", flag: "🇬🇧", label: "United Kingdom" },
  { code: "+1", flag: "🇺🇸", label: "United States" },
  { code: "+61", flag: "🇦🇺", label: "Australia" },
  { code: "+1", flag: "🇨🇦", label: "Canada" },
];

export default function PartnershipForm() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            Partnership Request
          </h2>
          <p className="mt-3 text-sm font-semibold text-[#6B6B6B] sm:text-base">
            Partner with Admission OnBoard to expand your student reach and
            boost enrolment success.
          </p>
        </div>

        <form className="mt-10 rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                required
                className={`mt-2 ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="jobTitle" className={labelClass}>
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                required
                className={`mt-2 ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="university" className={labelClass}>
                University
              </label>
              <input
                id="university"
                type="text"
                required
                className={`mt-2 ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className={`mt-2 ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <div className="mt-2 flex overflow-hidden rounded-xl border border-[#E5E5E5] focus-within:border-[#E0483E]">
                <select
                  aria-label="Country code"
                  defaultValue="+880"
                  className="border-r border-[#E5E5E5] bg-white px-3 text-sm text-[#1B1B1B] outline-none"
                >
                  {countryCodes.map((c) => (
                    <option key={`${c.code}-${c.label}`} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 text-sm text-[#1B1B1B] placeholder:text-[#9A9A9A] outline-none"
                />
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm text-[#6B6B6B]">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-[#E5E5E5] text-[#E0483E] focus:ring-[#E0483E]"
              />
              I agree to receive other communications from Admission OnBoard.
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#E0483E] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1B1B1B]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
