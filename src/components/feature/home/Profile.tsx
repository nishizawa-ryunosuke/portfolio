"use client";

import Heading from "@/components/ui/Heading";
import AnimatedContent from "@/components/reactbits/Animations/AnimatedContent/AnimatedContent";
import DecryptedText from "@/components/reactbits/TextAnimations/DecryptedText/DecryptedText";
import Stepper, {
  Step,
} from "@/components/reactbits/Components/Stepper/Stepper";

export default function Profile() {
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
          <Heading level="h2">Profile</Heading>
        </AnimatedContent>
      </div>
      <div className="mb-20">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
        >
          <DecryptedText
            text="1997年 茨城生まれ。"
            speed={40}
            maxIterations={10}
            animateOn="view"
            sequential={true}
          />
          <br />
          <DecryptedText
            text="東京在住 Webエンジニア6年目です。"
            speed={40}
            maxIterations={10}
            animateOn="view"
            sequential={true}
          />
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
          <Stepper initialStep={1} backButtonText="Back" nextButtonText="Next">
            <Step>
              <p>2020年3月</p>
              <p>某理系大学 理学部 卒業</p>
            </Step>
            <Step>
              <p>2020年4月～2022年1月</p>
              <p>web制作会社のフロントエンドエンジニア</p>
              <p>大手企業のコーポレートサイトの作成</p>
            </Step>
            <Step>
              <p>2022年2月～2024年12月</p>
              <p>転職支援サービスのフルスタックエンジニア</p>
              <p>転職支援サービスのサイト・マイページ開発</p>
            </Step>
            <Step>
              <p>2025年1月～現在</p>
              <p>フリーランスエンジニア</p>
              <p>証券会社の口座開設システムの構築。他</p>
            </Step>
          </Stepper>
        </AnimatedContent>
      </div>
    </div>
  );
}
