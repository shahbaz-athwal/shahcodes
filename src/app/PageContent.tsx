"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/topicHeader";
import { InformationCard } from "@/components/ui/informationCard";
import ProjectCard from "@/components/ui/projectCard";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

const PageContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.p
        className="text-base sm:text-[17px] leading-relaxed mt-16 mb-12"
        variants={itemVariants}
      >
        I am a third-year Computer Science student with nearly 2 years of
        experience in Full Stack Development. Currently, I am focusing on
        advanced Backend and DevOps skills. Proficient with{" "}
        <strong>TypeScript</strong>, <strong>Node.js</strong>,{" "}
        <strong>Docker</strong>, and <strong>AWS</strong>.
      </motion.p>

      <motion.div className="space-y-12" variants={itemVariants}>
        <div>
          <Header variant="primary" className="" as="h2">
            Education
          </Header>
          <InformationCard
            title="Bachelor of Computer Science"
            date="( Sep 2022 - May 2026 )"
            description="Acadia University, Wolfville, NS"
          />
        </div>
        <div>
          <Header variant="primary" as="h2">
            Experience
          </Header>
          <InformationCard
            title="Teaching Assistant"
            date="( Jan 2023 - Current )"
            description="Jodrey School of Computer Science, Acadia University"
            badge="PRESENT"
          />
          <InformationCard
            title="ICPC Programming Competition"
            date="( Nov 2023 )"
            description="Participated in ICPC Northeast NA region"
          />
        </div>

        <div>
          <Header variant="primary" as="h2">
            Projects
          </Header>
          <p className="text-lg pt-4 pb-8">
            Below is a selection of recent projects that I&apos;ve worked on.
          </p>
          <div className="lg:w-[140%] lg:-ml-[20%] grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Whisperella"
              description="An Anonymous Messaging Platform"
              link="https://whisperella.shahcodes.in"
              imageSrc="/projects/whisper.png"
              imageAlt="Whisperella Project"
            />
            <ProjectCard
              title="FindMyJob"
              description="A Two Way Job Application Portal"
              link="https://findmyjob.shahcodes.in"
              imageSrc="/projects/findmyjob.png"
              imageAlt="FindMyJob Project"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PageContent;
