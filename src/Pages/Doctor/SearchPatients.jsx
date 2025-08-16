import React from "react";
import DocNavbar from "../../Components/DocNavbar/DocNavbar";

const SearchPatients = () => {
  return (
    <>
      <div className="flex mt-5">
        <DocNavbar />
        <div className="flex-1 p-6 mt-5">
          <h1 className="text-xl font-bold ">🔍 Search Patients</h1>
        </div>
      </div>
    </>
  );
};

export default SearchPatients;
