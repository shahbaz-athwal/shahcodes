"use client";
import { useThemeToggle } from "@/components/ThemeToggle";
import { type Activity, ActivityCalendar } from "react-activity-calendar";
import { MotionDiv } from "@/lib/motion";

type GithubGraphProps = {
  data: Activity[] | null;
};

export const GithubGraph = ({ data }: GithubGraphProps) => {
  const { theme, mounted } = useThemeToggle();

  if (!mounted)
    return <div className="h-[135px] w-32 opacity-0" aria-hidden="true" />;

  return (
    <MotionDiv
      className="sm:w-[110%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: data ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <ActivityCalendar
        loading={!data}
        data={data!}
        maxLevel={4}
        blockMargin={2}
        hideTotalCount
        colorScheme={theme}
        blockSize={10}
        theme={{
          dark: ["#1c1917", "#5d2d1f", "#803315", "#b34509", "#e05e00"],
          light: ["#ebedf0", "#ffc299", "#ff9966", "#ff7733", "#e65c00"],
        }}
      />
    </MotionDiv>
  );
};
