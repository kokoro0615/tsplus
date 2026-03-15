import Image from "next/image";
import { REASONS, REASON_SUMMARY, STATS } from "@/data/site-data";

export default function ReasonSection() {
  return (
    <section className="bg-white pb-10 lg:pb-12">
      <div className="mx-auto max-w-[1500px] px-6 lg:w-[90%] lg:px-0">
        <div className="mb-12 lg:mb-16">
          <h2 className="font-display text-[3rem] leading-none tracking-[0.03em] text-[#131313] lg:text-[4.3rem]">
            REASON
          </h2>
          <p className="mt-10 text-[0.95rem] tracking-[0.12em] text-[#131313]">
            プライムコンセプトが
          </p>
          <p className="mt-2 text-[2rem] font-bold tracking-[0.03em] text-[#131313] lg:text-[3rem]">
            選ばれる理由
          </p>
        </div>
      </div>

      <div className="border-y border-[#dcdcdc]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-6 py-10 lg:w-[90%] lg:flex-row lg:gap-16 lg:px-0 lg:py-16">
          <div className="lg:w-[42%]">
            <h3 className="mb-6 text-[1.6rem] font-semibold leading-[1.5] text-[#131313]">
              {REASON_SUMMARY.heading}
            </h3>
            <div className="mb-8 flex flex-wrap gap-8">
              {STATS.slice(0, 2).map((stat) => (
                <dl key={stat.label}>
                  <dt className="text-sm text-[#444]">{stat.label}</dt>
                  <dd className="mt-1 inline-block border-b border-[#d4d4d4] pb-2 text-[1.1rem] text-[#131313]">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <span className="text-[1.55rem] font-bold">{stat.value}</span>
                    <span>{stat.suffix}</span>
                  </dd>
                </dl>
              ))}
            </div>
          </div>

          <div className="lg:w-[58%]">
            <p className="text-sm leading-[2.2] text-[#555]">
              {REASON_SUMMARY.description}
            </p>
            <a
              href={REASON_SUMMARY.href}
              className="mt-6 inline-flex items-center gap-3 text-sm text-[#131313] transition-opacity duration-200 hover:opacity-70"
            >
              <span className="flex size-[18px] items-center justify-center rounded-full border border-[#d4d4d4]">
                <svg viewBox="0 0 12 12" className="size-2.5 fill-[#072c70]">
                  <path d="M3 2.25 8.25 6 3 9.75V2.25Z" />
                </svg>
              </span>
              実績はこちら
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] lg:w-[90%]">
        <div className="grid border-b border-[#dcdcdc] md:grid-cols-2 xl:grid-cols-4">
          {REASONS.map((reason, index) => (
            <article
              key={reason.title}
              className={`border-[#dcdcdc] px-6 py-10 md:px-8 md:py-12 xl:px-10 xl:py-14 ${
                index < REASONS.length - 1 ? "xl:border-r" : ""
              } ${index > 0 ? "border-t md:border-t-0" : ""}`}
            >
              <div className="mb-8">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={320}
                  height={224}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mb-5 text-center text-[1.05rem] font-semibold leading-[1.7] tracking-[0.04em] text-[#131313] md:text-left">
                {reason.title}
              </h3>
              <p className="text-sm leading-[2] text-[#555]">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
