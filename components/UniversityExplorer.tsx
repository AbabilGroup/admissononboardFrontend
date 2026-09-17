"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type University = {
  slug: string;
  name: string;
  country: string;
  courseCount: number;
  initials: string;
  color: string;
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

const universities: University[] = [
  {
    slug: "abertay-university",
    name: "Abertay University",
    country: "United Kingdom",
    courseCount: 60,
    initials: "AU",
    color: "#D6281F",
  },
  {
    slug: "aberystwyth-university",
    name: "Aberystwyth University",
    country: "United Kingdom",
    courseCount: 291,
    initials: "AB",
    color: "#2F5DA8",
  },
  {
    slug: "university-of-melbourne",
    name: "University of Melbourne",
    country: "Australia",
    courseCount: 214,
    initials: "UM",
    color: "#1B1B1B",
  },
  {
    slug: "aalto-university",
    name: "Aalto University",
    country: "Finland",
    courseCount: 58,
    initials: "AA",
    color: "#F58B0F",
  },
  {
    slug: "university-of-bucharest",
    name: "University of Bucharest",
    country: "Romania",
    courseCount: 42,
    initials: "UB",
    color: "#2F9E5C",
  },
  {
    slug: "university-of-malta",
    name: "University of Malta",
    country: "Malta",
    courseCount: 37,
    initials: "UM",
    color: "#E0483E",
  },
  {
    slug: "university-of-debrecen",
    name: "University of Debrecen",
    country: "Hungary",
    courseCount: 65,
    initials: "UD",
    color: "#1B1B1B",
  },
  {
    slug: "university-of-cyprus",
    name: "University of Cyprus",
    country: "Cyprus",
    courseCount: 29,
    initials: "UC",
    color: "#2F5DA8",
  },
];

export default function UniversityExplorer() {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState("All destinations");

  const filtered = useMemo(() => {
    return universities.filter((u) => {
      const matchesQuery =
        query.trim() === "" ||
        u.name.toLowerCase().includes(query.toLowerCase());
      const matchesDestination =
        destination === "All destinations" || u.country === destination;
      return matchesQuery && matchesDestination;
    });
  }, [query, destination]);

  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-16">
      <div className="mx-auto container">
        <p className="text-xs font-bold uppercase tracking-widest text-[#E0483E]">
          Universities
        </p>
        <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
          Explore Universities Worldwide.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[#6B6B6B] sm:text-base">
          Browse universities and pathway colleges across our study
          destinations. Open one to see its courses, entry requirements, and how
          to apply.
        </p>

        {/* Search + destination filter */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full">
            <label className="text-xs font-semibold text-[#6B6B6B]">
              Search universities
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Oxford, Toronto"
              className="mt-1 w-full rounded-xl border border-[#E5E5E5] px-4 py-3 text-sm text-[#1B1B1B] outline-none placeholder:text-[#9A9A9A] focus:border-[#E0483E]"
            />
          </div>

          <div className="w-full sm:w-56">
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
        </div>

        <p className="mt-6 text-sm text-[#6B6B6B]">
          Showing {filtered.length} of {universities.length} universities
        </p>

        {/* Results grid */}
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((uni) => (
            <Link
              key={uni.slug}
              href={`/universities`}
              className="flex flex-col items-center rounded-2xl border border-[#ECECEC] bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: uni.color }}
              >
                {uni.initials}
              </div>

              <h3 className="mt-4 text-sm font-semibold leading-snug text-[#1B1B1B] sm:text-base">
                {uni.name}
              </h3>

              <p className="mt-1 text-xs font-medium text-[#2F5DA8] sm:text-sm">
                {uni.country}
              </p>

              <p className="mt-2 text-xs font-semibold text-[#E0483E] sm:text-sm">
                {uni.courseCount} courses
              </p>
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full text-center text-sm text-[#6B6B6B]">
              No universities match your search. Try a different destination.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
