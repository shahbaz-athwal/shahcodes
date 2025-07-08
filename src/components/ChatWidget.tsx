"use client";

import { AnimatePresence } from "motion/react";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { useChatWidget } from "@/hooks/useChat";
import { ChatInterface } from "./ai-chat/chat-interface";
import { ChatButton } from "./ai-chat/chat-trigger";

export default function ChatWidget() {
  const {
    isOpen,
    status,
    messages,
    input,
    messagesEndRef,
    toggleChat,
    closeChat,
    handleInputChange,
    handleSubmit,
  } = useChatWidget();

  const isChatWidgetEnabled = useFeatureFlagEnabled("chat-widget");

  if (!isChatWidgetEnabled) {
    return null;
  }

  return (
    <>
      {/* Chat Widget Button */}
      <AnimatePresence>
        {!isOpen && <ChatButton onClick={toggleChat} />}
      </AnimatePresence>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <ChatInterface
            messages={messages}
            status={status}
            input={input}
            messagesEndRef={messagesEndRef}
            onClose={closeChat}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </>
  );
}
