import { useState, useEffect, useRef } from "react";
import { useChat as useAIChat } from "@ai-sdk/react";

export function useChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, status } =
    useAIChat({
      maxSteps: 4,
    });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen((prev) => !prev);
  const closeChat = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "instant",
      });
    }
  }, [messages, isOpen]);

  return {
    isOpen,
    status,
    messages,
    input,
    messagesEndRef,
    toggleChat,
    closeChat,
    handleInputChange,
    handleSubmit,
  };
}
