import HomeHero from "@/components/Home/HomeHero";
import HomePricingsSection from "@/components/Home/HomePricingsSection";
import HomeTeamSection from "@/components/Home/HomeTeamSection";
import KeyFeaturesSection from "@/components/Home/KeyFeaturesSection";
import Footer from "@/components/layout/Footer";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authConfig);
  console.log(session, 'user session')

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


