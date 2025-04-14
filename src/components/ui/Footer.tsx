const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm py-8 mt-20">
      <div className="w-full max-w-5xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 mt-2">
              Thank you for visiting my portfolio.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ryu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
