import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { ImpactSection } from "@/components/home/ImpactSection";
import { LatestNews } from "@/components/home/LatestNews";
import { QuickAccess } from "@/components/home/QuickAccess";
import { AnnouncementModal } from "@/components/home/AnnouncementModal";
import { urgentAnnouncement } from "@/data/news";

export default function HomePage() {
  return (
    <main>
      <AnnouncementModal announcement={urgentAnnouncement} />
      <Hero />
      <FeaturedProducts />
      <QuickAccess />
      <LatestNews />
      <ImpactSection />
    </main>
  );
}
