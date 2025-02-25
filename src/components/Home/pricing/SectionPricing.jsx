import { useEffect, useState } from "react";
import ToggleButton from "./ToogleButton";
import PricingCard from "./PricingCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to toggle mobile mode
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile when width < 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const pricingData = [
    { bgColor: "bg-gray-200", price: 100, planType: "Per month" },
    {
      bgColor: "bg-[#A7EB94]",
      price: isMonthly ? 150 : 1350,
      planType: isMonthly ? "Per month" : "Per year",
    },
    { bgColor: "bg-gray-200", price: 200, planType: "Per month" },
  ];

  return (
    <div className="flex justify-center items-center mb-10 mt-5 lg:mt-36">
      <div className={`flex gap-6 relative flex-col lg:flex-row`}>
        {/* Left Pricing Card (Gray) */}
        <PricingCard bgColor="bg-gray-200" price={100} planType="Per month" />

        {/* Middle Pricing Card with Toggle Button */}
        <div className="relative">
          {/* Toggle Button Positioned Above the Middle Card */}
          <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-10 hidden sm:block p-1">
            <ToggleButton onToggle={setIsMonthly} />
          </div>
          {/* Middle Card (Green: #A7EB94) */}
          <PricingCard
            bgColor="bg-[#A7EB94]"
            price={isMonthly ? 150 : 1350}
            planType={isMonthly ? "Per month" : "Per year"}
          />
        </div>

        {/* Right Pricing Card (Gray) */}
        <PricingCard bgColor="bg-gray-200" price={200} planType="Per month" />
      </div>
    </div>
  );
};

export default PricingSection;
