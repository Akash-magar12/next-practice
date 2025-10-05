import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className=" shadow-md px-6 py-4 flex items-center justify-between">
      {/* Links */}
      <ul className="flex space-x-6 font-poppins text-white">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/image" className="hover:text-blue-500">
            Image
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
