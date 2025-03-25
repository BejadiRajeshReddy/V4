import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Img from "../assets/image.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToForm = () => {
    setIsOpen(false);
    

    setTimeout(() => {
      const formElement = document.querySelector("#apply");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-100/95  py-1" : "bg-gray-100/90 sm:py-2"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <img
            className="h-10 w-36 xs:h-12 xs:w-32 sm:h-10 sm:w-36 md:h-12 md:w-40 lg:h-14 lg:w-48 transition-all duration-300"
            src={Img.logo}
            alt="TechSpira Logo"
          />
        </Link>

  
        <ul className="hidden md:flex gap-x-4 lg:gap-x-8">
          {["About", "Domains", "Contact"].map((item) => (
            <li key={item} className="relative">
              <Link
                className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#646cff] after:transition-all after:duration-300 hover:after:w-full text-[#646cff] text-[0.9rem] lg:text-[1.1rem] font-medium transition-colors duration-300"
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Apply Button (Hidden in Mobile) */}
        <Link to="/#apply" className="hidden md:block">
          <button
            className="bg-[#646cff] rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-white text-sm lg:text-base font-medium cursor-pointer transition-all duration-300 hover:bg-red-500 hover:scale-105"
            onClick={scrollToForm}
          >
            Apply
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#646cff] text-xl p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-100 shadow-md flex flex-col items-center gap-4 py-3 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        } md:hidden`}
      >
        {["About", "Domains", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-[#646cff] text-lg font-medium transition-colors duration-300 hover:text-red-500 w-full text-center py-2"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}

        {/* Mobile Apply Button */}
        <Link to="/#apply" className="w-full px-8 py-2">
          <button
            className="bg-[#646cff] rounded-lg px-4 py-2 text-white text-sm font-medium transition-colors duration-300 hover:bg-red-500 w-full"
          >
            Apply
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
