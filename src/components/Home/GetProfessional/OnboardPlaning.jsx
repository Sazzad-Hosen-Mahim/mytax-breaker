import CommonWrapper from "../../CommonWrapper/CommonWrapper";

const OnboardPlaning = () => {
  return (
    <div className=" mb-40">
      <CommonWrapper>
        <svg
          className="hidden lg:block lg:absolute left-0 top-[1376px] w-full -z-10"
          height="250"
          viewBox="0 0 1821 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1 20 C900 100, 1621 50, 1851 30"
            stroke="gray"
            strokeWidth="0.5"
            fill="transparent"
          />
        </svg>
        <div className="lg:mt-[650px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="w-full flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 ">
            <div className="w-[50px] h-[50px] rounded-full bg-[#004D3F] flex items-center justify-center text-white text-3xl font-semibold relative">
              1
            </div>

            <h3 className="text-2xl font-medium text-gray-800 mt-6">
              Onboarding
            </h3>
            <p className="text-gray-600 mt-3">
              Analyze data to identify growth areas and provide actionable
              solutions.
            </p>
          </div>

          <div className=" w-full  flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 ">
            <div className="w-[50px] h-[50px]  rounded-full bg-[#004D3F] flex items-center justify-center text-white text-3xl font-semibold relative">
              2
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mt-6">
              Planning
            </h3>
            <p className="text-gray-600 mt-3">
              Develop a comprehensive strategy based on insights and findings
              from onboarding.
            </p>
          </div>

          <div className="w-full h-[320px] flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 ">
            <div className="w-[50px] h-[50px] rounded-full bg-[#004D3F] flex items-center justify-center text-white text-3xl font-semibold relative">
              3
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mt-6">
              Implementation
            </h3>
            <p className="text-gray-600 mt-3">
              Execute the plan, monitor results, and optimize for sustained
              success.
            </p>
          </div>
        </div>
      </CommonWrapper>
      {/* Curved HR Line */}

      <button className=" bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-[5px] text-center flex mx-auto cursor-pointer hover:bg-[#A7EB94]/70">
        Get In Teach
      </button>
    </div>
  );
};

export default OnboardPlaning;
