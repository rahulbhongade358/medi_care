import React from "react";
import {
  WhychooseCard,
  FunFact,
  Expert,
  Testimonials,
} from "./../../Pages/Data/data";
import Cards from "../WhyChoose/Cards";
import FunCards from "./../Funcards/FunCards";
import ExpertCard from "./../ExpertCards/ExpertCard";
import Testimonial from "./../Testimonial/Testimonial";
import "./Cardmap.css";

const WhyChooseCard = () => {
  return (
    <div className="overflow-hidden w-full  m-auto">
      <div
        className="flex animate-scrollOneCard"
        style={{
          animation: "scrollOneCard 10s linear infinite",
        }}
      >
        {WhychooseCard.map((slide, i) => (
          <div key={i} className="w-full shrink-0">
            <Cards
              Title={slide.Title}
              Description={slide.Description}
              Importans={slide.Importans}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
const FunCard = () => {
  return (
    <div className="overflow-hidden w-full  m-auto">
      <div
        className="flex animate-scrollOneCard"
        style={{
          animation: "scrollOneCard 10s linear infinite",
        }}
      >
        {FunFact.map((slide, i) => (
          <div key={i} className="w-full shrink-0">
            <FunCards
              Title={slide.Title}
              Fact={slide.Fact}
              HealthImpact={slide.HealthImpact}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
const Expertscard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8">
      {Expert.map((exp, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-3xl h-full
            transition duration-300 ease-in-out 
            hover:-translate-y-1 hover:scale-105 hover:bg-[#e4f4fb]
            shadow-lg text-left flex flex-col space-y-2"
        >
          <ExpertCard
            Name={exp.Name}
            Specialization={exp.Specialization}
            Experience={exp.Experience}
            Profile={exp.Profile}
            Img={exp.Img}
          />
        </div>
      ))}
    </div>
  );
};
const Testimonialcard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {Testimonials.map((test, i) => (
        <div
          key={i}
          className="bg-white p-4  rounded-4xl h-full 
             transition delay-100 duration-500 ease-linear
             hover:-translate-y-0.5 hover:scale-105 hover:bg-[#e4f4fb]
             shadow-lg shadow-grey-200/50   space-y-3 flex flex-col"
        >
          <Testimonial
            Name={test.Name}
            Review={test.Review}
            Outcome={test.Outcome}
          />
        </div>
      ))}
    </div>
  );
};

export { WhyChooseCard, FunCard, Expertscard, Testimonialcard };
