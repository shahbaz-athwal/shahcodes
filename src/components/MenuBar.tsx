"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'

function MenuBar() {



  const path = usePathname();

  return (
    <div className="flex space-x-4 w-auto items-start mx-7">
      <Link href="/">
        <Button  variant={path === '/' ? 'default' : 'outline'}>About</Button>
      </Link>
      <Link href="/techstack">
        <Button variant={path === '/techstack' ? 'default' : 'outline'}>Tech Stack</Button>
      </Link>
      <Link href="/mylife">
        <Button variant={path === '/mylife' ? 'default' : 'outline'}>My Life</Button>
      </Link>
      <Link href="/contact">
        <Button variant={path === '/contact' ? 'default' : 'outline'}>Contact</Button>
      </Link>
    </div>
  );
}

export default MenuBar;
