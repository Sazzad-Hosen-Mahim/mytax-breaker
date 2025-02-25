import vector1 from "../../assets/vector1.png";
import line1 from "../../assets/line1.png";



const Timeline = () => {
    const events = [
        { date: "2019 - March", title: "Foundation" },
        { date: "2020 - June", title: "Expansion" },
        { date: "2021 - September", title: "Innovation" },
        { date: "2022 - December", title: "Globalization" },
        { date: "2023 - May", title: "Leadership" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#004D3F] to-green-700 flex items-center justify-center px-4 sm:px-6 lg:px-16 py-12">
            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


                {/* Left Side - Heading and Button */}
                <div className="flex flex-col items-start lg:self-start text-white">
                    <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg">
                        Our Story
                    </button>
                    <h1 className="font-raleway font-semibold text-2xl sm:text-4xl leading-[1.2] mt-4">
                        Share Your Journey <br className="hidden sm:block" /> From The Beginning To Now
                    </h1>
                </div>


                {/* Timeline Section */}
                <div className="w-full max-w-[700px] bg-[#004D3F] bg-opacity-50 p-6 sm:p-8 rounded-lg shadow-lg relative">

                    {events.map((event, index) => (
                        <div key={index} className="relative pl-6 sm:pl-10 pb-6 border-l border-white last:pb-0">
                            {/* Timeline Dot with Gradient */}
                            <div className="w-[48px] h-[54px] absolute left-[-14px] sm:left-[-16px] top-2 flex items-center justify-center rotate-0 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={vector1} // Replace with the appropriate image source
                                    alt="icon"
                                    className="w-full h-full object-cover" // Use full width and height for the image to ensure it fits the container
                                />
                            </div>

                            <div className="ml-10 sm:ml-12">
                                <p className="text-white text-sm sm:text-base font-bold">
                                    {event.date}
                                </p>
                                <h2 className="text-white text-lg sm:text-2xl font-semibold">
                                    {event.title}
                                </h2>
                                <p className="text-white text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>




            </div>
        </div>
    );
};

export default Timeline;
