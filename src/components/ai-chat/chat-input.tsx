import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { FormEvent } from "react";

interface ChatInputProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function ChatInput({ input, onInputChange, onSubmit }: ChatInputProps) {
  return (
    <div className="flex-shrink-0 rounded-b-2xl border-t border-stone-100 p-4 sm:rounded-b-3xl dark:border-stone-700">
      <form onSubmit={onSubmit} className="flex gap-2">
        <Input
          value={input}
          placeholder="Type your message..."
          onChange={onInputChange}
          className="flex-1 rounded-2xl border-stone-200 bg-white text-base transition-colors focus:border-stone-400 focus:ring-0 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-400 dark:focus:border-stone-500"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim()}
          className="rounded-2xl bg-stone-900 text-white transition-colors hover:bg-stone-800 disabled:bg-stone-300 disabled:text-stone-500 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 dark:disabled:bg-stone-700 dark:disabled:text-stone-400"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
