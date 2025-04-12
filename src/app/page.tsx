"use client";

import SplitText from "@/components/reactbits/TextAnimations/SplitText/SplitText";

import { useState } from "react";

export default function Home() {
  const [isFirstView, setIsFirstView] = useState(true);
  return (
    <div>
      {isFirstView && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 overflow-hidden">
          <div className="flex justify-center items-center h-screen w-full">
            <SplitText
              text="Welcome to my portfolio!"
              className="text-2xl sm:text-4xl font-bold text-center"
              delay={100}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={() => setIsFirstView(false)}
            />
          </div>
        </div>
      )}
      {!isFirstView && <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>}
    </div>
  );
}
