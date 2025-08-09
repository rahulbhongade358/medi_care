import React from "react";

const Testimonial = ({ Name, Review, Outcome }) => {
  return (
    <div>
      <div>
        <p>
          <span className="text-gray-800 font-serif text-2xl mt-2.5 flex justify-center font-semibold">
            {Name}
          </span>
        </p>
        <p>
          <span className=" text-[#0288D1] font-bold font-serif">
            Experts in : <span className="text-gray-700">{Review}</span>{" "}
          </span>
        </p>
        <p>
          <span className=" text-[#0288D1] font-extrabold font-serif">
            Exp:
            <span className="text-gray-700">{Outcome}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
