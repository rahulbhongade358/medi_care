import React from "react";
import DocNavbar from "../../Components/DocNavbar/DocNavbar";

const DoctorProfile = () => {
  return (
    <>
      <div className="flex mt-5">
        <DocNavbar />
        <div className="flex-1 p-6 mt-5">
          <h1 className="text-xl font-bold ">👤 Profile</h1>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
