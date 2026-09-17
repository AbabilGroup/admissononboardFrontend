"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const columns: {
  images: string[];
  direction: "up" | "down";
  duration: number;
  mobileDuration: number;
}[] = [
  {
    images: ["/visa1.png", "/visa2.png", "/visa3.png"],
    direction: "up",
    duration: 22,
    mobileDuration: 34,
  },
  {
    images: ["/visa4.png", "/visa5.png", "/visa6.png"],
    direction: "down",
    duration: 26,
    mobileDuration: 40,
  },
  {
    images: ["/visa7.png", "/visa8.png", "/visa9.png"],
    direction: "up",
    duration: 30,
    mobileDuration: 34,
  },
  {
    images: ["/visa10.png", "/visa11.png", "/visa12.png"],
    direction: "down",
    duration: 24,
    mobileDuration: 40,
  },
  {
    images: ["/visa13.png", "/visa14.png", "/visa15.png"],
    direction: "up",
    duration: 28,
    mobileDuration: 34,
  },
  {
    images: ["/visa16.png", "/visa17.png", "/visa18.png"],
    direction: "down",
    duration: 20,
    mobileDuration: 40,
  },
];

// Only the first two columns are shown on mobile — wider, calmer, easier to look at.
const MOBILE_VISIBLE_COLUMNS = 2;

export default function SuccessStoriesGallery() {
  const columnRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean };

        columnRefs.current.forEach((el, i) => {
          if (!el) return;
          // Skip animating columns that are hidden on mobile — saves work.
          if (isMobile && i >= MOBILE_VISIBLE_COLUMNS) return;

          const { direction, duration, mobileDuration } = columns[i];
          const activeDuration = isMobile ? mobileDuration : duration;

          gsap.fromTo(
            el,
            { yPercent: direction === "up" ? 0 : -50 },
            {
              yPercent: direction === "up" ? -50 : 0,
              duration: activeDuration,
              ease: "none",
              repeat: -1,
            },
          );
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFEFA] py-14 sm:py-20">
      {/* Scrolling photo columns */}
      <div className="relative mx-auto flex h-[420px] container gap-3 px-4 sm:h-[600px] sm:gap-4">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`relative h-full flex-1 overflow-hidden ${
              colIndex >= MOBILE_VISIBLE_COLUMNS ? "hidden sm:block" : ""
            }`}
          >
            <div
              ref={(el) => {
                columnRefs.current[colIndex] = el;
              }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              {[...column.images, ...column.images].map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-xl sm:aspect-[3/4] sm:rounded-2xl"
                >
                  <Image
                    src={src}
                    alt="Student success moment"
                    fill
                    sizes="(max-width: 639px) 50vw, 200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Fade overlays so columns dissolve into the background at the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#FFFEFA] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#FFFEFA] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#FFFEFA] to-transparent sm:h-16" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FFFEFA] to-transparent sm:h-16" />
      </div>

      {/* Text overlay, anchored to the top instead of centered */}
      <div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center px-4 sm:top-14 sm:px-6">
        <div className="pointer-events-auto max-w-xl rounded-2xl bg-[#FFFEFA]/90 px-5 py-6 text-center shadow-xl backdrop-blur-sm sm:rounded-3xl sm:px-8 sm:py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#6B6B6B] sm:mt-4 sm:text-base">
            A glimpse into real student life abroad, straight from international
            students sharing their experiences, challenges, and wins.
          </p>
        </div>
      </div>
    </section>
  );
}
