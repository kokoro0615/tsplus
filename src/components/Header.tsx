"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_CTA_LINKS, NAV_LINKS } from "@/data/site-data";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto max-w-[1500px] px-5 lg:w-[90%] lg:px-0">
        <div className="relative flex h-[76px] items-center justify-between lg:h-[84px]">
          <Link
            href="/"
            className="shrink-0 transition-opacity duration-200 hover:opacity-70"
          >
            <Image
              src="/assets/header/logo.svg"
              alt="ティーズプラス"
              width={238}
              height={41}
              className="h-[28px] w-auto lg:h-[33px]"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-5 text-[13px] font-medium tracking-[0.04em] text-[#131313] lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) =>
              link.hasSubmenu ? (
                <button
                  key={link.label}
                  type="button"
                  className="flex items-center gap-1 py-8 transition-colors duration-200 hover:text-[#7a1b2d]"
                  onClick={() => setIsMegaMenuOpen((open) => !open)}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    className={`size-3 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-8 transition-colors duration-200 hover:text-[#7a1b2d]"
                >
                  {link.label}
                </a>
              ),
            )}

            <div className="ml-2 flex items-center gap-4">
              {NAV_CTA_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border-b border-transparent py-8 transition-colors duration-200 hover:border-[#7a1b2d] hover:text-[#7a1b2d]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <button
            type="button"
            className="flex size-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="メニュー"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-[#131313] transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#131313] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#131313] transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
