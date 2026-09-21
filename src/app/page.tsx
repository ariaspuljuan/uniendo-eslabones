import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { ImpactSection } from "@/components/home/ImpactSection";
import { LatestNews } from "@/components/home/LatestNews";
import { QuickAccess } from "@/components/home/QuickAccess";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <QuickAccess />
      <LatestNews />
      <ImpactSection />
    </main>
  );
}
