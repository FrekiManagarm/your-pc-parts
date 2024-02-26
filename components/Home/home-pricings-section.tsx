
import Link from "next/link"
// import { Button } from "../animations/moving-border"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"
import styles from './pricing.module.css';

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Monthly', priceSuffix: '/month' },
  { id: '2', value: '2', label: 'Yearly', priceSuffix: '/year' },
];

export const tiers: PricingTier[] = [
  {
    name: 'Free',
    id: '0',
    href: '/subscribe',
    price: { '1': '$0', '2': '$0' },
    discountPrice: { '1': '', '2': '' },
    description: `Perfect if you are just using the application and GET requests.`,
    features: [
      `5 configurations`,
      `Email support`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Sign-in`,
  },
  {
    name: 'Pro',
    id: '1',
    href: '/pricing',
    price: { '1': '$25.99', '2': '$311.88' },
    discountPrice: { '1': '', '2': '' },
    description: `Access to the API and contribute`,
    features: [
      `Unlimited configurations`,
      `Access to GET and POST`,
      `Priority support`,
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Get started`,
  },
  {
    name: 'Scaler',
    id: '2',
    href: '/pricing',
    price: { '1': '$89', '2': '$1068' },
    discountPrice: { '1': '', '2': '' },
    description: `Great for those who want to contribute to the API`,
    features: [
      `Unlimited configurations`,
      `Access to GET, POST and PUT requests of the API`,
      `Priority support`,
    ],
    featured: true,
    highlighted: false,
    soldOut: false,
    cta: `Get started`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-6 h-6', className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

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
              Choose the plan that&apos;s right for you. No hidden
              fees. No surprises.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-sm pt-5 items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3"
        >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                tier.featured
                  ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                  : 'bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700',
                'max-w-xs ring-1 rounded-3xl p-8 xl:p-10',
                tier.highlighted ? styles.fancyGlassContrast : '',
              )}
            >
              <h3
                id={tier.id}
                className={cn(
                  tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                  'text-2xl font-bold tracking-tight',
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  tier.featured
                    ? 'text-gray-300 dark:text-gray-500'
                    : 'text-gray-600 dark:text-gray-400',
                  'mt-4 text-sm leading-6',
                )}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={cn(
                    tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    'text-4xl font-bold tracking-tight',
                  )}
                >
                  {typeof tier.price === 'string'
                    ? tier.price
                    : tier.price[frequencies[0].value]}
                </span>

                <span
                  className={cn(
                    tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                  )}
                >
                  {typeof tier.discountPrice === 'string'
                    ? tier.discountPrice
                    : tier.discountPrice[frequencies[0].value]}
                </span>

                {typeof tier.price !== 'string' ? (
                  <span
                    className={cn(
                      tier.featured
                        ? 'text-gray-300 dark:text-gray-500'
                        : 'dark:text-gray-400 text-gray-600',
                      'text-sm font-semibold leading-6',
                    )}
                  >
                    {frequencies[0].priceSuffix}
                  </span>
                ) : null}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={cn(
                  'flex mt-6 shadow-sm',
                  tier.soldOut ? 'pointer-events-none' : '',
                )}
              >
                <Button
                  size="lg"
                  disabled={tier.soldOut}
                  className={cn(
                    'w-full text-black dark:text-white',
                    !tier.highlighted && !tier.featured
                      ? 'bg-gray-100 dark:bg-gray-600'
                      : 'bg-purple-300 hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-700',
                    tier.featured || tier.soldOut ? 'bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black' : 'hover:opacity-80 transition-opacity',
                  )}
                  variant={tier.highlighted ? 'default' : 'outline'}
                >
                  {tier.soldOut ? 'Sold out' : tier.cta}
                </Button>
              </a>

              <ul
                className={cn(
                  tier.featured
                    ? 'text-gray-300 dark:text-gray-500'
                    : 'text-gray-700 dark:text-gray-400',
                  'mt-8 space-y-3 text-sm leading-6 xl:mt-10',
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={cn(
                        tier.featured ? 'text-white dark:text-black' : '',
                        tier.highlighted
                          ? 'text-purple-500'
                          : 'text-gray-500',

                        'h-6 w-5 flex-none',
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}