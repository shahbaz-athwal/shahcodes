"use server";
import { contactSchema } from "@/schema/contactSchema";
import { z } from "zod";

export async function contact(data: z.infer<typeof contactSchema>) {
  console.log(data);
}