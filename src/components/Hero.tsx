"use client";

import Image from "next/image";
import { HERO } from "@/data/site-data";
import StatsStrip from "./StatsStrip";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-white lg:min-h-[calc(100vh-84px)]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/assets/home/main-pc.webp"
            alt="プライムコンセプトのワークシーン"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/assets/home/hero.jpg"
            alt="プライムコンセプトのワークシーン"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/45 lg:bg-black/35" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1500px] flex-col justify-end px-5 pb-12 pt-28 text-white lg:min-h-[calc(100vh-84px)] lg:w-[90%] lg:justify-center lg:px-0 lg:pb-24 lg:pt-0">
        <div className="max-w-[560px] lg:translate-y-8">
          <p className="mb-4 text-[11px] tracking-[0.12em] text-white/90 lg:text-[13px]">
            {HERO.eyebrow}
          </p>
          <h1 className="text-[2.35rem] font-light leading-[1.15] tracking-[0.04em] lg:text-[4.45rem]">
            {HERO.titleMain}
            <span className="text-[#ff3b30]"> {HERO.titleAccent}</span>{" "}
            {HERO.titleEnd}
          </h1>
          <div className="mt-7 lg:mt-8">
            <StatsStrip />
          </div>
          <a
            href={HERO.ctaHref}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#072c70] px-5 py-3 text-[11px] font-medium tracking-[0.08em] shadow-[0_10px_28px_rgba(7,44,112,0.3)] transition-opacity duration-200 hover:opacity-80 lg:mt-10"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-white text-[#072c70]">
              <svg viewBox="0 0 12 12" className="size-2.5 fill-current">
                <path d="M3 2.25 8.25 6 3 9.75V2.25Z" />
              </svg>
            </span>
            {HERO.ctaLabel}
          </a>
        </div>

        <a
          href={HERO.noteHref}
          className="mt-8 inline-flex w-fit items-center gap-2 border-2 border-white bg-black/40 px-4 py-3 text-xs font-semibold transition-opacity duration-200 hover:opacity-70 lg:absolute lg:bottom-12 lg:right-0 lg:mt-0"
        >
          <span>オフィスや社員を</span>
          <Image
            src="/assets/header/logo_note.png"
            alt="note"
            width={68}
            height={18}
            className="h-4 w-auto"
          />
          <span>で紹介中！</span>
        </a>
      </div>
    </section>
  );
}
