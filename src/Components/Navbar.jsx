import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo1 from "./../assets/Doctors/logo1.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0288D1] text-white font-serif hover:bg-[#53c8fe]">
      <div className="flex justify-between items-center px-4 md:px-10 h-[60px]">
        {" "}
        <img
          src={Logo1}
          alt="Logo"
          className="h-14 w-24 md:h-20 md:w-40 object-cover"
        />
        <div className="hidden md:flex gap-8 text-lg">
          <Link className="hover:text-gray-200" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-200" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-200" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-gray-200" to="/login">
            Login
          </Link>
          <Link className="hover:text-gray-200" to="/signup">
            Singup
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#29B6F6] text-lg">
          <Link onClick={() => setIsOpen(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/about">
            About
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">
            Contact
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/login">
            Login
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/signup">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
