import { contacts } from "@/lib/contants";
import Link from "next/link";

export function Socials() {
  return (
    <div className="mt-8 flex gap-4 text-stone-700 dark:text-stone-300">
      {contacts.map((contact) => (
        <Link key={contact.method} href={contact.link}>
          <contact.icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
}
