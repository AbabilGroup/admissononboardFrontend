"use client";

import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Level = "Foundation" | "Undergraduate" | "Postgraduate" | "Professional";

type Programme = {
  university: string;
  country: string;
  title: string;
  level: Level;
  duration: string;
  /** Award type shown on the card, e.g. "Level 5 Diploma" */
  award?: string;
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
  // {
  //   university: "Atlantis College",
  //   country: "Cyprus",
  //   title: "Diploma in Hospitality and Tourism Management",
  //   level: "Foundation",
  //   duration: "2 years",
  // },
  // {
  //   university: "Atlantis College",
  //   country: "Cyprus",
  //   title: "Diploma in Business Administration",
  //   level: "Foundation",
  //   duration: "2 years",
  // },
  // {
  //   university: "American University of Cyprus",
  //   country: "Cyprus",
  //   title: "BA Business Administration",
  //   level: "Undergraduate",
  //   duration: "4 years",
  // },
  // {
  //   university: "American University of Cyprus",
  //   country: "Cyprus",
  //   title: "BSc Computer Science",
  //   level: "Undergraduate",
  //   duration: "4 years",
  // },
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
    title: "Level 4 Diploma in Tourism and Hospitality Management",
    level: "Foundation",
    duration: "1 year",
  },
  {
    university: "Training Three Sixty",
    country: "Malta",
    title: "Level 5 Diploma in Human Resources Management",
    level: "Foundation",
    duration: "1 year",
  },
  {
    university: "Training Three Sixty",
    country: "Malta",
    title: "Level 5 Diploma in Health and Social Care Management",
    level: "Foundation",
    duration: "1 year",
  },
  {
    university: "ThinkTalent",
    country: "Malta",
    title:
      "Bachelor/Undergraduate Diploma in Human Resource Management (MQF Level 5)",
    level: "Foundation",
    duration: "1 year",
  },
  {
    university: "ThinkTalent",
    country: "Malta",
    title:
      "Bachelor/Undergraduate Diploma in Health and Social Care Management (MQF Level 5)",
    level: "Foundation",
    duration: "1 year",
  },
  {
    university: "ThinkTalent",
    country: "Malta",
    title: "OTHM Level 4 Diploma in Tourism and Hospitality Management",
    level: "Foundation",
    duration: "1 year",
  },
  // ── LearnKey Institute (Malta) ──
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Undergraduate Diploma in Business Management",
    award: "Level 5 Diploma",
    level: "Foundation",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Undergraduate Diploma in Accounting",
    award: "Level 5 Diploma",
    level: "Foundation",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Undergraduate Diploma in Information Technology",
    award: "Level 5 Diploma",
    level: "Foundation",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Undergraduate Certificate in Nursing Studies",
    award: "Level 5 Diploma",
    level: "Foundation",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Bachelor of Business Administration (BBA)",
    award: "Bachelor (Level 6)",
    level: "Undergraduate",
    duration: "3.5 years",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "BSc in Software Design, AI, and Cloud Computing",
    award: "Bachelor (Level 6)",
    level: "Undergraduate",
    duration: "3–4 years",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "BA (Hons) in Business Management (Top-Up)",
    award: "Bachelor (Top-Up)",
    level: "Undergraduate",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "BSc (Hons) in Accounting (Top-Up)",
    award: "Bachelor (Top-Up)",
    level: "Undergraduate",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Level 7 Diploma in Strategic Management & Leadership",
    award: "Postgraduate Diploma",
    level: "Postgraduate",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Level 7 Diploma in Tourism and Hospitality Management",
    award: "Postgraduate Diploma",
    level: "Postgraduate",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Level 7 Diploma in Health and Social Care Management",
    award: "Postgraduate Diploma",
    level: "Postgraduate",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Postgraduate Diploma in Accounting",
    award: "Postgraduate Diploma",
    level: "Postgraduate",
    duration: "12 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "Master of Business Administration (MBA)",
    award: "Masters (Level 7)",
    level: "Postgraduate",
    duration: "18 months",
  },
  {
    university: "LearnKey Institute",
    country: "Malta",
    title: "MSc in Accounting",
    award: "Masters (Level 7)",
    level: "Postgraduate",
    duration: "18 months",
  },
];

