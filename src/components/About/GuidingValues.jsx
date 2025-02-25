import React from 'react';
import { BsFileBarGraph } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuSquareUser } from 'react-icons/lu';
import { SlBadge } from 'react-icons/sl';

const GuidingValues = () => {
    return (
        <div className="mt-40 mb-20 max-w-[1480px] mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">Guiding Values Define Our Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {[
                    { icon: FaWpforms, title: "Adaptability", text: "Fostering teamwork, listening to clients, achieving successes." },
                    { icon: HiMiniUserGroup, title: "Collaboration", text: "Fostering teamwork, listening to clients, achieving successes." },
                    { icon: IoSettingsOutline, title: "Innovation", text: "Innovative solutions crafted through creativity for client success." },
                    { icon: BsFileBarGraph, title: "Empowerment", text: "Empowering clients with tools for informed decisions, sustainable growth." },
                    { icon: SlBadge, title: "Excellence", text: "Committed to exceeding expectations with top-tier solutions and services." },
                    { icon: LuSquareUser, title: "Integrity", text: "Ethical, transparent, and accountable interactions at the highest standard." }
                ].map((item, index) => (
                    <div key={index} className="group w-full max-w-[460px] h-auto bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:bg-[#A7EB94]">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="mt-3 ml-6 relative w-[80px] h-[80px] bg-[#A7EB94] rounded-full group-hover:bg-white transition-all flex items-center justify-center">
                                <item.icon className="text-black text-3xl" />
                            </div>
                            <h3 className="mt-4 ml-6 text-2xl md:text-3xl font-semibold leading-[42px] tracking-[0%] font-raleway">
                                {item.title}
                            </h3>
                            <p className="mt-2 ml-6 text-gray-600 text-left font-karla text-lg leading-[30px] tracking-[0%]">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuidingValues;
