import React from "react";
import Resume from "./../../assets/Doctors/resume.png";
import Matters from "./../../assets/Doctors/star.png";

const Cards = ({ Title, Description, Importans }) => {
  return (
    <div className="bg-gray-50 py-5 ">
      <section className="h-screen snap-start bg-gray-50 flex flex-col justify-center items-center px-4">
        <p className="text-2xl font-bold font-serif mt-10 text-gray-700">
          {" "}
          {Title}{" "}
        </p>
        <p>
          <img src={Resume} alt="" className="size-10 mt-2 m-auto" />
          <span className="font-bold font-serif text-gray-700 block max-w-xl mt-4">
            {Description}
          </span>
        </p>
        <p>
          <img src={Matters} alt="" className="size-10 mt-2 m-auto" />
          <span className="font-bold font-serif text-gray-700 block max-w-xl mt-4">
            {Importans}
          </span>
        </p>
      </section>
    </div>
  );
};

export default Cards;
