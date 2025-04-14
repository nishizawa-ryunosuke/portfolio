import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-5xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/home" className="text-2xl font-bold text-[#b5ff6d]">
          Ryu&apos;s Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;
