import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full shadow-md  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-orange-600">
            MyPortfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-semibold text-sm">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About Me</a>
            <a href="#project" className="hover:text-blue-600">Project</a>
            <a href="#Certificate" className="hover:text-blue-600">Certificate</a>
            <a href="#contact" className="hover:text-blue-600">Contact Me</a>
          </div>

          {/* Contact Button (optional) */}
          <div className="hidden md:block">
            <Button colorScheme="orange" size="sm" onClick={() => window.location.href = '#contact'}>
              Let’s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-2 space-y-2 font-semibold text-sm">
          <a href="#home" onClick={toggleMenu} className="block hover:text-blue-600">Home</a>
          <a href="#about" onClick={toggleMenu} className="block hover:text-blue-600">About Me</a>
          <a href="#project" onClick={toggleMenu} className="block hover:text-blue-600">Project</a>
          <a href="#Certificate" onClick={toggleMenu} className="block hover:text-blue-600">Certificate</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-600">Contact Me</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
