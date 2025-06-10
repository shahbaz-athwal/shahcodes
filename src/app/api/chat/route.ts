import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { get } from "@vercel/edge-config";
// import { getResource } from "@/lib/embeddings";
// import { z } from "zod";

export const maxDuration = 45;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const chatModel = openai("gpt-4o");

  const result = streamText({
    system: (await get("SECRET_SAUCE")) as string,
    model: chatModel,
    messages,
    tools: {
      // addResource: tool({
      //   description: `Add a resource to your knowledge base. If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
      //   parameters: z.object({
      //     content: z.string().describe("The content or resource to add to the knowledge base"),
      //   }),
      //   execute: async ({ content }) => {
      //     return await createResource(content);
      //   },
      // }),
      // getResource: tool({
      //   description: `Get a resource from knowledge base.`,
      //   parameters: z.object({
      //     content: z.string().describe("The content or resource to get from the knowledge base"),
      //   }),
      //   execute: async ({ content }) => {
      //     return await getResource(content);
      //   },
      // }),
    },
  });

  return result.toDataStreamResponse();
}
