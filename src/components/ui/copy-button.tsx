"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton = ({ text, className }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className={cn(
        "bg-secondary/50 hover:bg-secondary/80 h-8 w-8 rounded-md transition-colors",
        className,
      )}
      title={copied ? "Copied!" : "Copy code"}
    >
      {copied ? (
        <IconCheck className="h-4 w-4" />
      ) : (
        <IconCopy className="h-4 w-4" />
      )}
    </Button>
  );
};
