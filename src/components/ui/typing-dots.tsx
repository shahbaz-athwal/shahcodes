import { motion } from "motion/react";
import { IconAI } from "./ai-icon";

export const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className="mb-3 flex justify-start gap-3"
    >
      <div className="flex max-w-[85%] gap-2 sm:max-w-[80%]">
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-100 dark:border-stone-600 dark:bg-stone-800">
          <IconAI className="h-3.5 w-3.5 text-stone-600 dark:text-stone-300" />
        </div>
        <div className="rounded-2xl border border-stone-100 bg-stone-50 px-3 py-2.5 text-stone-900 sm:rounded-3xl sm:px-4 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100">
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <motion.div
                className="h-2 w-2 rounded-full bg-stone-400 dark:bg-stone-500"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="h-2 w-2 rounded-full bg-stone-400 dark:bg-stone-500"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className="h-2 w-2 rounded-full bg-stone-400 dark:bg-stone-500"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
