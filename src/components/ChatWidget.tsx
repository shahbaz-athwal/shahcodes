"use client";

import { AnimatePresence } from "motion/react";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { useChatWidget } from "@/hooks/useChat";
import { ChatButton } from "./ai-chat/chat-button";
import { ChatInterface } from "./ai-chat/chat-interface";

export default function ChatWidget() {
  const { isOpen, messages, input, messagesEndRef, toggleChat, closeChat, handleInputChange, handleSubmit } =
    useChatWidget();

  const isChatWidgetEnabled = useFeatureFlagEnabled("chat-widget");

  if (!isChatWidgetEnabled) {
    return null;
  }

  return (
    <>
      {/* Chat Widget Button */}
      <AnimatePresence>{!isOpen && <ChatButton onClick={toggleChat} />}</AnimatePresence>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <ChatInterface
            messages={messages}
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
