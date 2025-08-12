import React from "react";

export const TopEarners = () => {
  const earners = [
    {
      id: 1,
      name: "Jel Chibu",
      country: "Nigeria",
      amount: "259***",
      avatar: "JC",
    },
    {
      id: 2,
      name: "Tobiloba Shinzu",
      country: "Nigeria",
      amount: "233***",
      avatar: "TS",
    },
    {
      id: 3,
      name: "Koniboje Ilewa",
      country: "Rwanda",
      amount: "203***",
      avatar: "KI",
    },
    {
      id: 4,
      name: "Jel Chibu",
      country: "Nigeria",
      amount: "195***",
      avatar: "JC",
    },
    {
      id: 5,
      name: "Tobiloba Shinzu",
      country: "Ghana",
      amount: "193***",
      avatar: "TS",
    },
    {
      id: 6,
      name: "Koniboje Ilewa",
      country: "Nigeria",
      amount: "180***",
      highlighted: true,
      avatar: "KI",
    },
    {
      id: 7,
      name: "Koniboje Ilewa",
      country: "Kenya",
      amount: "165***",
      badge: "1201 ★ 110",
      avatar: "KI",
    },
    {
      id: 8,
      name: "Jel Chibu",
      country: "Nigeria",
      amount: "145***",
      avatar: "JC",
    },
    {
      id: 9,
      name: "Tobiloba Shinzu",
      country: "Kenya",
      amount: "133***",
      avatar: "TS",
    },
    {
      id: 10,
      name: "Koniboje Ilewa",
      country: "South Africa",
      amount: "120***",
      avatar: "KI",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
        
          <h2 className="text-2xl font-semibold text-gray-900">Top Earners</h2>
        </div>
      
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="bg-[#000000d0] text-white p-4 grid grid-cols-3 gap-4">
          <div className="font-medium">Fullname</div>
          <div className="font-medium">Country</div>
          <div className="font-medium">(#)Amount</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {earners.map((earner) => (
            <div
              key={earner.id}
              className={`p-4 grid grid-cols-3 gap-4 items-center ${
                earner.highlighted
                  ? "bg-blue-50 border-2 border-blue-400"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Fullname with Avatar */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs font-medium">
                  {earner.avatar}
                </div>
                <span className="text-gray-900 font-medium">{earner.name}</span>
                {earner.badge && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium ml-2">
                    {earner.badge}
                  </span>
                )}
              </div>

              {/* Country */}
              <div className="text-gray-700">{earner.country}</div>

              {/* Amount */}
              <div className="text-gray-900 font-medium">{earner.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
