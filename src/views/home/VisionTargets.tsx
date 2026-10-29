import React from "react";
import CountUp from "./CountUp";

type Target = {
  value: string;
  label: string;
  color: string;
  icon: React.ReactNode;
  /** Experience is an achievement, not a target – so no "Vision Target" badge. */
  hideBadge?: boolean;
};

const targets: Target[] = [
  {
    value: "1000+",
    label: "Universities & Colleges",
    color: "#1366E0",
    icon: (
      <path d="M12 2 2 7v2h20V7L12 2Zm-7 9v7H3v2h18v-2h-2v-7h-2v7h-3v-7h-2v7H9v-7H7v7H5v-7Z" />
    ),
  },
  {
    value: "50+",
    label: "Source Markets",
    color: "#3DB94A",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-2.9a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8ZM12 4a13.6 13.6 0 0 1 1.9 4h-3.8A13.6 13.6 0 0 1 12 4ZM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3Zm.8 2H8a15.7 15.7 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16ZM8 8H5.1a8 8 0 0 1 4.3-3.6A15.7 15.7 0 0 0 8 8Zm4 12a13.6 13.6 0 0 1-1.9-4h3.8A13.6 13.6 0 0 1 12 20Zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4Zm.3 5.6A15.7 15.7 0 0 0 16 16h2.9a8 8 0 0 1-4.3 3.6Zm1.7-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4Z" />
    ),
  },
  {
    value: "10000+",
    label: "Global Partners",
    color: "#F58B0F",
    icon: (
      <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-1.1.4-2.1 1.2-2.9A11 11 0 0 0 8 13Zm8 0c-.3 0-.7 0-1.1.1 1.2.9 2.1 2.1 2.1 3.9v3h7v-3c0-2.7-5.3-4-8-4Z" />
    ),
  },
  {
    value: "10+",
    label: "Years Experience",
    color: "#8B3DD1",
    hideBadge: true,
    icon: (
      <path d="M12 1a7 7 0 0 0-4 12.74V23l4-2.4 4 2.4v-9.26A7 7 0 0 0 12 1Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-2 12.73a7 7 0 0 0 4 0v3.74l-2-1.2-2 1.2v-3.74Z" />
    ),
  },
];

export default function VisionTargets() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-16 sm:py-20">
      <div className="mx-auto container">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1366E0]">
            Our Vision
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
            Your Global Education Journey,
            <br />
            Made Simple.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {targets.map((t) => (
            <div
              key={t.label}
              className="group rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-[0_10px_30px_-12px_rgba(15,27,61,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(19,102,224,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: t.color }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    {t.icon}
                  </svg>
                </span>
                {!t.hideBadge && (
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                    style={{ color: t.color, backgroundColor: `${t.color}14` }}
                  >
                    Vision Target
                  </span>
                )}
              </div>
              <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: t.color }}>
                <CountUp value={t.value} />
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#6B6B6B] sm:text-base">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
