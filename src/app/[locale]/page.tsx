import { Hero } from "@/components/features/hero";
import { Clients } from "@/components/features/clients";
import { ServicesPreview } from "@/components/features/services-preview";
import { PortfolioPreview } from "@/components/features/portfolio-preview";
import { WhyChooseUs } from "@/components/features/why-choose-us";
import { Testimonials } from "@/components/features/testimonials";
import { CtaSection } from "@/components/features/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Clients />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
