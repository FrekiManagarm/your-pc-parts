import HomeHero from "@/components/Home/HomeHero";
import HomePricingsSection from "@/components/Home/HomePricingsSection";
import HomeTeamSection from "@/components/Home/HomeTeamSection";
import KeyFeaturesSection from "@/components/Home/KeyFeaturesSection";
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


