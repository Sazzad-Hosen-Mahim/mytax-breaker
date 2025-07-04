import { FaBars } from "react-icons/fa";

interface DashboardNavbarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  setIsSidebarOpen,
}) => {
  return (
    <nav className="w-full h-16 bg-blue-900 flex items-center justify-between px-4 lg:px-8 shadow fixed lg:relative z-30">
      <div className="flex items-center">
        <button
          className="lg:hidden text-white mr-4"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <FaBars size={20} />
        </button>
        <div className="text-white text-xl font-semibold">Dashboard</div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <span className="text-white font-medium hidden sm:inline">Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Admin Avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
