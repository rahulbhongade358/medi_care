import React from "react";
import Login2 from "./../../assets/Doctors/login/Login2.png";

const SignUp = () => {
  return (
    <>
      <div className=" mt-15 font-serif bg-[#B3E5FC] text-gray-600 flex flex-col lg:flex-row justify-around items-center px-10 py-6">
        <img
          src={Login2}
          className="max-w-[450px] mb-8 lg:mb-0"
          alt="Login Visual"
        />
      </div>
    </>
  );
};

export default SignUp;
