"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

// ─────────────────────────────────────────────────────────────
// Data – same universities, slugs and logos as the /universities page.
// To add a partner, add one entry here (country must match a name below).
// `image` is optional: a campus photo (16:9, about 800×450 px). Without it
// the card shows the logo on a soft cream panel.
// ─────────────────────────────────────────────────────────────

type University = {
  slug: string;
  name: string;
  country: string;
  initials: string;
  color: string;
  logo: string;
  note?: string;
  image?: string;
};

const countries = [
  { name: "United Kingdom", code: "GB" },
  { name: "Australia", code: "AU" },
  { name: "Canada", code: "CA" },
  { name: "New Zealand", code: "NZ" },
  { name: "Finland", code: "FI" },
  { name: "Greece", code: "GR" },
  { name: "Lithuania", code: "LT" },
  { name: "Hungary", code: "HU" },
  { name: "Romania", code: "RO" },
  { name: "Malta", code: "MT" },
  { name: "Cyprus", code: "CY" },
  { name: "Italy", code: "IT" },
  { name: "Norway", code: "NO" },
] as const;

const universities: University[] = [
  {
    slug: "bpp-university",
    name: "BPP University",
    country: "United Kingdom",
    initials: "BP",
    color: "#2F5DA8",
    logo: "/univercity-logo/bpp.jpg",
  },
  {
    slug: "university-of-hertfordshire",
    name: "University of Hertfordshire",
    country: "United Kingdom",
    initials: "UH",
    color: "#D6281F",
    logo: "/univercity-logo/uh.jpg",
  },
  {
    slug: "university-of-law",
    name: "University of Law",
    country: "United Kingdom",
    initials: "UL",
    color: "#1B1B1B",
    note: "Except Business Course",
    logo: "/univercity-logo/low.png",
  },
  {
    slug: "university-of-chester",
    name: "University of Chester",
    country: "United Kingdom",
    initials: "UC",
    color: "#2F9E5C",
    note: "Except Sylhet",
    logo: "/univercity-logo/uoc.png",
  },
  {
    slug: "london-south-bank-university",
    name: "London South Bank University",
    country: "United Kingdom",
    initials: "LS",
    color: "#F58B0F",
    note: "Except Sylhet, Except Business Course",
    logo: "/univercity-logo/lsbu.jpg",
  },
  {
    slug: "aston-university-london",
    name: "Aston University, London",
    country: "United Kingdom",
    initials: "AL",
    color: "#E0483E",
    note: "Except Sylhet",
    logo: "/univercity-logo/aul.png",
  },
  {
    slug: "university-of-hull-london",
    name: "University of Hull - London",
    country: "United Kingdom",
    initials: "HL",
    color: "#2F5DA8",
    note: "Except Sylhet",
    logo: "/univercity-logo/uoh.png",
  },
  {
    slug: "regent-college-london",
    name: "Regent College London",
    country: "United Kingdom",
    initials: "RC",
    color: "#1B1B1B",
    note: "Except UG",
    logo: "/univercity-logo/rcl.png",
  },
  {
    slug: "university-of-bedfordshire",
    name: "University of Bedfordshire",
    country: "United Kingdom",
    initials: "UB",
    color: "#D6281F",
    note: "Except Sylhet",
    logo: "/univercity-logo/uob.png",
  },
  {
    slug: "anglia-ruskin-university",
    name: "Anglia Ruskin University",
    country: "United Kingdom",
    initials: "AR",
    color: "#2F9E5C",
    note: "UG Sylhet Restricted",
    logo: "/univercity-logo/aru.jpg",
  },
  {
    slug: "university-of-brighton",
    name: "University of Brighton",
    country: "United Kingdom",
    initials: "BR",
    color: "#F58B0F",
    logo: "/univercity-logo/uobb.jpg",
  },
  {
    slug: "university-of-south-wales",
    name: "University of South Wales",
    country: "United Kingdom",
    initials: "SW",
    color: "#E0483E",
    logo: "/univercity-logo/uosw.png",
  },
  {
    slug: "aston-university-birmingham",
    name: "Aston University, Birmingham",
    country: "United Kingdom",
    initials: "AB",
    color: "#2F5DA8",
    logo: "/univercity-logo/aub.jpg",
  },
  {
    slug: "cardiff-metropolitan-university",
    name: "Cardiff Metropolitan University",
    country: "United Kingdom",
    initials: "CM",
    color: "#1B1B1B",
    note: "Full Deposit for Sylhet",
    logo: "/univercity-logo/cfu.jpg",
  },
  {
    slug: "canterbury-christ-church-university",
    name: "Canterbury Christ Church University",
    country: "United Kingdom",
    initials: "CC",
    color: "#2F9E5C",
    note: "Except UG",
    logo: "/univercity-logo/cccu.png",
  },
  {
    slug: "uws-london-campus",
    name: "UWS - London Campus",
    country: "United Kingdom",
    initials: "UW",
    color: "#F58B0F",
    logo: "/univercity-logo/uws.jpg",
  },
  {
    slug: "aberystwyth-university",
    name: "Aberystwyth University",
    country: "United Kingdom",
    initials: "AY",
    color: "#E0483E",
    logo: "/univercity-logo/au.jpg",
  },
  {
    slug: "university-of-hartpury",
    name: "University of Hartpury",
    country: "United Kingdom",
    initials: "HP",
    color: "#2F5DA8",
    logo: "/univercity-logo/uoh.png",
  },
  //   {
  //     slug: "atlantis-college",
  //     name: "Atlantis College",
  //     country: "Cyprus",
  //     initials: "AT",
  //     color: "#1B1B1B",
  //     logo: "/univercity-logo/aui.png",
  //   },
  //   {
  //     slug: "american-university-of-cyprus",
  //     name: "American University of Cyprus",
  //     country: "Cyprus",
  //     initials: "AC",
  //     color: "#2F9E5C",
  //     logo: "/univercity-logo/auc.png",
  //   },
  // {
  //   slug: "john-von-neumann-university",
  //   name: "John von Neumann University",
  //   country: "Hungary",
  //   initials: "JV",
  //   color: "#F58B0F",
  //   logo: "/univercity-logo/jvnu.png",
  // },
  {
    slug: "training-three-sixty",
    name: "Training Three Sixty",
    country: "Malta",
    initials: "T3",
    color: "#E0483E",
    logo: "/univercity-logo/tts.png",
  },
  {
    slug: "thinktalent",
    name: "ThinkTalent",
    country: "Malta",
    initials: "TT",
    color: "#2F5DA8",
    logo: "/univercity-logo/thinktalent.webp",
  },
  {
    slug: "learnkey-institute",
    name: "LearnKey Institute",
    country: "Malta",
    initials: "LK",
    color: "#F58B0F",
    logo: "/univercity-logo/learnkeyinstutie.png",
  },
];

