import { useState } from "react";

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
} from "lucide-react";

export default function Dashboard () {
  const [isOpen, setIsopen] = useState(false);

  const toggleSidebar = () => {
    setIsopen(!isOpen);
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
    

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-600 hover:text-gray-900 mr-4"
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center">
                {/* <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <span className="text-sm font-bold">A</span>
                </div> */}
                <span className="text-blue-900 font-bold text-lg">
                  Learn and Earn
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>USD</option>
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
                src="/clinton.jpg"
                alt="photo"
                className="h-24 w-24  rounded-full  border-white border-2"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  Welcome Billy doumbouya
                </h2>
                <p className="text-indigo-200 text-sm">clinton@gmail.com</p>

                <div className="flex space-x-2 my-3">
                  <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded text-sm font-medium">
                    Rank
                  </button>
                  <button className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium">
                    Novice
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
                      300 USD
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
                        <p className="text-2xl font-bold">$3200.00</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <p className="text-sm text-gray-600">Total Earning</p>
                        <p className="text-2xl font-bold text-gray-900">
                          $6200.00
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
                          $2200.00
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <p className="text-sm text-gray-600">Total Downloads</p>
                        <p className="text-2xl font-bold text-gray-900">
                          $2200.00
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
                      https://affinetsales/oluwatobilola34567
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
