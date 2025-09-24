import React, { useState } from "react";
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
  Menu,
  CircleArrowOutUpLeft,
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
    { name: "Account", icon: User, path: "/dashboard/account-setting" },
    { name: "Live Session", icon: Users, path: "/dashboard/live-session" },
    { name: "Community", icon: Users, path: "/dashboard/community" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
    // { name: "Settings", icon: CircleArrowOutUpLeft, path: "/dashboard/logout" },
  ];

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 bg-[#170C32] h-screen transform transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-indigo-900">
        <img
          src="/logo.png"
          alt="logo"
          className="h-10 lg:hidden invert brightness-0"
        />
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-300 hover:text-white transition-all duration-300 hover:bg-indigo-800 flex justify-center items-center w-8 h-8 rounded-full"
        >
          <X size={20} />
        </button>
      </div>
      <nav className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
        <ul className="space-y-2">
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
              to="/dashboard/logout"
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
