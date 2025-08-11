import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "./../../Context/AuthContext";
import Heading from "../Heading/Heading";

const PatientNavbar = () => {
  const { user } = useContext(Authcontext);
  return (
    <>
      <div className="bg-gray-50  mt-15 ">
        <Heading heading={"🛌🏼 Patient-Dashboard"} />
      </div>
      <div className=" flex flex-col bg-blue-400">
        <div className="hidden md:flex gap-8 text-lg">
          <Link className="hover:text-gray-200" to="/patientdashboard">
            Profile
          </Link>
          <Link className="hover:text-gray-200" to="/viewmyrecord">
            Record
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h1>Current User</h1>
          {user.username ? (
            <p>
              {user.username} ({user.role})
            </p>
          ) : (
            <p>No user logged in</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PatientNavbar;
