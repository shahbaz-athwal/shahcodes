import { QdrantClient } from "@qdrant/js-client-rest";
import { randomUUID } from "crypto";

const qdClient = new QdrantClient({
  url: process.env.QDRANT_URL,
  apiKey: process.env.QDRANT_API_KEY,
});

export const storeEmbeddings = async (
  embeddings: Array<{ embedding: number[]; content: string }>,
  collectionName: string = "embeddings"
) => {
  try {
    if (embeddings.length === 0) {
      throw new Error("No embeddings provided");
    }

    // Check if collection exists, create if not
    const collections = await qdClient.getCollections();
    const collectionExists = collections.collections.some((collection) => collection.name === collectionName);
    if (!collectionExists) {
      await qdClient.createCollection(collectionName, {
        vectors: {
          size: embeddings[0].embedding.length,
          distance: "Cosine",
        },
      });
    }

    const points = embeddings.map((item) => ({
      id: randomUUID(),
      vector: item.embedding,
      payload: {
        content: item.content,
        timestamp: new Date().toISOString(),
      },
    }));

    const result = await qdClient.upsert(collectionName, {
      wait: true,
      points,
    });

    return {
      success: true,
      insertedCount: points.length,
      operationId: result.operation_id,
    };
  } catch (error: any) {
    console.error("Error storing embeddings in Qdrant:", error.message);
    throw error;
  }
};

export const searchResources = async (embedding: number[]) => {
  const result = await qdClient.search("embeddings", {
    vector: embedding,
  });
  return result;
};

export default qdClient;
