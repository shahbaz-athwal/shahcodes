import React from "react";

interface Props {
  children: React.ReactNode;
}

export const TextGradient = ({ children }: Props) => {
  return (
    <div className="animate-textGradient bg-gradient-to-r from-red-500 via-amber-600 to-cyan-500 bg-clip-text text-transparent">
      {children}
    </div>
  );
};
