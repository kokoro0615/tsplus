import { INTRO } from "@/data/site-data";

export default function IntroSection() {
  return (
    <section className="border-b border-[#dcdcdc] bg-white">
      <div className="mx-auto max-w-[1500px] px-6 py-16 text-center lg:w-[90%] lg:py-28">
        <h2 className="mb-5 text-[1.65rem] font-semibold tracking-[0.04em] text-[#131313] md:text-[2rem]">
          {INTRO.title}
        </h2>
        <p className="mx-auto max-w-[920px] text-sm leading-[2.2] text-[#555] md:text-[0.95rem]">
          {INTRO.description}
        </p>
      </div>
    </section>
  );
}