/** "Aston University, London" -> "aston-university-london" (matches the slugs on /universities) */
function toSlug(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const allUniversityNames = Array.from(
  new Set(programmes.map((p) => p.university)),
);

/** Reads ?university=slug-one,slug-two and returns the matching university names */
function namesFromParam(param: string | null) {
  if (!param) return [];
  const slugs = param
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return allUniversityNames.filter((name) => slugs.includes(toSlug(name)));
}

// useSearchParams needs a Suspense boundary in the Next.js App Router
export default function ProgrammeFinder() {
  return (
    <Suspense fallback={null}>
      <ProgrammeFinderInner />
    </Suspense>
  );
}

function ProgrammeFinderInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState("All destinations");
  const [level, setLevel] = useState<"All levels" | Level>("All levels");
  // Pre-select the university passed from the /universities page
  const [selectedUnis, setSelectedUnis] = useState<string[]>(() =>
    namesFromParam(searchParams.get("university")),
  );
  const [uniSearch, setUniSearch] = useState("");
  const [showUniFilter, setShowUniFilter] = useState(false);

  // Programmes matching search, destination and level (before the university filter)
  const baseFiltered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programmes.filter((p) => {
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.university.toLowerCase().includes(q);
      const matchesDestination =
        destination === "All destinations" || p.country === destination;
      const matchesLevel = level === "All levels" || p.level === level;
      return matchesQuery && matchesDestination && matchesLevel;
    });
  }, [query, destination, level]);

  // Universities for the sidebar, with how many matching programmes each has
  const universities = useMemo(() => {
    const pool = programmes.filter(
      (p) => destination === "All destinations" || p.country === destination,
    );
    const map = new Map<string, { country: string; count: number }>();
    for (const p of pool) {
      if (!map.has(p.university))
        map.set(p.university, { country: p.country, count: 0 });
    }
    for (const p of baseFiltered) {
      const entry = map.get(p.university);
      if (entry) entry.count += 1;
    }
    return Array.from(map, ([name, info]) => ({ name, ...info })).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }, [destination, baseFiltered]);

  const visibleUnis = universities.filter((u) =>
    u.name.toLowerCase().includes(uniSearch.trim().toLowerCase()),
  );

  const filtered =
    selectedUnis.length === 0
      ? baseFiltered
      : baseFiltered.filter((p) => selectedUnis.includes(p.university));

  /** Saves the chosen universities in the URL so the page can be shared or refreshed */
  const updateUnis = (names: string[]) => {
    setSelectedUnis(names);
    const params = new URLSearchParams(searchParams.toString());
    if (names.length > 0) params.set("university", names.map(toSlug).join(","));
    else params.delete("university");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const toggleUni = (name: string) =>
    updateUnis(
      selectedUnis.includes(name)
        ? selectedUnis.filter((n) => n !== name)
        : [...selectedUnis, name],
    );

  const changeDestination = (value: string) => {
    setDestination(value);
    // keep only the selected universities that exist in the new destination
    updateUnis(
      selectedUnis.filter(
        (name) =>
          value === "All destinations" ||
          programmes.some((p) => p.university === name && p.country === value),
      ),
    );
  };

  const hasFilters =
    query !== "" ||
    destination !== "All destinations" ||
    level !== "All levels" ||
    selectedUnis.length > 0;

  const clearAll = () => {
    setQuery("");
    setDestination("All destinations");
    setLevel("All levels");
    updateUnis([]);
    setUniSearch("");
  };

  const fieldClass =
    "mt-1 w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-[#1B1B1B] outline-none placeholder:text-[#9A9A9A] transition-all focus:border-[#E0483E] focus:ring-4 focus:ring-[#E0483E]/10";

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
          the UK, Cyprus, Hungary and Malta.
        </p>

        {/* Top filters */}
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm sm:grid-cols-[1fr_200px_180px] sm:items-end">
          <div>
            <label
              htmlFor="pf-search"
              className="text-xs font-semibold text-[#6B6B6B]"
            >
              Search programmes
            </label>
            <input
              id="pf-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Computer Science, MBA, Law"
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor="pf-destination"
              className="text-xs font-semibold text-[#6B6B6B]"
            >
              Destination
            </label>
            <select
              id="pf-destination"
              value={destination}
              onChange={(e) => changeDestination(e.target.value)}
              className={fieldClass}
            >
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="pf-level"
              className="text-xs font-semibold text-[#6B6B6B]"
            >
              Level
            </label>
            <select
              id="pf-level"
              value={level}
              onChange={(e) => setLevel(e.target.value as "All levels" | Level)}
              className={fieldClass}
            >
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* Results */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#6B6B6B]">
                Showing{" "}
                <span className="font-semibold text-[#1B1B1B]">
                  {filtered.length}
                </span>{" "}
                of {programmes.length} programmes
              </p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-sm font-semibold text-[#E0483E] underline-offset-4 hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Selected university chips */}
            {selectedUnis.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedUnis.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => toggleUni(name)}
                    aria-label={`Remove ${name} filter`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#E0483E] py-1.5 pl-3 pr-2 text-xs font-semibold text-white transition-colors hover:bg-[#C93C33]"
                  >
                    {name}
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden
                    >
                      <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                      {programme.award && (
                        <span className="text-xs font-medium text-[#9A9A9A]">
                          · {programme.award}
                        </span>
                      )}
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
                <div className="col-span-full rounded-2xl border border-dashed border-[#E0483E]/30 bg-white px-6 py-12 text-center">
                  <p className="text-sm font-semibold text-[#1B1B1B]">
                    No programmes match your search.
                  </p>
                  <p className="mt-1 text-sm text-[#6B6B6B]">
                    Try a different university, destination or level.
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="mt-4 rounded-full border border-[#1B1B1B] px-5 py-2 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right sidebar: university filter */}
          <aside className="order-1 rounded-2xl border border-[#ECECEC] bg-white shadow-sm lg:sticky lg:top-28 lg:order-2">
            <button
              type="button"
              onClick={() => setShowUniFilter((v) => !v)}
              aria-expanded={showUniFilter}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left lg:pointer-events-none"
            >
              <span>
                <span className="block text-sm font-semibold text-[#1B1B1B]">
                  Filter by university
                </span>
                <span className="block text-xs text-[#6B6B6B]">
                  {selectedUnis.length > 0
                    ? `${selectedUnis.length} selected`
                    : `${universities.length} universities`}
                </span>
              </span>
              <svg
                className={`h-4 w-4 shrink-0 text-[#6B6B6B] transition-transform lg:hidden ${showUniFilter ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>

            <div
              className={`${showUniFilter ? "block" : "hidden"} border-t border-[#F0EBE3] px-5 pb-5 pt-4 lg:block`}
            >
              <input
                type="text"
                value={uniSearch}
                onChange={(e) => setUniSearch(e.target.value)}
                placeholder="Search universities"
                aria-label="Search universities"
                className="w-full rounded-xl border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-[#1B1B1B] outline-none placeholder:text-[#9A9A9A] focus:border-[#E0483E]"
              />

              <ul className="mt-3 max-h-[420px] space-y-0.5 overflow-y-auto pr-1">
                {visibleUnis.map((uni) => {
                  const checked = selectedUnis.includes(uni.name);
                  const empty = uni.count === 0 && !checked;
                  return (
                    <li key={uni.name}>
                      <label
                        className={`flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[#FFFEFA] ${
                          empty ? "opacity-45" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleUni(uni.name)}
                          className="h-4 w-4 shrink-0 cursor-pointer accent-[#E0483E]"
                        />
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block truncate text-sm ${checked ? "font-semibold text-[#1B1B1B]" : "text-[#3A3A3A]"}`}
                          >
                            {uni.name}
                          </span>
                          {destination === "All destinations" && (
                            <span className="block text-[11px] text-[#9A9A9A]">
                              {uni.country}
                            </span>
                          )}
                        </span>
                        <span
                          className={`grid h-6 min-w-6 place-items-center rounded-full px-1.5 text-[11px] font-bold ${
                            checked
                              ? "bg-[#E0483E] text-white"
                              : "bg-[#F4EFE6] text-[#6B6B6B]"
                          }`}
                        >
                          {uni.count}
                        </span>
                      </label>
                    </li>
                  );
                })}

                {visibleUnis.length === 0 && (
                  <li className="px-2 py-4 text-center text-sm text-[#6B6B6B]">
                    No universities found.
                  </li>
                )}
              </ul>

              {selectedUnis.length > 0 && (
                <button
                  type="button"
                  onClick={() => updateUnis([])}
                  className="mt-3 w-full rounded-xl border border-[#1B1B1B] py-2.5 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
                >
                  Clear universities
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
