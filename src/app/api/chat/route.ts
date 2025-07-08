import { openai } from "@ai-sdk/openai";
import { get } from "@vercel/edge-config";
import { streamText } from "ai";

export const maxDuration = 45;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const chatModel = openai("gpt-4o");

  const result = streamText({
    system: (await get("SECRET_SAUCE")) as string,
    model: chatModel,
    messages,
  });

  return result.toDataStreamResponse();
}
