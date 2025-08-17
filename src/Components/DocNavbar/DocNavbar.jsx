import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/AuthContext";
import Heading from "../Heading/Heading";
import { Menu, X } from "lucide-react";
import medicarelogo from "./../../assets/Doctors/medicarelogo.png";

const DocNavbar = () => {
  const { user } = useContext(Authcontext);
  const [Isopen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md min-h-screen mt-10 w-60 p-2  bg-blue-600">
        <div className="border px-3 py-2 flex justify-between items-center">
          <img src={medicarelogo} className="w-10 rounded-md" />
          <Menu size={30} className="cursor-pointer" />
        </div>
        <ul className="px-3 py-5 flex flex-col gap-5 text-lg font-serif cursor-pointer ">
          <li className="hover:bg-blue-200  rounded-md duration-300">
            <Link to="/doctordashboard">🏥 Dashboard</Link>
          </li>
          <li className="hover:bg-blue-200  rounded-md duration-300">
            <Link to="/doctorprofile">👤 Profile</Link>
          </li>
          <li className="hover:bg-blue-200  rounded-md duration-300">
            <Link to="/adddiagnosis">➕ Add Diagnosis</Link>
          </li>
          <li className="hover:bg-blue-200  rounded-md duration-300">
            <Link to="/mypatients">📋 View My Patients</Link>
          </li>
          <li className="hover:bg-blue-200  rounded-md duration-300">
            <Link to="/searchpatieants">🔍 Search Patients</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DocNavbar;
