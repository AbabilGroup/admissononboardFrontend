import Image from "next/image";
import Link from "next/link";

// Place your images at, e.g.:
// /public/destinations/romania.png
// /public/destinations/malta.png
// /public/destinations/hungary.png
// /public/destinations/cyprus.png
// /public/destinations/united-kingdom.png
// /public/destinations/greece.png
// /public/destinations/australia.png
// /public/destinations/finland.png
// /public/destinations/lithuania.png

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
    image: "/united-kingdom.png",
    description:
      "World-renowned universities, one-year master's degrees, and generous post-study work options.",
  },
  {
    name: "Australia",
    slug: "australia",
    flagCode: "AU",
    image: "/australia-hero.avif",
    description:
      "Globally ranked universities paired with some of the most generous post-study work rights around.",
  },
  {
    name: "Finland",
    slug: "finland",
    flagCode: "FI",
    image: "/findland.png",
    description:
      "Tuition-friendly, innovation-led education in one of the world's happiest countries.",
  },
  {
    name: "Romania",
    slug: "romania",
    flagCode: "RO",
    image: "/romania.png",
    description:
      "Affordable tuition and EU-recognized degrees across a wide range of disciplines.",
  },
  {
    name: "Malta",
    slug: "malta",
    flagCode: "MT",
    image: "/malta.png",
    description:
      "English-taught programs on a safe, English-speaking island right inside the EU.",
  },
  {
    name: "Hungary",
    slug: "hungary",
    flagCode: "HU",
    image: "/hungary.png",
    description:
      "Renowned medical and engineering programs paired with a low cost of living.",
  },
  {
    name: "Cyprus",
    slug: "cyprus",
    flagCode: "CY",
    image: "/cyprus.png",
    description:
      "A fast-growing hub for business and tech degrees with a Mediterranean lifestyle.",
  },
  {
    name: "Greece",
    slug: "greece",
    flagCode: "GR",
    image: "/greece.png",
    description:
      "Rich academic history paired with modern, budget-friendly degree options.",
  },
  {
    name: "Lithuania",
    slug: "lithuania",
    flagCode: "LT",
    image: "/lithuania.png",
    description:
      "Budget-friendly EU degrees with a fast-growing international student community.",
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
                <span className="absolute bottom-3 left-4 flex items-center gap-2 text-sm font-semibold text-white sm:text-base">
                  <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wide backdrop-blur-sm">
                    {destination.flagCode}
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
