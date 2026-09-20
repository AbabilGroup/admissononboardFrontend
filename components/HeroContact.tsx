import Image from "next/image";
import Link from "next/link";

// Place your image at: /public/get-in-touch.png

export default function HeroContact() {
  return (
    <section className="w-full bg-[#FFFEFA] py-8 sm:py-2">
      <div className="mx-auto container px-6">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          {/* Left: heading, copy, CTA */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
              Contact With Us — We&apos;re Here to Help
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Not sure where to start with studying overseas? Our advisors are
              on hand to walk you through every step, offering tailored advice
              for your international education plans.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#DC202B]/90 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#DC202B]"
            >
              Contact With Us
            </Link>
          </div>

          {/* Right: image fading into the background */}
          <div className="relative mx-auto h-[280px] w-full max-w-2xl sm:h-[460px]">
            <Image
              src="/hero-contact.png"
              alt="Support advisor ready to help with study abroad questions"
              fill
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-contain object-bottom"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 55%, transparent 90%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 55%, transparent 90%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
