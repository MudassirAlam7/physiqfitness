import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // icons
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-12 md:h-14 cursor-pointer" src={logo} alt="logo" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to ="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to ="/services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Team
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>

        {/* Contact & Button (Desktop only) */}
        <div className="hidden lg:flex items-center space-x-4">
          <span className="text-gray-600 font-semibold">📞 (9818)-407-348</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md transition duration-300">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col space-y-4 p-5">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium">
              Team
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>

            {/* Contact & Button for mobile */}
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
              <span className="text-gray-600 font-semibold">📞 9818407348</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md transition duration-300">
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
