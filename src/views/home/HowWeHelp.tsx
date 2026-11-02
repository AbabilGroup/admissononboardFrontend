import React from "react";

type Card = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "College & University Admission",
    description:
      "We simplify the admission process, helping you pick the right course and put together strong SOPs, documents, and applications.",
    icon: (
      <path d="M12 2 2 8l10 5 8-4v6h2V8L12 2Zm0 8L4 8l8-4 8 4-8 4Zm-6 2v4c0 1.66 2.69 3 6 3s6-1.34 6-3v-4l-6 3-6-3Z" />
    ),
  },
  {
    title: "Scholarship Assistance",
    description:
      "We match you with scholarships that fit your profile and help with essays, documentation, and every deadline in between.",
    icon: (
      <path d="M12 2 4 5v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V5l-8-3Zm-1.2 13.4-3.2-3.2 1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4-6 6Z" />
    ),
  },
  {
    title: "Financial Documentation",
    description:
      "Clear guidance on bank statements, income proof, and sponsorship letters, prepared accurately and delivered on time.",
    icon: (
      <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2v10h14V6H5Zm2 2h6v2H7V8Zm0 3h10v2H7v-2Z" />
    ),
  },
  {
    title: "Career Counselling",
    description:
      "Personalized advice built around your background and goals, helping you land on the career path that actually fits.",
    icon: (
      <path d="M9 2v2H7v2H5v2H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-2V6h-2V4h-2V2H9Zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    ),
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "Travel prep, orientation, and a clear picture of what to expect, so you arrive confident and ready for day one.",
    icon: (
      <path d="M2.5 19.5 21 3l-4.5 12.5L14 12l-3.5 3.5L7 12l-4.5 7.5Zm7.4-4.6 2.4 2.4 6.6-11.6-9 9.2Z" />
    ),
  },
  {
    title: "Test Preparation",
    description:
      "In-house coaching for IELTS, TOEFL, GRE, GMAT, and SAT, designed to help you hit the score your target program needs.",
    icon: (
      <path d="M9 2h6a2 2 0 0 1 2 2v2h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h4V4a2 2 0 0 1 2-2Zm0 4h6V4H9v2Zm-3 5h2v2H6v-2Zm4 0h8v2h-8v-2Zm-4 4h2v2H6v-2Zm4 0h8v2h-8v-2Z" />
    ),
  },
];

export default function HowWeHelp() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1366E0]">
            How We Help
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
            End-to-End Support, Every Step of the Way
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#6B6B6B] sm:text-base">
            From admissions to visas, get personalized guidance from our
            certified education specialists.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="hwh-card group"
              // Offset each card's light so they don't all orbit in sync
              style={{ "--delay": `${i * -0.7}s` } as React.CSSProperties}
            >
              <div className="hwh-inner relative flex h-full flex-col gap-4 overflow-hidden rounded-[calc(1.5rem-2px)] bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1366E0]/10 text-[#1366E0] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-linear-to-br group-hover:from-[#1366E0] group-hover:to-[#F58B0F] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#1366E0]/30">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {card.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1B1B1B] transition-colors duration-300 group-hover:text-[#1366E0] sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Animatable angle so the gradient border light travels around the card edge */
        @property --hwh-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .hwh-card {
          position: relative;
          isolation: isolate;
          border-radius: 1.5rem;
          padding: 2px;
          /* Travelling light on top of a faint static border */
          background:
            conic-gradient(from var(--hwh-angle), transparent 0 55%, #1366E0 72%, #F58B0F 86%, transparent 97%),
            linear-gradient(rgba(19, 102, 224, 0.12), rgba(19, 102, 224, 0.12));
          animation: hwh-orbit 4s linear infinite;
          animation-delay: var(--delay, 0s);
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
        }
        /* Soft glow that follows the light */
        .hwh-card::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: conic-gradient(from var(--hwh-angle), transparent 0 55%, #1366E0 72%, #F58B0F 86%, transparent 97%);
          filter: blur(16px);
          opacity: 0.35;
          animation: inherit;
          transition: opacity 0.5s ease;
        }
        .hwh-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px -16px rgba(19, 102, 224, 0.35);
        }
        .hwh-card:hover::after { opacity: 0.8; }

        /* Shine that sweeps across the card on hover */
        .hwh-inner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(19, 102, 224, 0.08) 45%, rgba(245, 139, 15, 0.1) 55%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .hwh-card:hover .hwh-inner::before { transform: translateX(120%); }

        @keyframes hwh-orbit {
          to { --hwh-angle: 360deg; }
        }

        /* Cards rise in as they scroll into view (where scroll-driven animations are supported) */
        @supports (animation-timeline: view()) {
          .hwh-card {
            animation: hwh-orbit 4s linear infinite, hwh-rise linear both;
            animation-delay: var(--delay, 0s), 0s;
            animation-timeline: auto, view();
            animation-range: normal, entry 0% entry 60%;
          }
          .hwh-card::after {
            animation: hwh-orbit 4s linear infinite;
            animation-delay: var(--delay, 0s);
          }
        }
        /* Uses translate/scale (not transform) so it doesn't block the hover lift */
        @keyframes hwh-rise {
          from { opacity: 0; translate: 0 40px; scale: 0.96; }
          to   { opacity: 1; translate: 0 0; scale: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hwh-card, .hwh-card::after { animation: none; }
          .hwh-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
