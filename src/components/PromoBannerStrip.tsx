import Image from "next/image";
import { PROMO_BANNERS } from "@/data/site-data";

export default function PromoBannerStrip() {
  return (
    <section className="bg-white pb-16 pt-10 lg:pb-[11rem] lg:pt-12">
      <div className="mx-auto max-w-[1500px] px-6 lg:w-[90%] lg:px-0">
        <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
          {PROMO_BANNERS.large.map((banner) => (
            <a
              key={banner.alt}
              href={banner.href}
              className="block transition-opacity duration-200 hover:opacity-70"
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                width={720}
                height={270}
                className="h-auto w-full"
              />
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3 lg:mt-8 lg:gap-8">
          {PROMO_BANNERS.small.map((banner) => (
            <a
              key={banner.alt}
              href={banner.href}
              className="block transition-opacity duration-200 hover:opacity-70"
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                width={460}
                height={210}
                className="h-auto w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
