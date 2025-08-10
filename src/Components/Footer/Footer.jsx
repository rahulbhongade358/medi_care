import { Link } from "react-router-dom";
import React from "react";
import Facebook from "./../../assets/Doctors/Footer logo/facebook.png";
import Instagram from "./../../assets/Doctors/Footer logo/instagram.png";
import Linkedin from "./../../assets/Doctors/Footer logo/linkedin.png";
import Twitter from "./../../assets/Doctors/Footer logo/twitter.png";
import Youtube from "./../../assets/Doctors/Footer logo/youtube.png";
const Footer = () => {
  return (
    <div className="h-full bg-[#0D47A1] text-white">
      <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between items-start gap-6 p-4">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <p className="text-3xl sm:text-4xl p-2 font-bold text-center font-serif">
            MediCare+
          </p>
          <p className="text-sm font-serif leading-relaxed text-justify">
            {" "}
            MediCare+ is a modern healthcare web platform designed to simplify
            the process of patient diagnosis and treatment. With role-based
            access for doctors, nurses, and patients, MediCare+ ensures
            efficient communication, accurate medical records, and faster
            diagnosis. Our mission is to combine human expertise with technology
            for better, smarter healthcare delivery.
          </p>
          <div className="flex flex-col items-center mt-4">
            <p className="text-xl sm:text-2xl p-2 font-serif">Follow Us</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                {
                  icon: Facebook,
                  name: "Facebook",
                  link: "https://www.facebook.com",
                },
                {
                  icon: Instagram,
                  name: "Instagram",
                  link: "https://www.instagram.com",
                },
                {
                  icon: Youtube,
                  name: "Youtube",
                  link: "https://www.youtube.com",
                },
                {
                  icon: Twitter,
                  name: "Twitter",
                  link: "https://www.twitter.com",
                },
                {
                  icon: Linkedin,
                  name: "Linkedin",
                  link: "https://www.linkedin.com",
                },
              ].map((social, i) => (
                <div key={i} className="flex flex-col items-center">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer"
                    />
                  </a>
                  <span className="text-xs mt-1">{social.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center sm:items-start">
          <p className="text-xl sm:text-2xl p-2 font-bold font-serif">
            Quick Link
          </p>
          <div className="text-sm font-serif flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/about"> About Us</Link>
            <Link to="/contact"> Contact Us</Link>
            <Link to="/login"> Login / Sign Up</Link>
            <Link to="/signup"> Privacy Policy</Link>
            <Link to="/signup"> Terms & Conditions</Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center sm:items-start">
          <p className="text-xl sm:text-2xl p-2 font-bold font-serif">
            Contact Us
          </p>
          <div className="text-sm font-serif leading-relaxed text-justify">
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
          </div>
        </div>
      </div>
      <div className="  px-4   py-4">
        <p className="text-lg sm:text-xl font-semibold underline underline-offset-4 decoration-wavy font-serif mb-2">
          Disclaimer:
        </p>
        <p className="text-sm font-serif leading-relaxed text-justify">
          MediCare+ does not provide emergency medical services. For
          life-threatening conditions, please contact local emergency numbers or
          visit the nearest hospital. The information provided on this website
          is intended for educational and general purposes only.
        </p>
      </div>
      <div className="flex justify-center px-4 py-4">
        <p className="text-xs sm:text-sm font-serif">
          © 2025 MediCare+ Health Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
