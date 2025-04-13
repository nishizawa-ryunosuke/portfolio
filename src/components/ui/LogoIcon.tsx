import Image from "next/image";
import { FC } from "react";

interface LogoIconProps {
  imagePath: string;
  text: string;
  className?: string;
}

const LogoIcon: FC<LogoIconProps> = ({ imagePath, text, className = "" }) => {
  return (
    <span
      className={`${className} bg-[#191920] px-2 py-1 mr-2 mt-2 inline-flex items-center justify-center rounded-md`}
    >
      <Image
        src={imagePath}
        alt={text}
        width={16}
        height={16}
        style={{ display: "inline-block" }}
      />
      <span className="ml-2 text-sm">{text}</span>
    </span>
  );
};

export default LogoIcon;
