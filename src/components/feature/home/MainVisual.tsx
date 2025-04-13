import GradientText from "@/components/ui/GradientText";
import Image from "next/image";
import AnimatedContent from "@/components/reactbits/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "@/components/reactbits/Animations/FadeContent/FadeContent";

export default function MainVisual() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <GradientText className="text-5xl sm:text-8xl font-bold">
            This is Ryu&apos;s
            <br /> Portfolio
          </GradientText>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <p>I&apos;m a Web Developer. Let&apos;s Show Page.</p>
          </AnimatedContent>
        </AnimatedContent>
      </div>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div
          style={{
            clipPath: "polygon(10% 10%, 100% 0%, 90% 90%, 0% 100%)",
            borderRadius: "10%",
          }}
          className="inline-block overflow-hidden "
        >
          <Image
            src="/images/home/kuu.svg"
            alt="My Chiwawa"
            width={600}
            height={800}
            className="transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </FadeContent>
    </div>
  );
}
