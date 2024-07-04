import { z } from "zod";

export const contactSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: "Email is invalid" }),
    message: z.string().min(3, { message: "Message is too short" }),
  });