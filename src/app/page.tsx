import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const images = ["/hero-1.png", "/hero-2.png", "/hero-3.png"];
  return (
    <>
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}
