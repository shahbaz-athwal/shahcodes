"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
const ExperienceSection = () => {
  return (
    <div className="pt-6">
      <p className="text-base sm:text-[17px] leading-relaxed">
        I am a third-year Computer Science student with nearly 2 years of
        experience in Full Stack Development. Currently, I am focusing on
        advanced Backend and DevOps skills. Proficient with{" "}
        <strong>TypeScript</strong>, <strong>Node.js</strong>,{" "}
        <strong>Docker</strong>, and <strong>AWS</strong>.
      </p>

      <h2 className="text-2xl sm:text-3xl font-extrabold mt-14">Education</h2>
      <div className="mt-8 ml-2 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 rounded-full mb-6 sm:mb-0 flex-shrink-0 bg-zinc-600 dark:bg-gray-300"></div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h3 className="text-[17px] sm:text-lg font-medium">
                Bachelor of Computer Science
              </h3>
              <p className="text-sm sm:text-base italic text-gray-500 dark:text-gray-400">
                ( Sep 2022 - May 2026 )
              </p>
            </div>
            <p className="text-base sm:text-[17px] dark:text-gray-300">
              Acadia University, Wolfville, NS
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold mt-10">Experience</h2>
      <div className="mt-8 space-y-4 ml-2">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 rounded-full mb-6 sm:mb-0 flex-shrink-0 bg-zinc-600 dark:bg-gray-300"></div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h3 className="text-[17px] sm:text-lg font-medium">
                Teaching Assistant
              </h3>
              <p className="text-sm sm:text-base italic text-gray-500 dark:text-gray-400">
                ( Jan 2023 - Current )
              </p>
            </div>
            <p className="text-base sm:text-[17px] dark:text-gray-300">
              Jodrey School of Computer Science, Acadia University
            </p>
          </div>
          <span className="text-xs border border-gray-300 px-2 py-0.5 rounded-full">
            PRESENT
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-4 ml-2">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 rounded-full mb-6 sm:mb-0 flex-shrink-0 bg-zinc-600 dark:bg-gray-300"></div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h3 className="text-[17px] sm:text-lg font-medium">
                ICPC Programming Competition
              </h3>
              <p className="text-sm sm:text-base italic text-gray-500 dark:text-gray-400">
                ( Nov 2023 )
              </p>
            </div>
            <p className="text-base sm:text-[17px] dark:text-gray-300">
              Participated in ICPC Northeast NA region
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold mt-10">Projects</h2>
      <div className="mt-8 space-y-8 mx-6 md:ml-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full flex-shrink-0 dark:bg-gray-300 bg-zinc-600"></div>
            <div>
              <h3 className="text-lg font-medium">Whisperella</h3>
              <p className="text-[17px] text-gray-500 dark:text-gray-400">
                An Anonymous Messaging Platform
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg shadow-lg overflow-hidden dark:shadow-gray-600"
          >
            <Link href="/">
              <Image
                src="/projects/whisper.png"
                alt="Whisperella Project"
                width={1000}
                height={600}
                className="w-full"
              />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full flex-shrink-0 dark:bg-gray-300 bg-zinc-600"></div>
            <div>
              <h3 className="text-lg font-medium">FindMyJob</h3>
              <p className="text-[17px] text-gray-500 dark:text-gray-400">
                A Two Way Job Application Portal
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg shadow-lg overflow-hidden dark:shadow-gray-600"
          >
            <Link href="/">
              <Image
                src="/projects/findmyjob.png"
                alt="FindMyJob Project"
                width={1000}
                height={600}
                className="w-full"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
