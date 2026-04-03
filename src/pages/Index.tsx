import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import ProductCards from "@/components/ProductCards";
import Differentials from "@/components/Differentials";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainPoints />
      <HowItWorks />
      <ProductCards />
      <Differentials />
      <Stats />
      <FAQ />
      <Location />
      <FinalCTA />
      <FooterSection />
    </div>
  );
};

export default Index;
