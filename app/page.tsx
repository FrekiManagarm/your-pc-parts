import HomeHero from "@/components/Home/HomeHero";
import KeyFeaturesSection from "@/components/Home/KeyFeaturesSection";
import Footer from "@/components/layout/Footer";
import { options } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);

  return (
    <>
      <main className="flex-1">
        <HomeHero />
        <KeyFeaturesSection />
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't just take our word for it. Hear what our customers have to say about our hardware.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  "The performance of this hardware is unmatched. It's made a huge difference in my productivity."
                </p>
                <p className="text-sm font-bold">- Jane Doe</p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  "I can always rely on this hardware. It's never let me down."
                </p>
                <p className="text-sm font-bold">- John Smith</p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  "The design is sleek and modern. It looks great on my desk."
                </p>
                <p className="text-sm font-bold">- Emily Johnson</p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  )
}


