import React from "react";

const Servicecard = ({ Name, Info }) => {
  return (
    <>
      <div className="bg-[#0288D1] rounded-lg p-4 sm:p-6 md:p-8 shadow-lg h-full flex flex-col justify-center">
        <p className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-white text-center">
          {" "}
          {Name}{" "}
        </p>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg font-serif text-white text-center">
          {" "}
          {Info}
        </p>
      </div>
    </>
  );
};

export default Servicecard;
