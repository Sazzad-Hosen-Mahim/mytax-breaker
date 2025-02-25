import { useEffect, useRef, useState } from "react";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";
import Header from "../components/Home/Header/Header";
import "../assets/css/contactus.css";
import {  useInView, useAnimation } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const offices = [
  {
    name: "Germany Office",
    image:
      "https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-pixabay-269077.jpg",
    address: "Berlin, DE",
    phone: "+49 123 456",
    email: "germany@financebox.com",
    lat: 52.52,  // Add latitude
    lng: 13.405, // Add longitude
  },
  {
    name: "UK Office",
    image:
      "https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-pixabay-269077.jpg",
    address: "London, UK",
    phone: "+44 123 456",
    email: "uk@financebox.com",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    name: "USA Office",
    image:
      "https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-pixabay-269077.jpg",
    address: "New York, USA",
    phone: "+1 101 875 6553",
    email: "info@financebox.com",
    lat: 40.7128,
    lng: -74.0060,
  },
  {
    name: "Saudi Arabia's Office",
    image:
      "https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-pixabay-269077.jpg",
    address: "Riyadh, SA",
    phone: "+966 123 456",
    email: "saudi@financebox.com",
    lat: 24.7136,
    lng: 46.6753,
  },
  {
    name: "AUS Office",
    image:
      "https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-pixabay-269077.jpg",
    address: "Sydney, AUS",
    phone: "+61 123 456",
    email: "aus@financebox.com",
    lat: -33.8688,
    lng: 151.2093,
  },
  {
    name: "South Africa Office",
    image:
      "https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-pixabay-269077.jpg",
    address: "Cape Town, ZA",
    phone: "+27 123 456",
    email: "southafrica@financebox.com",
    lat: -33.9249,
    lng: 18.4241,
  },
];

const Contact = () => {
  const [activeOffice, setActiveOffice] = useState(offices[2]);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <Header
        heading={"Hello, How can we help you?"}
        para={
          "Select us because of our expertise, inventiveness, and track record of accomplishment."
        }
        buttonTitle={"Book An Appointment"}
        showStatsCard={false} /* This hides the StatsCard */
      />
      <CommonWrapper>
        <div className="lg:flex md:flex justify-center items-center min-h-screen p-4 lg:mt-72 md:mt-72">
          <div className="bg-white p-8 rounded-2xl element lg:w-full md:w-full lg:mx-14 md:mx-14">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-2 text-[#010205] text-2xl font-semibold ps-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7EB94]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-[#010205] text-2xl font-semibold ps-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7EB94]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-[#010205] text-2xl font-semibold ps-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7EB94]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-[#010205] text-2xl font-semibold ps-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help"
                  className="p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7EB94]"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="mb-2 text-[#010205] text-2xl font-semibold ps-1">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message here..."
                  className="p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7EB94] h-32"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-8">
                <button
                  type="submit"
                  className="w-full bg-[#A7EB94] text-[#004D3F] text-2xl font- py-3 rounded-md cursor-pointer hover:bg-[#7fc26c]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </CommonWrapper>

      <div className="flex w-full mx-auto justify-center items-center bg-gray-100 p-4 mt-20 lg:mt-0 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center border-b lg:border-b-0 md:border-b-0 border-r-0 lg:border-r-2 lg:border-[#004D3F] md:border-r-2 md:border-[#004D3F] cursor-pointer ${
                activeOffice.name === office.name ? "w-full border-none" : ""
              } ${
                activeOffice.name === office.name ? "bg-white" : "bg-gray-100"
              }`}
              onClick={() => setActiveOffice(office)}
            >
              {activeOffice.name === office.name ? (
                <div className="flex flex-col gap-1 items-left justify-center p-4 bg-[#004D3F] shadow-md">
                  <img
                    src={activeOffice.image}
                    alt={activeOffice.name}
                    className="rounded-md mb-4"
                  />
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    {activeOffice.name}
                  </h3>
                  <p className="flex items-center gap-2 text-white mb-1">
                    <FaLocationDot className="text-[#A7EB94]" />
                    <span className="opacity-60">{activeOffice.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-white mb-1">
                    <IoCall className="text-[#A7EB94]" />{" "}
                    <span className="opacity-60">{activeOffice.phone}</span>
                  </p>
                  <p className="flex items-center gap-2 text-white mb-1">
                    <IoMdMail className="text-[#A7EB94]" />{" "}
                    <span className="opacity-60">{activeOffice.email}</span>
                  </p>
                </div>
              ) : (
                <p className="transform lg:-rotate-90 md:-rotate-90 whitespace-nowrap text-2xl text-[#004D3F] font-medium my-6 lg:my-0 md:my-0">
                  {office.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <CommonWrapper>
        <h2 className="text-4xl font-semibold text-center text-[#0C121D] mt-32">
          Find Us On Google Map
        </h2>
        <div ref={ref} className="mb-24 ">
          <div className="mapouter relative text-right w-full h-[400px] mt-12">
            <div className="gmap_canvas">
              <iframe
                title="Google Map"
                className="gmap_iframe w-full h-[739px]"
                src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${activeOffice.lat},${activeOffice.lng}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
              ></iframe>
            </div>
            <style>
              {`
                .mapouter {
                  position: relative;
                  width: 100%;
                  height: 400px;
                }
                .gmap_canvas {
                  overflow: hidden;
                  background: none !important;
                  width: 100%;
                  height: 400px;
                }
                .gmap_iframe {
                  width: 100% !important;
                  height: 400px !important;
                }
              `}
            </style>
          </div>
        </div>
      </CommonWrapper>

    </div>
  );
};

export default Contact;
