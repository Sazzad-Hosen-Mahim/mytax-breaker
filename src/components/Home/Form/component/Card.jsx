/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex items-center bg-[#0000000F] w-full md:w-[338px] h-[99px] p-4 rounded-lg shadow">
      {/* Icon */}
      <div className="text-[#A7EB94] text-4xl bg-[#004D3F] w-12 h-12 flex items-center justify-center rounded-full">
        {icon}
      </div>

      {/* Text Content */}
      <div className="ml-4">
        <h3 className="text-lg font-bold text-[#0C121D]">{title}</h3>
        <p className="text-[#0C121D99]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
