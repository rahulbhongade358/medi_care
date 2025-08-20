import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DocNavbar from "../../Components/DocNavbar/DocNavbar";

import { Authcontext } from "../../Context/AuthContext";

const MyPatients = () => {
  const { newPatient } = useContext(Authcontext);
  const navigate = useNavigate();
  console.log("NewPatient", newPatient);
  return (
    <>
      <div className="flex mt-5">
        <DocNavbar />
        <div className="flex-1 p-6 mt-5">
          <h1 className="text-xl font-bold ">📋 View My Patients</h1>

          <div>
            {newPatient.map((paitent, index) => (
              <div
                key={index}
                className="border p-2 my-2 rounded"
                onClick={() => navigate(`/patientallcard/${paitent.PID}`)}
              >
                <p>ID:{paitent.PID}</p>
                <p>
                  Name : {paitent.firstName} {paitent.lastName}
                </p>
                <p>Age : {paitent.age}</p>

                <h4>Prescription :</h4>
                {paitent.Prescription?.map((med, i) => (
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
