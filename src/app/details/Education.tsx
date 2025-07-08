import { Card } from "@/components/ui/card";
import Image from "next/image";

export function Education() {
  return (
    <Card className="mt-6 divide-y divide-stone-200 px-4 dark:divide-stone-700">
      <div className="flex flex-col py-4 sm:flex-row sm:gap-4">
        {/* Mobile: Logo and title/company in row, Desktop: Just logo */}
        <div className="flex items-start gap-3 sm:mt-1 sm:block">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-stone-100 pt-0.5">
            <Image
              width={100}
              height={100}
              src={"/acadia-university-logo.webp"}
              alt={"Acadia University"}
              className="h-8 w-8"
            />
          </div>
          {/* Mobile only: Title, company, location, and date next to logo */}
          <div className="flex flex-col sm:hidden">
            <span className="text-base font-semibold text-stone-900 dark:text-stone-100">
              Bachelors of Computer Science
            </span>
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              Acadia University
            </span>
            <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
              Wolfville, NS
            </span>
            <span className="font-mono text-xs font-medium tracking-tight text-stone-600 dark:text-stone-400">
              September 2022 → May 2026
            </span>
          </div>
        </div>

        {/* Content - Desktop: All content, Mobile: Only description */}
        <div className="flex flex-col sm:flex-1">
          {/* Desktop only: Title and company */}
          <span className="hidden text-xl font-semibold text-stone-900 sm:block dark:text-stone-100">
            Bachelors of Computer Science
          </span>
          <span className="hidden text-base font-medium text-stone-700 sm:block dark:text-stone-300">
            Acadia University
          </span>

          {/* Desktop only: Location and date */}
          <span className="hidden text-sm font-medium text-stone-600 sm:block dark:text-stone-400">
            Wolfville, NS
          </span>
          <span className="mt-2 hidden font-mono text-sm font-medium tracking-tight text-stone-600 sm:block dark:text-stone-400">
            September 2022 → May 2026
          </span>
        </div>
      </div>
    </Card>
  );
}
