import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="lg:flex">
      <DashboardSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <DashboardNavbar setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
