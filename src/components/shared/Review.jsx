import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    id: 1,
    quote:
      "Iterative approaches corporate strategy foster collaborative thinking further...",
    name: "John Martin",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    quote:
      "Dynamically innovate resource-leveling customer service for state-of-the-art solutions.",
    name: "Sarah Adams",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    quote:
      "User-generated content in real-time will have multiple touchpoints for offshoring.",
    name: "Michael Lee",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  return (
    <div>
      <div className="bg-[#004D3F] py-[100px] sm:py-[120px] md:py-[150px] relative flex justify-center">
        <div className="w-full px-4 sm:px-10 md:px-20">
          <h3 className="text-[#A7EB94] text-lg sm:text-xl md:text-2xl uppercase text-center">
            Clients Review
          </h3>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-raleway font-bold text-center mb-8">
            Incredible Client Satisfaction
          </h2>

          {/* Carousel Wrapper */}
          <div className="flex justify-center items-center w-full 2xl:mt-[100px] 2xl:gap-20">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="z-10 bg-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              <IoIosArrowBack className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Testimonial Card */}
            <div className="w-full 2xl:w-[1300px] flex justify-center items-center">
              <div
                className="bg-[#FFFFFF2B] p-6 sm:p-8 md:p-10 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-500
            max-w-[90%] sm:max-w-[80%] lg:max-w-[1300px] flex-shrink-0 border-white border-[1.5px] 2xl:w-[1300px]"
              >
                <div className="relative w-full text-center sm:text-left ">
                  <div
                    className=" w-[111px] h-[111px]  absolute hidden lg:flex lg:-top-26 left-1/2 lg:left-10 
                                transform -translate-x-1/2 lg:translate-x-0 
                                 bg-[#A7EB94] text-[#004D3F]  lg:w-[100px]  lg:h-[100px] 
                                rounded-full text-lg items-center justify-center"
                  >
                    <RiDoubleQuotesL className="w-[57px] h-[40px] rotate-180" />
                  </div>

                  <p className="text-[#F4F4F4] italic font-railway text-base sm:text-lg">
                    {testimonials[currentIndex].quote}
                  </p>
                  <h4 className="text-white font-semibold mt-4 text-lg sm:text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-white text-sm sm:text-base">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="rounded-full border-2 border-white"
                  />
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="z-10 bg-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              <IoIosArrowForward className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                  currentIndex === index ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Background Effect */}
        <div className="absolute bg-[#C2FA6B57] h-[400px] sm:h-[500px] md:h-[600px] w-[400px] sm:w-[500px] md:w-[600px] top-[20px] -left-[80px] sm:-left-[100px] md:-left-[128px] rounded-full opacity-35 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Review;
