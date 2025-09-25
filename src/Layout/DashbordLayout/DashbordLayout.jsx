import { Outlet } from "react-router-dom";
import { DashboardNav } from "../../navbar/dashbordNavbar";
import { Menu, X } from "lucide-react";
import React from "react";
import { Footer } from "../../components/footer";

function DashboardRoute() {
  const [isOpen, setIsopen] = React.useState(false);

  const toggleSidebar = () => {
    setIsopen(!isOpen);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Layout Container */}
      <div className="flex">
        {/* Sidebar - Fixed position */}
        <aside className="fixed top-0 left-0 z-48 h-screen transition-transform">
          <DashboardNav isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
          {" "}
          {/* Add margin to prevent sidebar overlap */}
          {/* Header - Fixed */}
          <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white shadow-md">
            <div className="flex items-center justify-between h-16 px-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-[#111112] hover:text-[#d5b7f3] hover:bg-black h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <img src="/logo.png" alt="logo" className="h-14" />
            </div>
          </header>
          {/* Main Content - Scrollable */}
          <main className="flex-grow mt-16 p-4 overflow-auto">
            <div className="container mx-auto">
              <Outlet />
            </div>
          </main>
          {/* Footer - Always at bottom */}
          <footer className="mt-auto bg-white shadow-inner">
            <div className="container mx-auto">
              <Footer />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default DashboardRoute;
