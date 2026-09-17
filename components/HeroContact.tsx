import React from "react";
import Image from "next/image";

// Place your image at: /public/counsellor-contact.png

const countries = [
  "United Kingdom",
  "Canada",
  "Australia",
  "USA",
  "New Zealand",
  "Malaysia",
  "Romania",
  "Malta",
  "Hungary",
  "Cyprus",
  "Greece",
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

export default function HeroContact() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 items-center gap-12 rounded-3xl border border-[#ECECEC] p-6 shadow-sm sm:p-10 md:grid-cols-2 md:gap-16">
          {/* Left: image */}
          <div className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-2xl md:order-1">
            <Image
              src="/counselor.png"
              alt="Study abroad counsellor ready to help"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right: form */}
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-semibold leading-snug text-[#1B1B1B] sm:text-3xl">
              Reserve a complimentary consultation with our specialists and take
              the first step toward studying overseas.
            </h2>

            <form className="mt-8 flex flex-col gap-4">
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

              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a preferred country *
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <select defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a backup country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
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
                {applyWindows.map((window) => (
                  <option key={window} value={window}>
                    {window}
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
