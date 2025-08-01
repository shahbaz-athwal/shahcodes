"use client";
import { cloneElement } from "react";
import { type Activity, ActivityCalendar } from "react-activity-calendar";
import { useThemeToggle } from "@/components/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        // biome-ignore lint: fix later
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
        renderBlock={(block, activity) => {
          return (
            <Tooltip>
              <TooltipTrigger asChild>{cloneElement(block, {})}</TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  {activity.count}{" "}
                  {activity.count === 1 ? "contribution" : "contributions"} on{" "}
                  {new Date(activity.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </TooltipContent>
            </Tooltip>
          );
        }}
      />
    </MotionDiv>
  );
};
