import { MotionChild, MotionParent } from "@/components/Motion";
import { Header } from "@/components/ui/header";
import { Metadata } from "next";
import { TechStack } from "./TechStack";
import { Education } from "./Education";
import { Experience } from "./Experience";
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
        <Header as="h1">Details</Header>
      </MotionChild>
      <MotionChild>
        <TechStack />
      </MotionChild>
      <MotionChild>
        <Experience />
      </MotionChild>
      <MotionChild>
        <Education />
      </MotionChild>
    </MotionParent>
  );
}
