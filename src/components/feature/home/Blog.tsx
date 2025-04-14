import Heading from "@/components/ui/Heading";
import AnimatedContent from "@/components/reactbits/Animations/AnimatedContent/AnimatedContent";
import DecryptedText from "@/components/reactbits/TextAnimations/DecryptedText/DecryptedText";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="text-center mb-40">
      <div className="mb-24">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
        >
          <Heading level="h2">Blog</Heading>
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
              text="Qiitaで記事を書いています。"
              speed={40}
              maxIterations={10}
              animateOn="view"
              sequential={true}
            />
          </div>
        </AnimatedContent>
      </div>
      <div>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
        >
          <Link
            href="https://qiita.com/Ryukuu0919"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-2 bg-[#55C500] hover:bg-[#4CAF00] text-white font-medium rounded-md transition-colors duration-200"
          >
            <Image
              src="/images/home/qiita-icon.png"
              alt="Qiita"
              width={20}
              height={20}
              className="mr-2"
            />
            Ryuの記事を見る
          </Link>
        </AnimatedContent>
      </div>
    </div>
  );
}
