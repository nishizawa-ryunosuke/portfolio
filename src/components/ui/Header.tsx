import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#b5ff6d]">
          Ryu&apos;s Portfolio
        </Link>

        <div>
          <Link
            href="/home"
            className="text-xl font-bold pr-5 hover:text-red-500"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="text-xl font-bold pr-5 hover:text-red-500"
          >
            Profile
          </Link>
          <Link
            href="/skills"
            className="text-xl font-bold hover:text-red-500 "
          >
            <span>Skills</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
