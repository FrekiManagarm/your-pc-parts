import { CheckIcon } from 'lucide-react'

const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 shadow-lg bg-gradient-to-r from-primary to-secondary px-3 py-1 text-sm text-white font-semibold dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unleash Your Potential</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose your own hardware or let us help you to choose. Explore some of the key features below.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <CheckIcon className="mx-auto h-10 w-10" />
            <h3 className="text-xl font-bold text-center">High Performance</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Experience unmatched speed and performance with our hardware.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <CheckIcon className="mx-auto h-10 w-10" />
            <h3 className="text-xl font-bold text-center">Innovative Design</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Our hardware features a sleek, modern design that's as stylish as it is functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFeaturesSection