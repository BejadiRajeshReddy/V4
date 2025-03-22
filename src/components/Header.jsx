import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import Img from "../assets/image.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToForm = () => {
    document.querySelector("#apply").scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100/95 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:py-1">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            className="h-10 w-36 md:h-14 md:w-48"
            src={Img.logo}
            alt="TechSpira Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8">
          {["About", "Domains", "Contact"].map((item) => (
            <li key={item} className="relative">
              <Link
                className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#646cff] after:transition-all after:duration-300 hover:after:w-full text-[#646cff] text-[1rem] md:text-[1.1rem] font-medium transition-colors duration-300"
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Apply Button (Hidden in Mobile) */}
        <button
          className="hidden md:block bg-[#646cff] rounded-lg px-4 py-2 text-white text-sm md:text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-red-500"
          onClick={scrollToForm}
        >
          Apply
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#646cff] text-xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[48px] left-0 w-full bg-gray-100 shadow-md flex flex-col items-center gap-4 py-3 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        {["About", "Domains", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-[#646cff] text-lg font-medium transition-colors duration-300 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}

        {/* Mobile Apply Button */}
        <button
          className="bg-[#646cff] rounded-lg px-4 py-2 text-white text-sm font-medium transition-colors duration-300 hover:bg-red-500"
          onClick={scrollToForm}
        >
          Apply
        </button>
      </div>
    </header>
  );
}

export default Header;
