import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "left" | "center" | "right";
}

export const TextGradient = ({ children, variant = "left" }: Props) => {
  const gradientClasses = {
    left: "bg-gradient-to-r from-red-500 via-amber-600 to-purple-500",
    center: "bg-gradient-to-r from-pink-600 via-red-500 to-amber-600",
    right: "bg-gradient-to-r from-amber-600 via-pink-500 to-red-500",
  };

  return (
    <div className={`animate-textGradient ${gradientClasses[variant]} bg-clip-text text-transparent`}>{children}</div>
  );
};
