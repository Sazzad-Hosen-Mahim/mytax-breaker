import Card from "../components/Team/Card";
import woman1 from "../assets/team/woman1.png";
import woman2 from "../assets/team/woman2.png";
import woman3 from "../assets/team/woman3.png";
import StatsCards from "../components/About/StatsCards";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if clicked again
    } else {
      setActiveIndex(index); // Open the accordion
    }
  };
  const handleContact = () =>{
    navigate("/contact");
  }
  return (
    <div>
      <div className="bg-[#004D3F] w-full flex flex-col items-center justify-center py-10 text-center">
        {/* Team Member Section */}
        <div className="bg-[#A7EB94] text-[#004D3F] text-lg font-bold px-3 py-2 rounded-full">
          Team Member
        </div>

        {/* Title: Stars of our Intelligence Team */}
        <div className="mt-6 text-white text-6xl font-semibold">
          Stars of our Intelligence Team
        </div>

        {/* Description Paragraph */}
        <p className="mt-4 text-white max-w-[800px] text-lg px-6 pb-14">
          Their contributions and exceptional skills illuminate the path to
          success, guiding our efforts toward innovation and proficiency within
          our intelligence operations.
        </p>
      </div>
      <div className="bg-white flex flex-wrap justify-center gap-8 md:gap-16 p-6">
        <Card
          image={woman2}
          designation={"Business Strategist"}
          name={"Emily Thompson"}
        />
        <Card
          image={woman3}
          designation={"Marketing Specialist"}
          name={"Sarah Rodriguez"}
        />
        <Card
          image={woman1}
          designation={"HR Advisor"}
          name={"Jessica Patel"}
        />
      </div>
      <div className="bg-white flex flex-wrap justify-center gap-8 md:gap-16 p-6">
        <Card
          image={woman2}
          designation={"Business Strategist"}
          name={"Emily Thompson"}
        />
        <Card
          image={woman3}
          designation={"Marketing Specialist"}
          name={"Sarah Rodriguez"}
        />
        <Card
          image={woman1}
          designation={"HR Advisor"}
          name={"Jessica Patel"}
        />
      </div>
      <div className="bg-white flex flex-wrap justify-center gap-8 md:gap-16 p-6">
        <Card
          image={woman2}
          designation={"Business Strategist"}
          name={"Emily Thompson"}
        />
        <Card
          image={woman3}
          designation={"Marketing Specialist"}
          name={"Sarah Rodriguez"}
        />
        <Card
          image={woman1}
          designation={"HR Advisor"}
          name={"Jessica Patel"}
        />
      </div>
      <div className="flex  justify-center p-6 mb-16 mt-5">
        <StatsCards/>
      </div>
      <div className="bg-[#004D3F] min-h-screen flex items-center justify-center p-8">
  <div className="flex max-w-6xl mx-auto space-x-8 flex-col md:flex-row"> {/* Flex direction changes for mobile */}
    {/* Left side content: FAQ, paragraph, and button */}
    <div className="flex-1 text-white space-y-6">
      <h1 className="text-4xl font-semibold">FAQs</h1>
      <p className="text-lg">Here you can find answers to the most frequently asked questions.</p>
      <button className="bg-[#A7EB94] text-[#004D3F] py-4 px-12 rounded-full cursor-pointer" onClick={handleContact}>Contact</button>
    </div>

    {/* Right side content: Accordion with all-around border */}
    <div className="flex-1 mt-6 md:mt-0"> {/* Added margin-top for mobile, removes it for desktop */}
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="border border-white rounded-lg p-4">
            <div className="flex justify-between gap-12 md:gap-52"> {/* Adjusted gap for mobile */}
              <h3 className="text-xl text-white">Question Text goes here</h3>
              <button
                className="text-[#A7EB94] text-2xl"
                onClick={() => toggleAccordion(index)}
              >
                {activeIndex === index ? '-' : '+'}
              </button>
            </div>
            {activeIndex === index && (
              <div className="text-white mt-2">
                <p>This is where the answer to the question will go.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Team;
