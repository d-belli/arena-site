import { HeroSection } from '@/components/home/HeroSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { FeaturedPlans } from '@/components/home/FeaturedPlans';
import { StatsSection } from '@/components/home/StatsSection';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/10 via-transparent to-[#00CFFF]/5 pointer-events-none" />
      
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <FeaturedPlans />
    </div>
  );
}