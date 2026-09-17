
import Image from "next/image";


const rows = [
  {
    title: "End-to-End Admission Guidance",
    description:
      "We support students at every stage, from their very first question to the day they enrol. Our dedicated team manages follow-ups and paperwork, keeping the whole process smooth and stress-free.",
    image: "/admission-support.png",
    imageFirst: true,
  },
  {
    title: "Prime Branding Exposure",
    description:
      "Get your institution in front of the right audience through international fairs, seminars, and targeted campaigns. Gain visibility across our social channels and connect with prospective students on a global scale.",
    image: "/branding.png",
    imageFirst: false,
  },
  {
    title: "Complete Visa & Compliance Support",
    description:
      "We handle end-to-end support for student visa applications and documentation. Students get expert guidance on regulatory requirements, while your team's workload stays light and fully compliant.",
    image: "/visa-support.png",
    imageFirst: true,
  },
];

export default function WhyPartnerWithUs() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            Why Partner with{" "}
            <span className="text-[#E0483E]">Admission OnBoard</span>?
          </h2>
          <p className="mt-3 text-sm font-semibold text-[#6B6B6B] sm:text-base">
            Streamline recruitment. Boost visibility. Attract qualified
            students, effortlessly.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {rows.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              {row.imageFirst ? (
                <>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                    <Image
                      src={row.image}
                      alt={row.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#E0483E] sm:text-2xl">
                      {row.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                      {row.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-[#E0483E] sm:text-2xl">
                      {row.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                      {row.description}
                    </p>
                  </div>
                  <div className="order-1 relative aspect-[4/3] w-full overflow-hidden rounded-3xl md:order-2">
                    <Image
                      src={row.image}
                      alt={row.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
