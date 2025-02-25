import CommonWrapper from "../../CommonWrapper/CommonWrapper";
import { useState } from "react";
import { FaCheckCircle, FaRegCircle, FaEye } from "react-icons/fa"; // Icons for active/inactive states
import HRGuidanceSection from "./HRGuidance";

const PioneeringSolution = () => {
  return (
    <div className="bg-[#004D3F] py-[50px] sm:py-[120px] md:py-[100px] relative flex justify-center">
      <CommonWrapper>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-4">
            <button className="bg-[#A7EB94] w-[110px] h-[40px] text-[#004D3F] text-lg px-4 py-2 flex items-center justify-center  rounded-sm cursor-pointer">
              Features
            </button>
            <h2 className="text-[52px] text-white md:text-5xl font-semibold leading-tight">
              Pioneering Solutions Customized for Your Requirements
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-[white] text[18px] md:text-base font-raleway  font-normal opacity-80">
              We believe in the synergy of human expertise and innovative
              technology. Through this powerful combination, we deliver top-tier
              HR outsourcing services, ensuring excellence at every step.
            </p>
            <button className="border-[1px] border-white mt-2  text-white px-6 py-2 rounded-lg hover:bg-white hover:text-green-800 transition">
              View Pricing
            </button>
          </div>
        </div>
        {/* <div className="flex justify-center my-4"> */}
        <TabNavigation />
        {/* </div> */}
      </CommonWrapper>
    </div>
  );
};

export default PioneeringSolution;

const TabNavigation = () => {
  const tabs = [
    { id: 1, label: "Personalized Consultation", icon: <FaCheckCircle /> },
    { id: 2, label: "End-to-End Support", icon: <FaEye /> },
    { id: 3, label: "Integrated Digital Platforms", icon: <FaRegCircle /> },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="flex justify-center mt-5">
        {" "}
        <div className="flex bg-white rounded-lg shadow-md p-3 2xl:w-[800px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1
            ${
              activeTab === tab.id
                ? "bg-[#A7EB94] text-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <HRGuidanceSection />
      </div>
    </div>
  );
};
