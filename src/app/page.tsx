import { CallToAction } from '@/components/CallToAction';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import SecondaryFeatures from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
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
