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

export function Header({ children, as = "span", variant = "primary", className }: Props) {
  const Component = as;
  return <Component className={cn(classNames[variant], className)}>{children}</Component>;
}
