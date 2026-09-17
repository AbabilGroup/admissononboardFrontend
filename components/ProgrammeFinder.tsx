"use client";

import React, { useMemo, useState } from "react";

type Level = "Foundation" | "Undergraduate" | "Masters" | "PhD";

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
  "Australia",
  "Finland",
  "Romania",
  "Malta",
  "Hungary",
  "Cyprus",
  "Greece",
  "Lithuania",
];

const levels: Array<"All levels" | Level> = [
  "All levels",
  "Foundation",
  "Undergraduate",
  "Masters",
  "PhD",
];

const programmes: Programme[] = [
  {
    university: "University of Southampton",
    country: "United Kingdom",
    title: "MEng Mechanical Engineering / Manufacturing",
    level: "Undergraduate",
    duration: "4 years",
  },
  {
    university: "University of Southampton",
    country: "United Kingdom",
    title: "MEng Mechanical Engineering / Biomedical Engineering",
    level: "Undergraduate",
    duration: "4 years",
  },
  {
    university: "University of Southampton",
    country: "United Kingdom",
    title:
      "MEng Mechanical Engineering / Manufacturing with Industrial Placement Year",
    level: "Undergraduate",
    duration: "5 years",
  },
  {
    university: "University of Southampton",
    country: "United Kingdom",
    title:
      "MEng Mechanical Engineering with Foundation Year and Industrial Placement Year",
    level: "Undergraduate",
    duration: "6 years",
  },
  {
    university: "University of Southampton",
    country: "United Kingdom",
    title: "MEng Mechanical Engineering with Industrial Placement Year",
    level: "Undergraduate",
    duration: "5 years",
  },
  {
    university: "University of Southampton",
    country: "United Kingdom",
    title:
      "MEng Mechanical Engineering / Automotive with Industrial Placement Year",
    level: "Undergraduate",
    duration: "5 years",
  },
  {
    university: "University of Melbourne",
    country: "Australia",
    title: "Master of Data Science",
    level: "Masters",
    duration: "2 years",
  },
  {
    university: "Aalto University",
    country: "Finland",
    title: "MSc in Computer, Communication and Information Sciences",
    level: "Masters",
    duration: "2 years",
  },
  {
    university: "University of Bucharest",
    country: "Romania",
    title: "Foundation Year in Business and Economics",
    level: "Foundation",
    duration: "1 year",
  },
  {
    university: "University of Malta",
    country: "Malta",
    title: "BSc Architecture and Sustainable Environments",
    level: "Undergraduate",
    duration: "3 years",
  },
  {
    university: "University of Debrecen",
    country: "Hungary",
    title: "PhD in Molecular Cell and Immune Biology",
    level: "PhD",
    duration: "4 years",
  },
  {
    university: "University of Cyprus",
    country: "Cyprus",
    title: "MSc in Computer Science",
    level: "Masters",
    duration: "1.5 years",
  },
  {
    university: "Aristotle University of Thessaloniki",
    country: "Greece",
    title: "BA in Tourism Management",
    level: "Undergraduate",
    duration: "4 years",
  },
  {
    university: "Vilnius University",
    country: "Lithuania",
    title: "Foundation Programme in Medicine",
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
          Search programmes by destination and study level, delivered through
          our official pathway partners.
        </p>

        {/* Search bar */}
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm sm:grid-cols-[1fr_200px_180px] sm:items-end">
          <div>
            <label className="text-xs font-semibold text-[#6B6B6B]">
              Search programmes
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Data Science, MBA, Oxford"
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

        {/* Results grid */}
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
                  <span className="shrink-0 rounded-full bg-[#E0483E]/10 px-3 py-1 text-[11px] font-semibold text-[#E0483E]">
                    {programme.country}
                  </span>
                </div>

                <h3 className="mt-2 text-sm font-semibold leading-snug text-[#1B1B1B] sm:text-base">
                  {programme.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#9A9A9A] sm:text-sm">
                  {programme.level} &middot; {programme.duration}
                </p>
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
