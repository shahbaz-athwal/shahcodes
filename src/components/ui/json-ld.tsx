import { contacts } from "@/lib/contants";
import type { Person, WithContext } from "schema-dts";

const baseUrl = "https://shahcodes.in";

const person: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shahbaz Singh",
  description: "Full Stack Developer",
  gender: "male",
  nationality: "Indian",
  url: baseUrl,
  image: new URL("/profile.png", baseUrl).toString(),
  sameAs: Object.values(contacts).map(({ link }) => link),
  alumniOf: "Acadia University",
};

export const JsonLd = () => (
  <script type="application/ld+json">{JSON.stringify(person)}</script>
);
