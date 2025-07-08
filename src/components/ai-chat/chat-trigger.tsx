import { motion } from "motion/react";
import { IconAI } from "@/components/ui/ai-icon";
import { Button } from "@/components/ui/button";

interface ChatButtonProps {
  onClick: () => void;
}

export function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed right-4 bottom-20 z-50 sm:right-5 sm:bottom-10"
    >
      <Button
        onClick={onClick}
        size="icon"
        className="h-12 w-12 rounded-full bg-stone-900 text-white shadow-lg transition-all duration-150 hover:bg-stone-800 hover:shadow-xl sm:h-14 sm:w-14 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
      >
        <IconAI className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    </motion.div>
  );
}
