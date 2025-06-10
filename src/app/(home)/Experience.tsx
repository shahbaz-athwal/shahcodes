import Image from "next/image";
import { experience } from "@/lib/contants";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Experience() {
  return (
    <Card className="mx-2 mt-6 divide-y divide-stone-200 px-4 dark:divide-stone-700">
      {experience.map((exp, index) => {
        return (
          <div className="flex flex-col py-4 sm:flex-row sm:gap-4" key={index}>
            <div className="flex items-start gap-3 sm:mt-1 sm:block">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-stone-100 pt-0.5">
                <Image width={100} height={100} src={exp.logo} alt={exp.company} className="h-8 w-8" />
              </div>
              <div className="flex flex-col sm:hidden">
                <span className="text-base font-semibold text-stone-900 dark:text-stone-100">{exp.role}</span>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{exp.company}</span>
                <span className="text-xs font-medium text-stone-600 dark:text-stone-400">{exp.location}</span>
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
                  <AccordionTrigger className="text-left text-sm font-medium text-stone-600 hover:no-underline dark:text-stone-400">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-4 text-sm leading-relaxed text-stone-700 sm:pl-0 dark:text-stone-400">
                      {exp.description.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
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
