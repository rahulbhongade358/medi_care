import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/AuthContext";
import Heading from "../Heading/Heading";

const DocNavbar = () => {
  const { user } = useContext(Authcontext);

  return (
    <>
      <div className="bg-gray-50 mt-15">
        <Heading heading={"🏥Doctor-Dashboard"} />
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
      <div>
        <div className="hidden md:flex gap-8 text-lg">
          <Link className="hover:text-gray-200" to="/doctorprofile">
            Profile
          </Link>
          <Link className="hover:text-gray-200" to="/adddiagnosis">
            Add-Diagnosis
          </Link>
          <Link className="hover:text-gray-200" to="/mypatients">
            My-Patients
          </Link>
          <Link className="hover:text-gray-200" to="/searchpatieants">
            Search
          </Link>
        </div>
      </div>
    </>
  );
};

export default DocNavbar;
