import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = ({ setIsSidebarOpen }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    navigate("/");
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-16 bg-[#004c3f] flex items-center justify-between px-4 lg:px-8 shadow fixed lg:relative z-30">
      <div className="flex items-center">
        <button
          className="lg:hidden text-white mr-4"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <FaBars size={20} />
        </button>
        <div className="text-white text-xl font-semibold">Dashboard</div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6 relative">
        <span className="text-white font-medium hidden sm:inline">Admin</span>
        <div className="relative" ref={popoverRef}>
          <button
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            className="focus:outline-none"
          >
            <img
              src="https://ui-avatars.com/api/?name=Admin"
              alt="Admin Avatar"
              className="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
            />
          </button>

          {isPopoverOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
