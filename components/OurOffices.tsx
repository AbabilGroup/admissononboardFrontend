"use client";

import { useMemo, useState } from "react";

type Office = {
  key: "uk" | "bangladesh";
  label: string;
  flag: string;
  name: string;
  addressLines: string[];
  phone: string;
  email: string;
  accent: string;
};

const offices: Office[] = [
  {
    key: "uk",
    label: "UK",
    flag: "🇬🇧",
    name: "UK Office",
    addressLines: ["Kirkdale House, 7 Kirkdale Road, London, England, E11 1HP, United Kingdom"],
    phone: "+44 7465 268767",
    email: "info@admissiononboard.com",
    accent: "#2F5DA8",
  },
  {
    key: "bangladesh",
    label: "Bangladesh",
    flag: "🇧🇩",
    name: "Dhaka Office",
    addressLines: ["Sector 12, Uttara Dhaka-1230, Bangladesh", "3rd floor of Ananda Tower, Jail Road, Sylhet"],
    phone: "+8801906499741",
    email: "dhaka@admissiononboard.com",
    accent: "#E0483E",
  },
];

const filters: { key: "all" | Office["key"]; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "🌐" },
  { key: "uk", label: "UK", icon: "🇬🇧" },
  { key: "bangladesh", label: "Bangladesh", icon: "🇧🇩" },
];

export default function OurOffices() {
  const [active, setActive] = useState<"all" | Office["key"]>("all");

  const filtered = useMemo(() => {
    if (active === "all") return offices;
    return offices.filter((o) => o.key === active);
  }, [active]);

  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#1B1B1B] sm:text-4xl">
          Our Offices
        </h2>
        <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
          We have offices across the globe. Find your nearest Admission
          OnBoard team below.
        </p>

        {/* Filter pills */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#E0483E] text-white shadow-md"
                    : "border border-[#ECECEC] bg-white text-[#6B6B6B] hover:border-[#E0483E]/40 hover:text-[#1B1B1B]"
                }`}
              >
                <span>{f.icon}</span>
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Office cards */}
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((office) => (
          <div
            key={office.key}
            className="group relative overflow-hidden rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Left accent bar */}
            <div
              className="absolute inset-y-0 left-0 w-1.5"
              style={{ backgroundColor: office.accent }}
            />

            <div className="flex items-start justify-between gap-3 pl-2">
              <h3 className="text-lg font-bold text-[#1B1B1B]">
                {office.name}
              </h3>
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg"
                style={{ backgroundColor: `${office.accent}1A` }}
              >
                {office.flag}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-3 pl-2 text-sm text-[#3A3A3A]">
              <div className="flex items-start gap-2.5">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={office.accent}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c-4.5-4.5-7-8.25-7-11.5A7 7 0 0 1 12 2.5a7 7 0 0 1 7 7c0 3.25-2.5 7-7 11.5Z"
                  />
                  <circle cx="12" cy="9.5" r="2.3" />
                </svg>
                <p className="leading-relaxed text-[#6B6B6B]">
                  {office.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

            <a  
                href={`tel:${office.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 font-medium text-[#1B1B1B] transition-colors hover:text-[#E0483E]"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={office.accent}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.5 5.5c0-1 .8-1.8 1.8-1.8H8l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v2.7c0 1-.8 1.8-1.8 1.8C10.5 18.7 5.3 13.5 3.5 7.3V5.5Z"
                  />
                </svg>
                {office.phone}
              </a>

              <a
                href={`mailto:${office.email}`}
                className="flex items-center gap-2.5 font-medium text-[#2F5DA8] transition-colors hover:text-[#E0483E]"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={office.accent}
                  strokeWidth={2}
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                </svg>
                {office.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}