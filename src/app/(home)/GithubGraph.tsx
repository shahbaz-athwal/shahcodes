"use client";
import { useTheme } from "@/hooks/useTheme";
import { Activity, ActivityCalendar } from "react-activity-calendar";

type GithubGraphProps = {
  data: Activity[];
};

export const GithubGraph = ({ data }: GithubGraphProps) => {
  const theme = useTheme();

  return (
    <>
      <ActivityCalendar
        data={data}
        maxLevel={4}
        blockMargin={2}
        hideTotalCount
        colorScheme={theme.darkMode ? "dark" : "light"}
        blockSize={10}
        theme={{
          dark: ["#161b22", "#4d2d1f", "#803315", "#b34509", "#e05e00"],
          light: ["#ebedf0", "#ffe0cc", "#ffb380", "#ff8533", "#e65c00"],
        }}
      />
    </>
  );
};
