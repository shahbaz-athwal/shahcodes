import { useState, useEffect, useRef } from "react";
import { useChat as useAIChat } from "@ai-sdk/react";

export function useChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useAIChat({
    maxSteps: 4,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);

  return {
    isOpen,
    messages,
    input,
    messagesEndRef,
    toggleChat,
    closeChat,
    handleInputChange,
    handleSubmit,
  };
}
