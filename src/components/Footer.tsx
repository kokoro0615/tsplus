import Image from "next/image";
import { BRAND_ROW, GROUP_LOGOS, OFFICES, PRIVACY } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1500px] px-6 py-10 lg:w-[90%] lg:px-0 lg:py-14">
        <div className="flex flex-col gap-6 border-b border-[#dcdcdc] pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-8">
            <Image
              src="/assets/footer/logo_pc.jpg"
              alt="プライムコンセプト"
              width={302}
              height={52}
              className="h-9 w-auto lg:h-11"
            />
            <a href={BRAND_ROW.noteHref} className="transition-opacity duration-200 hover:opacity-70">
              <Image
                src="/assets/header/logo_note.png"
                alt="note"
                width={88}
                height={24}
                className="h-5 w-auto opacity-70"
              />
            </a>
          </div>
          <p className="text-base font-semibold tracking-[0.03em] text-[#131313]">
            {BRAND_ROW.tagline}
          </p>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_2fr_1.2fr] lg:gap-16 lg:py-14">
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-[0.16em] text-[#131313]">
              本社
            </h3>
            <div className="space-y-6">
              {OFFICES.headquarters.map((office) => (
                <div key={office.name}>
                  <h4 className="text-sm font-semibold leading-[1.8] text-[#131313]">
                    {office.name}
                  </h4>
                  <p className="mt-2 text-xs leading-[2] text-[#555]">
                    <span className="font-semibold">{office.zip}</span> {office.address}
                  </p>
                  <p className="mt-1 text-xs leading-[1.9] text-[#555]">
                    TEL {office.tel} FAX {office.fax}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-[0.16em] text-[#131313]">
              国内支社
            </h3>
            <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
              {OFFICES.domestic.map((office) => (
                <div key={office.name}>
                  <h4 className="text-sm font-semibold leading-[1.8] text-[#131313]">
                    {office.name}
                  </h4>
                  <p className="mt-1 text-xs leading-[2] text-[#555]">
                    <span className="font-semibold">{office.zip}</span> {office.address}
                  </p>
                  <p className="mt-1 text-xs leading-[1.9] text-[#555]">
                    TEL {office.tel}
                    {"fax" in office && office.fax ? ` FAX ${office.fax}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-[0.16em] text-[#131313]">
              海外支社
            </h3>
            <div className="space-y-6">
              {OFFICES.overseas.map((office) => (
                <div key={office.name}>
                  <h4 className="text-sm font-semibold leading-[1.8] text-[#131313]">
                    {office.name}
                  </h4>
                  <p className="mt-1 text-xs leading-[2] text-[#555]">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#dcdcdc] py-10 lg:py-14">
          <h3 className="mb-6 text-sm font-semibold tracking-[0.16em] text-[#131313]">
            アビリブグループ
          </h3>
          <div className="mb-8">
            <a href="https://www.ab-net.co.jp/group/" className="inline-block transition-opacity duration-200 hover:opacity-70">
              <Image
                src="/assets/footer/logo_group.png"
                alt="abilive group"
                width={176}
                height={42}
                className="h-9 w-auto"
              />
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-6">
            {GROUP_LOGOS.map((company) => (
              <a
                key={company.name}
                href={company.url}
                className="flex min-h-[72px] items-center justify-center rounded-md border border-[#e6ebf2] bg-[#fafcff] px-4 transition-colors duration-200 hover:border-[#9db4dd]"
              >
                <Image
                  src={company.image}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="h-auto w-auto max-w-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#dcdcdc] bg-[#fafafa]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-6 lg:w-[90%] lg:flex-row lg:items-center lg:justify-between lg:px-0">
          <div className="flex items-start gap-4">
            <Image
              src="/assets/footer/ic_privacy.jpg"
              alt="プライバシーマーク"
              width={42}
              height={42}
              className="h-10 w-auto shrink-0"
            />
            <p className="text-xs leading-[2] text-[#555]">
              {PRIVACY.description}{" "}
              <a href={PRIVACY.href} className="text-[#072c70] underline-offset-2 hover:underline">
                {PRIVACY.label}
              </a>
            </p>
          </div>
          <p className="text-xs tracking-[0.08em] text-[#555]">
            Copyright © 株式会社プライムコンセプト
          </p>
        </div>
      </div>
    </footer>
  );
}
