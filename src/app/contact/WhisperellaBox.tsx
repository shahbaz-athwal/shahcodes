"use client";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IconLoader2, IconCheck } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";

export default function WhisperellaBox() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim().length < 3) {
      setError("Message must be at least 3 characters long");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      const response = await fetch(
        "https://whisperella.shahcodes.in/api/sendmessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: message,
            username: "shahbazathwal2107",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setMessage("");
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mx-auto w-full">
      <div className="flex items-center justify-center">
        <Separator className="my-4 w-5/12 rounded bg-stone-300 dark:bg-stone-500/50" />
        <div className="px-2 pb-1 tracking-tight text-stone-500">or</div>
        <Separator className="my-4 w-5/12 rounded bg-stone-300 dark:bg-stone-500/50" />
      </div>

      <p className="my-4 text-2xl font-bold text-balance">
        Leave an anonymous message
      </p>

      <form onSubmit={handleSubmit} className="mx-1 space-y-6">
        <div>
          {error && <p className="mb-1 text-sm text-red-400">{error}</p>}

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your anonymous message here"
            className="resize-none rounded-2xl border border-stone-300 bg-stone-200/50 text-stone-900 dark:border-stone-500/50 dark:bg-stone-800/50 dark:text-stone-300"
            rows={3}
            required
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit" disabled={isSending} className="h-8 rounded-xl">
            {isSending ? (
              <>
                <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : success ? (
              <>
                <IconCheck className="mr-2 h-4 w-4" />
                Sent
              </>
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
