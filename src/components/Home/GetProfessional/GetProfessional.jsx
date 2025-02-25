import CommonWrapper from "../../CommonWrapper/CommonWrapper";

const GetProfessional = () => {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-[#004D3F] to-green-700 px-4 sm:px-6 lg:px-16 py-12">
      <CommonWrapper>
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
          {/* Left Side - Heading and Button */}
          <div className="flex flex-col items-start text-white">
            <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-light-green/50 hover:text-white">
              Process
            </button>
            <h1 className="font-raleway font-semibold text-2xl sm:text-4xl leading-[1.2] mt-4">
              Get Professional Instantly <br className="hidden sm:block" /> In
              Just A Few Steps
            </h1>
          </div>

          {/* Right Side - Timeline Section */}
          <div className="flex flex-col items-start text-white -ml-1 sm:ml-26 md:ml-16 lg:ml-32 xl:ml-72">
            <div className="whitespace-pre text-sm sm:text-base md:text-lg">
              Unlock access to top-tier professionals with ease.
              {"\n"}
              from search to onboard is streamlined and swift. and
              {"\n"}
              steps, elevate your team with the industry's best.
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-[170px] h-[50px] sm:h-[60px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg">
                Get Quotes
              </button>
              <button className="w-full sm:w-[252px] h-[50px] sm:h-[60px] text-white font-semibold px-4 py-2 rounded-[5px] border border-green-400">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Image and Timeline Section */}
        <div className="flex justify-between items-center mt-12 gap-4">
          <div className="hidden sm:block">
            <img
              className="w-full rounded-[25px] object-cover"
              src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/career_advice/interview_questions/cibc_financial_services_representative.webp"
              alt="Industry Process"
            />
          </div>
          <div className="">
            <div className="bg-emerald-800 p-8 rounded-lg max-w-xl">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[10px] lg:left-[18px] top-5 h-[calc(100%-8rem)] w-[2px] border-l-2 border-dashed border-white !last:border-none" />

                {/* Timeline items */}
                <div className="">
                  <div className="flex gap-6">
                    <div className="z-10 flex h-12 w-12 mt-3 items-center justify-center rounded-full bg-white text-emerald-800 font-semibold">
                      01
                    </div>
                    <div className="">
                      <h3 className="text-xl font-semibold text-white ">
                        Identify Requirements
                      </h3>
                      <p className="text-emerald-100/80">
                        Pinpointing the essentials for optimal outcomes. With
                        ZaiHR, delve deep into specific
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="relative z-10 flex h-12 w-12 mt-5 items-center justify-center rounded-full bg-white text-emerald-800 font-semibold">
                      02
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Discuss Informations
                      </h3>
                      <p className="text-emerald-100/80">
                        Engage in Enlightening Conversations. With ZaiHR, dive
                        into a realm of data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="relative z-10 flex h-12 w-12 mt-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-800 font-semibold">
                      03
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Receive Applications
                      </h3>
                      <p className="text-emerald-100/80">
                        Seamlessly Attract and Capture Candidate Interest. With
                        ZaiHR, effortlessly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default GetProfessional;
