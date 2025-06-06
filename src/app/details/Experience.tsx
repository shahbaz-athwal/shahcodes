import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
  location: string;
  description: string[];
}[] = [
  {
    company: "Dash Social",
    role: "Software Developer Intern",
    date: "Jan 2025 - Apr 2025 · 4 months",
    logo: "/dash.png",
    location: "Halifax, NS · Hybrid",
    description: [
      "Maintain front-end application using Vue.js, Pinia, and Tailwind, directly enhancing customer experience",
      "Contribute to the development of RESTful APIs using Python, Flask, SQLAlchemy, and Docker supporting backend functionality and performance",
      "Review code, fix bugs, and collaborate with teams to ensure quality software delivery",
    ],
  },
  {
    company: "Acadia University",
    role: "Teaching Assistant",
    date: "Jan 2023 - Present · 2 years 3 months",
    logo: "/acadia-university-logo.webp",
    location: "Wolfville, NS · On-site",
    description: [
      "Tutored 150+ students, achieving positive feedback",
      "Enforced academic integrity and overseeing a fair grading process for 1000+ assignments and lab reports",
      "Conducted weekly office hours, assisting 10-15 students in each session",
    ],
  },
];

export function Experience() {
  return (
    <Card className="mb-8">
      <CardHeader className="pb-2">
        <h2 className="text-3xl font-bold dark:text-zinc-200">Experience</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 divide-y dark:divide-stone-700">
          {experience.map((exp, index) => {
            return (
              <div className="flex flex-col gap-4 py-6 sm:flex-row" key={index}>
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white">
                  <Image width={100} height={100} src={exp.logo} alt={exp.company} className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold dark:text-zinc-200">{exp.role}</span>
                  <span className="text-base dark:text-zinc-400">{exp.company}</span>
                  <span className="text-sm dark:text-zinc-500">{exp.location}</span>
                  <span className="mt-2 block font-mono text-sm font-medium tracking-tighter text-zinc-500">
                    {exp.date}
                  </span>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-zinc-700 dark:text-zinc-300">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
