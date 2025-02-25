// UpdatedArticles Component
import React, { useEffect, useState } from "react";
import CommonWrapper from "../../CommonWrapper/CommonWrapper";
import ArticalCards from "../../reUseAbles/ArticalCards";
import Button from "../../reUseAbles/Buttons";

const UpdatedArticles = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 md:p-10 bg-[#f5f5f5]">
      <CommonWrapper>
        <div className="mt-10 md:mt-20 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left">
            <button className="px-10 py-2 border-1 border-primary-button-text text-primary-button font-bold rounded-md cursor-pointer hover:bg-primary-button-text hover:text-white">
              Blog
            </button>
            <h2 className="text-xl md:text-3xl w-2/3 font-semibold leading-snug mt-4">
              Check Out Our Updated Articles & Resources
            </h2>
          </div>
          <div className="mt-4 lg:mt-0">
            <button className="px-12 py-4 bg-light-green text-primary-button font-bold rounded-md cursor-pointer hover:bg-light-green/60">
              More News
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-[44px] justify-center mt-6 md:mt-10">
          <div className="w-full lg:w-[50%]">
            <ArticalCards
              layout={isLargeScreen ? "vertical" : "horizontal"}
              date="June 4, 2024"
              title="The Consulting Playbook: Tactics for Success"
              description="Bring to the tables win-win survival strategies to ensure proactive domination."
              imgage="https://img.freepik.com/premium-photo/reading-documents-portfolio-business-people-meeting-planning-financial-strategy-revenue-sales-growth-vision-teamwork-senior-company-employees-working-finance-report-paperwork_590464-169190.jpg?w=360"
              buttonText={"Marketing"}
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-[50%]">
            <ArticalCards
              layout="horizontal"
              date="June 4, 2024"
              title="The Art of Consulting:
Transforming Business"
              description="Bring to the tables win-win survival strategies to ensure proactive domination."
              imgage="https://vmfservice.com/wp-content/uploads/2024/03/VMF-Service-01-1024x856.webp"
              buttonText={"Analytics"}
            />
            <ArticalCards
              layout="horizontal"
              date="June 4, 2024"
              title="Expert Perspectives:
Consulting With Growth"
              description="Offering a compass for those seeking to navigate their own ventures with skill and acumen."
              imgage="https://img.freepik.com/free-photo/boss-talking-about-company-financial-perspectives_1163-5350.jpg"
              buttonText={"Marketing"}
            />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default UpdatedArticles;
