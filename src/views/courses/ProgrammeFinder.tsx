"use client";

import React, { useMemo, useState } from "react";

type Level = "Foundation" | "Undergraduate" | "Postgraduate" | "Professional";

type Programme = {
  university: string;
  country: string;
  title: string;
  level: Level;
  duration: string;
};

const destinations = [
  "All destinations",
  "United Kingdom",
  "Cyprus",
  "Hungary",
  "Malta",
];

const levels: Array<"All levels" | Level> = [
  "All levels",
  "Foundation",
  "Undergraduate",
  "Postgraduate",
  "Professional",
];

const levelStyles: Record<Level, string> = {
  Foundation: "bg-[#FDF2E9] text-[#F58B0F]",
  Undergraduate: "bg-[#EAF1FB] text-[#2F5DA8]",
  Postgraduate: "bg-[#FDECEA] text-[#E0483E]",
  Professional: "bg-[#EAF6EE] text-[#2F9E5C]",
};

const programmes: Programme[] = [
  {
    university: "BPP University",
    country: "United Kingdom",
    title: "LLB (Hons) Law",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "BPP University",
    country: "United Kingdom",
    title: "MSc Management",
    level: "Postgraduate",
    duration: "12 months",
  },
  {
    university: "BPP University",
    country: "United Kingdom",
    title: "LLM Legal Practice (SQE1 & SQE2)",
    level: "Professional",
    duration: "12–18 months",
  },
  {
    university: "University of Hertfordshire",
    country: "United Kingdom",
    title: "BSc (Hons) Computer Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Hertfordshire",
    country: "United Kingdom",
    title: "International Tourism, Hospitality and Event Management",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Hertfordshire",
    country: "United Kingdom",
    title: "MSc International Business",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "University of Law",
    country: "United Kingdom",
    title: "LLB (Hons) Law with International Business",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Law",
    country: "United Kingdom",
    title: "LLM Legal Practice (SQE1 & SQE2)",
    level: "Professional",
    duration: "12 months",
  },
  {
    university: "University of Law",
    country: "United Kingdom",
    title: "Postgraduate Diploma in Law (PGDL)",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "University of Chester",
    country: "United Kingdom",
    title: "BA (Hons) Business Management",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Chester",
    country: "United Kingdom",
    title: "MSc Computer Science",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "London South Bank University",
    country: "United Kingdom",
    title: "BSc (Hons) Computer Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "London South Bank University",
    country: "United Kingdom",
    title: "MSc Data Science",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "London South Bank University",
    country: "United Kingdom",
    title: "BSc (Hons) Biomedical Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "Aston University, London",
    country: "United Kingdom",
    title: "BSc (Hons) Business and Management",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "Aston University, London",
    country: "United Kingdom",
    title: "MSc International Business",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "University of Hull - London",
    country: "United Kingdom",
    title: "BA (Hons) Business Management",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Hull - London",
    country: "United Kingdom",
    title: "MSc Finance and Investment",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Regent College London",
    country: "United Kingdom",
    title: "MBA (Master of Business Administration)",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Regent College London",
    country: "United Kingdom",
    title: "MA Marketing and Digital Media",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "University of Bedfordshire",
    country: "United Kingdom",
    title: "BSc (Hons) Computer Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Bedfordshire",
    country: "United Kingdom",
    title: "MSc International Business Management",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Anglia Ruskin University",
    country: "United Kingdom",
    title: "BSc (Hons) Artificial Intelligence with Cyber Security",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "Anglia Ruskin University",
    country: "United Kingdom",
    title: "MSc International Business Management",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Anglia Ruskin University",
    country: "United Kingdom",
    title: "MBA (Master of Business Administration)",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "University of Brighton",
    country: "United Kingdom",
    title: "BA (Hons) Business Management",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Brighton",
    country: "United Kingdom",
    title: "MSc Data Science",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "University of South Wales",
    country: "United Kingdom",
    title: "BSc (Hons) Computer Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of South Wales",
    country: "United Kingdom",
    title: "MSc Cyber Security",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Aston University, Birmingham",
    country: "United Kingdom",
    title: "BSc (Hons) International Business",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "Aston University, Birmingham",
    country: "United Kingdom",
    title: "MSc Data Science and Analytics",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Cardiff Metropolitan University",
    country: "United Kingdom",
    title: "BA (Hons) Business Management",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "Cardiff Metropolitan University",
    country: "United Kingdom",
    title: "MSc International Hospitality Management",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Canterbury Christ Church University",
    country: "United Kingdom",
    title: "MSc Business Management",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Canterbury Christ Church University",
    country: "United Kingdom",
    title: "MA Design",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "UWS - London Campus",
    country: "United Kingdom",
    title: "BA (Hons) Business Management",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "UWS - London Campus",
    country: "United Kingdom",
    title: "MBA (Master of Business Administration)",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "Aberystwyth University",
    country: "United Kingdom",
    title: "BSc (Hons) Computer Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "Aberystwyth University",
    country: "United Kingdom",
    title: "MSc International Business Management",
    level: "Postgraduate",
    duration: "1 year",
  },
  {
    university: "University of Hartpury",
    country: "United Kingdom",
    title: "BSc (Hons) Animal Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Hartpury",
    country: "United Kingdom",
    title: "BSc (Hons) Sport and Exercise Science",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "Atlantis College",
    country: "Cyprus",
    title: "Diploma in Hospitality and Tourism Management",
    level: "Foundation",
    duration: "2 years",
  },
  {
    university: "Atlantis College",
    country: "Cyprus",
    title: "Diploma in Business Administration",
    level: "Foundation",
    duration: "2 years",
  },
  {
    university: "American University of Cyprus",
    country: "Cyprus",
    title: "BA Business Administration",
    level: "Undergraduate",
    duration: "4 years",
  },
  {
    university: "American University of Cyprus",
    country: "Cyprus",
    title: "BSc Computer Science",
    level: "Undergraduate",
    duration: "4 years",
  },
  {
    university: "John von Neumann University",
    country: "Hungary",
    title: "BSc Computer Science Engineering",
    level: "Undergraduate",
    duration: "4 years",
  },
  {
    university: "John von Neumann University",
    country: "Hungary",
    title: "BSc Business Administration and Management",
    level: "Undergraduate",
    duration: "3.5 years",
  },
  {
    university: "Training Three Sixty",
    country: "Malta",
    title: "Level 3 Diploma in Business Administration",
    level: "Foundation",
    duration: "1 year",
  },
  {
    university: "Training Three Sixty",
    country: "Malta",
    title: "Level 4 Diploma in Health and Social Care",
    level: "Foundation",
    duration: "1 year",
  },
];

