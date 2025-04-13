import React from "react";

interface HeadingProps {
  level: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  level,
  children,
  className = "",
}: HeadingProps) {
  const baseStyles = "font-bold";

  const styles = {
    h1: `text-5xl sm:text-7xl ${baseStyles}`,
    h2: `text-4xl sm:text-6xl ${baseStyles}`,
    h3: `text-3xl sm:text-4xl ${baseStyles}`,
  };

  const combinedClassName = `${styles[level]} ${className}`.trim();

  switch (level) {
    case "h1":
      return <h1 className={combinedClassName}>{children}</h1>;
    case "h2":
      return (
        <h2 className={combinedClassName}>
          <span className=" border-b-4 border-[#b5ff6d]">{children}</span>
        </h2>
      );
    case "h3":
      return <h3 className={combinedClassName}>{children}</h3>;
    default:
      return <h2 className={combinedClassName}>{children}</h2>;
  }
}
