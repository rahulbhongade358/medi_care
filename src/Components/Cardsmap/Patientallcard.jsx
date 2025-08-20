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
      <div className="flex-1 p-6 mt-5">
        <h1 className="text-xl font-bold ">📋 Detailed Info</h1>
        <div
          className="border p-2 my-2 rounded"
          onClick={() => navigate(`/patient-details/${patient.PID}`)}
        >
          <p>ID:{patient.PID}</p>
          <p>
            Name : {patient.firstName} {patient.middleName} {patient.lastName}
          </p>
          <p>Age : {patient.age}</p>
          <p>Gender : {patient.gender}</p>
          <p>Contact : {patient.contact}</p>
          <p>E-mail : {patient.email}</p>
          <p>Date of Visit : {patient.date}</p>
          <p>Address : {patient.addressbox}</p>
          <h3>Symptoms</h3>
          <p>Symptom : {patient.symptombox}</p>
          <p>Duration of Symptoms : {patient.durationofsymptoms}</p>
          <p>Past Medical History : {patient.medicalhistory}</p>
          <p>Allergies : {patient.Allergies}</p>
          <p>Family-history : {patient.familyhistory}</p>
          <p>Current-medications : {patient.currentmedications}</p>
          <h3>Diagnosis </h3>
          <p>temperature : {patient.temperature}</p>
          <p>Pulse-rate : {patient.pulserate}</p>
          <p>Blood-pressure : {patient.bloodpressure}</p>
          <p>Oxygen-saturation : {patient.oxygensaturation}</p>
          <p>Weight : {patient.weight}</p>
          <p>Diseasename : {patient.diseasename}</p>
          <p>Test-suggestion : {patient.testsuggestion}</p>
          <p>Severity : {patient.severity}</p>

          <h4>Prescription :</h4>
          {patient.Prescription?.map((med, i) => (
            <div key={i}>
              <p>
                🩺 {med.medicineName} - {med.dosage} dosage x {med.duration}{" "}
                days
              </p>
            </div>
          ))}
          <p>Dietary-Advice : {patient.dietaryadvice}</p>
          <p>Lifestyle-Advice : {patient.lifestyleadvice}</p>
          <p>Follow-up Visit : {patient.dateofvisit}</p>
          <h3>Doctor Remarks </h3>
          <p>Remark : {patient.remark}</p>
          <p>Precautions : {patient.precautions}</p>
          <p>Doctor : {patient.docname}</p>
        </div>
      </div>
    </div>
  );
};

export default Patientallcard;
