"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { IconAI } from "./ui/ai-icon";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  return (
    <>
      {/* Chat Widget Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed right-5 bottom-10 z-50"
          >
            <Button
              onClick={toggleChat}
              size="icon"
              className="h-14 w-14 rounded-full bg-stone-900 text-white shadow-lg transition-all duration-150 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
            >
              <IconAI className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed right-5 bottom-10 z-50"
          >
            <Card className="flex h-[32rem] w-96 flex-col rounded-3xl border border-stone-200 bg-white shadow-2xl dark:border-stone-700 dark:bg-stone-900">
              {/* Header */}
              <CardHeader className="flex-shrink-0 rounded-t-3xl border-b border-stone-100 p-4 pb-3 dark:border-stone-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 dark:bg-stone-100">
                      <Bot className="h-4 w-4 text-white dark:text-stone-900" />
                    </div>
                    <CardTitle className="text-base font-medium text-stone-900 dark:text-stone-100">Zero AI</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeChat}
                    className="h-8 w-8 rounded-xl p-0 text-stone-400 hover:bg-stone-50 hover:text-stone-600 dark:text-stone-500 dark:hover:bg-stone-800 dark:hover:text-stone-300"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full px-4">
                  <div className="space-y-4">
                    {messages.length === 0 && (
                      <div className="py-8 text-center text-stone-500 dark:text-stone-400">
                        <Bot className="mx-auto mb-3 h-10 w-10 text-stone-300 dark:text-stone-600" />
                        <p className="text-sm">Hey! Ask me anything about Shahbaz.</p>
                      </div>
                    )}

                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className={`mb-3 flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex max-w-[80%] gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                          <div
                            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${
                              message.role === "user"
                                ? "bg-stone-900 dark:bg-stone-100"
                                : "border border-stone-200 bg-stone-100 dark:border-stone-600 dark:bg-stone-800"
                            }`}
                          >
                            {message.role === "user" ? (
                              <User className="h-3.5 w-3.5 text-white dark:text-stone-900" />
                            ) : (
                              <Bot className="h-3.5 w-3.5 text-stone-600 dark:text-stone-300" />
                            )}
                          </div>
                          <div
                            className={`rounded-3xl px-4 py-2.5 ${
                              message.role === "user"
                                ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                                : "border border-stone-100 bg-stone-50 text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                            }`}
                          >
                            {message.parts.map((part, i) => {
                              switch (part.type) {
                                case "text":
                                  return (
                                    <p
                                      key={`${message.id}-${i}`}
                                      className="text-sm leading-relaxed whitespace-pre-wrap"
                                    >
                                      {part.text}
                                    </p>
                                  );
                              }
                            })}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Input Area */}
              <div className="flex-shrink-0 rounded-b-3xl border-t border-stone-100 p-4 dark:border-stone-700">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    placeholder="Type your message..."
                    onChange={handleInputChange}
                    className="flex-1 rounded-2xl border-stone-200 bg-white transition-colors focus:border-stone-400 focus:ring-0 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-400 dark:focus:border-stone-500"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!input.trim()}
                    className="rounded-2xl bg-stone-900 text-white transition-colors hover:bg-stone-800 disabled:bg-stone-300 disabled:text-stone-500 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 dark:disabled:bg-stone-700 dark:disabled:text-stone-400"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
