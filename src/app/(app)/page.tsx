"use client";
import { PageHeader } from "@/components/ui/page-header";
import { InformationCard } from "@/components/ui/informationCard";
import ProjectCard from "@/components/ui/projectCard";
const ExperienceSection = () => {
  return (
    <div className="p-3">
      <p className="text-base text-justify sm:text-[17px] leading-relaxed my-8">
        I am a third-year Computer Science student with nearly 2 years of
        experience in Full Stack Development. Currently, I am focusing on
        advanced Backend and DevOps skills. Proficient with{" "}
        <strong>TypeScript</strong>, <strong>Node.js</strong>,{" "}
        <strong>Docker</strong>, and <strong>AWS</strong>.
      </p>

      <PageHeader title="Education" />
      <InformationCard
        title="Bachelor of Computer Science"
        date="( Sep 2022 - May 2026 )"
        description="Acadia University, Wolfville, NS"
      />

      <PageHeader title="Experience" />
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

      <PageHeader title="Projects" />
      <div className="space-y-8 mx-2 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg">
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
          link="https://find-my-job.vercel.app/"
          imageSrc="/projects/findmyjob.png"
          imageAlt="FindMyJob Project"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
