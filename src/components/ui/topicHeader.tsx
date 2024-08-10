import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "time" | "p";
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

const classNames = {
  primary: "font-extrabold text-4xl tracking-tight",
  secondary: "font-semibold text-2xl tracking-tight",
  tertiary: "font-semibold text-xl tracking-tight",
};

export function Header({
  children,
  as = "span",
  variant = "primary",
  className,
}: Props) {
  const Component = as;
  return (
    <Component className={cn(classNames[variant], className)}>
      {children}
    </Component>
  );
}

export function PageHeader({ title }: { title: string }) {
  return (
    <header>
      <div className="font-semibold tracking-tight text-4xl mb-6 text-zinc-900 dark:text-zinc-200 pb-6 border-b border-zinc-500">
        {title}
      </div>
    </header>
  );
}
