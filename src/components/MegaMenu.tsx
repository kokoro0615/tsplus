"use client";

import { useEffect, useRef } from "react";
import { SERVICE_MENU_ITEMS } from "@/data/site-data";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`absolute inset-x-0 top-full hidden overflow-hidden border-t border-white/10 bg-[#139bcb] text-white transition-all duration-[450ms] lg:block ${
        isOpen ? "max-h-[760px] opacity-100" : "max-h-0 opacity-0"
      }`}
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-[1500px] px-8 py-10 lg:w-[90%]">
        <div className="grid grid-cols-5 gap-x-8 gap-y-8">
          {SERVICE_MENU_ITEMS.map((group) => (
            <div key={group.title}>
              <a
                href={group.href}
                className="mb-3 block text-sm font-semibold tracking-[0.05em] transition-opacity duration-200 hover:opacity-70"
              >
                {group.title}
              </a>
              {"subtitle" in group ? (
                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/65">
                  {group.subtitle}
                </p>
              ) : null}
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-[11px] leading-relaxed text-white/80 transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
