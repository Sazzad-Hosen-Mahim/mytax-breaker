/* eslint-disable react/prop-types */
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Card = ({ image, name, designation }) => {
  return (
    <div className="relative text-black overflow-hidden w-[380px] p-4 group">
      {/* Image Container */}
      <div className="relative w-full h-[456.72px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-[386.66px] h-[456.66px] mx-auto object-cover transition-all duration-300 "
        />

        {/* Social Media Icons (Visible on Hover) */}
        {/* <div className="absolute inset-5 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#A7EB94] text-2xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#A7EB94] text-2xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#A7EB94] text-2xl hover:text-gray-300">
            <FaXTwitter />
          </a>
        </div> */}
      </div>

      {/* Name */}
      <h1 className="text-2xl font-semibold text-[#0C121D] mt-4 w-full">
        {name}
      </h1>

      {/* Designation */}
      <p className="text-gray-500 mt-1 ">{designation}</p>
    </div>
  );
};

export default Card;
