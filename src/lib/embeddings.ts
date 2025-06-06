import { embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { storeEmbeddings, searchResources } from "./qdrant";

const embeddingModel = openai.embedding("text-embedding-3-small");

const generateChunks = (input: string): string[] => {
  return input
    .trim()
    .split(".")
    .filter((i) => i !== "");
};

export const generateEmbeddings = async (value: string): Promise<Array<{ embedding: number[]; content: string }>> => {
  const chunks = generateChunks(value);
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunks,
  });
  return embeddings.map((e, i) => ({ content: chunks[i], embedding: e }));
};

export const createResource = async (content: string) => {
  const embeddings = await generateEmbeddings(content);
  await storeEmbeddings(embeddings);
  return { success: true, message: "Resource created successfully" };
};

export const getResource = async (content: string) => {
  const embeddings = await generateEmbeddings(content);
  const result = await searchResources(embeddings[0].embedding);
  return result;
};
