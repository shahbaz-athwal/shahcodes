"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
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
import { contactSchema } from "@/schema/contactSchema";

function Page() {

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
    <div className="mt-14 mx-4">
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <motion.div whileTap={{ scale: 0.98 }} className="my-4">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input {...field} />
                <FormMessage />
              </FormItem>
            </motion.div>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <motion.div whileTap={{ scale: 0.98 }} className="my-4">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input {...field} />
                <FormMessage />
              </FormItem>
            </motion.div>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <motion.div whileTap={{ scale: 0.98 }} className="my-4">
              <FormItem>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="How can I help you."
                  className="resize-none h-28"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            </motion.div>
          )}
        />
        <motion.div
          whileTap={{ scale: 0.97 }}
          className="flex mt-6 justify-center"
        >
          <Button type="submit">Submit</Button>
        </motion.div>
        </form>
      </Form>
    </div>
  );
}

export default Page;
