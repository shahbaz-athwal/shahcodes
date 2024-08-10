"use client";
import { Header } from "@/components/ui/topicHeader";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-1 pt-9"
    >
      <Header as="h1">Details</Header>
      <motion.section variants={itemVariants} className="mb-6">
        <section className="pt-8">
          <span className="block font-bold text-2xl pb-3 dark:text-zinc-200">
            Tech Stack
          </span>
          <div className="text-md md:text-lg space-y-3 font-normal leading-normal text-zinc-700 dark:text-zinc-300">
            <p>
              I create web applications using <strong>Next.js</strong> and also
              work with <strong>React</strong> combined with{" "}
              <strong>Express</strong> in <strong>TypeScript</strong>. My
              primary database is <strong>PostgreSQL</strong>. I practice Data
              Structures and Algorithms in <strong>Python</strong>.
            </p>
            <p>
              My favorite tool is <strong>Docker</strong>. and I Use{" "}
              <strong>GitHub Actions</strong> for <strong>CI/CD</strong>{" "}
              pipelines.
            </p>
            <p>
              <strong>AWS</strong> services I use regularly, includes{" "}
              <strong>EC2</strong>, <strong>Elastic Beanstalk</strong>,{" "}
              <strong>S3</strong>, <strong>CloudFront</strong>,
              <strong> Route 53</strong>, <strong>RDS</strong>, and{" "}
              <strong>Lambda</strong>.
            </p>
            <p>
              Currently, I am learning <strong>Kubernetes</strong>, advanced{" "}
              <strong>Docker</strong> concepts, and{" "}
              <strong>System Design</strong> principles. Also, building side
              projects as a hobby.
            </p>
          </div>
        </section>
      </motion.section>

      <motion.section variants={itemVariants}>
        <section className="pt-4">
          <span className="block font-bold text-2xl dark:text-zinc-200">
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
      </motion.section>

      <motion.section variants={itemVariants}>
        <section className="pt-4">
          <span className="block font-bold text-2xl dark:text-zinc-200">
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
      </motion.section>
    </motion.div>
  );
}
