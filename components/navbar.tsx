import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-6xl mx-auto py-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo or left element */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl text-white">
              Alexandre <span className="text-indigo-500">Teyssier</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-secondary hover:text-white px-3 py-2 rounded-md text-md font-medium">
              Home
            </Link>
            <Link href="/about" className="text-secondary hover:text-white px-3 py-2 rounded-md text-md font-medium">
              About me
            </Link>
            <Link href="/projects" className="text-secondary hover:text-white px-3 py-2 rounded-md text-md font-medium">
              Works
            </Link>
            <Link href="/contact" className="bg-secondary text-primary hover:bg-secondary/80 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;