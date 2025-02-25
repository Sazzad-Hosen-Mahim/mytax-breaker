/* eslint-disable react/prop-types */
import React from "react";

import "@fontsource/raleway";
import "@fontsource/urbanist";
import { MdOutlineTaskAlt } from "react-icons/md";

const PricingCard = ({ bgColor, price, planType }) => {
  return (
    <div
      className={`w-[420px] h-[557px] mt-4 ${bgColor} rounded-3xl flex flex-col p-6 shadow-lg absolute-top relative`}
    >
      {/* Toggle Button Placeholder */}
      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-10">
        {/* ToggleButton will be placed here */}
      </div>

      {/* Adjusted Upper Section for Pill Shape */}
      {/* <div className="w-[229px] h-[60px] bg-[#004D3F] rounded-full mx-auto mb-4"></div> */}

      {/* Per Month/Year Section */}
      <p className="text-lg text-[#004D3F] font-urbanist">{planType}</p>

      {/* Price Section */}
      <div className="flex items-center gap-2">
        <p className="font-raleway text-[47.39px] font-bold text-[#004D3F]">
          ${price}
        </p>
        <span className="bg-[#004D3F] text-[#A7EB94] text-xs font-urbanist px-2 py-1 rounded-md">
          Save 20%
        </span>
      </div>

      {/* Plan Title */}
      <p className="text-[14.58px] font-urbanist text-[#004D3F]">
        For Pro Business - Medium
      </p>

      {/* Divider */}
      <hr className="border-t border-[#004D3F] my-2" />

      {/* Features List */}
      <ul className="text-[14.58px] font-urbanist text-[#004D3F] leading-[23.7px] flex-grow flex flex-col justify-center space-y-2">
        <li className="flex items-center gap-1">
          <MdOutlineTaskAlt />
          <span>Initial consultation plan.</span>
        </li>
        <li className="flex items-center gap-1">
          <MdOutlineTaskAlt />
          <span>Customized action plan.</span>
        </li>
        <li className="flex items-center gap-1">
          <MdOutlineTaskAlt />
          <span>Email support for 30 days.</span>
        </li>
        <li className="flex items-center gap-1">
          <MdOutlineTaskAlt />
          <span>Phone and email support.</span>
        </li>
        <li className="flex items-center gap-1">
          <MdOutlineTaskAlt />
          <span>Comprehensive business analysis.</span>
        </li>
        <li className="flex items-center gap-1">
          <MdOutlineTaskAlt />
          <span>Implementation support.</span>
        </li>
      </ul>

      {/* Call to Action Button */}
      <button className="w-[356px] h-[59px] bg-[#004D3F] text-[#A7EB94] font-urbanist text-lg rounded-full mt-6 cursor-pointer hover:bg-primary-button-text/80">
        Try Free 30 Days
      </button>
    </div>
  );
};

export default PricingCard;
