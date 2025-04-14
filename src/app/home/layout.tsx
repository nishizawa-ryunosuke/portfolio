import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
