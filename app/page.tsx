import HomeHero from "@/components/Home/home-hero-section";
import HomePricingsSection from "@/components/Home/home-pricings-section";
import KeyFeaturesSection from "@/components/Home/key-features-section";
import Footer from "@/components/layout/Footer";

export default async function Home() {

  return (
    <>
      <main className="flex-1">
        <HomeHero />
        <KeyFeaturesSection />
        <HomePricingsSection />
      </main>
      <Footer />
    </>
  )
}


