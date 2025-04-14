"use client";

import SplitText from "@/components/reactbits/TextAnimations/SplitText/SplitText";
import { useState, useRef } from "react";
import Crosshair from "@/components/reactbits/Animations/Crosshair/Crosshair";
import { useRouter } from "next/navigation";

export default function FirstView() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [welcomeText, setWelcomeText] = useState("Welcome to my portfolio!");
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-full fixed inset-0 overflow-hidden">
        <span
          onClick={(e) => {
            const circle = document.createElement("div");
            circle.style.position = "fixed";
            circle.style.top = "50%";
            circle.style.left = "50%";
            circle.style.transform = "translate(-50%, -50%)";
            circle.style.width = "0";
            circle.style.height = "0";
            circle.style.borderRadius = "50%";
            circle.style.backgroundColor = "black";
            circle.style.border = "3px solid red";
            circle.style.zIndex = "10";
            document.body.appendChild(circle);
            const clickedElement = e.currentTarget;

            const animation = circle.animate(
              [
                { width: "0", height: "0" },
                { width: "300vw", height: "300vw" },
              ],
              {
                duration: 800,
                easing: "ease-out",
                fill: "forwards",
              }
            );

            animation.onfinish = () => {
              // クリックされたらテキストを「Complete!」に変更
              clickedElement.textContent = "Complete!";
              document.body.removeChild(circle);
              router.push("/home");
            };
          }}
          className="hover:text-red-500 transition-colors duration-300 cursor-pointer text-2xl sm:text-4xl font-bold text-center"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <SplitText
            text={welcomeText}
            delay={100}
            animationFrom={{
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={() => {
              setTimeout(() => {
                setWelcomeText("Shot!");
              }, 2000);
            }}
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
