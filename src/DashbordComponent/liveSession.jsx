import React from "react";
import { Play } from "lucide-react";

export const LiveSession = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold text-[#170C32]">Live Session</h2>
      </div>

      {/* Video Container */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-6 mx-auto max-w-1/3 ">
        <div className="relative  bg-gray-800 rounded-lg overflow-hidden">
          {/* Video Background with overlay */}

          <img src="/youtub.png" alt="video" className="w-full h-full " />
          {/* YouTube Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center bg-black/70 px-6 py-3 rounded">
              <div className="bg-red-600 rounded px-2 py-1 mr-3">
                <Play fill="white" className="text-white w-6 h-6" />
              </div>
              <span className="text-white text-xl font-semibold tracking-wider">
                YouTube
              </span>
            </div>
          </div>

          {/* Video overlay effects */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-4 text-white text-xs bg-black/50 px-2 py-1 rounded">
            LIVE
          </div>
        </div>
      </div>

      {/* Join Button */}
      <div className="flex justify-center">
        <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
          Join
        </button>
      </div>
    </div>
  );
};
