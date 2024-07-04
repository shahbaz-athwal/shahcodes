"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
const ExperienceSection = () => {
  return (
    <div className="pt-8">
      <p>
        I am a third year Computer Science with nearly 2 years of experience in
        Full Stack Development. Currently focusing on advanced Backend and
        DevOps skills. Proficient with TypeScript, Node.js, Docker and AWS.
      </p>

      <h2 className="text-lg font-semibold mt-14">Education</h2>
      <div className="mt-4 space-y-4 ml-2">
        <div className="flex flex-col">
          <div className="flex items-center space-x-4">
            <div
              className={"w-2 h-2 rounded-full dark:bg-gray-300 bg-zinc-600"}
            ></div>
            <div>
              <h3 className="flex text-md font-medium">
                Bachelor of Computer Science
                <div className="text-xs pt-1.5 italic pl-3">
                  ( Sep 2022 - May 2026 )
                </div>
              </h3>
              <p className="text-sm dark:text-gray-300">
                Acadia University, Wolfville, NS
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-10">Experience</h2>
      <div className="mt-4 space-y-4 ml-2">
        <div className="flex flex-col">
          <div className="flex items-center space-x-4">
            <div
              className={"w-2 h-2 rounded-full dark:bg-gray-300 bg-zinc-600"}
            ></div>
            <div>
              <h3 className="text-md flex font-medium">
                Teaching Assistant
                <div className="text-xs pt-1.5 italic pl-3">
                  ( Jan 2023 - Current )
                </div>
              </h3>
              <p className="text-sm dark:text-gray-300">
                Jodrey School of Computer Science, Acadia University
              </p>
            </div>
            <span className="text-xs border border-gray-300 px-2 py-0.5 rounded-full">
              PRESENT
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4 ml-2">
        <div className="flex flex-col">
          <div className="flex items-center space-x-4">
            <div
              className={"w-2 h-2 rounded-full dark:bg-gray-300 bg-zinc-600"}
            ></div>
            <div>
              <h3 className="text-md flex font-medium">
                ICPC Programming Competetion
                <div className="text-xs pt-1.5 italic pl-3">( Nov 2023 )</div>
              </h3>
              <p className="text-sm dark:text-gray-300">
                Participated in ICPC Northeast NA region
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-10">Projects</h2>
      <div className="mt-6 space-y-8 mx-8 md:ml-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full dark:bg-gray-300 bg-zinc-600"></div>
            <div>
              <h3 className="flex text-md font-medium">Whisperella</h3>
              <p className="text-sm text-gray-600">
                An Anonymous Messaging Platform
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <Link href="/">
            <Image
                src="/projects/whisper.png"
                alt="FindMyJob Project"
                width={1000} 
                height={600} 
                className="w-full"
              />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full dark:bg-gray-300 bg-zinc-600"></div>
            <div>
              <h3 className="flex text-md font-medium">FindMyJob</h3>
              <p className="text-sm text-gray-600">
                A Two Way Job Application Portal
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg shadow-lg overflow-hidden"
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
