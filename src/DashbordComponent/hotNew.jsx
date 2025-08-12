import React from "react";

export const HotNew = () => {
  const notifications = [
    {
      id: 1,
      text: "Important update please Affiliate withdrawal will be coming up by 9am today and close by 10am",
      highlighted: false,
    },
    {
      id: 2,
      text: "Important update please Affiliate withdrawal will be coming up by 9am today and close by 10am",
      highlighted: false,
    },
    {
      id: 3,
      text: "Important update please Affiliate withdrawal will be coming up by 9am today and close by 10am",
      highlighted: true,
      highlightText: "1777 ★ 131",
    },
    {
      id: 4,
      text: "Important update please Affiliate withdrawal will be coming up by 9am today and close by 10am",
      highlighted: false,
    },
    {
      id: 5,
      text: "Important update please Affiliate withdrawal will be coming up by 9am today and close by 10am",
      highlighted: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-[#000000] rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex-1">
              <p className="text-white text-sm leading-relaxed">
                {notification.text}
                {notification.highlighted && (
                  <span className="inline-block ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">
                    {notification.highlightText}
                  </span>
                )}
              </p>
            </div>
            <button className="ml-4 bg-[#00D78A] hover:bg-[#026b46] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
