import { MotionChild, MotionParent } from "@/components/Motion";
import { Header } from "@/components/ui/header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Details",
  description: "What technologies I use? and where I work?",
};

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
  location: string;
}[] = [
  {
    company: "Acadia University",
    role: "Teaching Assistant",
    date: "January 2023 → Today",
    logo: "/acadia-university-logo.webp",
    location: "Wolfville, NS",
  },
  {
    company: "Compass Group",
    role: "Frontend Associate",
    date: "September 2022 → Today",
    logo: "/compass.png",
    location: "Wolfville, NS",
  },
];

export default function Page() {
  return (
    <MotionParent>
      <MotionChild>
        <Header as="h1">Details</Header>
        <section className="mb-6 pt-8">
          <span className="block pb-3 text-3xl font-bold dark:text-zinc-200">Tech Stack</span>
          <div className="text-md space-y-3 font-normal leading-normal text-zinc-700 dark:text-zinc-300 md:text-lg">
            <p>
              I like creating web applications using Next.js and also working with React combined with Express in
              TypeScript. My primary database is PostgreSQL. I practice Data Structures and Algorithms in Python.
            </p>
            <p>My favorite tool is Docker, and I use GitHub Actions for CI/CD pipelines.</p>
            <p>
              AWS services I use regularly include EC2, Elastic Beanstalk, S3, CloudFront, Route 53, RDS, and Lambda.
            </p>
            <p>
              Currently, I am learning Kubernetes, advanced Docker concepts, and System Design principles. Also,
              building side projects as a hobby.
            </p>
          </div>
        </section>
      </MotionChild>

      <MotionChild>
        <section className="pt-6">
          <span className="block text-3xl font-bold dark:text-zinc-200">Education</span>
          <div className="flex gap-4 py-6">
            <div className="mt-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">
              <Image
                width={100}
                height={100}
                src={"/acadia-university-logo.webp"}
                alt={"Acadia University"}
                className="h-12 w-12"
              />
            </div>
            <div className="col-span-9 flex flex-col">
              <span className="text-lg font-semibold dark:text-zinc-300">Bachelors of Computer Science</span>
              <span className="text-sm dark:text-zinc-400">Acadia University</span>
              <span className="text-sm dark:text-zinc-400">Wolfville, NS</span>
              <span className="col-span-2 mt-2 block font-mono text-sm font-medium tracking-tighter text-zinc-500">
                September 2022 → May 2026
              </span>
            </div>
          </div>
        </section>
      </MotionChild>

      <MotionChild>
        <section className="pt-6">
          <span className="block text-3xl font-bold dark:text-zinc-200">Experience</span>
          <div className="divide-y pt-4 dark:divide-zinc-700">
            {experience.map((exp, index) => {
              return (
                <div className="flex gap-4 py-6" key={index}>
                  <div className="mt-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">
                    <Image width={100} height={100} src={exp.logo} alt={"Acadia University"} className="h-12 w-12" />
                  </div>
                  <div className="col-span-9 flex flex-col">
                    <span className="text-lg font-semibold dark:text-zinc-300">{exp.role}</span>
                    <span className="text-sm dark:text-zinc-400">{exp.company}</span>
                    <span className="text-sm dark:text-zinc-400">{exp.location}</span>
                    <span className="col-span-2 mt-2 block font-mono text-sm font-medium tracking-tighter text-zinc-500">
                      {exp.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </MotionChild>
    </MotionParent>
  );
}
