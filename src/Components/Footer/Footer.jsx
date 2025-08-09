import { Link } from "react-router-dom";
import React from "react";
import Facebook from "./../../assets/Doctors/Footer logo/facebook.png";
import Instagram from "./../../assets/Doctors/Footer logo/instagram.png";
import Linkedin from "./../../assets/Doctors/Footer logo/linkedin.png";
import Twitter from "./../../assets/Doctors/Footer logo/twitter.png";
import Youtube from "./../../assets/Doctors/Footer logo/Youtube.png";
const Footer = () => {
  return (
    <div className="h-full  bg-[#0D47A1] text-white">
      <div className=" flex flex-row justify-between items-start ">
        <div className="m-3  items-start w-1/3  justify-center">
          <p className="text-4xl p-4 font-bold items-center text-center font-serif">
            MediCare+
          </p>
          <p className=" text-sm pl-1 max-w-[400px] font-serif leading-relaxed text-justify ">
            {" "}
            MediCare+ is a modern healthcare web platform designed to simplify
            the process of patient diagnosis and treatment. With role-based
            access for doctors, nurses, and patients, MediCare+ ensures
            efficient communication, accurate medical records, and faster
            diagnosis. Our mission is to combine human expertise with technology
            for better, smarter healthcare delivery.
          </p>
          <div className="  flex flex-col items-center justify-center">
            <p className="text-2xl p-3  font-serif">Follow Us</p>
            <div className=" font-serif flex flex-row  gap-4  text-center  ">
              <div className="flex flex-col items-center">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-9 h-9 cursor-pointer"
                  />
                </a>
                <span className="text-xs mt-1">Facebook</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-9 h-9 cursor-pointer"
                  />
                </a>
                <span className="text-xs mt-1">Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="w-9 h-9 cursor-pointer"
                  />
                </a>
                <span className="text-xs mt-1">Youtube</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-9 h-9 cursor-pointer"
                  />
                </a>
                <span className="text-xs mt-1">Twitter</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Linkedin}
                    alt="Linkedin"
                    className="w-9 h-9 cursor-pointer"
                  />
                </a>
                <span className="text-xs mt-1">Linkedin</span>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3  flex flex-col items-center justify-center">
          <p className="text-2xl text-justify p-4 font-bold font-serif">
            Quick Link
          </p>
          <p className="text-[14px] font-serif flex flex-col items-start gap-2 text-justify ">
            <Link to="/">Home</Link>
            <Link to="/about"> About Us</Link>
            <Link to="/contact"> Contact Us</Link>
            <Link to="/login"> Login / Sign Up</Link>
            <Link to="/signup"> Privacy Policy</Link>
            <Link to="/signup"> Terms & Conditions</Link>
          </p>
        </div>
        <div className="m-3 flex flex-col items-center justify-center w-1/4">
          <p className="text-2xl p-4 font-bold font-serif text-justify">
            Contact Us
          </p>
          <div className=" text-[13px] font-serif flex flex-col items-center gap-2 text-center">
            <p className="text-sm font-serif max-w-4xl leading-relaxed text-justify pl-1">
              <span>
                <span className="font-bold">📍 Address:</span> MediCare+ Health
                Pvt. Ltd., 3rd Floor, HealthTech Building, Pune, Maharashtra,
                India - 411001
              </span>
              <span>
                <span className="font-bold">📞 Phone:</span> +91 9876543210
              </span>
              <span>
                <span className="font-bold">📧 Email:</span>
                support@medicareplus.in
              </span>
              <span>
                <span className="font-bold">🕒Working Hours:</span> Monday to
                Saturday - 9:00 AM to 6:00 PM
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="  px-4   py-4">
        <p className="text-xl font-semibold underline underline-offset-4 decoration-wavy font-serif mb-2">
          Disclaimer:
        </p>
        <p className="text-sm font-serif max-w-4xl leading-relaxed text-justify pl-1">
          MediCare+ does not provide emergency medical services. For
          life-threatening conditions, please contact local emergency numbers or
          visit the nearest hospital. The information provided on this website
          is intended for educational and general purposes only.
        </p>
      </div>
      <div className="flex justify-center   px-4   py-4">
        <p className="text-sm font-serif ">
          © 2025 MediCare+ Health Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
