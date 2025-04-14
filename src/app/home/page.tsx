import PageTransition from "@/components/layout/PageTransition";
import MainVisual from "@/components/feature/home/MainVisual";
import Profile from "@/components/feature/home/Profile";
import Skills from "@/components/feature/home/Skills";
import Blog from "@/components/feature/home/Blog";


export default function Home() {
  return (
    <PageTransition>
      <div className="mb-40">
        <MainVisual />
      </div>
      <div className="mb-40">
        <Profile />
      </div>
      <div className="mb-40">
        <Skills />
      </div>
      <div className="mb-40">
        <Blog />
      </div>
    </PageTransition>
  );
}
