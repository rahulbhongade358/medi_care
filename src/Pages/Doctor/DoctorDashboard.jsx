import React from "react";

import DocNavbar from "../../Components/DocNavbar/DocNavbar";

const DoctorDashboard = () => {
  return (
    <>
      <div className="flex mt-5">
        <DocNavbar />
        <div className="flex-1 p-6 mt-5">
          <h1 className="text-xl font-bold ">Welcome Doctor</h1>
          <p>This is the main dashboard content for doctors.</p>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
