import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export function Education() {
  return (
    <Card className="mb-8 border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <CardHeader className="pb-2">
        <h2 className="text-3xl font-bold dark:text-zinc-200">Education</h2>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 py-4">
          <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
            <Image
              width={100}
              height={100}
              src={"/acadia-university-logo.webp"}
              alt={"Acadia University"}
              className="h-12 w-12"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold dark:text-zinc-200">Bachelors of Computer Science</span>
            <span className="text-base dark:text-zinc-400">Acadia University</span>
            <span className="text-sm dark:text-zinc-500">Wolfville, NS</span>
            <span className="mt-2 block font-mono text-sm font-medium tracking-tighter text-zinc-500">
              September 2022 → May 2026
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
