import React from "react";
import Doctor1 from "./../../assets/Doctors/Doctor1.png";
import MediIcon from "./../../assets/Doctors/medicine.png";
import Fruits from "./../../assets/Doctors/fruit.png";
import Symptoms from "./../../assets/Doctors/cold.png";
import Benifits from "./../../assets/Doctors/Benifits.png";
import Experts from "./../../assets/Doctors/Experts.png";
import { MEDICINES, FRUITS, SYMPTOMS, GovtScheme } from "./../Data/data";
import Button from "../../Components/Button";

import {
  WhyChooseCard,
  FunCard,
  Expertscard,
  Testimonialcard,
} from "../../Components/Cardsmap/Cardmap";
import Service from "../OurServices/Service";
const Home = () => {
  return (
    <div>
      <div
        className=" flex justify-center items-center
       bg-gradient-to-r from-[#B3E5FC] to-[#B3E5FC]"
      >
        <img
          src={Doctor1}
          alt="Doctors"
          className="h-[250px] w-full max-w-[600px] "
        />
      </div>
      <div className="flex justify-center items-center p-4 bg-[#B3E5FC]">
        <h1 className="text-3xl font-bold text-[#0288D1] text-center">
          {" "}
          Welcome to MediCare+ — Your Digital Health Companion{" "}
        </h1>
      </div>
      <div className="flex justify-center items-center p-2 bg-[#B3E5FC] ">
        <h2 className="text-xl text-[#0288D1] text-center">
          "Trusted Care, Expert Diagnosis, And Smart Health Tips — All In One
          Place"
        </h2>
      </div>
      <div className="bg-gray-50 flex justify-center items-center text-center p-8">
        <Button
          link={"/explore"}
          Title={"Get Sarted"}
          style="text-4xl font-serif"
        />
      </div>
      <section className="bg-gray-50 py-10 text-center ">
        <div className="flex justify-center items-center gap-6 mb-6">
          <img src={MediIcon} alt="Medicine" className="h-[40px]" />
          <h2 className="text-2xl font-bold text-[#0288D1]  ">
            {" "}
            Types of Medicines💉
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {MEDICINES.map((Medicine, index) => {
            const { Title, Description, Use, CommonExamples, Note, Img } =
              Medicine;
            return (
              <div
                key={index}
                className="bg-white p-4 pt-0 rounded-4xl
                     transition delay-250 duration-400 ease-in-out 
                     hover:-translate-y-0.5 hover:scale-105 hover:bg-[#e4f4fb]
                     shadow-lg shadow-grey-200/50 text-left space-y-3"
              >
                <img
                  src={Img}
                  className="h-[190px] w-full mt-2  m-auto  rounded-3xl shadow-gray-150 drop-shadow-lg"
                />
                <p>
                  <span className="text-gray-800 font-semibold font-serif text-2xl mt-2 flex justify-center gap-2">
                    {Title}
                  </span>{" "}
                </p>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    {" "}
                    Description:{" "}
                    <span className="text-gray-700">{Description}</span>{" "}
                  </span>
                </p>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    {" "}
                    Use:<span className="text-gray-700">{Use}</span>{" "}
                  </span>
                </p>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    Common Examples:
                    <span className="text-gray-700">{CommonExamples}</span>{" "}
                  </span>
                </p>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    Note:<span className="text-gray-700">{Note}</span>{" "}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-gray-50 py-10 text-center ">
        <div className="flex justify-center items-center gap-6 mb-6">
          <img src={Fruits} alt="Medicine" className="h-[40px]" />
          <h2 className="text-2xl font-bold text-[#0288D1]  ">
            {" "}
            Fruits and Their Health Benifits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {FRUITS.map((fruit, index) => {
            const { Title, Description, HealthBenefits, UsageIdeas, Img } =
              fruit;
            const { B1, B2, B3 } = HealthBenefits;
            return (
              <div
                key={index}
                className="bg-white p-4 pt-0 rounded-4xl
                     transition delay-250 duration-400 ease-in-out 
                     hover:-translate-y-0.5 hover:scale-105 hover:bg-[#e4f4fb]
                     shadow-lg shadow-grey-200/50 text-left space-y-3"
              >
                <img
                  src={Img}
                  alt=""
                  className="h-[190px] w-full mt-2  m-auto
                   rounded-3xl shadow-gray-150 drop-shadow-lg "
                />
                <p>
                  <span
                    className="text-gray-800 font-semibold font-serif text-2xl mt-2
                   flex justify-center gap-2"
                  >
                    {Title}
                  </span>{" "}
                </p>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    {" "}
                    Description:{" "}
                    <span className="text-gray-700">{Description}</span>{" "}
                  </span>
                </p>
                <div>
                  <p className="text-[#0288D1] font-semibold">
                    Health Benefits:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-2">
                    <li>{B1}</li>
                    <li>{B2}</li>
                    <li>{B3}</li>
                  </ul>
                </div>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    Usage-Ideas:
                    <span className="text-gray-700">{UsageIdeas}</span>{" "}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-gray-50 py-10 text-center ">
        <div className="flex justify-center items-center gap-6 mb-6">
          <img src={Symptoms} alt="Medicine" className="h-[40px]" />
          <h2 className="text-2xl font-bold text-[#0288D1]  ">
            {" "}
            Common Diseases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {SYMPTOMS.map((symptom, index) => {
            const { Title, Description, Symptoms, TipstoFollow, Img } = symptom;
            const { S1, S2, S3, S4 } = Symptoms;
            return (
              <div
                key={index}
                className="bg-white p-4 pt-0 rounded-4xl
                     transition delay-250 duration-400 ease-in-out 
                     hover:-translate-y-0.5 hover:scale-105 hover:bg-[#e4f4fb]
                     shadow-lg shadow-grey-200/50 text-left space-y-3"
              >
                <img
                  src={Img}
                  alt=""
                  className="h-[190px] w-full mt-2  m-auto  rounded-3xl shadow-gray-150 drop-shadow-lg"
                />
                <p>
                  <span
                    className="text-gray-800 font-semibold font-serif text-2xl mt-2
                   flex justify-center gap-2"
                  >
                    {Title}
                  </span>{" "}
                </p>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    {" "}
                    Description:{" "}
                    <span className="text-gray-700">{Description}</span>{" "}
                  </span>
                </p>
                <div>
                  <p className="text-[#0288D1] font-semibold">Symptoms:</p>
                  <ul className="list-disc list-inside text-gray-700 ml-2">
                    <li>{S1}</li>
                    <li>{S2}</li>
                    <li>{S3}</li>
                    <li>{S4}</li>
                  </ul>
                </div>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    Usage-Ideas:
                    <span className="text-gray-700">{TipstoFollow}</span>{" "}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-gray-50 py-10 text-center ">
        <div className="flex justify-center items-center gap-6 mb-6">
          <img src={Benifits} alt="Medicine" className="h-[40px]" />
          <h2 className="text-2xl font-bold text-[#0288D1]  ">
            {" "}
            Govt. Scheme & Benifits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {GovtScheme.map((govtscheme, index) => {
            const { Title, Description, Benefits, Tagline, Img } = govtscheme;
            const { B1, B2, B3 } = Benefits;
            return (
              <div
                key={index}
                className="bg-white p-4 pt-0 rounded-4xl
                     transition delay-250 duration-400 ease-in-out 
                     hover:-translate-y-0.5 hover:scale-105 hover:bg-[#e4f4fb]
                     shadow-lg shadow-grey-200/50 text-left space-y-3"
              >
                <img
                  src={Img}
                  alt=""
                  className="h-[190px] w-full mt-2  m-auto  rounded-3xl shadow-gray-150 drop-shadow-lg"
                />
                <p>
                  <span className="text-gray-800 font-serif text-2xl mt-2 flex justify-center  font-semibold">
                    {Title}
                  </span>
                </p>
                <p>
                  <span className=" text-[#0288D1] font-semibold">
                    Description:{" "}
                    <span className="text-gray-700">{Description}</span>{" "}
                  </span>
                </p>
                <div>
                  <p className="text-[#0288D1] font-bold">Benefits:</p>
                  <ul className="list-disc list-inside text-gray-700 ml-2">
                    <li>{B1}</li>
                    <li>{B2}</li>
                    <li>{B3}</li>
                  </ul>
                </div>
                <p>
                  <span className=" text-[#0288D1] font-extrabold font-serif">
                    Tagline:
                    <span className="text-gray-700">{Tagline}</span>
                  </span>
                </p>
                <div className="   flex justify-center items-center text-center  ">
                  <Button
                    link={"/explore"}
                    Title={"Learn More"}
                    style="text-sm mb-0 font-serif"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-gray-50 ">
        <section className="bg-gray-50 py-10 text-center">
          <p className="text-4xl font-bold font-serif text-[#0288D1]">
            <span>Why Choose MediCare+</span>
          </p>
          <WhyChooseCard />
        </section>
      </div>
      <div className="bg-gray-50  ">
        <section className="bg-gray-50  text-center">
          <p className="text-4xl font-bold font-serif text-[#0288D1]">
            <span> Did You Know?</span>
          </p>
          <FunCard />
        </section>
      </div>
      <section className="bg-gray-50 py-10 text-center ">
        <div className="flex justify-center items-center gap-6 mb-6">
          <img src={Experts} alt="Medicine" className="h-[40px]" />
          <h2 className="text-2xl font-bold text-[#0288D1]  ">
            {" "}
            Meet Our Experts
          </h2>
        </div>
        <Expertscard />
      </section>
      <section className="bg-gray-50 py-10 text-center ">
        <div className="flex justify-center items-center gap-6 mb-6">
          <img src={Experts} alt="Medicine" className="h-[40px]" />
          <h2 className="text-2xl font-bold text-[#0288D1]  ">
            {" "}
            🧡 Testimonials – What Our Patients Say
          </h2>
        </div>
        <Testimonialcard />
      </section>
      <div>
        <Service />
      </div>
    </div>
  );
};

export default Home;
