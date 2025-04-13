import Heading from "@/components/ui/Heading";
import LogoIcon from "@/components/ui/LogoIcon";
import AnimatedContent from "@/components/reactbits/Animations/AnimatedContent/AnimatedContent";
import DecryptedText from "@/components/reactbits/TextAnimations/DecryptedText/DecryptedText";
import Stepper, {
  Step,
} from "@/components/reactbits/Components/Stepper/Stepper";

export default function Skills() {
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
              text="各領域の得意割合 → フロントエンド50%。バックエンド40%。インフラ10%。"
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
          <Stepper initialStep={1} backButtonText="Back" nextButtonText="Next">
            <Step>
              <p className="font-bold mb-3">通常使用問題なし</p>
              <div>
                <LogoIcon
                  imagePath="/images/home/logo-javascript.svg"
                  text="JavaScript"
                />
                <LogoIcon
                  imagePath="/images/home/logo-typescript.svg"
                  text="TypeScript"
                />
                <LogoIcon
                  imagePath="/images/home/logo-tailwindcss.svg"
                  text="tailwindCSS"
                />
                <LogoIcon
                  imagePath="/images/home/logo-react.svg"
                  text="React"
                />
                <LogoIcon
                  imagePath="/images/home/logo-nextjs.svg"
                  text="Next.js"
                />
                <LogoIcon
                  imagePath="/images/home/logo-golang.svg"
                  text="Golang"
                />
                <LogoIcon
                  imagePath="/images/home/logo-docker.svg"
                  text="Docker"
                />
                <LogoIcon
                  imagePath="/images/home/logo-aws.svg"
                  text="AWS"
                />
                <LogoIcon
                  imagePath="/images/home/logo-mysql.svg"
                  text="MySQL"
                />
                <LogoIcon
                  imagePath="/images/home/logo-git.svg"
                  text="Git"
                />
                <LogoIcon
                  imagePath="/images/home/logo-figma.svg"
                  text="Figma"
                />
              </div>
            </Step>
            <Step>
              <p className="font-bold mb-3">触ったことある</p>
              <div>
                <LogoIcon
                  imagePath="/images/home/logo-postgre.svg"
                  text="PostgreSQL"
                />
                <LogoIcon
                  imagePath="/images/home/logo-python.svg"
                  text="Python"
                />
                <LogoIcon
                  imagePath="/images/home/logo-php.svg"
                  text="PHP"
                />
                <LogoIcon
                  imagePath="/images/home/logo-linux.svg"
                  text="Linux"
                />
                <LogoIcon
                  imagePath="/images/home/logo-googlecloud.svg"
                  text="Google Cloud"
                />
                <LogoIcon
                  imagePath="/images/home/logo-firebase.svg"
                  text="Firebase"
                />
                <LogoIcon
                  imagePath="/images/home/logo-wordpress.svg"
                  text="Wordpress"
                />
              </div>
            </Step>
            <Step>
              <p className="font-bold mb-3">得意分野</p>
              <ul className="text-sm">
                <li>・Webサイト/アプリケーションの開発</li>
                <li>・React/Next.jsを使用したフロントエンド開発</li>
                <li>・Go言語を使用したバックエンド開発</li>
                <li>・ふわっとした要件から仕様を固めて開発を進めること</li>
                <li>・コミュニケーションをとりながら円滑に開発を進めること</li>
              </ul>
            </Step>
          </Stepper>
        </AnimatedContent>
      </div>
    </div>
  );
}
