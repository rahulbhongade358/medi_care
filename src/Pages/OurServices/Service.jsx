import React from "react";
import ServiceMap from "./ServiceMap";

const Service = () => {
  return (
    <div className="m-5 px-4 sm:px-6 md:px-8">
      <div className=" w-full max-w-[95%] mx-auto  py-6 sm:py-8 md:py-10 rounded-tl-2xl rounded-br-2xl sm:rounded-tl-3xl sm:rounded-br-3xl md:rounded-tl-full md:rounded-br-full">
        <span
          className="
            block text-center underline font-bold font-serif
            text-2xl sm:text-3xl md:text-4xl
            text-[#0288D1] mb-6
          "
        >
          Our Services
        </span>
        <div className="px-2 sm:px-4 md:px-8">
          <ServiceMap />
        </div>
      </div>
    </div>
  );
};

export default Service;
