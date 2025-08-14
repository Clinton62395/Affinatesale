import { Outlet } from "react-router-dom";
import { DashboardNav } from "../../navbar/dashbordNavbar";
import { Menu } from "lucide-react";
import React from "react";
import { Footer } from "../../components/footer";

function DashboardRoute() {
  const [isOpen, setIsopen] = React.useState(false);

  const toggleSidebar = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <DashboardNav isOpen={isOpen} toggleSidebar={toggleSidebar} />{" "}
        <div className=" flex-1 flex-col  ">
          <header className="p-4 z-50  bg-white shadow-md flex items-center h-16 justify-between">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-end text-[#111112] hover:text-[#d5b7f3] hover:bg-black h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300"
            >
              <Menu size={20} />
            </button>
            <img src="/logo.png" alt="logo" className="h-14" />
          </header>

          <main className="flex-1  p-4">
            <Outlet />
            <footer className="mt-10 flex">
              <Footer /> {/* Contenu de la route enfant */}
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
export default DashboardRoute;
