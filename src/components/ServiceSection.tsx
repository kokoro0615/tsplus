import Image from "next/image";
import { SERVICE_MENU_ITEMS } from "@/data/site-data";

const SERVICE_CARDS = SERVICE_MENU_ITEMS.slice(0, 8);

export default function ServiceSection() {
  return (
    <section id="service" className="bg-white pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1500px] lg:w-[90%]">
        <div className="mb-10 px-6 lg:mb-16 lg:px-0">
          <h2 className="font-display text-[3rem] leading-none tracking-[0.03em] text-[#131313] lg:text-[4.3rem]">
            SERVICE
          </h2>
          <p className="mt-2 text-xs tracking-[0.16em] text-[#131313]">サービス</p>
        </div>

        <div className="grid overflow-hidden border border-white/20 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_CARDS.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative min-h-[320px] overflow-hidden border border-white/15 text-white md:min-h-[360px] xl:min-h-[420px]"
            >
              {"image" in service ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              ) : null}
              <div className="absolute inset-0 bg-[#1a2744]/45 transition-colors duration-300 group-hover:bg-[#1a2744]/58" />
              <div className="relative flex h-full flex-col justify-between p-7 lg:p-9">
                <div>
                  <h3 className="text-xl font-bold tracking-[0.03em]">{service.title}</h3>
                  {"subtitle" in service ? (
                    <p className="mt-2 font-display text-[0.72rem] uppercase tracking-[0.18em] text-white/80">
                      {service.subtitle}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-1 text-[12px] leading-relaxed text-white/80">
                    {service.items.slice(0, 3).map((item) => (
                      <p key={item.label}>{item.label}</p>
                    ))}
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/60 transition-all duration-300 group-hover:bg-[#7a1b2d] group-hover:border-[#7a1b2d]">
                    <svg viewBox="0 0 20 20" className="size-4 fill-current">
                      <path d="m7.5 4.5 5.5 5.5-5.5 5.5 1.4 1.4 6.9-6.9-6.9-6.9-1.4 1.4Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
