import React from "react";

const Servicecard = ({ Name, Info }) => {
  return (
    <div>
      <div className="px-4 sm:px-6 md:px-8">
        <section className="flex flex-col justify-center items-center text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold font-serif mt-6 sm:mt-8 text-white">
            {" "}
            {Name}{" "}
          </p>
          <p className="mt-2 sm:mt-4 md:mt-6 max-w-xs sm:max-w-md md:max-w-xl">
            <span className="text-sm sm:text-base md:text-lg font-serif text-white block">
              {" "}
              {Info}
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Servicecard;
