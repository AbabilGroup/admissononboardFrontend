"use client";

import { useEffect, useId, useMemo, useState } from "react";

type Country = "uk" | "bangladesh" | "nepal";

type Office = {
  id: string;
  country: Country;
  countryLabel: string;
  flag: string;
  name: string;
  city: string;
  timeZone: string;
  addressLines: string[];
  phone: string;
  email: string;
  accent: string;
};

const offices: Office[] = [
  {
    id: "uk-london",
    country: "uk",
    countryLabel: "United Kingdom",
    flag: "🇬🇧",
    name: "UK Office",
    city: "London",
    timeZone: "Europe/London",
    addressLines: [
      "Kirkdale House, 7 Kirkdale Road",
      "London, England, E11 1HP",
      "United Kingdom",
    ],
    phone: "+44 7465 268767",
    email: "info@admissiononboard.com",
    accent: "#2F5DA8",
  },
  {
    id: "bd-dhaka",
    country: "bangladesh",
    countryLabel: "Bangladesh",
    flag: "🇧🇩",
    name: "Dhaka Office",
    city: "Dhaka",
    timeZone: "Asia/Dhaka",
    addressLines: [
      "Plot-34, H M Plaza, 4th Floor",
      "Sector-03, Uttara, Dhaka-1229",
      "Bangladesh",
    ],
    phone: "+8801906499741",
    email: "dhaka@admissiononboard.com",
    accent: "#E0483E",
  },
  {
    id: "bd-sylhet",
    country: "bangladesh",
    countryLabel: "Bangladesh",
    flag: "🇧🇩",
    name: "Sylhet Office",
    city: "Sylhet",
    timeZone: "Asia/Dhaka",
    addressLines: [
      "3rd Floor, Ananda Tower",
      "Jail Road, Sylhet",
      "Bangladesh",
    ],
    phone: "+8801906499742",
    email: "sylhet@admissiononboard.com",
    accent: "#59B226",
  },
  {
    id: "np-kathmandu",
    country: "nepal",
    countryLabel: "Nepal",
    flag: "🇳🇵",
    name: "Nepal Office",
    city: "Kathmandu",
    timeZone: "Asia/Kathmandu",
    addressLines: [
      "100 Katyani Marg",
      "Bagmati Province 44600",
      "Kathmandu, Nepal",
    ],
    phone: "+977 982-8416761",
    email: "kathmandu@admissiononboard.com",
    accent: "#B8862B",
  },
];

const filters: { key: "all" | Country; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "🌐" },
  { key: "uk", label: "UK", icon: "🇬🇧" },
  { key: "bangladesh", label: "Bangladesh", icon: "🇧🇩" },
  { key: "nepal", label: "Nepal", icon: "🇳🇵" },
];


function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const frame = requestAnimationFrame(tick);
    const t = setInterval(tick, 30_000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(t);
    };
  }, []);
  return now;
}

function localTime(now: Date | null, timeZone: string) {
  if (!now) return null;
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);
}

