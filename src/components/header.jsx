import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  top-9 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-evenly px-6 py-4">
        {/* Logo with stacked text */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img className="h-12 md:h-14" src={logo} alt="logo" />
          <span className="text-gray-400 text-lg md:text-xl">|</span>
          <div className="flex flex-col">
            <span className="text-gray-800 font-bold text-lg md:text-xl leading-none">
              Physio
            </span>
            <span className="text-teal-600 font-extrabold text-lg md:text-xl -mt-1 leading-none">
              Therapy
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/team", label: "Team" },
            { to: "/contact", label: "Contact" },
            { to: "/blog", label: "Blog" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-800 hover:text-teal-600 font-semibold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col space-y-4 p-5">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-800 hover:text-teal-600 font-semibold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact & Button (Mobile) */}
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
              <span className="text-gray-700 font-medium">📞 9818407348</span>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full shadow-md font-medium transition duration-300">
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
