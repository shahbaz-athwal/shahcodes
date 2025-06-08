import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import type { Message } from "@ai-sdk/react";
import { RefObject, FormEvent } from "react";

interface ChatInterfaceProps {
  messages: Message[];
  input: string;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function ChatInterface({
  messages,
  input,
  messagesEndRef,
  onClose,
  onInputChange,
  onSubmit,
}: ChatInterfaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-4 z-50 sm:inset-auto sm:right-5 sm:bottom-10"
    >
      <Card className="flex h-full w-full flex-col rounded-2xl border border-stone-200 bg-white shadow-2xl sm:h-[56rem] sm:w-[68rem] sm:rounded-3xl dark:border-stone-700 dark:bg-stone-900">
        <ChatHeader onClose={onClose} />
        <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
        <ChatInput input={input} onInputChange={onInputChange} onSubmit={onSubmit} />
      </Card>
    </motion.div>
  );
}
