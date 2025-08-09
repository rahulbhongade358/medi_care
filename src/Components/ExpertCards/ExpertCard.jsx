import React from "react";
import Button from "../Button";

const ExpertCard = ({ Name, Specialization, Experience, Profile, Img }) => {
  const Bio = Profile;
  return (
    <div className="flex flex-col h-full  ">
      <div className="space-y-2">
        <div className="flex justify-center items-center mt-3">
          <img
            src={Img}
            alt=""
            className=" 
           h-[150px] w-[150px] rounded-[50%] shadow-cyan-200 shadow-lg"
          />
        </div>

        <p>
          <span className="text-gray-800 font-serif text-2xl mt-2.5 flex justify-center font-semibold">
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
        <p>
          {Bio ? (
            <span className=" text-[#0288D1] font-extrabold font-serif">
              Bio:
              <span className="text-gray-700">{Profile}</span>
            </span>
          ) : null}
        </p>
        <div className="mt-auto mb-0 pt-4 flex justify-center items-center">
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
