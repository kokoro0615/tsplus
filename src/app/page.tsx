import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import NewsSection from "@/components/NewsSection";
import ServiceSection from "@/components/ServiceSection";
import PromoBannerStrip from "@/components/PromoBannerStrip";
import ReasonSection from "@/components/ReasonSection";
import RecruitSection from "@/components/RecruitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white pt-[76px] lg:pt-[84px]">
        <Hero />
        <IntroSection />
        <NewsSection />
        <ServiceSection />
        <PromoBannerStrip />
        <ReasonSection />
        <RecruitSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
