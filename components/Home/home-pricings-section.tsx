
import Link from "next/link"
import { Button } from "../animations/moving-border"

export default function HomePricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg text-white shadow-lg bg-gradient-to-r from-primary to-secondary px-3 py-1 text-sm font-medium dark:bg-gray-800">
              Plans & Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, transparent pricing.</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that&apos;s right for your team. All plans include unlimited projects and bandwidth. No hidden
              fees. No surprises.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm pt-5 items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col items-center justify-start space-y-2 border border-gray-200 rounded-xl bg-white shadow-sm px-4 py-6 sm:border-0 sm:shadow-none sm:bg-transparent sm:px-6 sm:py-10">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold dark:text-white">Free</h3>
              <p className="text-3xl font-bold dark:text-white">$0</p>
              <p className="text-sm text-gray-500">
                Perfect if you are just using the application and GET requests.
              </p>
            </div>
            <ul className="grid gap-2 py-4 text-left">
              <li className="dark:text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                3 team members
              </li>
              <li className="dark:text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                5GB file storage
              </li>
              <li className="dark:text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Email support
              </li>
            </ul>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex flex-col items-center p-5 border border-gray-500 dark:border-gray-500 justify-start space-y-2 rounded-xl shadow-sm px-4 py-6 sm:px-6 sm:py-10">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold dark:text-white">Standard</h3>
              <p className="text-3xl font-bold dark:text-white">$49</p>
              <p className="text-sm text-gray-500">
                Great for growing teams that need more collaboration and automation.
              </p>
            </div>
            <ul className="grid gap-2 py-4 text-left">
              <li className="dark:text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4 dark:text-white" />
                10 team members
              </li>
              <li className="dark:text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4 dark:text-white" />
                20GB file storage
              </li>
              <li className="dark:text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4 dark:text-white" />
                Priority support
              </li>
            </ul>
            <Button
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Sign Up
            </Button>
            {/* <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Sign Up
            </Link> */}
          </div>
          <div className="flex flex-col items-center justify-start space-y-2 border border-gray-200 rounded-xl bg-white shadow-sm px-4 py-6 sm:border-0 sm:shadow-none sm:bg-transparent sm:px-6 sm:py-10">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="text-3xl font-bold">$99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Advanced features for teams that need to deliver the best digital experiences.
              </p>
            </div>
            <ul className="grid gap-2 py-4 text-left">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Unlimited team members
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                100GB file storage
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                24/7 concierge support
              </li>
            </ul>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}