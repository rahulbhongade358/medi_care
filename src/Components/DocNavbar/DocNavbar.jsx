import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/AuthContext";
import Heading from "../Heading/Heading";
import {
  Menu,
  LayoutDashboard,
  User,
  ClipboardPlus,
  FileUser,
  UserSearch,
  CircleUserRound,
} from "lucide-react";
import medicarelogo from "./../../assets/Doctors/medicarelogo.png";

const Side_Items = [
  {
    Icons: <LayoutDashboard size={20} />,
    Labels: <Link to="/doctordashboard"> Dashboard</Link>,
  },
  {
    Icons: <User size={20} />,
    Labels: <Link to="/doctorprofile"> Profile</Link>,
  },
  {
    Icons: <ClipboardPlus size={20} />,
    Labels: <Link to="/adddiagnosis"> Add Diagnosis</Link>,
  },
  {
    Icons: <FileUser size={20} />,
    Labels: <Link to="/mypatients"> View My Patients</Link>,
  },
  {
    Icons: <UserSearch size={20} />,
    Labels: <Link to="/searchpatieants"> Search Patients</Link>,
  },
];
const DocNavbar = () => {
  const { user } = useContext(Authcontext);
  const [Isopen, setIsOpen] = useState(true);

  return (
    <>
      <nav
        className={`shadow-md mt-10 min-h-screen p-2 flex flex-col duration-500 bg-blue-600 text-white ${
          Isopen ? "w-60" : "w-16"
        }`}
      >
        <div className=" px-3 py-2 h-20 flex justify-between items-center">
          <img
            src={medicarelogo}
            className={`${Isopen ? "w-10" : "w-0"} rounded-md`}
          />
          <div>
            <Menu
              size={30}
              className={` duration-500 cursor-pointer ${
                !open && " rotate-180"
              }`}
              onClick={() => setIsOpen(!Isopen)}
            />
          </div>
        </div>

        <ul className="flex-1">
          {Side_Items.map((item, index) => {
            return (
              <li
                key={index}
                className="px-3 py-2 my-1 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-1 items-center relative group"
              >
                <div>{item.Icons} </div>
                <p
                  className={`${
                    !Isopen && "w-0 translate-x-24"
                  } duration-500 overflow-hidden`}
                >
                  {item.Labels}
                </p>
                <p
                  className={`${
                    Isopen && "hidden"
                  } absolute left-30 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}
                >
                  {item.Labels}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 px-3 py-2">
          <CircleUserRound size={35} />
          <div
            className={`leading-5 ${
              !Isopen && "w-0 translate-x-24"
            } duration-500 overflow-hidden`}
          >
            {user.username ? (
              <p className="text-lg">
                {user.username} ({user.role})
              </p>
            ) : (
              <p>No user logged in</p>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default DocNavbar;
