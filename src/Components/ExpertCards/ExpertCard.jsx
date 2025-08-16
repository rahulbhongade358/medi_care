import React from "react";
import Button from "../Button";

const ExpertCard = ({ Name, Specialization, Experience, Profile, Img }) => {
  const Bio = Profile;
  return (
    <div className="flex flex-col h-full p-4 sm:p-5 md:p-6">
      <div className="space-y-2">
        <div className="flex justify-center items-center">
          <img
            src={Img}
            alt=""
            className=" 
           h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full shadow-cyan-200 shadow-lg"
          />
        </div>

        <p>
          <span className="text-xl sm:text-2xl font-semibold text-gray-800 font-serif">
            {Name}
          </span>
        </p>
        <p>
          <span className=" text-[#0288D1] font-bold font-serif">
            Experts in : <span className="text-gray-700">{Specialization}</span>{" "}
          </span>
        </p>
        <p>
          <span className=" text-[#0288D1] font-extrabold font-serif">
            Exp:
            <span className="text-gray-700">{Experience}</span>
          </span>
        </p>

        {Bio && (
          <p>
            <span className=" text-[#0288D1] font-extrabold font-serif">
              Bio:
              <span className="text-gray-700">{Profile}</span>
            </span>
          </p>
        )}

        <div className="pt-4 flex justify-center items-center">
          <Button
            link={"/explore"}
            Title={"Know More"}
            style="text-sm font-serif "
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
