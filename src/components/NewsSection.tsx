"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import { NEWS_CATEGORIES, NEWS_ITEMS } from "@/data/site-data";

const VISIBLE_ITEMS = 3;

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [startIndex, setStartIndex] = useState(0);

  const filteredNews =
    activeCategory === "all"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeCategory);

  const hasControls = filteredNews.length > VISIBLE_ITEMS;
  const visibleNews = filteredNews.slice(startIndex, startIndex + VISIBLE_ITEMS);

  const shiftNews = (direction: "prev" | "next") => {
    if (!hasControls) {
      return;
    }

    startTransition(() => {
      setStartIndex((current) => {
        if (direction === "next") {
          return current + VISIBLE_ITEMS >= filteredNews.length ? 0 : current + 1;
        }

        return current === 0 ? Math.max(filteredNews.length - VISIBLE_ITEMS, 0) : current - 1;
      });
    });
  };

  return (
    <section className="border-t border-[#dcdcdc] bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:w-[90%] lg:px-0">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[3rem] leading-none tracking-[0.03em] text-[#131313] lg:text-[4.3rem]">
              NEWS
            </h2>
            <p className="mt-2 text-xs tracking-[0.16em] text-[#131313]">ニュース</p>
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] tracking-[0.08em] text-[#555] lg:justify-end">
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category.value}
                type="button"
                className={`transition-colors duration-200 hover:text-[#7a1b2d] ${
                  activeCategory === category.value ? "text-[#7a1b2d]" : ""
                }`}
                onClick={() =>
                  startTransition(() => {
                    setActiveCategory(category.value);
                    setStartIndex(0);
                  })
                }
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => shiftNews("prev")}
            className="absolute left-0 top-[38%] z-10 hidden size-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#7a1b2d] bg-white text-[#7a1b2d] transition-colors duration-200 hover:bg-[#7a1b2d] hover:text-white lg:flex"
            aria-label="前のニュース"
          >
            <svg viewBox="0 0 20 20" className="size-4 fill-current">
              <path d="M12.5 4.5 7 10l5.5 5.5-1.4 1.4L4.2 10l6.9-6.9 1.4 1.4Z" />
            </svg>
          </button>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleNews.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group block overflow-hidden rounded-[10px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-70"
              >
                <div className="overflow-hidden rounded-t-[10px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={406}
                    height={236}
                    className="h-auto w-full"
                  />
                </div>
                <div className="p-5 lg:px-6 lg:py-6">
                  <h3 className="line-clamp-2 min-h-[4.7rem] text-[1rem] leading-[1.85] text-[#131313]">
                    {item.title}
                  </h3>
                  <div className="mt-5 border-t border-[#eaeaea] pt-3 text-[11px] tracking-[0.08em] text-[#a5a5a5]">
                    <span className="mr-4">{item.date}</span>
                    <span>{item.categoryLabel}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => shiftNews("next")}
            className="absolute right-0 top-[38%] z-10 hidden size-12 translate-x-1/2 items-center justify-center rounded-full border-2 border-[#7a1b2d] bg-white text-[#7a1b2d] transition-colors duration-200 hover:bg-[#7a1b2d] hover:text-white lg:flex"
            aria-label="次のニュース"
          >
            <svg viewBox="0 0 20 20" className="size-4 fill-current">
              <path d="m7.5 4.5 5.5 5.5-5.5 5.5 1.4 1.4 6.9-6.9-6.9-6.9-1.4 1.4Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
