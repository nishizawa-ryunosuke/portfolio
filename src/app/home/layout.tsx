import Header from "../../components/ui/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen ">
      <Header />
      <main>{children}</main>
    </div>
  );
}