function mapsUrl(office: Office) {
  const q = encodeURIComponent(office.addressLines.join(", "));
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default function OurOffices() {
  const [active, setActive] = useState<"all" | Country>("all");
  const now = useNow();

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: offices.length };
    offices.forEach((o) => (c[o.country] = (c[o.country] ?? 0) + 1));
    return c;
  }, []);

  const filtered = useMemo(() => {
    const base =
      active === "all" ? offices : offices.filter((o) => o.country === active);

    const seen = new Set<string>();
    return base.filter((o) => {
      if (seen.has(o.id)) return false;
      seen.add(o.id);
      return true;
    });
  }, [active]);

  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#1B1B1B] sm:text-4xl">
          Our Offices
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
          Four offices across three countries. Visit, call or email the
          Admission On Board team nearest to you.
        </p>

        <div
          role="group"
          aria-label="Filter offices by country"
          className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#ECECEC] bg-white p-1.5 shadow-sm"
        >
          {filters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(f.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483E] focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-[#E0483E] text-white shadow-md"
                    : "text-[#6B6B6B] hover:bg-[#FFF3F2] hover:text-[#1B1B1B]"
                }`}
              >
                {f.key === "all" ? (
                  <span aria-hidden>{f.icon}</span>
                ) : (
                  <Flag country={f.key} className="h-3.5 w-5" />
                )}
                {f.label}
                <span
                  className={`rounded-full px-1.5 text-xs tabular-nums ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-[#F3F3F3] text-[#8A8A8A]"
                  }`}
                >
                  {counts[f.key] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Office cards */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((office) => {
          const time = localTime(now, office.timeZone);
          return (
            <article
              key={office.id}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-[#ECECEC] bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Header band */}
              <header
                className="relative px-6 pb-5 pt-6"
                style={{
                  background: `linear-gradient(135deg, ${office.accent}14 0%, ${office.accent}05 100%)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: office.accent }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white py-1 pl-1.5 pr-3 shadow-sm ring-1 ring-[#ECECEC]">
                      <Flag country={office.country} className="h-4 w-6" />
                      <span className="text-xs font-semibold text-[#1B1B1B]">
                        {office.countryLabel}
                      </span>
                    </span>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1B1B1B]">
                      {office.city}
                    </h3>
                    <p className="text-sm text-[#6B6B6B]">{office.name}</p>
                  </div>

                  <span
                    className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm ring-1"
                    style={{
                      ["--tw-ring-color" as string]: `${office.accent}33`,
                    }}
                  >
                    <Flag
                      country={office.country}
                      className="h-full w-full"
                      title={`Flag of ${office.countryLabel}`}
                    />
                  </span>
                </div>

                {time && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#3A3A3A] ring-1 ring-[#ECECEC]">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={office.accent}
                      strokeWidth={2}
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" d="M12 7v5l3 2" />
                    </svg>
                    Local time {time}
                  </p>
                )}
              </header>

              <div className="flex flex-1 flex-col gap-4 px-6 py-6 text-sm">
                <div className="flex items-start gap-3">
                  <IconTile accent={office.accent}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21c-4.5-4.5-7-8.25-7-11.5A7 7 0 0 1 12 2.5a7 7 0 0 1 7 7c0 3.25-2.5 7-7 11.5Z"
                    />
                    <circle cx="12" cy="9.5" r="2.3" />
                  </IconTile>
                  <address className="not-italic leading-relaxed text-[#4A4A4A]">
                    {office.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                <a
                  href={`tel:${office.phone.replace(/[\s-]+/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl font-medium text-[#1B1B1B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483E]"
                >
                  <IconTile accent={office.accent}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.5 5.5c0-1 .8-1.8 1.8-1.8H8l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v2.7c0 1-.8 1.8-1.8 1.8C10.5 18.7 5.3 13.5 3.5 7.3V5.5Z"
                    />
                  </IconTile>
                  <span className="transition-colors group-hover:text-[#E0483E]">
                    {office.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${office.email}`}
                  className="group flex items-center gap-3 rounded-xl font-medium text-[#2F5DA8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483E]"
                >
                  <IconTile accent={office.accent}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4 7 8 6 8-6"
                    />
                  </IconTile>
                  <span className="break-all transition-colors group-hover:text-[#E0483E]">
                    {office.email}
                  </span>
                </a>
              </div>

              <footer className="grid grid-cols-2 border-t border-[#F0F0F0]">
                <a
                  href={mapsUrl(office)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#3A3A3A] transition-colors hover:bg-[#FAFAFA] focus:outline-none focus-visible:bg-[#FAFAFA]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 4-6 2.5v13L9 17l6 2.5 6-2.5V4l-6 2.5L9 4Zm0 0v13m6-10.5v13"
                    />
                  </svg>
                  Get directions
                </a>
                <a
                  href={`tel:${office.phone.replace(/[\s-]+/g, "")}`}
                  className="flex items-center justify-center gap-2 border-l border-[#F0F0F0] py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:opacity-90"
                  style={{ backgroundColor: office.accent }}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.5 5.5c0-1 .8-1.8 1.8-1.8H8l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v2.7c0 1-.8 1.8-1.8 1.8C10.5 18.7 5.3 13.5 3.5 7.3V5.5Z"
                    />
                  </svg>
                  Call {office.city}
                </a>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function IconTile({
  accent,
  children,
}: {
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
      style={{ backgroundColor: `${accent}14` }}
      aria-hidden
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth={2}
      >
        {children}
      </svg>
    </span>
  );
}


function Flag({
  country,
  className = "",
  title,
}: {
  country: Country;
  className?: string;
  title?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const a11y = title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true };

  if (country === "uk") {
    return (
      <svg
        viewBox="0 0 60 30"
        preserveAspectRatio="xMidYMid meet"
        className={className}
        {...a11y}
      >
        <clipPath id={`uk-s-${uid}`}>
          <rect width="60" height="30" rx="2" />
        </clipPath>
        <clipPath id={`uk-t-${uid}`}>
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath={`url(#uk-s-${uid})`}>
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath={`url(#uk-t-${uid})`}
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    );
  }

  if (country === "bangladesh") {
    return (
      <svg
        viewBox="0 0 50 30"
        preserveAspectRatio="xMidYMid meet"
        className={className}
        {...a11y}
      >
        <rect width="50" height="30" rx="2" fill="#006A4E" />
        <circle cx="22.5" cy="15" r="10" fill="#F42A41" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 122"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...a11y}
    >
      <path
        d="M3,3 L94,62 L36,62 L94,119 L3,119 Z"
        fill="#DC143C"
        stroke="#003893"
        strokeWidth="5"
        strokeLinejoin="miter"
      />
      <circle cx="27" cy="44" r="12" fill="#fff" />
      <circle cx="27" cy="38" r="12" fill="#DC143C" />
      <circle cx="27" cy="47" r="5" fill="#fff" />
      <g fill="#fff" transform="translate(27 94)">
        <rect x="-9" y="-9" width="18" height="18" />
        <rect x="-9" y="-9" width="18" height="18" transform="rotate(30)" />
        <rect x="-9" y="-9" width="18" height="18" transform="rotate(60)" />
      </g>
    </svg>
  );
}
