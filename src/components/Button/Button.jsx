import React from "react";
import { Link } from "react-router-dom";

const Button = ({buttonText, buttonLink}) => {
  return (
    <Link to={buttonLink} className="flex items-center justify-center gap-[10px] px-6 py-5 border border-[#30D5C8] bg-[#00FFFF] hover:bg-[#30D5C8] transition-colors duration-500 rounded-md">
      <p className="text-[18px] text-[#000031]   font-semibold leading-[120%]">{buttonText}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12.0002L19.5566 12.0003M15 7.0002L20 12.0003L15 17.0002"
          stroke="#000031"
          stroke-width="2"
        />
      </svg>
    </Link>
  );
};

export default Button;
