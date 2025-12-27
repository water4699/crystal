import { DonationLogDemo } from "@/components/DonationLogDemo";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { StatsDisplay } from "@/components/StatsDisplay";
import { TrustIndicators } from "@/components/TrustIndicators";

export default function Home() {
  return (
    <main className="px-3 md:px-0">
      <div className="flex flex-col gap-8 items-center w-full">
        {/* Stats section */}
        <StatsDisplay />
        
        {/* Trust indicators */}
        <TrustIndicators />
        
        {/* Main donation demo */}
        <DonationLogDemo />
        
        {/* Feature showcase */}
        <FeatureShowcase />
      </div>
    </main>
  );
}
