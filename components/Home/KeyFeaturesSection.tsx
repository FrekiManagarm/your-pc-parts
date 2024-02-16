import { Blocks, Component, LayoutDashboard, Workflow } from "lucide-react"

export default function KeyFeaturesSection() {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container grid max-w-3xl px-4 items-center gap-6 md:gap-12 md:px-6 lg:max-w-5xl lg:grid-cols-2 xl:gap-16">
        <div className="flex flex-col space-y-4">
          <div className="inline-block rounded-lg w-[7.5rem] px-3 py-1 dark:bg-gray-800 shadow-lg bg-gradient-to-r from-primary to-secondary">
            <span className="font-semibold dark:text-white">Key features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Make your hardware. Faster.
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure
            with automated CI/CD, built-in testing, and integrated collaboration.
          </p>
        </div>
        <div className="grid gap-4 md:gap-8 lg:gap-12">
          <div className="flex items-center space-x-4">
            <Blocks className="w-8 h-8 dark:text-white" />
            <div className="grid gap-1.5">
              <h3 className="text-base font-semibold dark:text-white">A great configurator</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Automate your workflow with continuous integration. Merge early and often to catch bugs and errors
                quickly.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Workflow className="w-8 h-8 dark:text-white" />
            <div className="grid gap-1.5">
              <h3 className="text-base font-semibold dark:text-white">An waterproof API</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Automate your workflow with continuous deployment. Deliver updates to your users as soon as your tests
                pass.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LayoutDashboard className="w-8 h-8 dark:text-white" />
            <div className="grid gap-1.5">
              <h3 className="text-base font-semibold dark:text-white">Built-in Dashboard</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Catch bugs before they reach production with built-in testing. Run automated tests for every change to
                your code.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Component className="w-8 h-8 dark:text-white" />
            <div className="grid gap-1.5">
              <h3 className="text-base font-semibold dark:text-white">Collaboration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Make collaboration seamless with built-in code review tools. Comment on code, suggest changes, and merge
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GitCommitIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <line x1="3" x2="9" y1="12" y2="12" />
      <line x1="15" x2="21" y1="12" y2="12" />
    </svg>
  )
}


function GitlabIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function MergeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}


function TestTubesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2" />
      <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2" />
      <path d="M3 2h7" />
      <path d="M14 2h7" />
      <path d="M9 16H4" />
      <path d="M20 16h-5" />
    </svg>
  )
}
