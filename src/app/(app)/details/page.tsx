import { MotionChild, MotionParent } from "@/components/Motion";
import { Header } from "@/components/ui/topicHeader";
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
        <Header as="h1" className="pt-8">Details</Header>
        <section className="pt-8 mb-6">
          <span className="block font-bold text-3xl pb-3 dark:text-zinc-200">
            Tech Stack
          </span>
          <div className="text-md md:text-lg space-y-3 font-normal leading-normal text-zinc-700 dark:text-zinc-300">
            <p>
              I like creating web applications using Next.js and also working
              with React combined with Express in TypeScript. My primary
              database is PostgreSQL. I practice Data Structures and Algorithms
              in Python.
            </p>
            <p>
              My favorite tool is Docker, and I use GitHub Actions for CI/CD
              pipelines.
            </p>
            <p>
              AWS services I use regularly include EC2, Elastic Beanstalk, S3,
              CloudFront, Route 53, RDS, and Lambda.
            </p>
            <p>
              Currently, I am learning Kubernetes, advanced Docker concepts, and
              System Design principles. Also, building side projects as a hobby.
            </p>
          </div>
        </section>
      </MotionChild>

      <MotionChild>
        <section className="pt-6">
          <span className="block font-bold text-3xl dark:text-zinc-200">
            Education
          </span>
          <div className="flex gap-4 py-6">
            <div className="bg-white h-14 w-14 flex items-center justify-center mt-2 rounded-xl shrink-0">
              <Image
                width={100}
                height={100}
                src={"/acadia-university-logo.webp"}
                alt={"Acadia University"}
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col col-span-9">
              <span className="dark:text-zinc-300 text-lg font-semibold">
                Bachelors of Computer Science
              </span>
              <span className="dark:text-zinc-400 text-sm">
                Acadia University
              </span>
              <span className="dark:text-zinc-400 text-sm">Wolfville, NS</span>
              <span className="block mt-2 text-zinc-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                September 2022 → May 2026
              </span>
            </div>
          </div>
        </section>
      </MotionChild>

      <MotionChild>
        <section className="pt-6">
          <span className="block font-bold text-3xl dark:text-zinc-200">
            Experience
          </span>
          <div className="divide-y pt-4 dark:divide-zinc-700">
            {experience.map((exp, index) => {
              return (
                <div className="flex gap-4 py-6" key={index}>
                  <div className="bg-white h-14 w-14 flex items-center justify-center mt-2 rounded-xl shrink-0">
                    <Image
                      width={100}
                      height={100}
                      src={exp.logo}
                      alt={"Acadia University"}
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="flex flex-col col-span-9">
                    <span className="dark:text-zinc-300 text-lg font-semibold">
                      {exp.role}
                    </span>
                    <span className="dark:text-zinc-400 text-sm">
                      {exp.company}
                    </span>
                    <span className="dark:text-zinc-400 text-sm">
                      {exp.location}
                    </span>
                    <span className="block mt-2 text-zinc-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
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
