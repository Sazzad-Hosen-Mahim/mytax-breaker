import CommonWrapper from "../../CommonWrapper/CommonWrapper";
import { useState } from "react";
import { FaCheckCircle, FaRegCircle, FaEye } from "react-icons/fa"; // Icons for active/inactive states
import HRGuidanceSection from "./HRGuidance";

const PioneeringSolution = () => {
  return (
    <div className="bg-[#004D3F] py-[50px] sm:py-[120px] md:py-[100px] relative flex justify-center">
      <CommonWrapper>
        <div className="flex flex-col md:flex-row mb-16">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-4">
            {/* <button className="bg-[#A7EB94] w-[110px] h-[40px] text-[#004D3F] text-lg px-4 py-2 flex items-center justify-center  rounded-sm cursor-pointer">
              Features
            </button> */}
            <h2 className="text-[52px] text-white md:text-5xl font-semibold leading-tight">
              Pioneering Solutions Customized for Your Requirements
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex items-center justify-center">
            <p className="text-[white] text[18px] md:text-base font-raleway  font-normal opacity-80">
              We believe in the synergy of human expertise and innovative
              technology. Through this powerful combination, we deliver top-tier
              HR outsourcing services, ensuring excellence at every step.
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center my-4"> */}

        <HRGuidanceSection />
      </CommonWrapper>
    </div>
  );
};

export default PioneeringSolution;
