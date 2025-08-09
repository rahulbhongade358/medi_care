import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "./../assets/Doctors/logo1.png";
const Navbar = () => {
  return (
    <nav>
      <div
        className="flex justify-evenly items-center gap-10 text-[20px]
     h-[50px] bg-[#0288D1] text-white hover:bg-[#29B6F6] font-serif "
      >
        <img src={Logo1} alt="" className=" h-40 w-60" />

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Singup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
