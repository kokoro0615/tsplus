import Link from "next/link";
import { RECRUIT } from "@/data/site-data";

export default function RecruitSection() {
  return (
    <section className="bg-white pb-28 pt-6 lg:pb-[16.5rem] lg:pt-4">
      <div className="mx-auto w-[90%] max-w-[1500px] overflow-hidden rounded-xl">
        <Link
          href={RECRUIT.href}
          className="group relative block overflow-hidden rounded-xl text-white"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${RECRUIT.image})` }}
          />
          <div className="absolute inset-0 bg-[#091b3e]/40" />
          <div className="relative flex min-h-[340px] flex-col items-center justify-center px-6 py-16 text-center lg:min-h-[420px]">
            <div className="mb-8">
              <p className="font-display text-[3rem] tracking-[0.08em] lg:text-[4.25rem]">
                {RECRUIT.title}
              </p>
              <p className="mt-2 text-sm tracking-[0.16em]">{RECRUIT.subtitle}</p>
            </div>
            <span className="inline-flex items-center rounded-full border border-white px-7 py-3 text-xs tracking-[0.22em] transition-colors duration-300 group-hover:bg-white group-hover:text-[#131313]">
              {RECRUIT.ctaLabel}
            </span>
            <div className="mt-10 text-right lg:absolute lg:bottom-10 lg:right-12 lg:mt-0">
              <p className="font-serif text-[2rem] italic leading-none lg:text-[3.15rem]">
                {RECRUIT.tagline}
              </p>
              <p className="mt-3 text-xs tracking-[0.1em] text-white/85">
                {RECRUIT.subTagline}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
