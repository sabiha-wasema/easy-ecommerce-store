import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-white text-2xl font-semibold hover:text-blue-300 transition duration-300 font-cursive">
              E-Commerce Admin
            </span>
          </Link>
          <div className="space-x-6">
            <Link href="/">
              <span className="text-white hover:text-blue-300 transition duration-300">
                Home
              </span>
            </Link>
            <Link href="#products">
              <span className="text-white hover:text-blue-300 transition duration-300">
                Products
              </span>
            </Link>
            <Link href="/admin/products">
              <span className="text-white hover:text-blue-300 transition duration-300">
                Admin
              </span>
            </Link>
            <Link href="/login">
              <span className="text-white hover:text-blue-300 transition duration-300">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