/** How many cards to show before the "Explore more" button */
const MAX_CARDS = 6;

const WHATSAPP_URL = `https://wa.me/8801602065622?text=${encodeURIComponent(
  "Hi Admission OnBoard, I'd like to know about universities in ",
)}`;

function Flag({ code }: { code: string }) {
  return (
    <ReactCountryFlag
      countryCode={code}
      svg
      aria-hidden
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        objectFit: "cover",
      }}
    />
  );
}

function Logo({ uni }: { uni: University }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="grid h-full w-full place-items-center text-lg font-bold text-white"
        style={{ backgroundColor: uni.color }}
      >
        {uni.initials}
      </span>
    );
  }

  return (
    <Image
      src={uni.logo}
      alt={`${uni.name} logo`}
      width={160}
      height={80}
      className="h-full w-full object-contain p-2"
      onError={() => setFailed(true)}
    />
  );
}

export type PartnerCountry = (typeof countries)[number]["name"];

type UniversityPartnerProps = {
  /** Country to show first, e.g. <UniversityPartner country="Australia" /> on the Australia page */
  country?: PartnerCountry;
  /** Hide the country tabs and show only this country's universities */
  hideTabs?: boolean;
};

export default function UniversityPartner({
  country = "United Kingdom",
  hideTabs = false,
}: UniversityPartnerProps) {
  const [active, setActive] = useState<string>(country);

  const activeCountry = countries.find((c) => c.name === active)!;
  const list = universities.filter((u) => u.country === active);
  const shown = list.slice(0, MAX_CARDS);
  const countFor = (name: string) =>
    universities.filter((u) => u.country === name).length;

  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20 sm:py-24">
      <style>{`
        @keyframes upFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .up-in { animation: upFade .5s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .up-in { animation: none !important; } }
      `}</style>

      <div className="mx-auto container max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E0483E]">
            Trusted partners
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
            Our university partners{" "}
            <span className="text-[#E0483E]">
              {hideTabs ? `in ${active}` : "around the world"}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
            {hideTabs
              ? `Explore the universities and colleges we work with in ${active}, then view their courses.`
              : "Choose a destination to see the universities and colleges we work with, then explore their courses."}
          </p>
        </div>

        {/* Country tabs */}
        {!hideTabs && (
          <div
            role="tablist"
            aria-label="Study destinations"
            className="mt-10 flex flex-wrap justify-center gap-2.5"
          >
            {countries.map((country) => {
              const isActive = country.name === active;
              const count = countFor(country.name);
              return (
                <button
                  key={country.code}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(country.name)}
                  className={`inline-flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-[#E0483E] bg-[#E0483E] text-white shadow-lg shadow-[#E0483E]/25"
                      : "border-[#E5E5E5] bg-white text-[#1B1B1B] hover:-translate-y-0.5 hover:border-[#E0483E]/50 hover:shadow-md"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 overflow-hidden rounded-full ${
                      isActive ? "ring-2 ring-white" : "ring-1 ring-black/10"
                    }`}
                  >
                    <Flag code={country.code} />
                  </span>
                  {country.name}
                  {count > 0 && (
                    <span
                      className={`grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[11px] font-bold ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "bg-[#F4EFE6] text-[#6B6B6B]"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Cards */}
        <div
          role="tabpanel"
          aria-label={`${active} partners`}
          key={active}
          className="mt-12"
        >
          {shown.length > 0 ? (
            <>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((uni, index) => (
                  <li
                    key={uni.slug}
                    className="up-in"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <Link
                      href={`/courses?university=${uni.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#ECECEC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                    >
                      {/* Top: campus photo, or logo panel */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#F7F3EC]">
                        {uni.image ? (
                          <>
                            <Image
                              src={uni.image}
                              alt={`${uni.name} campus`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          </>
                        ) : (
                          <div
                            aria-hidden
                            className="absolute inset-0 opacity-60"
                            style={{
                              backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(224,72,62,0.18) 1px, transparent 0)",
                              backgroundSize: "18px 18px",
                            }}
                          />
                        )}

                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#1B1B1B] shadow-sm backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E0483E]" />
                          Official partner
                        </span>

                        {/* Logo: centred on the panel, or overlapping the photo */}
                        <div
                          className={`absolute left-1/2 flex h-20 w-40 -translate-x-1/2 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105 ${
                            uni.image
                              ? "-bottom-10"
                              : "top-1/2 -translate-y-1/2"
                          }`}
                        >
                          <Logo uni={uni} />
                        </div>
                      </div>

                      {/* Body */}
                      <div
                        className={`flex flex-1 flex-col items-center px-6 pb-6 text-center ${uni.image ? "pt-14" : "pt-6"}`}
                      >
                        <h3 className="text-base font-semibold leading-snug text-[#1B1B1B] sm:text-lg">
                          {uni.name}
                        </h3>
                        <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B6B]">
                          <span className="flex h-4 w-4 overflow-hidden rounded-full ring-1 ring-black/10">
                            <Flag code={activeCountry.code} />
                          </span>
                          {uni.country}
                        </p>

                        {uni.note && (
                          <p className="mt-3 rounded-full bg-[#FDECEA] px-3 py-1 text-[11px] font-semibold text-[#E0483E]">
                            {uni.note}
                          </p>
                        )}

                        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#1B1B1B] transition-colors group-hover:text-[#E0483E]">
                          View courses
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h14m0 0-6-6m6 6-6 6"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/universities"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#E0483E] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E0483E]/30 transition-all hover:-translate-y-0.5 hover:bg-[#C93C33]"
                >
                  {list.length > MAX_CARDS
                    ? `Explore all ${list.length} ${active} institutions`
                    : `Explore all universities`}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m0 0-6-6m6 6-6 6"
                    />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            /* No partners listed yet for this country */
            <div className="up-in mx-auto flex max-w-xl flex-col items-center rounded-[1.75rem] border border-dashed border-[#E0483E]/30 bg-white px-6 py-14 text-center">
              <span className="flex h-14 w-14 overflow-hidden rounded-full shadow-md ring-4 ring-[#FFFEFA]">
                <Flag code={activeCountry.code} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#1B1B1B]">
                {active} partners coming soon
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6B6B6B]">
                We&apos;re adding our {active} universities here. Our
                counsellors can already help you find the right course and
                apply.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${WHATSAPP_URL}${encodeURIComponent(active)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E0483E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E0483E]/30 transition-all hover:-translate-y-0.5 hover:bg-[#C93C33]"
                >
                  Ask a counsellor
                </a>
                <Link
                  href="/universities"
                  className="inline-flex items-center justify-center rounded-full border border-[#1B1B1B] px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
                >
                  See all universities
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
