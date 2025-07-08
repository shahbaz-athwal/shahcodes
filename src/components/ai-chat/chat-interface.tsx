import type { Message } from "@ai-sdk/react";
import { X } from "lucide-react";
import { motion } from "motion/react";
import type { FormEvent, RefObject } from "react";
import { IconAI } from "@/components/ui/ai-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { TypingIndicator } from "../ui/typing-dots";
import { ChatInput } from "./chat-input";
import { MessageBubble } from "./message-bubble";

interface ChatInterfaceProps {
  messages: Message[];
  status: "streaming" | "submitted" | "ready" | "error";
  input: string;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function ChatInterface({
  messages,
  status,
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
      <Card className="flex h-full w-full flex-col rounded-2xl border border-stone-200 bg-white shadow-2xl sm:h-[40rem] sm:w-[32rem] sm:rounded-3xl dark:border-stone-700 dark:bg-stone-900">
        <CardHeader className="flex-shrink-0 rounded-t-2xl border-b border-stone-100 p-4 pb-3 sm:rounded-t-3xl dark:border-stone-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 dark:bg-stone-100">
                <IconAI className="h-4 w-4 text-white dark:text-stone-900" />
              </div>
              <CardTitle className="text-base font-medium text-stone-900 dark:text-stone-100">
                Zero AI
              </CardTitle>
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
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full px-4">
            <div className="space-y-4 py-4">
              {messages.length === 0 && (
                <div className="py-8 text-center text-stone-500 dark:text-stone-400">
                  <IconAI className="mx-auto mb-3 h-10 w-10 text-stone-300 dark:text-stone-600" />
                  <p className="text-base">
                    Hey! Ask me anything about Shahbaz
                  </p>
                </div>
              )}

              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}

              {/* Show typing indicator when status is submitted */}
              {status === "submitted" && <TypingIndicator />}

              {/* Invisible div for auto-scroll target */}
              <div ref={messagesEndRef} className="h-1" />
            </div>
          </ScrollArea>
        </CardContent>
        <ChatInput
          input={input}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
      </Card>
    </motion.div>
  );
}
