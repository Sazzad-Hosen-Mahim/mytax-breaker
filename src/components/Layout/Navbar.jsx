import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-[#175D4E] text-white py-4 px-6">
      <div className="flex justify-between items-center w-full lg:w-[1320px] mx-auto">
        {/* Logo at Start */}
        <div className="text-xl">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Large Screen Navigation */}
        <div
          className={`lg:flex items-center gap-10 ${
            menuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-[#175D4E] p-5"
              : "hidden"
          } lg:static lg:flex-row lg:bg-transparent lg:p-0`}
        >
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "home" ? "text-[#a7eb94]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "about" ? "text-[#a7eb94]" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => handleLinkClick("services")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "services" ? "text-[#a7eb94]" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => handleLinkClick("contact")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "contact" ? "text-[#a7eb94]" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/team"
            onClick={() => handleLinkClick("team")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "team" ? "text-[#a7eb94]" : ""
            }`}
          >
            Team
          </Link>
          <Link
            to="/book-appointment"
            onClick={() => handleLinkClick("pricing")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "pricing" ? "text-[#a7eb94]" : ""
            }`}
          >
            Pricing
          </Link>
        </div>

        {/* Right Section */}
        <div className="lg:flex items-center gap-4 hidden">
          {/* Search Icon or Search Bar */}
          <div className="relative">
            {searchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-md text-white outline-1 outline-light-green focus:outline-[#A7EB94]"
                onBlur={() => setSearchOpen(false)}
              />
            ) : (
              <div
                className="w-12 h-12 rounded-full border border-gray-300 flex justify-center items-center cursor-pointer"
                onClick={() => setSearchOpen(true)}
              >
                <RiSearchLine className="text-xl" />
              </div>
            )}
          </div>

          {/* Get Started Button */}
          <div className="flex items-center justify-center gap-2 bg-[#A7EB94] text-[#004D3F] p-3 rounded-xl">
            <button className="text-lg cursor-pointer">Get Started</button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex w-full absolute left-0 top-0 px-6 py-4 bg-[#175D4E] items-center justify-between">
          {/* Logo at Start */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 " />
            </Link>
          </div>

          {/* Search Icon in the Middle */}
          <div className="flex-1 flex justify-center">
            {searchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                className="p-2 w-full max-w-[100px] rounded-md text-white bg-[#2A7B6B] outline-none focus:outline-[#A7EB94]"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center cursor-pointer"
                onClick={() => setSearchOpen(true)}
              >
                <RiSearchLine className="text-xl" />
              </div>
            )}
          </div>

          {/* Get Started Button and Burger Icon at End */}
          <div className="flex items-center gap-4">
            <div className="bg-[#A7EB94] text-[#004D3F] p-2 rounded-lg">
              <button className="text-sm px-2 font-bold">Get Started</button>
            </div>
            <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
