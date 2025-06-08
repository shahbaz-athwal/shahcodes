import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { IconAI } from "@/components/ui/ai-icon";

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <CardHeader className="flex-shrink-0 rounded-t-2xl border-b border-stone-100 p-4 pb-3 sm:rounded-t-3xl dark:border-stone-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 dark:bg-stone-100">
            <IconAI className="h-4 w-4 text-white dark:text-stone-900" />
          </div>
          <CardTitle className="text-base font-medium text-stone-900 dark:text-stone-100">Zero AI</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 rounded-xl p-0 text-stone-400 hover:bg-stone-50 hover:text-stone-600 dark:text-stone-500 dark:hover:bg-stone-800 dark:hover:text-stone-300"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
}
