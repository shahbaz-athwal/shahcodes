"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/topicHeader";
import { Title } from "@/components/ui/title";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { useTheme } from "@/hooks/useTheme";

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
  {
    method: "X",
    link: "https://x.com/shahcodes",
    label: "@shahcodes",
  },
  {
    method: "Instagram",
    link: "https://www.instagram.com/shahbaz_athwal/",
    label: "@shahbaz_athwal",
  },
];

function Page() {
  const { darkMode } = useTheme();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-1"
    >
      <motion.div variants={itemVariants} className="pt-8">
        <Header variant="primary" as="h1">
          Contact
        </Header>
        <section className="py-8">
          <motion.p variants={itemVariants} className="text-lg mb-4">
            If you&apos;d like to get in touch, you can reach me using the
            following methods. I am open to freelance projects and
            collaborations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
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
          </motion.div>
        </section>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex justify-center items-center">
          <Separator className="my-4 rounded h-[0.150rem] w-5/12" />
          <div className="px-2 pb-1 text-zinc-500 font-semibold tracking-tight">
            or
          </div>
          <Separator className="my-4 rounded h-[0.150rem] w-5/12" />
        </div>
        <p className="text-xl font-semibold my-4">Leave an annonymous message</p>
        {/* <ContactForm /> */}
        <iframe
          src={`https://whisperella.shahcodes.in/embed?mode=${
            darkMode ? "dark" : "light"
          }`}
          className="w-full h-[250px] rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}

export default Page;
