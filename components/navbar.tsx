import Link from 'next/link';
import { Button } from './ui/button';

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
            <Link href="/contact" className="px-3 py-2">
              <Button className="bg-indigo-500 border-indigo-500 text-primary-foreground hover:text-primary-foreground hover:bg-indigo-800 hover:border-indigo-800">Let&apos;s talk</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;