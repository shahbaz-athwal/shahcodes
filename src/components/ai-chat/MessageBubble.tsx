import { motion } from "motion/react";
import { User } from "lucide-react";
import { IconAI } from "@/components/ui/ai-icon";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Message } from "@ai-sdk/react";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className={`mb-3 flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div className={`flex max-w-[85%] gap-2 sm:max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
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
            <IconAI className="h-3.5 w-3.5 text-stone-600 dark:text-stone-300" />
          )}
        </div>
        <div
          className={`rounded-2xl px-3 py-2.5 sm:rounded-3xl sm:px-4 ${
            message.role === "user"
              ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
              : "border border-stone-100 bg-stone-50 text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
          }`}
        >
          {message.parts?.map((part, i) => {
            switch (part.type) {
              case "text":
                return <MessageText key={`${message.id}-${i}`} part={part} role={message.role} />;
              case "tool-invocation":
                return (
                  <div key={`${message.id}-${i}`} className="font-light italic">
                    {"calling tool: " + part.toolInvocation.toolName}
                  </div>
                );
            }
          })}
        </div>
      </div>
    </motion.div>
  );
}

interface MessageTextProps {
  part: { text: string };
  role: string;
}

function MessageText({ part, role }: MessageTextProps) {
  const getProseClasses = () => {
    const baseClasses =
      "prose prose-sm prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent max-w-none text-sm leading-relaxed";

    if (role === "user") {
      return `${baseClasses} prose-headings:text-white prose-p:text-white prose-strong:text-white prose-em:text-white prose-ul:text-white prose-ol:text-white prose-li:text-white prose-a:text-blue-300 prose-code:text-white dark:prose-headings:text-stone-900 dark:prose-p:text-stone-900 dark:prose-strong:text-stone-900 dark:prose-em:text-stone-900 dark:prose-ul:text-stone-900 dark:prose-ol:text-stone-900 dark:prose-li:text-stone-900 dark:prose-a:text-blue-600 dark:prose-code:text-stone-900`;
    } else {
      return `${baseClasses} prose-headings:text-stone-900 prose-p:text-stone-900 prose-strong:text-stone-900 prose-em:text-stone-900 prose-ul:text-stone-900 prose-ol:text-stone-900 prose-li:text-stone-900 prose-a:text-blue-600 prose-code:text-stone-900 dark:prose-headings:text-stone-100 dark:prose-p:text-stone-100 dark:prose-strong:text-stone-100 dark:prose-em:text-stone-100 dark:prose-ul:text-stone-100 dark:prose-ol:text-stone-100 dark:prose-li:text-stone-100 dark:prose-a:text-blue-400 dark:prose-code:text-stone-100`;
    }
  };

  return (
    <div className={getProseClasses()}>
      <ReactMarkdown
        components={{
          code: ({ className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            const isCodeBlock = Boolean(language);

            if (isCodeBlock) {
              return (
                <SyntaxHighlighter
                  style={materialDark}
                  language={language}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    borderRadius: "0.9rem",
                    fontSize: "0.9rem",
                    lineHeight: "1rem",
                  }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }

            return (
              <code
                className={`${className || ""} rounded px-1.5 py-0.5 text-xs font-medium ${
                  role === "user"
                    ? "bg-white/20 text-white dark:bg-stone-800/60 dark:text-stone-100"
                    : "bg-stone-200/80 text-stone-800 dark:bg-stone-700/80 dark:text-stone-200"
                }`}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {part.text}
      </ReactMarkdown>
    </div>
  );
}
