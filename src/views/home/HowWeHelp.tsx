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
          <p className="text-xs font-bold uppercase tracking-widest text-[#E0483E]">
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
          {cards.map((card) => (
            <div key={card.title} className="spinning-border-wrap">
              <div className="spinning-border" />
              <div className="relative flex h-full flex-col gap-4 rounded-[1.4rem] bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0483E]/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#E0483E"
                  >
                    {card.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1B1B1B] sm:text-lg">
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
        .spinning-border-wrap {
          position: relative;
          border-radius: 1.5rem;
          padding: 1.5px;
          overflow: hidden;
          isolation: isolate;
        }
        .spinning-border {
          position: absolute;
          inset: -60%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            #E0483E 40deg,
            #F58B0F 80deg,
            transparent 130deg,
            transparent 360deg
          );
          animation: spin-border 5s linear infinite;
        }
        @keyframes spin-border {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
