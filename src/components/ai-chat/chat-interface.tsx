import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconAI } from "@/components/ui/ai-icon";
import { motion } from "motion/react";
import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { MessageBubble } from "./message-bubble";
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
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full px-4">
            <div className="space-y-4 py-4">
              {messages.length === 0 && (
                <div className="py-8 text-center text-stone-500 dark:text-stone-400">
                  <IconAI className="mx-auto mb-3 h-10 w-10 text-stone-300 dark:text-stone-600" />
                  <p className="text-base">Hey! Ask me anything about Shahbaz</p>
                </div>
              )}

              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}

              {/* Invisible div for auto-scroll target */}
              <div ref={messagesEndRef} className="h-1" />
            </div>
          </ScrollArea>
        </CardContent>
        <ChatInput input={input} onInputChange={onInputChange} onSubmit={onSubmit} />
      </Card>
    </motion.div>
  );
}
