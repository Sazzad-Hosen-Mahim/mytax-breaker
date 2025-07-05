import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import imgLogo from "../../assets/logo/logo.png";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      id="sidebar"
      className={`fixed lg:relative z-40 w-[300px] bg-blue-900 h-screen flex flex-col p-6 transition-all duration-300 ease-in-out ${
        isOpen ? "left-0" : "-left-full lg:left-0"
      }`}
    >
      <div className="mb-16">
        <Link to={"/"}>
          <img src={imgLogo} alt="" />
        </Link>
      </div>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin/dashboard"
          end
          className={({ isActive }) =>
            `font-bold py-2 px-4 rounded text-left transition ${
              isActive
                ? "bg-[#0e0f5c] text-white"
                : "hover:bg-gray-600 text-white hover:text-white"
            }`
          }
          onClick={() => setIsOpen(false)}
        >
          All Bookings
        </NavLink>
        <NavLink
          to="/admin/dashboard/settings"
          className={({ isActive }) =>
            `font-bold py-2 px-4 rounded text-left transition ${
              isActive
                ? "bg-[#0e0f5c] text-white"
                : "hover:bg-gray-600 text-white hover:text-white"
            }`
          }
          onClick={() => setIsOpen(false)}
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
