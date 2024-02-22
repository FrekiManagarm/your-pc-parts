
export default function HomeTeamSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-[20rem]">
      <div className="container px-4 space-y-10 md:space-y-12">
        <div className="text-center">
          <div className="inline-block rounded-lg px-3 py-1 dark:bg-gray-800 shadow-lg bg-gradient-to-r from-primary to-secondary">
            <span className="font-semibold text-white">Team</span>
          </div>
          <h2 className="text-sm font-bold tracking-tighter dark:text-white sm:text-4xl md:text-5xl">Meet the team</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our team is dedicated to helping you suceed
          </p>
        </div>
        <div className="grid max-w-sm gap-10 mx-auto lg:max-w-4xl lg:grid-cols-2 xl:max-w-5xl xl:gap-16">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold dark:text-white tracking-tighter sm:text-3xl">Mathieu Chambaud</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
            </div>
            <p className="text-sm text-gray-500/70 md:text-base/relaxed dark:text-gray-400/70">
              Mathieu is a young developer with a passion for innovation. He&apos;s committed to creating a positive work
              environment and delivering exceptional results for our clients.
            </p>
          </div>
          <div className="flex items-center justify-center space-y-3">
            <img
              alt="Alice Smith"
              className="rounded-full overflow-hidden ring-2 ring-gray-900/10 object-cover"
              height="160"
              src="https://i.imgur.com/mu73rN0.jpg"
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
