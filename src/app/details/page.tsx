import { MotionChild, MotionParent } from "@/components/Motion";
import { Header } from "@/components/ui/header";
import { Metadata } from "next";
import { TechStack } from "./TechStack";
import { Education } from "./Education";
import { Experience } from "./Experience";

export const metadata: Metadata = {
  title: "Details",
  description: "What technologies I use? and where I work?",
};

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
