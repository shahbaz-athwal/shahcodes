import { CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconAI } from "@/components/ui/ai-icon";
import { MessageBubble } from "./MessageBubble";
import type { Message } from "@ai-sdk/react";
import { RefObject } from "react";

interface ChatMessagesProps {
  messages: Message[];
  messagesEndRef: RefObject<HTMLDivElement | null>;
}

export function ChatMessages({ messages, messagesEndRef }: ChatMessagesProps) {
  return (
    <CardContent className="flex-1 overflow-hidden p-0">
      <ScrollArea className="h-full px-4">
        <div className="space-y-4 py-4">
          {messages.length === 0 && <EmptyState />}

          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {/* Invisible div for auto-scroll target */}
          <div ref={messagesEndRef} className="h-1" />
        </div>
      </ScrollArea>
    </CardContent>
  );
}

function EmptyState() {
  return (
    <div className="py-8 text-center text-stone-500 dark:text-stone-400">
      <IconAI className="mx-auto mb-3 h-10 w-10 text-stone-300 dark:text-stone-600" />
      <p className="text-base">Hey! Ask me anything about Shahbaz</p>
    </div>
  );
}
