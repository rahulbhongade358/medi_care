import React from "react";
import { Expertscard, WhyChooseCard } from "../../Components/Cardsmap/Cardmap";
import logo2 from "./../../assets/Doctors/logo3.jpeg";
import Heading from "../../Components/Heading/Heading";
const About = () => {
  return (
    <div className="bg-gray-50 mt-15  ">
      <div className="text-[#0288D1]">
        <Heading
          heading={"🏥 About MediCare - A Smarter Healthcare Platform"}
        />
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 m-5">
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-serif text-justify max-w-3xl">
          Welcome to <span className="font-semibold">MediCare</span> , a modern
          digital solution designed to redefine the way clinics, hospitals, and
          medical institutions manage patients and treatments. We believe
          healthcare should be efficient, secure, and accessible—both for
          doctors and patients. MediCare enables hospitals and clinics to
          effortlessly diagnose patients, manage medical records, and provide
          essential health information, all through a single, streamlined
          digital platform. Our mission is simple: To empower medical
          professionals with tools that simplify workflows, and to help patients
          get the right care, faster. Whether you're a small clinic looking to
          digitize your process, or a large hospital aiming for complete medical
          record management, MediCare adapts to your needs.
        </p>
        <img
          src={logo2}
          alt=""
          className=" h-60 sm:h-72 lg:h-80 rounded-3xl shadow-xl mt-4 lg:mt-0"
        />
      </section>

      <section className="  text-center">
        <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0288D1]">
          👨‍⚕️ Meet Our Dedicated Team -Doctor's & Nursing Staff
        </span>
        <p className="m-5 text-[16px] sm:text-[18px] font-serif">
          At MediCare, we celebrate the efforts of real heroes — doctors,
          nurses, and medical staff who work day and night for patient care. Our
          team includes:
        </p>

        <p className="m-5 text-[15px] sm:text-[17px] font-serif">
          We showcase profiles of verified and professional doctors from various
          specializations — cardiologists, neurologists, pediatricians, and
          general practitioners — each with a proven track record of
          compassionate care.
        </p>

        <p className="m-5 text-[15px] sm:text-[17px] font-serif">
          Our platform also highlights the unsung heroes — the nursing staff who
          play a critical role in patient recovery and day-to-day monitoring.
          Their dedication ensures smooth operations and compassionate bedside
          care.
        </p>

        <div className="flex justify-center items-center gap-6 mb-6">
          <Expertscard />
        </div>
      </section>

      <section className="py-10 text-center font-serif">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0288D1]">
          Inspired by World-Class Healthcare Systems
        </h2>

        <p className="text-[15px] sm:text-[17px] m-5">
          MediCare takes inspiration from the world’s best healthcare
          institutions, integrating best practices and clinical workflows into
          the platform design.
        </p>
        <div className="overflow-x-auto">
          <table className=" border-collapse border border-red-400 mx-auto min-w-[350px] max-w-[600px]">
            <tr>
              <th className="border p-3 text-left">Hospital Name</th>
              <th className="border p-3 text-left">Country</th>
            </tr>
            <tr>
              <td className="border p-3">Mayo Clinic</td>
              <td className="border p-3">USA</td>
            </tr>
            <tr>
              <td className="border p-3">AIIMS</td>
              <td className="border p-3">India</td>
            </tr>
            <tr>
              <td className="border p-3">Singapore General Hospital</td>
              <td className="border p-3">Singapore</td>
            </tr>
            <tr>
              <td className="border p-3">Cleveland Clinic</td>
              <td className="border p-3">USA</td>
            </tr>
            <tr>
              <td className="border p-3">Charité – Berlin</td>
              <td className="border p-3">Germany</td>
            </tr>
          </table>
        </div>
      </section>

      <section className="py-10 text-center font-serif">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0288D1]">
          🎯 Our Mission
        </h2>
        <div
          className="text-[16px] sm:text-[18px] p-4 border rounded-2xl
         bg-blue-400 text-white max-w-xl mx-auto mt-4 text-justify"
        >
          {" "}
          <p>
            "To empower healthcare providers with a robust digital
            infrastructure that enhances patient care, simplifies administrative
            tasks, and promotes data-driven decisions."
          </p>
        </div>
      </section>

      <section className="py-10 text-center font-serif">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0288D1]">
          👁️‍🗨️ Our Vision
        </h2>
        <div
          className="text-[16px] sm:text-[18px] p-4 border rounded-2xl
         bg-blue-400 text-white max-w-xl mx-auto mt-4 text-justify"
        >
          {" "}
          <p>
            "To become a trusted and widely adopted healthcare management
            solution for hospitals and clinics across India and beyond, ensuring
            every healthcare worker is digitally equipped to serve better."
          </p>
        </div>
      </section>
      <section className="bg-[#fff3cd] py-10 px-4 font-serif m-5 border-2 rounded-4xl">
        <div className="  text-center"></div>
        <h2
          className="text-center text-[#856404] font-serif text-3xl font-bold
           border-l-4 border-t-4 border-[#ffc107]  px-4 py-2 bg-[#fff3cd] shadow-md"
        >
          ⚠️ Disclaimer – Please Read Carefully
        </h2>
        <div className="mt-6 text-[18px] text-justify bg-white border-2 border-black rounded-2xl p-6 shadow-lg">
          <p className="mb-4">
            MediCare is a hospital and clinic management platform intended for
            educational, demonstration, and institutional use. It is not a
            substitute for licensed medical advice, emergency care, or legally
            certified health services.
          </p>
        </div>
        <div>
          <ol className="list-decimal list-inside space-y-3 text-justify p-7">
            <li>
              All sample profiles and medical data used on this platform are
              fictional or intended for demonstration purposes only unless
              explicitly deployed by a registered medical institution.
            </li>
            <li>
              Any AI-generated suggestions, health tips, or diagnostic forms
              provided are informational tools only and should never be
              considered a replacement for professional medical evaluation.
            </li>
            <li>
              If this platform is being used by a specific clinic or hospital,
              and you are visiting that clinic in person, you are encouraged to
              contact or consult the respective registered medical professionals
              directly through the clinic's official contact channels or during
              your appointment.
            </li>
            <li>
              Clinics or hospitals using MediCare must ensure full compliance
              with HIPAA, local medical board regulations, and applicable
              patient data privacy laws.
            </li>
            <li>
              No patient data should be uploaded or stored on a public or test
              version of MediCare unless the platform is officially deployed and
              managed by an authorized medical facility with the necessary legal
              and administrative approvals.
            </li>
            <li>
              MediCare and its developers assume no liability for misuse,
              misinterpretation, or any clinical action taken based on
              information displayed on this platform.
            </li>
          </ol>
          <p className="mt-6 font-semibold text-center text-[#856404]">
            By accessing or using MediCare, you acknowledge and agree to use the
            platform responsibly, ethically, and in coordination with licensed
            medical professionals only.
          </p>
        </div>
      </section>
      <section className="py-10 text-center">
        <p className="text-2xl sm:text-3xl font-bold font-serif text-[#0288D1]">
          <span>Why Choose MediCare+</span>
        </p>
        <WhyChooseCard />
      </section>
    </div>
  );
};

export default About;
