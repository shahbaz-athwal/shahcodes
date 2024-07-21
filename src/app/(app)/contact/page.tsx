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
import { PageHeader } from "@/components/ui/page-header";
import { Title } from "@/components/ui/title";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const contacts: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: "Email",
    link: "mailto:shahbazathwal2107@gmail.com",
    label: "shahbazathwal2107@gmail.com",
  },
  {
    method: "GitHub",
    link: "https://github.com/shahbaz-athwal",
    label: "git/shahbaz-athwal",
  },
  {
    method: "LinkedIn",
    link: "https://www.linkedin.com/in/shahbaz-athwal/",
    label: "in/shahbaz-athwal",
  },
];

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
    <div className="p-2">
      <div>
        <PageHeader title="Contact" />
        <section className="py-8">
          <p className="text-lg mb-4">
            If you&apos;d like to get in touch, you can reach me using the
            following methods. I am open to freelance projects and
            collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contactMethod) => {
              return (
                <div className="flex flex-col" key={contactMethod.method}>
                  <Title as="h2" variant="tertiary">
                    {contactMethod.method}
                  </Title>
                  <Link href={contactMethod.link} className="text-zinc-600 dark:text-zinc-500">
                    {contactMethod.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="flex justify-center items-center">
        <Separator className="my-4 rounded h-[0.150rem] w-5/12" />
        <div className="px-2 pb-1 text-zinc-500 font-semibold tracking-tight">
          or
        </div>
        <Separator className="my-4 rounded h-[0.150rem] w-5/12" />
      </div>

      <p className="text-xl font-semibold my-4">Just leave a message</p>

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
            <Button type="submit">Send</Button>
          </motion.div>
        </form>
      </Form>
    </div>
  );
}

export default Page;
