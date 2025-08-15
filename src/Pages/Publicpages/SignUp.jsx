import React from "react";
import Login2 from "./../../assets/Doctors/login/Login2.png";
import { useForm } from "react-hook-form";
import Heading from "../../Components/Heading/Heading";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const SelectedRole = watch("Whoareyou");
  const Submit = (data) => {
    const finalPayload = { ...data, isApproved: false };
    reset();
    console.log(finalPayload);
  };
  return (
    <>
      <div className=" mt-15 font-serif bg-[#B3E5FC] text-gray-600 flex flex-col lg:flex-row justify-around items-center px-10 py-6">
        <div>
          <Heading heading={`Registration Form 📃`} />
          <form onSubmit={handleSubmit(Submit)}>
            <div className="flex flex-row gap-8 text-black mb-5 ">
              <input
                placeholder="First Name"
                type="text"
                {...register("firstName", { required: true })}
                className="w-full  leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
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
                className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
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
                className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
              />
              {errors.lastName && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-black">
              <div className="flex flex-col">
                <input
                  placeholder="Email"
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
                  placeholder="Contact"
                  type="tel"
                  {...register("Contactnumber", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.Contactnumber && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-gray-600 font-medium">
                  Who are you?
                </label>
                <select
                  {...register("Whoareyou", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                >
                  <option value="">Select</option>
                  <option value="doctor">Doctor</option>
                  <option value="nurse">Nurse</option>
                  <option value="patient">Patient</option>
                  <option value="visitor">Visitor</option>
                </select>
                {errors.Whoareyou && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-gray-600 font-medium">Gender</label>
                <select
                  {...register("gender", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
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
                  placeholder="Date of Birth"
                  type="Date"
                  {...register("DoB", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.DoB && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>
              {SelectedRole === "doctor" && (
                <>
                  <div className="flex flex-col">
                    <input
                      placeholder="Specialization – e.g., Cardiology"
                      type="text"
                      {...register("Specialization", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.Specialization && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Medical License Number"
                      type="text"
                      {...register("MLN", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.MLN && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      placeholder="Years of Experience"
                      type="text"
                      {...register("Experience", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.Experience && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Hospital/Clinic Name "
                      type="text"
                      {...register("HCname", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.HCname && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Upload License Proof"
                      type="text"
                      {...register("Licenseproof", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.Licenseproof && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                </>
              )}
              {SelectedRole === "nurse" && (
                <>
                  <div className="flex flex-col">
                    <input
                      placeholder="Department – e.g.ICU, Pediatrics."
                      type="text"
                      {...register("Department", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.Department && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Nursing Registration Number – ID from nursing council."
                      type="text"
                      {...register("NRN", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.NRN && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Years of Experience"
                      type="text"
                      {...register("Experience", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.Experience && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Hospital/Clinic Name – Current workplace."
                      type="text"
                      {...register("HCname", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.HCname && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Upload Nursing ID Proof"
                      type="text"
                      {...register("IDproof", { required: true })}
                      className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                    />
                    {errors.IDproof && (
                      <span className="text-red-600 text-sm mt-1 text-center">
                        *This field is required*
                      </span>
                    )}
                  </div>
                </>
              )}

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

              <div className="flex justify-center md:col-span-2">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white font-semibold rounded-2xl px-6 py-3 cursor-pointer mt-6 shadow-md"
                />
              </div>
            </div>
          </form>
        </div>
        <img
          src={Login2}
          className="max-w-[300px] mb-8 lg:mb-0"
          alt="Login Visual"
        />
      </div>
    </>
  );
};

export default SignUp;
