import React from "react";
import DocNavbar from "../../Components/DocNavbar/DocNavbar";
import { useForm } from "react-hook-form";

const AddDiagnosis = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const Submit = (Data) => console.log(Data);
  return (
    <>
      <div className="flex mt-5">
        <DocNavbar />
        <div className="flex-1  p-6 mt-7">
          <h1 className="text-xl font-bold mb-4 text-center">
            ➕ Patient Diagnosis Form
          </h1>

          <form onSubmit={handleSubmit(Submit)}>
            <span className="text-xl font-semibold underline decoration-wavy mb-4 ">
              {" "}
              Patient Information
            </span>
            <div className=" p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <div className="flex flex-row gap-8 md:col-span-2">
                <input
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: true })}
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 placeholder-black"
                />
                {errors.firstName && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
                <input
                  placeholder="Middle Name"
                  type="text"
                  {...register("middleName", { required: true })}
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 placeholder-black"
                />
                {errors.middleName && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
                <input
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", { required: true })}
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 placeholder-black"
                />
                {errors.lastName && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Age"
                  type="number"
                  {...register("age", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.age && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Patient ID"
                  type="text"
                  {...register("PID", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.PID && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-gray-600 font-medium">Gender</label>
                <select
                  {...register("gender", { required: true })}
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 placeholder-black"
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Contact"
                  type="tel"
                  {...register("contact", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.contact && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="E-mail"
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Date of Visit"
                  type="date"
                  {...register("date", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.date && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="mb-1 text-gray-600 font-medium">
                  Address
                </label>
                <textarea
                  placeholder="Add Your Address"
                  {...register("messagebox", { required: true })}
                  rows="1"
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                ></textarea>
                {errors.messagebox && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
            </div>

            <span className="text-xl font-semibold underline decoration-wavy mb-4 ">
              {" "}
              Symptoms
            </span>
            <div className=" p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <div className="flex flex-col md:col-span-2">
                <label className="mb-1 text-gray-600 font-medium">
                  Address
                </label>
                <textarea
                  placeholder="Presenting Symptoms "
                  {...register("symptombox", { required: true })}
                  rows="2"
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                ></textarea>
                {errors.symptombox && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Duration of Symptoms"
                  type="text"
                  {...register("durationofsymptoms", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.durationofsymptoms && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Past Medical History"
                  type="text"
                  {...register("medicalhistory", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.medicalhistory && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Allergies"
                  type="text"
                  {...register("Allergies", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.Allergies && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Family History"
                  type="text"
                  {...register("familyhistory", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.familyhistory && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Current Medications"
                  type="text"
                  {...register("currentmedications", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.currentmedications && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
            </div>
            <span className="text-xl font-semibold underline decoration-wavy mb-4 ">
              {" "}
              Diagnosis Section
            </span>
            <div className=" p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <div className="flex flex-col">
                <input
                  placeholder="Temperature"
                  type="text"
                  {...register("temperature", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.temperature && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Pulse-Rate"
                  type="text"
                  {...register("pulserate", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.pulserate && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Blood-Pressure"
                  type="text"
                  {...register("bloodpressure", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.bloodpressure && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Oxygen-Saturation(%)"
                  type="text"
                  {...register("oxygensaturation", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.oxygensaturation && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Weight(kg)"
                  type="text"
                  {...register("weight", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.weight && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Disease-Name"
                  type="text"
                  {...register("diseasename", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.diseasename && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="mb-1 text-gray-600 font-medium">
                  Additional Tests Suggested
                </label>
                <textarea
                  placeholder="Tests-Suggestion Box "
                  {...register("testsuggestion", { required: true })}
                  rows="2"
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                ></textarea>
                {errors.testsuggestion && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-gray-600 font-medium">
                  Severity Level
                </label>
                <select
                  {...register("gender", { required: true })}
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 placeholder-black"
                >
                  <option value="">Select</option>
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
                {errors.gender && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDiagnosis;
