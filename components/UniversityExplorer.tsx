"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type University = {
  slug: string;
  name: string;
  country: string;
  initials: string;
  color: string;
  note?: string;
};

const destinations = [
  "All destinations",
  "United Kingdom",
  "Hungary",
  "Cyprus",
  "Iceland",
];

const universities: University[] = [
  {
    slug: "bpp-university",
    name: "BPP University",
    country: "United Kingdom",
    initials: "BP",
    color: "#2F5DA8",
  },
  {
    slug: "university-of-hertfordshire",
    name: "University of Hertfordshire",
    country: "United Kingdom",
    initials: "UH",
    color: "#D6281F",
  },
  {
    slug: "university-of-law",
    name: "University of Law",
    country: "United Kingdom",
    initials: "UL",
    color: "#1B1B1B",
    note: "Except Business Course",
  },
  {
    slug: "university-of-chester",
    name: "University of Chester",
    country: "United Kingdom",
    initials: "UC",
    color: "#2F9E5C",
    note: "Except Sylhet",
  },
  {
    slug: "london-south-bank-university",
    name: "London South Bank University",
    country: "United Kingdom",
    initials: "LS",
    color: "#F58B0F",
    note: "Except Sylhet, Except Business Course",
  },
  {
    slug: "aston-university-london",
    name: "Aston University, London",
    country: "United Kingdom",
    initials: "AL",
    color: "#E0483E",
    note: "Except Sylhet",
  },
  {
    slug: "university-of-hull-london",
    name: "University of Hull - London",
    country: "United Kingdom",
    initials: "HL",
    color: "#2F5DA8",
    note: "Except Sylhet",
  },
  {
    slug: "regent-college-london",
    name: "Regent College London",
    country: "United Kingdom",
    initials: "RC",
    color: "#1B1B1B",
    note: "Except UG",
  },
  {
    slug: "university-of-bedfordshire",
    name: "University of Bedfordshire",
    country: "United Kingdom",
    initials: "UB",
    color: "#D6281F",
    note: "Except Sylhet",
  },
  {
    slug: "anglia-ruskin-university",
    name: "Anglia Ruskin University",
    country: "United Kingdom",
    initials: "AR",
    color: "#2F9E5C",
    note: "UG Sylhet Restricted",
  },
  {
    slug: "university-of-brighton",
    name: "University of Brighton",
    country: "United Kingdom",
    initials: "BR",
    color: "#F58B0F",
  },
  {
    slug: "university-of-south-wales",
    name: "University of South Wales",
    country: "United Kingdom",
    initials: "SW",
    color: "#E0483E",
  },
  {
    slug: "aston-university-birmingham",
    name: "Aston University, Birmingham",
    country: "United Kingdom",
    initials: "AB",
    color: "#2F5DA8",
  },
  {
    slug: "cardiff-metropolitan-university",
    name: "Cardiff Metropolitan University",
    country: "United Kingdom",
    initials: "CM",
    color: "#1B1B1B",
    note: "Full Deposit for Sylhet",
  },
  {
    slug: "canterbury-christ-church-university",
    name: "Canterbury Christ Church University",
    country: "United Kingdom",
    initials: "CC",
    color: "#2F9E5C",
    note: "Except UG",
  },
  {
    slug: "uws-london-campus",
    name: "UWS - London Campus",
    country: "United Kingdom",
    initials: "UW",
    color: "#F58B0F",
  },
  {
    slug: "aberystwyth-university",
    name: "Aberystwyth University",
    country: "United Kingdom",
    initials: "AY",
    color: "#E0483E",
  },
  {
    slug: "university-of-hartpury",
    name: "University of Hartpury",
    country: "United Kingdom",
    initials: "HP",
    color: "#2F5DA8",
  },
  {
    slug: "atlantis-college",
    name: "Atlantis College",
    country: "Iceland",
    initials: "AT",
    color: "#1B1B1B",
  },
  {
    slug: "american-university-of-cyprus",
    name: "American University of Cyprus",
    country: "Cyprus",
    initials: "AC",
    color: "#2F9E5C",
  },
  {
    slug: "john-von-neumann-university",
    name: "John von Neumann University",
    country: "Hungary",
    initials: "JV",
    color: "#F58B0F",
  },
  {
    slug: "training-three-sixty",
    name: "Training Three Sixty",
    country: "United Kingdom",
    initials: "T3",
    color: "#E0483E",
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
              placeholder="e.g. Chester, Aston"
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

              {uni.note && (
                <p className="mt-2 rounded-full bg-[#FDECEA] px-3 py-1 text-[11px] font-semibold text-[#E0483E]">
                  {uni.note}
                </p>
              )}
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
