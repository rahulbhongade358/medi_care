import React from "react";

const Servicecard = ({ Name, Info }) => {
  return (
    <div>
      <div>
        <section className="flex flex-col justify-center items-center">
          <p className="text-[20px] font-bold font-serif mt-10 text-white">
            {" "}
            {Name}{" "}
          </p>
          <p>
            <span className="text-[18px]  font-serif text-white block max-w-xl mt-6">
              {Info}
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Servicecard;
