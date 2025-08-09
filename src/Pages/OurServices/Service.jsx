import React from "react";
import ServiceMap from "./ServiceMap";

const Service = () => {
  return (
    <div>
      <div className="bg-[#0288D1] h-[350px] w-[95%] m-6 rounded-br-full rounded-tl-full">
        <span className="text-4xl text-white underline font-bold font-serif flex justify-center pt-2 ">
          Our Services
        </span>
        <div>
          <ServiceMap />
        </div>
      </div>
    </div>
  );
};

export default Service;
