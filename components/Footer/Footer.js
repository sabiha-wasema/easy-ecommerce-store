import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-2xl font-semibold hover:text-blue-300 transition duration-300 font-cursive">
              E-Commerce Admin
            </p>
            <p className="text-sm">
              Your one-stop admin panel for e-commerce management.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4 text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} E-Commerce Admin. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
