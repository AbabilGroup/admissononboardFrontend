import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    label: "Years Experience",
    value: "15+",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.9 9h-3.02a15.5 15.5 0 0 0-1.2-5.32A8.03 8.03 0 0 1 19.9 11ZM12 4.06c.9 1.2 1.98 3.4 2.4 6.94H9.6c.42-3.54 1.5-5.74 2.4-6.94ZM4.1 13h3.02a15.5 15.5 0 0 0 1.2 5.32A8.03 8.03 0 0 1 4.1 13ZM7.12 11H4.1a8.03 8.03 0 0 1 4.22-5.32A15.5 15.5 0 0 0 7.12 11Zm2.48 2h4.8c-.42 3.54-1.5 5.74-2.4 6.94-.9-1.2-1.98-3.4-2.4-6.94Zm5.28 5.32a15.5 15.5 0 0 0 1.2-5.32h3.02a8.03 8.03 0 0 1-4.22 5.32Z" />
    ),
  },
  {
    label: "Service Guarantee",
    value: "100%",
    icon: (
      <path d="M2 21h3V10H2v11Zm19-9c0-1.1-.9-2-2-2h-5.7l.86-4.13.03-.31c0-.42-.17-.8-.44-1.08L12.83 3 7.41 8.41C7.15 8.67 7 9.03 7 9.41V19a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2Z" />
    ),
  },
  {
    label: "Visa Success",
    value: "500+",
    icon: (
      <path d="M12 2 4 5v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V5l-8-3Zm-1.2 13.4-3.2-3.2 1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4-6 6Z" />
    ),
  },
  {
    label: "Person Success",
    value: "500+",
    icon: (
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.24-8 5v3h16v-3c0-2.76-3.6-5-8-5Z" />
    ),
  },
];

export default function Branches() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Left: map */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#ECECEC] bg-white">
            <Image
              src="/map.png"
              alt="World map showing Admission OnBoard's reach"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6 opacity-80"
            />

            {/* <svg
              viewBox="0 0 400 260"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                id="route"
                d="M90 150 C 150 90, 230 200, 300 60"
                stroke="#E0483E"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                className="route-path"
              />
              <circle cx="90" cy="150" r="4" fill="#E0483E" />
              <circle
                cx="180"
                cy="150"
                r="4"
                fill="#E0483E"
                className="pulse-dot"
              />
              <circle cx="230" cy="200" r="4" fill="#E0483E" />
              <g
                className="plane"
                style={{
                  offsetPath: "path('M90 150 C 150 90, 230 200, 300 60')",
                }}
              >
                <path
                  d="M0 0 8 3 0 6 2 3Z"
                  fill="#E0483E"
                  transform="translate(-2 -3)"
                />
              </g>
            </svg> */}
          </div>

          {/* Right: copy */}
          <div>
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-[#1B1B1B] sm:text-3xl">
              Helping Students Worldwide Since 2026
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Since day one, Admission OnBoard has been focused on making
              overseas admissions simple. Built from real experience, our
              platform helps students navigate every step with confidence.
            </p>

            <Link
              href="/careers"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E0483E] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
              Join Our Team
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#ECECEC] bg-white hover:bg-[#E0483E] group px-4 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#E0483E">
                {stat.icon}
              </svg>
              <div className="text-2xl font-semibold text-[#1B1B1B] group-hover:text-white">
                {stat.value}
              </div>
              <div className="text-xs font-semibold group-hover:text-white text-[#6B6B6B] sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .route-path {
          animation: dash-move 3s linear infinite;
        }
        @keyframes dash-move {
          to { stroke-dashoffset: -24; }
        }
        .pulse-dot {
          animation: pulse-scale 1.8s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes pulse-scale {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.6); }
        }
        .plane {
          animation: fly-along 4s linear infinite;
          offset-rotate: auto;
        }
        @keyframes fly-along {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
      `}</style>
    </section>
  );
}
