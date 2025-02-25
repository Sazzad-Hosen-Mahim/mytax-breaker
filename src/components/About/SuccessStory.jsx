import bannerImage2 from "../../assets/about2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SuccessStory = () => {
    const [activeTab, setActiveTab] = useState("History");

    return (
        <div className="max-w-[1480px] h-auto w-full flex flex-col md:flex-row bg-gray-100 p-6 rounded-xl shadow-lg mx-auto mt-10 mb-20 mb:h-[1000px]">
            {/* Image Section (Hidden on Mobile and Medium Devices) */}
            <div className="hidden md:hidden lg:block lg:w-[50%] h-full">
                <img
                    src={bannerImage2}
                    alt="Business Meeting"
                    className="rounded-xl w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col w-full md:w-1/2 p-4 md:ml-4 h-full">
                {/* Tabs */}
                <div className="flex space-x-2 mb-4 justify-center md:justify-start">
                    {['History', 'Mission', 'Vision'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 w-full md:w-[148px] h-[51px] text-[#014E3F] rounded-lg border ${activeTab === tab ? 'bg-light-green text-[#014E3F]' : 'bg-white text-black'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Title */}
                <h2 className="font-[Raleway] font-semibold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[0%] mb-3 text-black text-center md:text-left">
                    Successfully Navigating Business {activeTab}
                </h2>

                {/* Description */}
                <p className="font-[Karla] font-normal text-[16px] md:text-[20px] leading-[28px] md:leading-[37px] text-justify text-gray-600 mb-4 w-full flex-1">
                    Lorem ipsum dolor sit amet consectetur. Dolor iaculis tristique velit hendrerit sagittis ultrices eros. Eleifend lectus vitae amet enim nulla quis nunc placerat tempus. Ipsum mauris vulputate feugiat elit convallis nibh. Quam nulla et feugiat accumsan sed vulputate tristique pellentesque vel. Lorem ipsum dolor sit amet consectetur. Dolor iaculis tristique velit hendrerit sagittis ultrices eros. Eleifend lectus vitae amet enim nulla quis nunc placerat tempus.
                </p>

                {/* Button (Responsive Placement for All Devices) */}
                <Link to='/book-appointment'>
                    <button className="bg-light-green text-[#014E3F] px-6 py-3 rounded-[5px] font-semibold hover:bg-green-500 hover:text-white transition w-full md:w-full h-[68px] mx-auto md:mx-0">
                        Book an Appointment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SuccessStory;
