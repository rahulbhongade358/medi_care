import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, Title, style = "" }) => {
  return (
    <div>
      <Link
        to={link}
        className={`bg-[#4FC3F7] text-white  ${style}  p-2 rounded-4xl 
         hover:bg-[#29B6F6] cursor-pointer `}
      >
        {" "}
        {Title}
      </Link>
    </div>
  );
};

export default Button;
