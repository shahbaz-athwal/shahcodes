import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { experience } from "@/lib/contants";

export function Experience() {
  return (
    <Card className="mt-6 px-4">
      {experience.map((exp, index) => {
        return (
          <div
            className="-mx-4 flex flex-col border-b border-stone-200 px-4 pt-4 pb-2 last:border-none last:pb-2 sm:flex-row sm:gap-4 dark:border-stone-700/30"
            key={exp.company}
          >
            <div className="flex items-start gap-3 sm:mt-1 sm:block">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-stone-100 pt-0.5">
                <Image
                  width={100}
                  height={100}
                  src={exp.logo}
                  alt={exp.company}
                  className="h-8 w-8"
                />
              </div>
              <div className="flex flex-col sm:hidden">
                <span className="text-base font-semibold text-stone-900 dark:text-stone-100">
                  {exp.role}
                </span>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  {exp.company}
                </span>
                <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
                  {exp.location}
                </span>
                <span className="font-mono text-xs font-medium tracking-tight text-stone-600 dark:text-stone-400">
                  {exp.date}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-1">
              <span className="hidden text-xl font-semibold text-stone-900 sm:block dark:text-stone-100">
                {exp.role}
              </span>
              <span className="hidden text-base font-medium text-stone-700 sm:block dark:text-stone-300">
                {exp.company}
              </span>

              <span className="hidden text-sm font-medium text-stone-600 sm:block dark:text-stone-400">
                {exp.location}
              </span>
              <span className="mt-2 hidden font-mono text-sm font-medium tracking-tight text-stone-600 sm:block dark:text-stone-400">
                {exp.date}
              </span>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="pt-4 pb-2 text-left font-mono text-sm text-stone-600 hover:no-underline dark:text-stone-400">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <ul className="space-y-2 font-mono text-sm leading-relaxed text-stone-700 sm:pl-0 dark:text-stone-400">
                      {exp.description.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="shrink-0">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        );
      })}
    </Card>
  );
}
