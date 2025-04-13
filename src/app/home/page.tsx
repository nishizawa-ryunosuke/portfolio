"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // オーバーレイのアニメーション
    const tl = gsap.timeline({
      onComplete: () => setIsContentVisible(true),
    });

    tl.fromTo(
      overlayRef.current,
      { 
        y: "100%", 
        opacity: 1 
      },
      { 
        y: "-100%", 
        opacity: 1, 
        duration: 1, 
        ease: "power3.inOut" 
      }
    );

  }, []);

  return (
    <div className="relative w-full h-full">
      <div 
        ref={overlayRef} 
        className="fixed inset-0 bg-white z-20"
      ></div>
      {isContentVisible && (
        <div className="z-30">
          <h1>Home</h1>
        </div>
      )}
    </div>
  );
}
