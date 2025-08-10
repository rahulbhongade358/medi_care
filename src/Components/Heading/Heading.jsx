import React from "react";

const Heading = ({ heading }) => {
  return (
    <>
      <div>
        <div>
          <section className=" py-10 text-center justify-evenly">
            <span className="text-3xl font-bold font-serif text-[#0288D1]">
              {heading}
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default Heading;
