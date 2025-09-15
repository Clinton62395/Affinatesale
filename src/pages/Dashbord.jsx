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
  const navigate = useNavigate();

  const { user, isLoading, error } = useContext(UserContext);
  console.log("=== DEBUG DASHBOARD ===");
  console.log("user:", user);
  console.log("user type:", typeof user);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

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
    <div className="flex min-h-screen bg-gray-100">
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}

        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-blue-900 font-bold text-lg">
                  Learn and Earn
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>{user.currency}</option>
              </select>
              <div className="w-8 h-8 bg-orange-400 rounded-full">
                {" "}
                <img
                  src="/clinton.jpg"
                  className="rounded-full w-8 h-8"
                  alt="image-admis"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Contenu du dashboard */}
        <main className="flex-1 p-6">
          {/* Section de bienvenue */}
          <div className="bg-[#170C32] rounded-lg max-w-4xl mx-auto px-2 mb-6 text-white py-10">
            <div className="flex items-center justify-around ">
              <img
                src={user?.image || "/clinton.jpg"}
                alt="photo"
                className="h-24 w-24  rounded-full  border-white border-2"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  Welcome {user.lastName} {user.firstName} from {user.country}
                </h2>
                <p className="text-indigo-200 text-sm">{user.email}</p>

                <div className="flex space-x-2 my-3">
                  <p className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded text-sm font-medium">
                    Rank
                  </p>

                  <button className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium">
                    {user.rank}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section Overview */}
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Overview
                </h3>

                {/* Balance disponible */}
                <div className="bg-[#170C32] rounded-lg p-6 shadow-sm mb-6 max-w-4xl flex items-center justify-between">
                  <div className=" mb-4">
                    <h4 className="text-gray-200 font-medium">
                      Available Balance
                    </h4>
                    <p className="text-3xl font-bold text-gray-200 mb-4">
                      $ {user.availableBalance}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded text-sm font-medium flex items-center">
                      <ArrowLeftRight className="w-4 h-4 mr-1 " />
                      Transfer
                    </button>
                    <button className="bg-[#170C32] hover:bg-indigo-800 text-white px-4 py-2 border-green-500 border-2 rounded-md rounded text-sm font-medium flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Deposit
                    </button>
                  </div>
                </div>

                {/* Sections de gains */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border shadow-lg p-5">
                  {/* Affiliate Earning */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Affiliate Earning
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-green-400 rounded-lg p-4 text-white">
                        <p className="text-sm opacity-90">Total Earning</p>
                        <p className="text-2xl font-bold">
                          ${user.totalEarning}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <p className="text-sm text-gray-600">Total Earning</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${user.totalEarning}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sub-Affiliate Earning */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Sub-Affiliate Earning
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <p className="text-sm text-gray-600">Payouts</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {user.payouts}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <p className="text-sm text-gray-600">Referral total</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {user.totalRefferal}{" "}
                          {user.totalRefferal === 1 ? "person" : "people"}
                        </p>
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
                    <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded text-sm font-medium flex items-center ml-4">
                      <Copy className="w-4 h-4 mr-1" />
                      Copy Link
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
