import Heading from "@/components/ui/Heading";
import AnimatedContent from "@/components/reactbits/Animations/AnimatedContent/AnimatedContent";
import DecryptedText from "@/components/reactbits/TextAnimations/DecryptedText/DecryptedText";

export default function Skills() {
  return (
    <div className="text-center">
      <div className="mb-24">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
        >
          <Heading level="h2">Skills</Heading>
        </AnimatedContent>
      </div>
      <div className="mb-24">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
        >
          <div className="flex justify-center items-center">
              <DecryptedText
                text="1997年 茨城生まれ。webエンジニア6年目です。"
                speed={60}
                maxIterations={10}
                animateOn="view"
                sequential={true}
              />
            </div>
        </AnimatedContent>
      </div>
    </div>
  );
}
