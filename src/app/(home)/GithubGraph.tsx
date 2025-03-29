"use client";
import { useTheme } from "@/hooks/useTheme";
import { useCallback, useEffect, useState } from "react";

import { Activity, ActivityCalendar } from "react-activity-calendar";

// TODO: Put this in vercel edge config

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

export const GithubGraph = ({ username, blockMargin, colorPallete }: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const theme = useTheme();

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
    } catch (error) {
      throw Error("Error fetching contribution data");
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockMargin={blockMargin ?? 2}
        loading={loading}
        hideTotalCount
        colorScheme={theme.darkMode ? "dark" : "light"}
        blockSize={10}
        theme={{
          dark: colorPallete ?? ["#161b22", "#4d2d1f", "#803315", "#b34509", "#e05e00"],
          light: colorPallete ?? ["#ebedf0", "#ffe0cc", "#ffb380", "#ff8533", "#e65c00"],
        }}
      />
    </>
  );
};
async function fetchContributionData(username: string): Promise<Activity[]> {
  let response = await fetch(`https://github.vineet.pro/api/${username}`);
  let responseBody = await response.json();

  if (!response.ok) {
    throw Error("Erroring fetching contribution data");
  }
  return responseBody.data;
}
