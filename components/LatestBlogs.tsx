"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Place your blog cover images at, e.g.:
// /public/blogs/university-location.jpg
// /public/blogs/renewable-energy-engineering.jpg
// /public/blogs/reading-course-descriptions.jpg
// /public/blogs/english-taught-degrees.jpg

type Category = "Academic Writing" | "Destinations";

type Blog = {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

const categoryStyles: Record<Category, string> = {
  "Academic Writing": "bg-[#2F5DA8]/10 text-[#2F5DA8]",
  Destinations: "bg-[#E0483E]/10 text-[#E0483E]",
};

const blogs: Blog[] = [
  {
    slug: "what-to-look-for-in-a-university-location",
    category: "Academic Writing",
    title:
      "What International Students Should Look For In A University Location",
    excerpt:
      "Picking a university is about more than the course itself. Safety, cost of living, and campus surroundings matter just as much as the ranking...",
    image: "/university-location.png",
    date: "11 Sept 2026",
  },
  {
    slug: "best-countries-renewable-energy-engineering",
    category: "Destinations",
    title: "Best Countries To Study Renewable Energy Engineering",
    excerpt:
      "As the world shifts toward cleaner power, demand is rising for engineers who can design and scale sustainable energy systems...",
    image: "/renewable-energy-engineering.png",
    date: "11 Sept 2026",
  },
  {
    slug: "how-to-read-a-course-description",
    category: "Academic Writing",
    title: "How To Read A University Course Description Before Applying",
    excerpt:
      "Choosing a course is one of the biggest decisions in your study abroad journey. Here's how to actually understand what a listing is telling you...",
    image: "/reading-course-descriptions.png",
    date: "11 Sept 2026",
  },
  {
    slug: "best-european-countries-english-taught-degrees",
    category: "Destinations",
    title: "Best European Countries For English-Taught Degrees",
    excerpt:
      "You don't need to learn a new language to study in Europe. These destinations offer strong English-taught programs at a fraction of UK or US tuition...",
    image: "/english-taught-degrees.png",
    date: "11 Sept 2026",
  },
];

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="#9A9A9A"
      className="shrink-0"
    >
      <path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7ZM5 9h14v11H5V9Z" />
    </svg>
  );
}

export default function LatestBlogs() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild?.clientWidth ?? 320;
    track.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#E0483E]">
              From The Blog
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
              Study Abroad Guides &amp; Advice
            </h2>
          </div>

          <Link
            href="/our-blogs"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E0483E] bg-white px-6 py-3 text-sm font-semibold text-[#E0483E] transition-colors hover:border-[#E0483E]"
          >
            Visit The Blog
          </Link>
        </div>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/our-blogs`}
                className="group flex w-[280px] shrink-0 snap-start flex-col sm:w-[300px]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="300px"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#1B1B1B] backdrop-blur-sm">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#E0483E"
                    >
                      <path d="M12 2 2 8l10 5 8-4v6h2V8L12 2Zm0 8L4 8l8-4 8 4-8 4Zm-6 2v4c0 1.66 2.69 3 6 3s6-1.34 6-3v-4l-6 3-6-3Z" />
                    </svg>
                    Admission OnBoard
                  </span>
                </div>

                <span
                  className={`mt-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${categoryStyles[blog.category]}`}
                >
                  {blog.category}
                </span>

                <h3 className="mt-3 text-base font-semibold leading-snug text-[#1B1B1B] transition-colors group-hover:text-[#E0483E]">
                  {blog.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-[#6B6B6B]">
                  {blog.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#9A9A9A]">
                  <CalendarIcon />
                  {blog.date}
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel arrows */}
          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous article"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#1B1B1B] transition-colors hover:border-[#1B1B1B]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next article"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#1B1B1B] transition-colors hover:border-[#1B1B1B]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
