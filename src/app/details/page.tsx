import { MotionChild, MotionParent } from "@/components/Motion";
import { Header } from "@/components/ui/header";
import { Metadata } from "next";
import { TechStack } from "./TechStack";
import { Education } from "../(home)/Education";
import { Experience } from "../(home)/Experience";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Details",
  description: "More about Shahbaz Singh",
  ogText: "Know more about my tech stack, experience and education.",
});

export default function Page() {
  return (
    <MotionParent>
      <MotionChild>
        <Header variant="primary" as="h2" className="mb-4 text-4xl">
          Tech Stack
        </Header>
        <TechStack />
      </MotionChild>

      <MotionChild>
        <Header variant="primary" as="h2" className="mt-12 mb-4 text-4xl">
          Work Experience
        </Header>
        <Experience />
      </MotionChild>

      <MotionChild>
        <Header variant="primary" as="h2" className="mt-12 mb-4 text-4xl">
          Education
        </Header>
        <Education />
      </MotionChild>
    </MotionParent>
  );
}
