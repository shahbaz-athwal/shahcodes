import "server-only";
import { cache } from "react";

export type LocationResponse = {
  city: string;
  region: string;
  country: string;
  isBot: "true" | "false";
};

const requestContext = cache(() => {
  return new Map<"metadata", LocationResponse>();
});

export const setRequestContext = (value: LocationResponse) => requestContext().set("metadata", value);

export const getRequestContext = (): LocationResponse => requestContext().get("metadata")!;
