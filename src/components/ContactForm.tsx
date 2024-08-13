"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contact } from "@/app/actions/contact";
import { Textarea } from "@/components/ui/textarea";

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Email is invalid" }),
  message: z.string().min(3, { message: "Message is too short" }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      await contact(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <div  className="my-4">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input {...field} className="dark:bg-zinc-800"/>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="my-4">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input {...field} className="dark:bg-zinc-800"/>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <div  className="my-4">
              <FormItem>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="How can I help you."
                  className="resize-none h-28 dark:bg-zinc-800"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <div
          className="flex mt-6 justify-center"
        >
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
