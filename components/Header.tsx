"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const countries = [
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Finland",
  "Greece",
  "Lithuania",
  "Hungary",
  "Romania",
  "Malta",
  "Cyprus",
];

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/universities", label: "Universities" },
  { href: "/courses", label: "Courses" },
];

const about = [
  "Our Story",
  "Success Stories",
  // "Our Gallery",
  "Careers",
  "Contact",
  "Our Blogs",
];

const partner = ["Recruitment Partner", "Institution Partner"];

function toSlug(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      className={`mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Collapsible group used inside the mobile menu (About / Countries / Partners)
function MobileGroup({
  label,
  items,
  basePath,
}: {
  label: string;
  items: string[];
  basePath?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/5 py-2">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-2 text-base font-medium text-zinc-900"
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="flex flex-col gap-1 pb-2 pl-2">
          {items.map((item) => (
            <Link
              key={item}
              href={`${basePath ?? ""}/${toSlug(item)}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-[#E0483E]/8 hover:text-black"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4">
      <header className="mx-auto container rounded-[28px] border border-black/5 bg-linear-to-b from-white/80 via-white/70 to-[#FFFEFA] shadow-lg shadow-black/5 backdrop-blur-xl lg:rounded-full">
        <div className="flex h-16 w-full items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-black"
          >
            <Image
              src={"/logo.png"}
              alt="admition on board"
              width={180}
              height={22}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-base font-light text-zinc-900 lg:flex">
            <div className="group relative">
              <button className="flex cursor-pointer items-center gap-1.5 py-2 transition-colors duration-200 group-hover:text-black">
                About
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xl backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {about.map((item) => (
                      <Link
                        key={item}
                        href={`/${toSlug(item)}`}
                        className="rounded-lg px-3 py-2 text-base font-medium text-zinc-600 transition-colors duration-150 hover:bg-[#0D7CE1]/8 hover:text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href={"/countries"}
                className="flex cursor-pointer items-center gap-1.5 py-2 transition-colors duration-200 group-hover:text-black"
              >
                Countries
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              <div className="invisible absolute left-1/2 top-full z-50 w-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xl backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {countries.map((country) => (
                      <Link
                        key={country}
                        href={`/countries/${toSlug(country)}`}
                        className="rounded-lg px-3 py-2 text-base font-medium text-zinc-600 transition-colors duration-150 hover:bg-[#0D7CE1]/8 hover:text-black"
                      >
                        {country}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group/link relative py-2 transition-colors duration-200 hover:text-black"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover/link:scale-x-100" />
              </Link>
            ))}

            <div className="group relative">
              <button className="flex cursor-pointer items-center gap-1.5 py-2 transition-colors duration-200 group-hover:text-black">
                Partners
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-70 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xl backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {partner.map((item) => (
                      <Link
                        key={item}
                        href={`/${toSlug(item)}`}
                        className="rounded-lg px-3 py-2 text-base font-medium text-zinc-600 transition-colors duration-150 hover:bg-[#0D7CE1]/8 hover:text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop auth buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/auth/login"
              className="flex h-10 items-center justify-center rounded-full border border-black px-5 text-[15px] font-semibold tracking-wide text-black transition-colors duration-200 hover:border-[#E0483E] hover:bg-black/2 hover:text-[#E0483E]"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="flex h-10 items-center justify-center rounded-full bg-black px-5 text-[15px] font-semibold tracking-wide text-white shadow-sm shadow-[#F68F29]/30 transition-colors duration-200 hover:bg-gray-950"
            >
              Register as a Student
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-black lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M4 7h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="border-t border-black/5 px-6 pb-6 pt-2 lg:hidden">
            <nav className="flex flex-col">
              <MobileGroup label="About" items={about} />
              <MobileGroup
                label="Countries"
                items={countries}
                basePath="/countries"
              />

              <div className="flex flex-col border-b border-black/5 py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-base font-medium text-zinc-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <MobileGroup label="Partners" items={partner} />
            </nav>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 items-center justify-center rounded-full border border-black text-[15px] font-semibold tracking-wide text-black transition-colors duration-200 hover:border-[#E0483E] hover:text-[#E0483E]"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 items-center justify-center rounded-full bg-black text-[15px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-gray-950"
              >
                Register as a Student
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
