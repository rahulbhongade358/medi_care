import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/AuthContext";
import Heading from "../Heading/Heading";

const DocNavbar = () => {
  const { user } = useContext(Authcontext);

  return (
    <>
      <div className="w-55 min-h-screen bg-blue-500 text-white flex flex-col p-4  ">
        <Heading heading={"🏥Doctor-Dashboard"} />
        <nav className=" flex flex-col gap-2 text-lg ">
          <Link className="hover:bg-blue-600 p-2 rounded" to="/doctordashboard">
            🏥 Dashboard
          </Link>
          <Link className="hover:bg-blue-600 p-2 rounded" to="/doctorprofile">
            👤 Profile
          </Link>
          <Link className="hover:bg-blue-600 p-2 rounded" to="/adddiagnosis">
            ➕ Add Diagnosis
          </Link>
          <Link className="hover:bg-blue-600 p-2 rounded" to="/mypatients">
            📋 View My Patients
          </Link>
          <Link className="hover:bg-blue-600 p-2 rounded" to="/searchpatieants">
            🔍 Search Patients
          </Link>
        </nav>

        <div className="mt-5 bg-blue-600 p-3 rounded text-sm">
          <h1 className="font-semibold">Current User</h1>
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

export default DocNavbar;
