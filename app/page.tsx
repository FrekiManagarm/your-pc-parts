import HomeHero from "@/components/HomePage/HomeHero";
import HomePricingsSection from "@/components/HomePage/HomePricingsSection";
import HomeTeamSection from "@/components/HomePage/HomeTeamSection";
import KeyFeaturesSection from "@/components/HomePage/KeyFeaturesSection";
import Footer from "@/components/layout/Footer";

export default async function Home() {

  return (
    <>
      <main className="flex-1">
        <HomeHero />
        {/* <BentoGridThirdDemo /> */}
        <KeyFeaturesSection />
        <HomePricingsSection />
        <HomeTeamSection />
      </main>
      <Footer />
    </>
  )
}


