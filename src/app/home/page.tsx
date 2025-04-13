import PageTransition from "@/components/layout/PageTransition";
import MainVisual from "@/components/feature/home/MainVisual";
import HomeProfile from "@/components/feature/home/HomeProfile";

export default function Home() {
  return (
    <PageTransition>
      <MainVisual />
      <HomeProfile />
    </PageTransition>
  );
}
