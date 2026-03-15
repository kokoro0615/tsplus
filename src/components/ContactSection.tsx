import {
  CONTACT_ACTIONS,
  CONTACT_FAQ,
  CONTACT_INFO_CARDS,
  REGIONAL_PHONES,
} from "@/data/site-data";

function ConsultationIcon() {
  return (
    <svg viewBox="0 0 96 96" className="h-20 w-20 text-[#163f8c]">
      <path
        d="M24 18h20c10 0 18 8 18 18s-8 18-18 18H34v24H24V18Zm10 10v16h10c4.4 0 8-3.6 8-8s-3.6-8-8-8H34Z"
        fill="currentColor"
      />
      <path d="M54 60h18v10H54z" fill="currentColor" />
    </svg>
  );
}

function MagazineIcon() {
  return (
    <div className="font-display text-[5rem] leading-none text-[#163f8c]">@</div>
  );
}

export default function ContactSection() {
  return (
    <section className="bg-white">
      <div className="bg-[linear-gradient(90deg,#072c70_0%,#0c3a8e_52%,#072c70_100%)] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 lg:flex lg:w-[90%] lg:gap-10 lg:px-0 lg:py-[7.5rem]">
          <div className="lg:w-[42%]">
            <h2 className="font-display text-[3rem] leading-none tracking-[0.04em] lg:text-[4rem]">
              CONTACT
            </h2>
            <p className="mt-2 text-xs tracking-[0.16em] text-white/80">お問い合わせ</p>
            <p className="mt-8 text-sm leading-[2.1] text-white/90">
              無料（0円）でWEBマーケティング診断を行います!!
            </p>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-[25%]">
            <ul className="space-y-4">
              {CONTACT_ACTIONS.map((action) => (
                <li key={action.label}>
                  <a
                    href={action.href}
                    className={`block border px-5 py-4 text-sm transition-colors duration-300 ${
                      action.inverse
                        ? "border-white bg-white text-[#131313] hover:bg-transparent hover:text-white"
                        : "border-white text-white hover:bg-white hover:text-[#131313]"
                    }`}
                  >
                    <span className="relative block pl-8">
                      <span className="absolute left-0 top-0.5 flex size-[18px] items-center justify-center rounded-full border border-[#d4d4d4] bg-white">
                        <svg viewBox="0 0 12 12" className="size-2.5 fill-[#072c70]">
                          <path d="M3 2.25 8.25 6 3 9.75V2.25Z" />
                        </svg>
                      </span>
                      {action.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-right">
              <a
                href={CONTACT_FAQ.href}
                className="inline-block border-b border-white pb-1 text-xs tracking-[0.08em] text-white transition-opacity duration-200 hover:opacity-70"
              >
                {CONTACT_FAQ.label}
              </a>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-[33%] lg:pl-8">
            <ul className="space-y-2 text-sm text-white/90">
              {REGIONAL_PHONES.map((item) => (
                <li key={item.region} className="flex justify-between gap-4">
                  <span>{item.region}</span>
                  <a href={`tel:${item.phone}`} className="whitespace-nowrap text-white">
                    {item.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b border-[#dcdcdc]">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-2 lg:w-[90%]">
          {CONTACT_INFO_CARDS.map((card, index) => (
            <a
              key={card.title}
              href={card.href}
              className={`group flex gap-6 px-8 py-10 transition-colors duration-200 hover:bg-[#f7f9fe] lg:px-12 lg:py-12 ${
                index === 0 ? "border-b border-[#dcdcdc] md:border-b-0 md:border-r" : ""
              }`}
            >
              <div className="shrink-0 pt-1">
                {index === 0 ? <ConsultationIcon /> : <MagazineIcon />}
              </div>
              <div>
                <p className="mb-2 inline-block bg-[#131313] px-2 py-1 text-[10px] tracking-[0.14em] text-white">
                  {card.label}
                </p>
                <h3 className="text-[1.75rem] font-semibold leading-[1.35] text-[#163f8c] lg:text-[2rem]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-[2] text-[#555]">{card.description}</p>
                <ul className="mt-4 space-y-1 text-sm leading-[1.8] text-[#131313]">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>・{bullet}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
