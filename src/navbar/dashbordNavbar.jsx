import React from "react";
import {
  LayoutDashboard,
  GraduationCap,
  Gift,
  Newspaper,
  User,
  Users,
  Star,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Composant Sidebar séparé
export const DashboardNav = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Classroom", icon: GraduationCap, path: "/dashboard/classroom" },
    { name: "Bonus", icon: Gift, path: "/dashboard/bonus" },
    { name: "Hot News", icon: Newspaper, path: "/dashboard/hot-new" },
    { name: "Top Earners", icon: Star, path: "/dashboard/top-earner" },
    { name: "Account", icon: User, path: "/dashboard/account" },
    { name: "Live Session", icon: Users, path: "/dashboard/live-session" },
    { name: "Community", icon: Users, path: "/dashboard/community" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-[#170C32] transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      <div className="flex items-center justify-between md:justify-end h-16 pe-3 bg-white">
        <h2 className="text-white font-semibold text-sm flex items-center">
          <img src="/logo.png" alt="logo" className="h-10 ms-2" />
        </h2>
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-[#170C32] hover:text-[#f9f8fa] hover:bg-black h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="mt-6 px-3">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-green-400 text-white"
                      : "text-gray-300 hover:text-white hover:bg-indigo-800"
                  }`}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li className="pt-3 border-t border-indigo-700 mt-4">
            <Link
              to="/logout"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-indigo-800 transition-colors duration-200"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
