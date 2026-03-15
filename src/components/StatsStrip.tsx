import { STATS } from "@/data/site-data";

export default function StatsStrip() {
  return (
    <div className="flex flex-wrap gap-5 lg:gap-8">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="mb-1 text-[11px] tracking-[0.08em] text-white/80 lg:text-[13px]">
            {stat.label}
          </p>
          <p className="inline-flex items-baseline gap-0.5 border-b border-white/40 pb-1 text-white">
            {stat.prefix && (
              <span className="text-[12px] lg:text-[14px]">{stat.prefix}</span>
            )}
            <span className="font-display text-[2rem] leading-none lg:text-[3rem]">
              {stat.value}
            </span>
            <span className="ml-0.5 text-[12px] lg:text-[14px]">{stat.suffix}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
