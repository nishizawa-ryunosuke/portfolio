"use client";

import SplitText from "@/components/reactbits/TextAnimations/SplitText/SplitText";
import { useState, useRef } from "react";
import Crosshair from "@/components/reactbits/Animations/Crosshair/Crosshair";
import { useRouter } from "next/navigation";

export default function FirstView() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-full fixed inset-0 overflow-hidden">
        <span
          onClick={() => {
            router.push("/home");
          }}
          className="hover:text-red-500 transition-colors duration-300 cursor-pointer text-2xl sm:text-4xl font-bold text-center"
          onMouseEnter={(e) => {
            if (isAnimated) {
              e.currentTarget.textContent = "Shoot!";
              setIsHovered(true);
            }
          }}
          onMouseLeave={(e) => {
            if (isAnimated) {
              e.currentTarget.textContent = "Welcome to my portfolio!";
              setIsHovered(false);
            }
          }}
        >
          <SplitText
            text="Welcome to my portfolio!"
            delay={100}
            animationFrom={{
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={() => setIsAnimated(true)}
          />
        </span>
      </div>
      <Crosshair
        containerRef={containerRef}
        color={isHovered ? "#b5ff6d" : "#ffffff"}
      />
    </div>
  );
}
