import React from "react";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const Submit = (Data) => console.log(Data);

  return (
    <div>
      <div className="mt-15 m-5 p-5 font-serif ">
        <span className="text-3xl block text-center font-bold  text-[#0288D1]">
          "We’re Here to Support Your Health and Well-being – Anytime,
          Anywhere."
        </span>
        <span className=" block  font-bold text-gray-600">
          Welcome to the Contact Center of Therm X Hospital. Whether you're a
          patient, a medical professional, or a concerned visitor, our team is
          here to assist you. We understand that health concerns require
          immediate attention, and we’re committed to responding to your queries
          with care and urgency.
        </span>
        <span className="  text-center font-bold block items-center py-5  ">
          “Reach out to us with your health queries, feedback, or partnership
          requests. Fill out the form and we’ll get back to you within 24-
          hours.”
        </span>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-start">
        <div className="w-full lg:w-[60%] flex lg:order-1 xl:order-2 ">
          <div
            className="p-6 m-5 lg:ml-[50px] w-full h-fit rounded-3xl
         bg-white shadow-2xl transition-all duration-300 contact-form"
          >
            <form
              onSubmit={handleSubmit(Submit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black"
            >
              <div className="flex flex-col">
                <input
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.firstName && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>

              <div className="flex flex-col">
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
              </div>

              <div className="flex flex-col">
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
                <input
                  placeholder="Purpose of Inquiry"
                  type="text"
                  {...register("inquiry", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                />
                {errors.inquiry && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="mb-1 text-gray-600 font-medium">
                  Message
                </label>
                <textarea
                  placeholder="Please describe your question, issue, or request in detail"
                  {...register("messagebox", { required: true })}
                  rows="4"
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                ></textarea>
                {errors.messagebox && (
                  <span className="text-red-600 text-sm mt-1 text-center">
                    *This field is required*
                  </span>
                )}
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="mb-1 text-gray-600 font-medium">
                  Preferred Contact Method
                </label>
                <select
                  {...register("contactmethod", { required: true })}
                  className="w-full bg-transparent leading-8 border-b border-gray-500 focus:outline-none focus:border-indigo-400 py-3 placeholder-black"
                >
                  <option value="">Select</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                {errors.contactmethod && (
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
            </form>
          </div>
        </div>
        <div className="w-full lg:w-[30%] p-6 m-5 text-black lg:order-1 flex flex-col gap-5">
          <div className="bg-white rounded-3xl shadow-xl p-5 h-fit">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p className="text-gray-700">
              Therm X Multispeciality Hospital
              <br />
              Plot No. 112, Tech Industrial Area,
              <br />
              Pimpri-Chinchwad, Pune – 411044
              <br />
              Maharashtra, India
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-5 h-fit">
            <h2 className="text-xl font-semibold mb-4">Email</h2>
            <p className="text-gray-700">
              📧 Email: support@thermxhospital.com For business:
              business@thermxhospital.com
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-5 h-fit">
            <h2 className="text-xl font-semibold mb-4">Contact Number</h2>
            <p className="text-gray-700">
              📞 General Help: +91 98765 43210 Emergency Line (24x7): +91 90909
              10101 Doctor Appointments: +91 91234 56789
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-5 h-fit">
            <h2 className="text-xl font-semibold mb-4">🕐 Office Hours:</h2>
            <p className="text-gray-700">Monday to Saturday:</p>
            <p>9:00 AM – 8:00 PM </p>
            <p>Emergency: Available 24x7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
