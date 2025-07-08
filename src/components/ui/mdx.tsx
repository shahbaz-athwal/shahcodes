"use client";

import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import type { HTMLProps, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "./link";
import { CopyButton } from "./copy-button";

type MdxProperties = {
  readonly code: string;
};

const a = (props: HTMLProps<HTMLAnchorElement>) => {
  if (typeof props.href !== "string") {
    throw new TypeError("href is required");
  }

  return <Link {...props} />;
};

const img = (properties: HTMLProps<HTMLImageElement>) => {
  if (
    typeof properties.src !== "string" ||
    typeof properties.alt !== "string"
  ) {
    throw new TypeError("Image src and alt are required");
  }

  return (
    <Image
      src={properties.src}
      alt={properties.alt}
      width={1240}
      height={698}
      unoptimized={properties.src.startsWith("http")}
      className="border-border/50 my-4 overflow-hidden rounded-lg border"
      quality={100}
    />
  );
};

const Pre = ({ children, ...props }: HTMLProps<HTMLPreElement>) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [codeContent, setCodeContent] = useState<string>("");

  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        // Simple approach: get all text content and remove line numbers
        const fullText = codeElement.textContent || "";
        // Remove line numbers (assuming they're at the start of each line)
        const cleanText = fullText
          .split("\n")
          .map((line) => line.replace(/^\s*\d+\s+/, ""))
          .join("\n")
          .trim();
        setCodeContent(cleanText);
      }
    }
  }, [children]);

  return (
    <div className="code-block-wrapper">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      {codeContent && <CopyButton text={codeContent} className="copy-button" />}
    </div>
  );
};

const Callout = ({ children }: { children: ReactNode }) => (
  <div className="overflow-hidden rounded-lg bg-gradient-to-tr from-white/0 to-white/20 p-px">
    <div className="rounded-[7px] bg-gradient-to-tr from-black to-neutral-950 p-6">
      {children}
    </div>
  </div>
);

const h2 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
  <h2 {...props}>
    <span className="text-border mr-2 select-none">##</span>
    {children}
  </h2>
);

const h3 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
  <h3 {...props}>
    <span className="text-border mr-2 select-none">###</span>
    {children}
  </h3>
);

const h4 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
  <h4 {...props}>
    <span className="text-border mr-2 select-none">####</span>
    {children}
  </h4>
);

const h5 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
  <h5 {...props}>
    <span className="text-border mr-2 select-none">#####</span>
    {children}
  </h5>
);

const h6 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
  <h6 {...props}>
    <span className="text-border mr-2 select-none">######</span>
    {children}
  </h6>
);

export const Mdx = ({ code }: MdxProperties) => (
  <MDXContent
    code={code}
    components={{
      a,
      h2,
      h3,
      h4,
      h5,
      h6,
      img,
      pre: Pre,
      Callout,
    }}
  />
);
