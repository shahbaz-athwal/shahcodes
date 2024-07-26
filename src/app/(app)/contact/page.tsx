"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/topicHeader";
import { Title } from "@/components/ui/title";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import ContactForm from "./ContactFrom";

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
   
  return (
    <Suspense fallback={<div></div>}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="p-1"
      >
        <div className="pt-8">
          <Header title="Contact" />
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
                    <Link
                      href={contactMethod.link}
                      className="text-zinc-600 dark:text-zinc-500"
                    >
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
        <ContactForm />
      </motion.div>
    </Suspense>
  );
}

export default Page;
