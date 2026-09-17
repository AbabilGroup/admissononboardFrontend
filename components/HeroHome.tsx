import Image from "next/image";
import Link from "next/link";


export default function HeroHome() {
  return (
    <section className="w-full bg-[#FFFEFA]">
      <div className="mx-auto flex container flex-col items-center gap-12 px-6 py-20 md:flex-row md:gap-10 md:py-18">
        {/* Left: copy */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1B1B1B] sm:text-5xl">
            Turn your overseas education
            <br className="hidden sm:block" /> vision into reality with{" "}
            <span className="text-[#E0483E]">Admission OnBoard</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-[#6B6B6B] sm:text-lg">
            Guided by specialists, connected to leading universities, and
            supported at every step of the journey.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#1B1B1B] bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
          >
            Schedule A Free Consultation
            <svg
              width="16"
              height="16"
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

        {/* Right: image, basic */}
        <div className="w-full md:w-1/2">
          <Image
            src="/heroadmission.png"
            alt="Graduate celebrating academic success"
            width={580}
            height={580}
            className="mx-auto h-auto w-full max-w-[520px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
