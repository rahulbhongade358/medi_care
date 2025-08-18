import React, { useContext } from "react";
import DocNavbar from "../../Components/DocNavbar/DocNavbar";

import { Authcontext } from "../../Context/AuthContext";

const MyPatients = () => {
  const { newPatient } = useContext(Authcontext);
  console.log("NewPatient", newPatient);
  return (
    <>
      <div className="flex mt-5">
        <DocNavbar />
        <div className="flex-1 p-6 mt-5">
          <h1 className="text-xl font-bold ">📋 View My Patients</h1>

          <div>
            {newPatient.map((item, index) => (
              <div key={index} className="border p-2 my-2 rounded">
                <p>
                  Name : {item.firstName} {item.lastName}
                </p>
                <p>Age : {item.age}</p>

                <h4>Prescription :</h4>
                {item.Prescription?.map((med, i) => (
                  <div key={i}>
                    <p>
                      🩺 {med.medicineName} - {med.dosage} dosage x{" "}
                      {med.duration} days
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPatients;
