import React, { useContext } from "react";
import { Authcontext } from "../../Context/AuthContext";
import { useParams } from "react-router-dom";
import DocNavbar from "../DocNavbar/DocNavbar";

const Patientallcard = () => {
  const { newPatient } = useContext(Authcontext);
  const { PID } = useParams();
  const patient = newPatient.find((p) => p.PID === PID);
  if (!patient) return <p>No patient found</p>;
  console.log("patient", newPatient, PID);
  return (
    <div className="flex mt-5">
      <DocNavbar />
      <div className="flex-1 p-4 sm:p-6 mt-5 sm:flex-1">
        <h1 className="text-2xl font-bold mb-4">📋 Detailed Info</h1>

        <div className="border rounded-2xl shadow-md p-4 sm:p-6 bg-white hover:shadow-lg transition">
          <h2 className="text-lg text-center  font-semibold mb-2">
            Patient Information
          </h2>
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-3">
            <p>
              <span className="font-semibold">Name:</span> {patient.firstName}{" "}
              {patient.middleName} {patient.lastName}
            </p>
            <p>
              <span className="font-semibold">ID:</span> {patient.PID}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {patient.age}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {patient.gender}
            </p>
            <p>
              <span className="font-semibold">Contact:</span> {patient.contact}
            </p>
            <p>
              <span className="font-semibold">E-mail:</span> {patient.email}
            </p>
            <p>
              <span className="font-semibold">Date of Visit:</span>{" "}
              {patient.date}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {patient.addressbox}
            </p>
          </div>

          <h2 className="text-lg text-center font-semibold mt-6 mb-2">
            Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p>
              <span className="font-semibold">Symptom:</span>{" "}
              {patient.symptombox}
            </p>
            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {patient.durationofsymptoms}
            </p>
            <p>
              <span className="font-semibold">Past Medical History:</span>{" "}
              {patient.medicalhistory}
            </p>
            <p>
              <span className="font-semibold">Allergies:</span>{" "}
              {patient.Allergies}
            </p>
            <p>
              <span className="font-semibold">Family History:</span>{" "}
              {patient.familyhistory}
            </p>
            <p>
              <span className="font-semibold">Current Medications:</span>{" "}
              {patient.currentmedications}
            </p>
          </div>

          <h2 className="text-lg text-center font-semibold mt-6 mb-2">
            Diagnosis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p>
              <span className="font-semibold">Temperature:</span>{" "}
              {patient.temperature}
            </p>
            <p>
              <span className="font-semibold">Pulse Rate:</span>{" "}
              {patient.pulserate}
            </p>
            <p>
              <span className="font-semibold">Blood Pressure:</span>{" "}
              {patient.bloodpressure}
            </p>
            <p>
              <span className="font-semibold">Oxygen Saturation:</span>{" "}
              {patient.oxygensaturation}
            </p>
            <p>
              <span className="font-semibold">Weight:</span> {patient.weight}
            </p>
            <p>
              <span className="font-semibold">Disease Name:</span>{" "}
              {patient.diseasename}
            </p>
            <p>
              <span className="font-semibold">Test Suggestion:</span>{" "}
              {patient.testsuggestion}
            </p>
            <p>
              <span className="font-semibold">Severity:</span>{" "}
              {patient.severity}
            </p>
          </div>
          <h2 className="text-lg text-center font-semibold mt-6 mb-2">
            Prescription
          </h2>
          <div className="space-y-2">
            {patient.Prescription?.map((med, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-2">
                <p>
                  🩺 <span className="font-semibold">{med.medicineName}</span> -{" "}
                  {med.dosage} dosage × {med.duration} days
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3">
            <span className="font-semibold">Dietary Advice:</span>{" "}
            {patient.dietaryadvice}
          </p>
          <p>
            <span className="font-semibold">Lifestyle Advice:</span>{" "}
            {patient.lifestyleadvice}
          </p>
          <p>
            <span className="font-semibold">Follow-up Visit:</span>{" "}
            {patient.dateofvisit}
          </p>
          <h2 className="text-lg text-center font-semibold mt-6 mb-2">
            Doctor Remarks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p>
              <span className="font-semibold">Remark:</span> {patient.remark}
            </p>
            <p>
              <span className="font-semibold">Precautions:</span>{" "}
              {patient.precautions}
            </p>
            <p>
              <span className="font-semibold">Doctor:</span> {patient.docname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patientallcard;
