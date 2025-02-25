import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoBagHandle } from "react-icons/io5";
import { RiGroupFill } from "react-icons/ri";
import { TiStarburst } from "react-icons/ti";

const StatsCards = () => {

    return (

        <div className=" w-full max-w-[1480px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:-mt-40 -mt-4 lg:mt-6 md:mt-30">
            <div className="w-full h-[287px] flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md text-center overflow-hidden">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full mt-6 ml-6">
                    <div className="w-14 h-14 rounded-full bg-light-green flex items-center justify-center">
                        <HiMiniUserGroup className="w-9 h-9 text-black" />
                    </div>
                </div>

                {/* Text Content (Properly Aligned Inside the Card) */}
                <h3 className="mt-2 text-[36px] font-raleway font-semibold leading-[42px] tracking-normal">
                    70k+
                </h3>
                <p className="text-gray-600 font-[400] text-[20px] leading-[24px] tracking-[0%] font-[Karla]">
                    Our Global Clients
                </p>
            </div>


            <div className="w-full h-[287px] flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md text-center overflow-hidden">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full mt-6 ml-6">
                    <div className="w-14 h-14 rounded-full bg-light-green flex items-center justify-center">
                        <RiGroupFill className="w-9 h-9 text-black" />
                    </div>
                </div>

                {/* Text Content (Properly Aligned Inside the Card) */}
                <h3 className="mt-2 text-[36px] font-raleway font-semibold leading-[42px] tracking-normal">
                    150+
                </h3>
                <p className="text-gray-600 font-[400] text-[20px] leading-[24px] tracking-[0%] font-[Karla]">
                    Team Members
                </p>
            </div>


            <div className="w-full h-[287px] flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md text-center overflow-hidden">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full mt-6 ml-6">
                    <div className="w-14 h-14 rounded-full bg-light-green flex items-center justify-center">
                        <IoBagHandle className="w-9 h-9 text-black" />
                    </div>
                </div>

                {/* Text Content (Properly Aligned Inside the Card) */}
                <h3 className="mt-2 text-[36px] font-raleway font-semibold leading-[42px] tracking-normal">
                    15+
                </h3>
                <p className="text-gray-600 font-[400] text-[20px] leading-[24px] tracking-[0%] font-[Karla]">
                    Business Experience
                </p>
            </div>

            <div className="w-full h-[287px] flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md text-center overflow-hidden">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full mt-6 ml-6">
                    <div className="w-14 h-14 rounded-full bg-light-green flex items-center justify-center">
                        <TiStarburst className="w-9 h-9 text-black" />
                    </div>
                </div>

                {/* Text Content (Properly Aligned Inside the Card) */}
                <h3 className="mt-2 text-[36px] font-raleway font-semibold leading-[42px] tracking-normal">
                    25%
                </h3>
                <p className="text-gray-600 font-[400] text-[20px] leading-[24px] tracking-[0%] font-[Karla]">
                    Profit Increase
                </p>
            </div>
        </div>

    );
};

export default StatsCards;
