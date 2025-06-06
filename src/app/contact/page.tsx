import { Header } from "@/components/ui/header";
import { Title } from "@/components/ui/title";
import { MotionChild, MotionParent } from "@/components/Motion";
import WhisperellaBox from "@/app/contact/WhisperellaBox";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { contacts } from "@/lib/contants";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact me for any queries or collaborations.",
  ogText: "Contact me for any queries or collaborations.",
});

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