export default function ProgrammeFinder() {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState("All destinations");
  const [level, setLevel] = useState<"All levels" | Level>("All levels");

  const filtered = useMemo(() => {
    return programmes.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.university.toLowerCase().includes(query.toLowerCase());
      const matchesDestination =
        destination === "All destinations" || p.country === destination;
      const matchesLevel = level === "All levels" || p.level === level;
      return matchesQuery && matchesDestination && matchesLevel;
    });
  }, [query, destination, level]);

  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-16">
      <div className="mx-auto container">
        <p className="text-xs font-bold uppercase tracking-widest text-[#E0483E]">
          Courses
        </p>
        <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
          Find The Right Programme For You.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[#6B6B6B] sm:text-base">
          Search real programmes offered by our official pathway partners across
          the UK, Cyprus, and Hungary.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm sm:grid-cols-[1fr_200px_180px] sm:items-end">
          <div>
            <label className="text-xs font-semibold text-[#6B6B6B]">
              Search programmes
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Computer Science, MBA, Law"
              className="mt-1 w-full rounded-xl border border-[#E5E5E5] px-4 py-3 text-sm text-[#1B1B1B] outline-none placeholder:text-[#9A9A9A] focus:border-[#E0483E]"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#6B6B6B]">
              Destination
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#E5E5E5] px-4 py-3 text-sm text-[#1B1B1B] outline-none focus:border-[#E0483E]"
            >
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-[#6B6B6B]">
              Level
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as "All levels" | Level)}
              className="mt-1 w-full rounded-xl border border-[#E5E5E5] px-4 py-3 text-sm text-[#1B1B1B] outline-none focus:border-[#E0483E]"
            >
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-6 text-sm text-[#6B6B6B]">
          Showing {filtered.length} of {programmes.length} programmes
        </p>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((programme) => (
            <div
              key={`${programme.university}-${programme.title}`}
              className="flex flex-col justify-between rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#2F5DA8]">
                    {programme.university}
                  </span>
                  <span className="shrink-0 rounded-full bg-[#F5F5F0] px-3 py-1 text-[11px] font-semibold text-[#6B6B6B]">
                    {programme.country}
                  </span>
                </div>

                <h3 className="mt-2 text-sm font-semibold leading-snug text-[#1B1B1B] sm:text-base">
                  {programme.title}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${levelStyles[programme.level]}`}
                  >
                    {programme.level}
                  </span>
                  <span className="text-xs font-medium text-[#9A9A9A]">
                    {programme.duration}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-fit rounded-full border border-[#1B1B1B] px-5 py-2 text-xs font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white sm:text-sm"
              >
                Enquire
              </button>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full text-center text-sm text-[#6B6B6B]">
              No programmes match your search. Try a different destination or
              level.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
