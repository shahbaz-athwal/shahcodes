import { Header } from "@/components/ui/header";
import { Title } from "@/components/ui/title";
import { MotionChild, MotionParent } from "@/components/Motion";
import WhisperellaBox from "@/app/contact/WhisperellaBox";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me for any queries or collaborations.",
  alternates: {
    canonical: "/contact",
  },
};

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
  return (
    <MotionParent>
      <MotionChild>
        <Header variant="primary" as="h1">
          Contact
        </Header>
        <section className="py-8">
          <p className="mb-4 text-lg">
            If you&apos;d like to get in touch, you can reach me using the following methods. I am open to freelance
            projects and collaborations.
          </p>
          <MotionChild>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {contacts.map((contactMethod) => {
                return (
                  <div className="flex flex-col" key={contactMethod.method}>
                    <Title as="h2" variant="tertiary">
                      {contactMethod.method}
                    </Title>
                    <a href={contactMethod.link} target="_blank" className="text-zinc-600 dark:text-zinc-500">
                      {contactMethod.label}
                    </a>
                  </div>
                );
              })}
            </div>
          </MotionChild>
        </section>
      </MotionChild>

      <MotionChild>
        <WhisperellaBox />
      </MotionChild>
    </MotionParent>
  );
}

export default Page;
