"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  return (
    <>
      {/* Chat Widget Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed right-8 bottom-8 z-50"
          >
            <Button
              onClick={toggleChat}
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-8 bottom-8 z-50"
          >
            <Card
              className={`bg-background/95 w-96 border-0 shadow-2xl backdrop-blur-sm ${
                isMinimized ? "h-16" : "h-[32rem]"
              } transition-all duration-300 ease-in-out`}
            >
              {/* Header */}
              <CardHeader className="rounded-t-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-4 pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI Assistant</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        Online
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={toggleMinimize} className="h-8 w-8 p-0">
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={closeChat} className="h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {!isMinimized && (
                <>
                  <Separator />

                  {/* Messages Area */}
                  <CardContent className="flex-1 p-0">
                    <ScrollArea className="h-80 p-4">
                      <div className="space-y-4">
                        {messages.length === 0 && (
                          <div className="text-muted-foreground py-8 text-center">
                            <Bot className="mx-auto mb-2 h-12 w-12 opacity-50" />
                            <p className="text-sm">Hello! How can I help you today?</p>
                          </div>
                        )}

                        {messages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex max-w-[80%] gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                            >
                              <div
                                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                                  message.role === "user"
                                    ? "bg-blue-500"
                                    : "bg-gradient-to-r from-purple-500 to-blue-500"
                                }`}
                              >
                                {message.role === "user" ? (
                                  <User className="h-4 w-4 text-white" />
                                ) : (
                                  <Bot className="h-4 w-4 text-white" />
                                )}
                              </div>
                              <div
                                className={`rounded-2xl px-4 py-2 ${
                                  message.role === "user" ? "bg-blue-500 text-white" : "bg-muted"
                                }`}
                              >
                                {message.parts.map((part, i) => {
                                  switch (part.type) {
                                    case "text":
                                      return (
                                        <p key={`${message.id}-${i}`} className="text-sm whitespace-pre-wrap">
                                          {part.text}
                                        </p>
                                      );
                                  }
                                })}
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {isLoading && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start gap-3"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                              <Bot className="h-4 w-4 text-white" />
                            </div>
                            <div className="bg-muted rounded-2xl px-4 py-2">
                              <div className="flex gap-1">
                                <div
                                  className="bg-muted-foreground/50 h-2 w-2 animate-bounce rounded-full"
                                  style={{ animationDelay: "0ms" }}
                                />
                                <div
                                  className="bg-muted-foreground/50 h-2 w-2 animate-bounce rounded-full"
                                  style={{ animationDelay: "150ms" }}
                                />
                                <div
                                  className="bg-muted-foreground/50 h-2 w-2 animate-bounce rounded-full"
                                  style={{ animationDelay: "300ms" }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </ScrollArea>
                  </CardContent>

                  <Separator />

                  {/* Input Area */}
                  <div className="p-4">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                      <Input
                        value={input}
                        placeholder="Type your message..."
                        onChange={handleInputChange}
                        className="border-muted-foreground/20 transition-color flex-1"
                        disabled={isLoading}
                      />
                      <Button
                        type="submit"
                        size="sm"
                        disabled={isLoading || !input.trim()}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
