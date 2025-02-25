import { Link } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";
import { footerNavData } from "../data/footerData";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const icons = [
  {
    icon: FaFacebook,
  },
  {
    icon: FaInstagramSquare,
  },
  {
    icon: FaLinkedin,
  },
];

const Footer = () => {
  return (
    <div className="bg-footer-background">
      <CommonWrapper>
        <div className="py-[100px] px-4 sm:px-6 md:px-8 lg:px-12">
          {/* === Footer Top === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-3xl sm:text-4xl font-railway font-bold">
                Financy
              </h3>
              <p className="max-w-[430px] text-lg sm:text-xl text-white opacity-50">
                The management of revenue the conduct or transaction of the
                money matter generally, specially those affecting the public
              </p>
            </div>

            {/* Right Side (Navigation Links) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {footerNavData.map((item, index) => (
                <div key={index}>
                  <p className="text-lg sm:text-xl font-semibold text-white font-railway mb-3.5">
                    {item.header}
                  </p>
                  <div>
                    {item.links.map((navItem, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={navItem.url}
                        className="text-white opacity-50 text-base sm:text-lg block font-normal"
                      >
                        {navItem.Label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Divider === */}
          <div className="border-t border-white border-[1.5px] my-11"></div>

          {/* === Copyright & Social Icons === */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base sm:text-lg text-white text-center md:text-left">
              Copyright 2024 <span className="font-bold">Financy</span> reserved
            </p>
            <div className="flex gap-4">
              {icons.map((item, index) => {
                const SelectedIcon = item.icon;
                return (
                  <p
                    key={index}
                    className="border-[1.5px] border-white rounded-full flex items-center justify-center p-2"
                  >
                    <SelectedIcon className="text-white" />
                  </p>
                );
              })}
            </div>
          </div>

          {/* === Newsletter Section === */}
          <div className="w-full bg-light-green p-8 sm:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
            <div className="flex gap-4 items-center">
              <p className="bg-black rounded-full flex items-center justify-center p-5">
                <FaMessage className="text-white text-2xl" />
              </p>
              <div>
                <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#004D3F]">
                  Join our newsletter now
                </h5>
                <p className="text-base sm:text-lg text-[#004D3FCC] opacity-80">
                  Be part of 500k community thriving with ZaiHR
                </p>
              </div>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 pr-16 bg-white rounded-full focus:outline-none text-sm sm:text-base"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#004D3F] text-white px-4 py-2 rounded-full text-xs sm:text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};
export default Footer;

const footerTextWithOpdacity = ({ text }) => {
  return <p className="text-[18px] text-white opacity-50">{text}</p>;
};
