import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { ImpactSection } from "@/components/home/ImpactSection";
import { QuickAccess } from "@/components/home/QuickAccess";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <QuickAccess />
      <ImpactSection />
    </main>
  );
}
