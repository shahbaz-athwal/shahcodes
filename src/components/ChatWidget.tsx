"use client";

import { AnimatePresence } from "motion/react";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { useChatWidget } from "@/hooks/useChat";
import { ChatButton } from "./ai-chat/ChatButton";
import { ChatInterface } from "./ai-chat/ChatInterface";

export default function ChatWidget() {
  const { isOpen, messages, input, messagesEndRef, toggleChat, closeChat, handleInputChange, handleSubmit } =
    useChatWidget();

  const isChatWidgetEnabled = useFeatureFlagEnabled("chat-widget");

  // Fix: The feature flag logic was inverted - should return null when NOT enabled
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
