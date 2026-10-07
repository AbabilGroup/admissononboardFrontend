const steps = [
  {
    number: "01",
    title: "Free Profile Assessment",
    description:
      "Share your goals with us. We evaluate your academic and financial profile right from day one.",
  },
  {
    number: "02",
    title: "Shortlist & Apply",
    description:
      "We match you to the right courses and universities, then prepare your complete application.",
  },
  {
    number: "03",
    title: "Scholarships & Documentation",
    description:
      "We help you secure funding and get every required document sorted and ready.",
  },
  {
    number: "04",
    title: "Visa Support",
    description:
      "Our team walks you through visa submission and the full compliance process, start to finish.",
  },
  {
    number: "05",
    title: "Enrol & Arrive",
    description:
      "Get help with accommodation and ongoing support as you settle into your new course.",
  },
];

export default function TheJourney() {
  return (
    <section className="w-full bg-[#FDF1EF] px-6 py-20">
      <div className="mx-auto container">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E0483E]">
            The Journey
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
            From Dream To Degree In Five Simple Steps
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0483E] text-xs font-bold text-white">
                {step.number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#1B1B1B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
