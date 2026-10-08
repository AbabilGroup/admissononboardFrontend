import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

type Destination = {
  name: string;
  slug: string;
  flagCode: string;
  image: string;
  description: string;
};

const destinations: Destination[] = [
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    flagCode: "GB",
    image: "/uk.png",
    description:
      "World-renowned universities, one-year master's degrees, and generous post-study work options.",
  },
  {
    name: "Australia",
    slug: "australia",
    flagCode: "AU",
    image: "/australia.png",
    description:
      "Globally ranked universities paired with some of the most generous post-study work rights around.",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flagCode: "NZ",
    image: "/newzeland.png",
    description:
      "Practical, globally respected degrees, post-study work visas, and a safe, welcoming lifestyle.",
  },
  {
    name: "Finland",
    slug: "finland",
    flagCode: "FI",
    image: "/findland-hero.png",
    description:
      "Tuition-friendly, innovation-led education in one of the world's happiest countries.",
  },
  {
    name: "Romania",
    slug: "romania",
    flagCode: "RO",
    image: "/romania-hero.png",
    description:
      "Affordable tuition and EU-recognized degrees across a wide range of disciplines.",
  },
  {
    name: "Malta",
    slug: "malta",
    flagCode: "MT",
    image: "/malta-hero.png",
    description:
      "English-taught programs on a safe, English-speaking island right inside the EU.",
  },
  {
    name: "Hungary",
    slug: "hungary",
    flagCode: "HU",
    image: "/hungary-hero.png",
    description:
      "Renowned medical and engineering programs paired with a low cost of living.",
  },
  {
    name: "Cyprus",
    slug: "cyprus",
    flagCode: "CY",
    image: "/cyprus-hero.png",
    description:
      "A fast-growing hub for business and tech degrees with a Mediterranean lifestyle.",
  },
  {
    name: "Greece",
    slug: "greece",
    flagCode: "GR",
    image: "/greece-hero.png",
    description:
      "Rich academic history paired with modern, budget-friendly degree options.",
  },
  {
    name: "Lithuania",
    slug: "lithuania",
    flagCode: "LT",
    image: "/lithuania-hero.png",
    description:
      "Budget-friendly EU degrees with a fast-growing international student community.",
  },
  {
    name: "Italy",
    slug: "italy",
    flagCode: "IT",
    image: "/italy.png",
    description:
      "Historic universities, 800+ English-taught programmes and low public tuition with regional scholarships.",
  },
  {
    name: "Norway",
    slug: "norway",
    flagCode: "NO",
    image: "/norway.png",
    description:
      "High-quality, research-led Master's programmes in one of the world's safest and best-paid economies.",
  },
];

export default function DreamDestinations() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#E0483E]">
              Destinations
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
              Explore Top Study Destinations
            </h2>
          </div>

          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E0483E] bg-white px-6 py-3 text-sm font-semibold text-[#E0483E] transition-colors hover:border-[#E0483E]/90"
          >
            Browse All Programmes
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#ECECEC] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link
                href={`/countries/${destination.slug}`}
                className="relative block aspect-[16/10] w-full overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={`Study in ${destination.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-4 flex items-center gap-2.5 text-sm font-semibold text-white sm:text-base">
                  <span className="flex overflow-hidden rounded-[4px] shadow-md ring-2 ring-white/80">
                    <ReactCountryFlag
                      countryCode={destination.flagCode}
                      svg
                      title={destination.name}
                      aria-label={`Flag of ${destination.name}`}
                      style={{
                        width: "1.75em",
                        height: "1.3em",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </span>
                  {destination.name}
                </span>
              </Link>

              <div className="flex flex-1 flex-col justify-between p-5">
                <p className="text-sm leading-relaxed text-[#6B6B6B]">
                  {destination.description}
                </p>

                <Link
                  href={`/courses?destination=${destination.slug}`}
                  className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-[#E0483E] transition-colors hover:text-[#1B1B1B]"
                >
                  View Courses
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
