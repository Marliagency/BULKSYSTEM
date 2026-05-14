import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import System from "@/components/sections/System";
import Transformation from "@/components/sections/Transformation";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Features />
      <System />
      <Transformation />
      <DashboardPreview />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
