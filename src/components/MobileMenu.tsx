"use client";

import { useState } from "react";
import { NAV_CTA_LINKS, NAV_LINKS, SERVICE_MENU_ITEMS } from "@/data/site-data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <div
      className={`fixed inset-x-0 top-[76px] z-40 h-[calc(100dvh-76px)] overflow-y-auto bg-white transition-transform duration-300 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="pb-8" aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <div key={link.label} className="border-b border-[#ececec]">
            {link.hasSubmenu ? (
              <>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-[#131313]"
                  onClick={() => setIsServiceOpen((open) => !open)}
                  aria-expanded={isServiceOpen}
                >
                  {link.label}
                  <svg
                    className={`size-4 transition-transform duration-200 ${isServiceOpen ? "rotate-180" : ""}`}
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
                <div className={`${isServiceOpen ? "block" : "hidden"} bg-[#f7fafc]`}>
                  {SERVICE_MENU_ITEMS.map((group) => (
                    <div key={group.title} className="border-t border-white/80 px-5 py-4">
                      <a
                        href={group.href}
                        className="mb-2 block text-sm font-semibold text-[#7a1b2d]"
                        onClick={onClose}
                      >
                        {group.title}
                      </a>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block text-sm leading-relaxed text-[#555]"
                              onClick={onClose}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <a
                href={link.href}
                className="block px-5 py-4 text-base font-medium text-[#131313]"
                onClick={onClose}
              >
                {link.label}
              </a>
            )}
          </div>
        ))}

        <div className="px-5 pt-5">
          <div className="space-y-3">
            {NAV_CTA_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`block rounded-sm border px-4 py-3 text-center text-sm font-medium tracking-[0.05em] ${
                  index === NAV_CTA_LINKS.length - 1
                    ? "border-[#7a1b2d] bg-[#7a1b2d] text-white"
                    : "border-[#7a1b2d] text-[#7a1b2d]"
                }`}
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
