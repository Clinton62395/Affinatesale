import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

import { UserContext } from "../utils/userContext";
import {
  Menu,
  DollarSign,
  ArrowUpRight,
  Copy,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowLeftRight,
  Currency,
} from "lucide-react";

export default function Dashboard() {
  // const navigate = useNavigate();
  const { user, isLoading, error } = useContext(UserContext);
  console.log("=== DEBUG DASHBOARD ===");
  console.log("user:", user);
  console.log("user type:", typeof user);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

  const [copy, setCopy] = useState("Copy Link");

  const link = user.affiliateLink;
  const handleCopi = async () => {
    try {
      const copy = await navigator.clipboard.writeText(link);
      setCopy("link copie ✅");

      setTimeout(() => {
        setCopy("copie");
      }, 2000);
    } catch (err) {
      console.log("error when coping link", err);
      setCopy("❌error when coping link");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <CircleLoader size={50} color="#2563eb" />
        <p className="mt-3 text-gray-600">User dashboard data fetching...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600">
          {" "}
          Error: {typeof error === "string"
            ? error
            : "something went wrong "}{" "}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!user || !user.firstName) {
    return <p className="text-center mt-10">Aucun utilisateur trouvé.</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <span className="text-[#170C32] font-bold text-xl tracking-tight">
                Learn and Earn
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <select className="text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>{user.currency}</option>
              </select>
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user.firstName}</p>
                  <p className="text-xs text-gray-500">{user.rank}</p>
                </div>
                <div className="relative">
                  <img
                    src={user?.image}
                    className="w-10 h-10 rounded-full border-2 border-green-400 object-cover"
                    alt="Profile"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          {/* Welcome section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#170C32] to-[#2C1B5A] rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
              <div className="px-6 py-8 sm:px-10 sm:py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img
                        src={user?.image || "/clinton.jpg"}
                        alt="Profile"
                        className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-4 border-white/20 shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-400 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                        Active
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Welcome back, {user.firstName}!
                      </h2>
                      <p className="text-indigo-200 text-sm mb-4">{user.email}</p>
                      <div className="flex items-center gap-3">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                          {user.country}
                        </span>
                        <div className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {user.rank}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Available Balance Card */}
            <div className="bg-gradient-to-r from-[#170C32] to-[#2C1B5A] rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Available Balance</h4>
                    <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                      ${user.availableBalance.toLocaleString()}
                    </p>
                    <p className="text-indigo-200 text-sm">Updated just now</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-green-500/25">
                      <ArrowLeftRight className="w-4 h-4 mr-2" />
                      Transfer
                    </button>
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-sm font-semibold transition-all">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Deposit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Earnings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Affiliate Earnings */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Affiliate Earnings
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-5 text-white shadow-lg shadow-green-500/20">
                    <p className="text-white/80 text-sm mb-1">Total Earnings</p>
                    <p className="text-3xl font-bold">${user.totalEarning.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-gray-600 text-sm mb-1">Monthly Earnings</p>
                    <p className="text-2xl font-bold text-gray-900">${(user.totalEarning / 12).toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Sub-Affiliate Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Sub-Affiliate Stats
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl p-5 text-white shadow-lg shadow-blue-500/20">
                    <p className="text-white/80 text-sm mb-1">Total Payouts</p>
                    <p className="text-3xl font-bold">${user.payouts.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-gray-600 text-sm mb-1">Total Referrals</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">
                        {user.totalRefferal.toLocaleString()}
                      </p>
                      <span className="text-sm text-gray-500">
                        {user.totalRefferal === 1 ? "person" : "people"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                {/* Affiliate Link */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Affiliate Link
                  </h4>
                  <div className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
                    <span className="text-sm text-gray-600 truncate">
                      {user.affiliateLink}
                    </span>
                    <button
                      onClick={handleCopi}
                      className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded text-sm font-medium flex items-center ml-4"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      {copy}
                    </button>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-4">Follow us on</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-pink-600 hover:text-pink-700">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-500">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-700">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
