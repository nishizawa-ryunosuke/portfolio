import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span
      className={`animate-gradient bg-gradient-to-r from-[#b5ff6d] via-[#fd1d1d] to-[#fcb045] bg-200 bg-clip-text text-transparent leading-none ${className}`}
      style={{ backgroundSize: "200% 100%" }}
    >
      {children}
    </span>
  );
};

export default GradientText;
